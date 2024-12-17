const fs = require('fs');
const path = require('path');

/**
 * Sanitizes a file path for use in URLs
 * @param {string} filePath The file path to sanitize
 * @returns {string} The sanitized path
 */
function sanitizePathForUrl(filePath) {
  return filePath
    // Remove file extension
    .replace(/\.(md|mdx)$/, '')
    // Convert backslashes to forward slashes
    .replace(/\\/g, '/')
    // Remove any directory traversal attempts
    .replace(/^[./\\]+|[./\\]+$/g, '')
    // Replace multiple slashes with single slash
    .replace(/\/+/g, '/')
    // Trim whitespace
    .trim();
}

/**
 * Scans a directory recursively for content files
 * @param {string} dir Directory to scan
 * @param {string} baseRoute Base route for URLs
 * @param {Map<string, object>} routes Map to store routes
 */
function scanDirectory(dir, baseRoute, routes) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      try {
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          // Recursively scan subdirectories
          scanDirectory(filePath, baseRoute, routes);
        } else if (stats.isFile() && (file.endsWith('.md') || file.endsWith('.mdx'))) {
          const relativePath = path.relative(dir, filePath);
          const urlPath = `${baseRoute}/${sanitizePathForUrl(relativePath)}`;
          routes.set(urlPath, {
            path: urlPath,
            priority: baseRoute.includes('blog') ? 0.7 : 0.8,
            changefreq: 'monthly',
            lastmod: stats.mtime.toISOString().split('T')[0]
          });
        }
      } catch (error) {
        console.warn(`Error processing ${filePath}:`, error);
      }
    }
  } catch (error) {
    console.warn(`Error reading directory ${dir}:`, error);
  }
}

/**
 * Scans the project for routes
 * @returns {Promise<Array<{path: string, priority: number, changefreq: string, lastmod: string}>>}
 */
async function scanRoutes() {
  console.log('Starting route scan...');
  const baseDir = process.cwd();
  console.log('Base directory:', baseDir);

  const routes = new Map(); // Use Map to prevent duplicate routes
  const staticRoutes = new Map([
    ['Home', { path: '/', priority: 1.0, changefreq: 'weekly' }],
    ['Services', { path: '/services', priority: 0.8, changefreq: 'monthly' }],
    ['About', { path: '/about', priority: 0.7, changefreq: 'monthly' }],
    ['Privacy', { path: '/privacy', priority: 0.5, changefreq: 'yearly' }]
  ]);

  // Scan static routes from components
  console.log('Checking static routes...');
  const componentsDir = path.join(baseDir, 'src', 'components');
  if (fs.existsSync(componentsDir)) {
    try {
      const components = fs.readdirSync(componentsDir);
      for (const component of components) {
        const componentPath = path.join(componentsDir, component, 'index.tsx');
        console.log('Checking component path:', componentPath);
        if (fs.existsSync(componentPath)) {
          const componentName = path.basename(path.dirname(componentPath));
          console.log('Found component:', componentName);
          if (staticRoutes.has(componentName)) {
            try {
              const route = staticRoutes.get(componentName);
              const stats = fs.statSync(componentPath);
              routes.set(route.path, {
                ...route,
                lastmod: stats.mtime.toISOString().split('T')[0]
              });
            } catch (error) {
              console.warn(`Error getting stats for ${componentPath}:`, error);
              // Use current date as fallback
              const route = staticRoutes.get(componentName);
              routes.set(route.path, {
                ...route,
                lastmod: new Date().toISOString().split('T')[0]
              });
            }
          }
        }
      }
    } catch (error) {
      console.warn('Error reading components directory:', error);
    }
  }

  // Scan dynamic content
  const contentDir = path.join(baseDir, 'src', 'content');
  console.log('Content directory:', contentDir);
  if (fs.existsSync(contentDir)) {
    // Blog posts
    const blogDir = path.join(contentDir, 'blog');
    if (fs.existsSync(blogDir)) {
      console.log('Found blog directory');
      scanDirectory(blogDir, '/blog', routes);
    }

    // Location pages
    const locationsDir = path.join(contentDir, 'locations');
    if (fs.existsSync(locationsDir)) {
      console.log('Found locations directory');
      scanDirectory(locationsDir, '/locations', routes);
    }
  }

  console.log('Route scan complete. Found', routes.size, 'routes');
  return Array.from(routes.values());
}

module.exports = {
  scanRoutes
}; 