import { Helmet } from 'react-helmet-async';
import React from 'react';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Southern Underground of Louisiana",
    "alternateName": "Southern Underground",
    "url": "https://www.suofla.com",
    "logo": "https://www.suofla.com/Logos/logo-white.png",
    "description": "Southern Underground of Louisiana is a construction contractor specializing in directional drilling, underground utilities, and civil construction across Louisiana and the Gulf Coast.",
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
