const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { scanRoutes } = require('./route-scanner.cjs');

/**
 * Escapes special characters for XML
 * @param {string} unsafe The string to escape
 * @returns {string} The escaped string
 */
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

/**
 * Validates route metadata
 * @param {object} route The route to validate
 * @throws {Error} If the route is invalid
 */
function validateRoute(route) {
  if (route.priority < 0 || route.priority > 1) {
    throw new Error(`Invalid priority ${route.priority} for route ${route.path}`);
  }
}

/**
 * Generates XML for a single URL entry
 * @param {object} route The route to generate XML for
 * @param {string} baseUrl The base URL of the site
 * @returns {string} The XML for the URL entry
 */
function generateUrlEntry(route, baseUrl) {
  validateRoute(route);
  const { path, lastmod, changefreq, priority } = route;
  const loc = escapeXml(`${baseUrl}${path}`);
  
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}

/**
 * Generates the complete sitemap XML
 * @param {object[]} routes The routes to include in the sitemap
 * @returns {string} The complete sitemap XML
 */
function generateSitemapXML(routes) {
  const baseUrl = 'https://guttergoat.com';
  const urlEntries = routes.map(route => generateUrlEntry(route, baseUrl)).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries ? '\n' + urlEntries : ''}
</urlset>`;
}

/**
 * Generates and writes the sitemap file
 * @returns {Promise<void>}
 */
async function generateSitemap() {
  try {
    console.log('Starting sitemap generation...');
    
    // Get all routes using the scanner
    console.log('Scanning routes...');
    const routes = await scanRoutes();
    console.log(`Found ${routes.length} routes`);

    // Generate sitemap XML
    console.log('Generating sitemap XML...');
    const sitemapXML = generateSitemapXML(routes);

    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    console.log(`Using public directory: ${publicDir}`);
    
    if (!fs.existsSync(publicDir)) {
      console.log('Creating public directory...');
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write uncompressed sitemap
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    console.log(`Writing uncompressed sitemap to: ${sitemapPath}`);
    fs.writeFileSync(sitemapPath, sitemapXML);

    // Create compressed version
    console.log('Compressing sitemap...');
    const compressed = zlib.gzipSync(sitemapXML);
    const compressedPath = path.join(publicDir, 'sitemap.xml.gz');
    console.log(`Writing compressed sitemap to: ${compressedPath}`);
    fs.writeFileSync(compressedPath, compressed);

    console.log('✅ Sitemap generated successfully!');
    console.log(`📄 Total URLs: ${routes.length}`);
    console.log('✅ Compressed sitemap generated successfully');
    
    // Log file sizes
    const uncompressedSize = sitemapXML.length;
    const compressedSize = compressed.length;
    console.log(`Uncompressed size: ${uncompressedSize} bytes`);
    console.log(`Compressed size: ${compressedSize} bytes`);
    console.log(`Compression ratio: ${((1 - compressedSize / uncompressedSize) * 100).toFixed(1)}%`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    throw error;
  }
}

module.exports = { generateSitemap }; 