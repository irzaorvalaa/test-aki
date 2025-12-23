// src/components/common/organization-schema.jsx
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
      "Toko aki terpercaya di Cirebon melayani penjualan dan pemasangan aki mobil, motor, truk dengan layanan antar pasang gratis di 10 kecamatan Cirebon.",
    // ✅ TAMBAH: Foundingdate (ganti tahun sesuai kapan toko didirikan)
    foundingDate: "2024", // Ganti dengan tahun asli
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Lemahwungkuk No.19",
      addressLocality: "Cirebon",
      addressRegion: "Jawa Barat",
      postalCode: "45117",
      addressCountry: "ID",
    },
    // ✅ TAMBAH: Geo coordinates
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.720072,
      longitude: 108.56589,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6281234567890",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian"],
      // ✅ TAMBAH: Email
      email: "sentosajayamandiri@gmail.com",
    },
    sameAs: [
      "https://www.facebook.com/sentosajayamandiri",
      "https://www.instagram.com/sentosajayamandiri",
      "https://wa.me/6281234567890",
    ],
    // ✅ TAMBAH: Area yang dilayani (konsisten dengan LocalBusiness)
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
    // ✅ TAMBAH: Produk/service yang ditawarkan
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Aki Mobil",
          description: "Aki mobil berbagai merek: GS, Yuasa, Amaron",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Aki Motor",
          description: "Aki motor original bergaransi resmi",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Layanan Antar Pasang Aki",
          description: "Gratis antar dan pasang aki di lokasi Anda",
        },
      },
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
