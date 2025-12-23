// src/components/seo-area/AreaBusinessSchema.jsx
import Head from "next/head";

const AreaBusinessSchema = ({ areaName, areaSlug }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Layanan Aki ${areaName} - Sentosa Jaya Mandiri`,
    description: `Penjualan dan pemasangan aki mobil & motor di ${areaName}, Cirebon`,
    url: `https://www.sentosajayamandiri.com/aki/${areaSlug}`,
    telephone: "+6281234567890",
    areaServed: {
      "@type": "Place",
      name: areaName,
      containedInPlace: {
        "@type": "City",
        name: "Cirebon",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Aki untuk ${areaName}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Aki Mobil",
            description: `Aki mobil berkualitas untuk area ${areaName}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Aki Motor",
            description: `Aki motor original untuk area ${areaName}`,
          },
        },
      ],
    },
    priceRange: "$$",
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default AreaBusinessSchema;
