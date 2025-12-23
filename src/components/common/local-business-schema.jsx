// src/components/common/local-business-schema.jsx
import Head from "next/head";

const LocalBusinessSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "Toko Aki Sentosa Jaya Mandiri Cirebon",
    image: "https://www.sentosajayamandiri.com/assets/img/logo/logo.png",
    "@id": "https://www.sentosajayamandiri.com",
    url: "https://www.sentosajayamandiri.com",
    telephone: "+6281234567890",
    email: "sentosajayamandiri@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Lemahwungkuk No.19, Lemahwungkuk",
      addressLocality: "Cirebon",
      addressRegion: "Jawa Barat",
      postalCode: "45117",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.720072,
      longitude: 108.56589,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/sentosajayamandiri",
      "https://www.instagram.com/sentosajayamandiri",
      "https://wa.me/6281234567890",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    // ✅ UPDATE: Area served sesuai 10 kecamatan
    areaServed: [
      {
        "@type": "City",
        name: "Cirebon",
      },
      {
        "@type": "Place",
        name: "Kesambi",
      },
      {
        "@type": "Place",
        name: "Kedawung",
      },
      {
        "@type": "Place",
        name: "Lemahwungkuk",
      },
      {
        "@type": "Place",
        name: "Harjamukti",
      },
      {
        "@type": "Place",
        name: "Talun",
      },
      {
        "@type": "Place",
        name: "Mundu",
      },
      {
        "@type": "Place",
        name: "Kejaksan",
      },
      {
        "@type": "Place",
        name: "Gunung Jati",
      },
      {
        "@type": "Place",
        name: "Lemahabang",
      },
      {
        "@type": "Place",
        name: "Plumbon",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Produk Aki",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Aki Mobil",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Aki Motor",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Aki Truk",
          },
        },
      ],
    },
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

export default LocalBusinessSchema;
