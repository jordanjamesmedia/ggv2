import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  schema?: Record<string, unknown>;
}

/**
 * SEO component for managing meta tags dynamically
 * @param {SEOProps} props - SEO properties
 * @returns {JSX.Element} Helmet component with meta tags
 */
export const SEO = ({
  title = 'Professional Gutter Cleaning Services',
  description = 'Expert gutter cleaning services in the Greater Seattle Area. Professional, reliable, and insured gutter maintenance for residential and commercial properties.',
  canonical = 'https://guttergoat.com',
  image = 'https://guttergoat.com/og-image.jpg',
  type = 'website',
  schema,
}: SEOProps): JSX.Element => {
  const siteTitle = 'Gutter Goat';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}; 