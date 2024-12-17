# Theme Guidelines

This document provides guidelines for using the theme system consistently across the application.

## Color Usage

### Primary Colors
- `primary.main`: Use for main CTAs, important interactive elements, and brand accents
- `primary.dark`: Use for hover states and active states of primary elements
- `primary.light`: Use for backgrounds of primary-colored sections or subtle highlights
```tsx
// Example: Primary Button
<Button
  variant="contained"
  color="primary"
  sx={{
    '&:hover': {
      backgroundColor: 'primary.dark',
    }
  }}
>
  Get Started
</Button>
```

### Secondary Colors
- `secondary.main`: Use for secondary actions, navigation elements, and less prominent UI
- `secondary.dark`: Use for text that needs high contrast on light backgrounds
- `secondary.light`: Use for subtle backgrounds or disabled states
```tsx
// Example: Secondary Navigation
<Button
  variant="outlined"
  color="secondary"
  sx={{
    borderRadius: borderRadius.md,
    padding: `${spacing.sm} ${spacing.md}`,
  }}
>
  Learn More
</Button>
```

### Status Colors
- `error.main`: Use for error messages, destructive actions
- `success.main`: Use for success messages, completion states
```tsx
// Example: Status Message
<Alert 
  severity="error" 
  sx={{ 
    borderRadius: borderRadius.md,
    marginY: spacing.md 
  }}
>
  Please fix the errors above
</Alert>
```

## Spacing Guidelines

### Component Spacing
- `spacing.xs` (4px): Use for tight spaces between related elements
- `spacing.sm` (8px): Default spacing between elements within a component
- `spacing.md` (16px): Standard spacing between components
- `spacing.lg` (24px): Section padding and larger component separation
- `spacing.xl` (32px): Major section divisions
- `spacing.xxl` (48px): Page-level spacing

```tsx
// Example: Card Component
<Card
  sx={{
    padding: spacing.lg,
    marginBottom: spacing.xl,
    '& > *:not(:last-child)': {
      marginBottom: spacing.md,
    }
  }}
>
  <Typography variant="h3">Card Title</Typography>
  <Typography variant="body1">Card content</Typography>
</Card>
```

## Responsive Design

### Breakpoint Usage
- `xs` (320px): Small mobile devices
- `sm` (480px): Mobile devices
- `md` (768px): Tablets
- `lg` (1024px): Desktops
- `xl` (1280px): Large desktops
- `xxl` (1536px): Extra large displays

```tsx
// Example: Responsive Layout
<Box
  sx={{
    padding: {
      xs: spacing.md,
      sm: spacing.lg,
      md: spacing.xl,
    },
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: '1fr 1fr',
      lg: '1fr 1fr 1fr',
    },
    gap: spacing.lg,
  }}
>
  {/* Content */}
</Box>
```

## Accessibility Guidelines

### Color Contrast
- All text must meet WCAG 2.1 AA standards:
  - Normal text (< 18pt): 4.5:1 minimum contrast ratio
  - Large text (≥ 18pt): 3:1 minimum contrast ratio
- Use the WebAIM contrast checker to verify new colors

### Interactive Elements
```tsx
// Example: Accessible Button
<Button
  sx={{
    '&:focus-visible': {
      outline: '2px solid primary.main',
      outlineOffset: '2px',
    },
    '&:hover': {
      backgroundColor: 'primary.dark',
    },
  }}
  aria-label="Get Started"
>
  Get Started
</Button>
```

## Contributing Guidelines

### Adding New Colors
1. Verify the color meets WCAG contrast requirements
2. Add both light and dark variants
3. Include documentation about usage
4. Test with light and dark modes

### Adding New Spacing Values
1. Follow the 4px grid system
2. Document the use case
3. Update this README with examples

### Testing Changes
1. Run accessibility checks (e.g., with axe-core)
2. Test across all breakpoints
3. Verify color contrast ratios
4. Test with keyboard navigation
5. Verify RTL layout support

## Common Patterns

### Form Fields
```tsx
// Example: Form Field Spacing
<Stack spacing={spacing.md}>
  <TextField
    label="Name"
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: borderRadius.md,
      }
    }}
  />
  <TextField
    label="Email"
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: borderRadius.md,
      }
    }}
  />
</Stack>
```

### Section Layouts
```tsx
// Example: Section Layout
<Box
  component="section"
  sx={{
    padding: {
      xs: `${spacing.xl} ${spacing.md}`,
      md: `${spacing.xxl} ${spacing.xl}`,
    },
    backgroundColor: 'background.default',
  }}
>
  <Container maxWidth="lg">
    {/* Content */}
  </Container>
</Box>
```

Remember to:
- Use theme values instead of hard-coded numbers
- Consider responsive behavior from the start
- Test accessibility early and often
- Document any deviations from these guidelines 

## SEO Guidelines

