import Head from "next/head";

const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sentosa Jaya Mandiri",
    alternateName: "Toko Aki Sentosa Jaya Mandiri Cirebon",
    url: "https://www.sentosajayamandiri.com",
    logo: "https://www.sentosajayamandiri.com/assets/img/logo/logo.png",
    description:
      "Toko aki terpercaya di Cirebon sejak [tahun]. Menyediakan aki mobil, motor, truk dengan layanan antar pasang gratis.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Lemahwungkuk No.19",
      addressLocality: "Cirebon",
      addressRegion: "Jawa Barat",
      postalCode: "45117",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6281234567890",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian"],
    },
    sameAs: [
      "https://www.facebook.com/sentosajayamandiri",
      "https://www.instagram.com/sentosajayamandiri",
      "https://wa.me/6281234567890",
    ],
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

export default OrganizationSchema;
