import { Helmet } from 'react-helmet-async';

const MetaTags = ({ title, description, keywords, ogImage, ogType = 'website' }) => {
  const defaultTitle = 'Muhammad Ibrahim Hospital (MIH)';
  const defaultDescription = 'Providing quality healthcare services with compassion and excellence.';
  const siteTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://mihospital.com';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : siteUrl;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={currentUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Muhammad Ibrahim Hospital" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default MetaTags;

