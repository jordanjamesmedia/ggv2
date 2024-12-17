# Sitemap Generation Guide

This document explains how the automatic sitemap generation works in the Gutter Goat project.

## Overview

The sitemap is generated automatically during the build process using a custom Node.js script. The system:
1. Scans the project for route components and content files
2. Automatically detects last modification dates
3. Generates a valid `sitemap.xml` file
4. Compresses the sitemap to `sitemap.xml.gz`
5. Places both files in the `public` directory

## How It Works

### Route Scanner

The route scanner (`scripts/route-scanner.cjs`) automatically detects:
1. Static routes from React components
2. Dynamic routes from content files (blog posts, location pages)
3. Last modification dates based on file timestamps

```javascript
// Example of how routes are scanned
const routes = await scanRoutes();
// Returns: [
//   { path: '/', lastmod: '2024-01-20', priority: 1.0, changefreq: 'weekly' },
//   { path: '/services', lastmod: '2024-01-19', priority: 0.8, changefreq: 'monthly' },
//   // ... more routes
// ]
```

### Route Configuration

Static routes are configured in `scripts/route-scanner.cjs`:

```javascript
const staticRoutes = new Map([
  ['Home', { path: '/', priority: 1.0, changefreq: 'weekly' }],
  ['Services', { path: '/services', priority: 0.8, changefreq: 'monthly' }],
  // ... other routes
]);
```

### Dynamic Content

The system automatically scans for:
1. Blog posts in `src/content/blog/*.{md,mdx}`
   - Priority: 0.7
   - Change frequency: monthly
2. Location pages in `src/content/locations/*.{md,mdx}`
   - Priority: 0.8
   - Change frequency: monthly
3. Other dynamic content based on file system structure

### Sitemap Compression

The sitemap is automatically compressed using gzip:
1. Uncompressed sitemap is written to `public/sitemap.xml`
2. Compressed version is created at `public/sitemap.xml.gz`
3. Both versions are referenced in `robots.txt`
4. Compression typically achieves 70-80% size reduction

## Usage

### Generating the Sitemap

The sitemap is generated automatically during the build process:
```bash
npm run build
```

To generate the sitemap manually:
```bash
npm run generate-sitemap
```

### Adding New Content

1. **Static Routes**:
   Add them to `staticRoutes` in `scripts/route-scanner.cjs`:
   ```javascript
   const staticRoutes = new Map([
     // ... existing routes
     ['NewPage', { 
       path: '/new-page',
       priority: 0.8,
       changefreq: 'monthly'
     }]
   ]);
   ```

2. **Blog Posts**:
   - Create `.md` or `.mdx` files in `src/content/blog/`
   - Files are automatically added with priority 0.7
   - Example: `src/content/blog/my-post.md`
   - URL will be: `/blog/my-post`

3. **Location Pages**:
   - Create `.md` or `.mdx` files in `src/content/locations/`
   - Files are automatically added with priority 0.8
   - Example: `src/content/locations/chicago-il.md`
   - URL will be: `/locations/chicago-il`

### Priority Guidelines

- `1.0`: Homepage
- `0.8-0.9`: Main service pages, key landing pages
- `0.7`: Blog posts, secondary pages
- `0.5-0.6`: Support pages (privacy policy, terms)

### Change Frequency Guidelines

- `always`: Real-time content
- `hourly`: Frequently updated content
- `daily`: News, blog index
- `weekly`: Main service pages
- `monthly`: Standard content pages
- `yearly`: Legal pages, policies
- `never`: Archived content

## Validation

### Local Testing
1. Generate the sitemap:
   ```bash
   npm run generate-sitemap
   ```
2. Check both files exist:
   - `public/sitemap.xml`
   - `public/sitemap.xml.gz`
3. Verify all expected routes are present
4. Check last modification dates are correct
5. Verify compression ratio (typically 70-80%)

### Online Validation
1. **Google Search Console**:
   - Submit your sitemap at https://search.google.com/search-console
   - Both compressed and uncompressed versions are supported
   - Monitor for any errors or warnings
   - Check coverage and indexing status

2. **XML Sitemap Validators**:
   - [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
   - [Sitemap Validator](https://www.websiteplanet.com/webtools/sitemap-validator/)

## Troubleshooting

### Common Issues

1. **Missing Pages**:
   - Verify component exists in the correct directory
   - Check if the route is mapped in `staticRoutes`
   - Ensure content files have correct extensions (.md or .mdx)
   - Check file permissions

2. **Incorrect Last Modified Dates**:
   - Check file permissions
   - Verify file timestamps are preserved in version control
   - Check if files were modified during build process

3. **Compression Issues**:
   - Verify both sitemap files are generated
   - Check file permissions in public directory
   - Monitor compression ratio (should be 70-80%)
   - Ensure gzip compression is working

4. **Build Errors**:
   - Check Node.js version (14+ required)
   - Verify all dependencies are installed
   - Check file system permissions

## Best Practices

1. **Regular Updates**:
   - Let the system handle last modification dates automatically
   - Update `changefreq` values based on content type
   - Adjust priorities based on page importance

2. **Performance**:
   - The scanner caches file system operations
   - Both compressed and uncompressed versions are available
   - Proper HTTP caching headers are recommended

3. **SEO Optimization**:
   - Maintain proper file timestamps
   - Use descriptive file names for content
   - Keep URL structure consistent
   - Use appropriate priorities and change frequencies

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the sitemap generation logs
3. Contact the development team
4. Submit an issue in the project repository