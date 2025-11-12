import { Helmet } from 'react-helmet-async';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Southern Underground of Louisiana",
    "alternateName": "Southern Underground",
    "url": "https://www.suofla.com",
    "logo": "https://www.suofla.com/Logos/LOGO%20WHITE%20PNG%20.png",
    "description": "Leading construction company specializing in directional drilling, utility installation, and civil construction across the nation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Louisiana",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://www.suofla.com/contact"
    },
    "sameAs": [
      "https://www.facebook.com/southernunderground",
      "https://www.linkedin.com/company/southern-underground"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