### Meta Tags
Each page should include the following meta tags:
```html
<!-- Primary Meta Tags -->
<title>Page Title | Gutter Goat</title>
<meta name="description" content="Unique, compelling description of the page content (150-160 characters)" />
<link rel="canonical" href="https://guttergoat.com/page-path" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Page Title | Gutter Goat" />
<meta property="og:description" content="Same as meta description" />
<meta property="og:image" content="URL to page-specific image" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title | Gutter Goat" />
<meta name="twitter:description" content="Same as meta description" />
<meta name="twitter:image" content="URL to page-specific image" />
```

### Heading Structure
- Use only one `<h1>` per page
- Maintain a logical heading hierarchy (h1 → h2 → h3)
- Use descriptive headings that match the content
```tsx
// Example: Proper Heading Structure
<Box component="main">
  <Typography variant="h1">Professional Gutter Cleaning</Typography>
  <Typography variant="h2">Our Services</Typography>
  <Typography variant="h3">Residential Cleaning</Typography>
  <Typography variant="h3">Commercial Cleaning</Typography>
  <Typography variant="h2">Why Choose Us</Typography>
</Box>
```

### Structured Data
Include relevant schema markup for better search engine understanding:
```tsx
// Example: Local Business Schema
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gutter Goat",
  "image": "https://guttergoat.com/logo.png",
  "description": "Professional gutter cleaning services in Seattle",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "postalCode": "98101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6062,
    "longitude": -122.3321
  },
  "url": "https://guttergoat.com",
  "telephone": "+1-206-555-0123"
}
</script>
```

### Sitemap Management
The `sitemap.xml` should be updated when:
- Adding new pages
- Removing pages
- Significantly updating existing pages
- Changing URL structure

Update the `lastmod` date and adjust priorities as needed:
```xml
<url>
  <loc>https://guttergoat.com/new-page</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### URL Structure
- Use descriptive, keyword-rich URLs
- Separate words with hyphens
- Keep URLs short and meaningful
- Maintain consistent URL patterns

Example URL structure:
```
/services/residential-cleaning
/services/commercial-cleaning
/about
/contact
```

### Image Optimization
- Use descriptive file names (e.g., `gutter-cleaning-seattle.jpg`)
- Include alt text for all images
- Optimize image sizes for web use
- Use responsive images when appropriate

```tsx
// Example: Optimized Image Component
<img
  src="/images/gutter-cleaning-seattle.jpg"
  alt="Professional gutter cleaning service in Seattle"
  width="800"
  height="600"
  loading="lazy"
/>
```

Remember to:
- Regularly audit SEO performance using tools like Google Search Console
- Monitor and fix broken links
- Keep content fresh and relevant
- Test site performance and mobile responsiveness
- Follow accessibility guidelines as they impact SEO

## Dynamic Meta Tag Management

### Using the SEO Component
The `SEO` component provides a consistent way to manage meta tags across pages:

```tsx
import { SEO } from '../components/SEO';

const YourPage = () => {
  return (
    <>
      <SEO
        title="Your Page Title"
        description="Your page description (150-160 characters)"
        canonical="https://guttergoat.com/your-page"
        image="https://guttergoat.com/your-image.jpg"
        type="website"  // or "article" for blog posts
        schema={yourSchemaObject}
      />
      {/* Your page content */}
    </>
  );
};
```

### Schema.org Integration
Example schema objects for different page types:

```tsx
// Local Business (Home Page)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gutter Goat",
  "image": "https://guttergoat.com/logo.png",
  "description": "Professional gutter cleaning services",
  // ... other business details
};

// Service Page
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Gutter Cleaning Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Gutter Goat"
  },
  "areaServed": {
    "@type": "City",
    "name": "Seattle"
  },
  // ... service details
};

// Blog Post
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Your Blog Title",
  "image": "https://guttergoat.com/blog-image.jpg",
  "datePublished": "2024-01-20",
  "author": {
    "@type": "Organization",
    "name": "Gutter Goat"
  }
};
```

### Testing Meta Tags
1. Use browser extensions:
   - "React Developer Tools" to verify SEO component props
   - "Meta Tags Checker" to preview social media cards
   - "Schema Validator" for structured data testing

2. Online validation tools:
   - Google's Rich Results Test: https://search.google.com/test/rich-results
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator

3. Automated testing:
```tsx
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

describe('SEO Component', () => {
  it('renders meta tags correctly', () => {
    const { container } = render(
      <HelmetProvider>
        <SEO
          title="Test Title"
          description="Test Description"
        />
      </HelmetProvider>
    );
    
    // Your assertions here
  });
});
```

### Best Practices
1. **Title Tags**:
   - Keep titles under 60 characters
   - Include main keyword near the beginning
   - Use brand name consistently

2. **Meta Descriptions**:
   - Aim for 150-160 characters
   - Include call-to-action when appropriate
   - Make each description unique and compelling

3. **Images**:
   - Provide high-quality OpenGraph images (1200x630px)
   - Use descriptive file names
   - Ensure images are optimized for web

4. **URLs**:
   - Use clean, descriptive URLs
   - Include relevant keywords
   - Maintain consistent URL structure

5. **Schema Markup**:
   - Use the most specific schema type available
   - Include all required properties
   - Validate schema before deployment

Remember to:
- Test meta tags across different platforms
- Keep content fresh and relevant
- Monitor performance in search console
- Update schema markup when business details change