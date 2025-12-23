// src/components/common/seo.jsx
import Head from "next/head";

const SEO = ({
  pageTitle,
  description,
  keywords = [],
  canonical,
  ogImage = "/assets/img/logo/logo.png",
  noindex = false,
  type = "website",
}) => {
  const siteName = "Toko Aki Sentosa Jaya Mandiri Cirebon";
  const siteUrl = "https://www.sentosajayamandiri.com";

  const fullTitle = pageTitle
    ? `${pageTitle} | ${siteName}`
    : "Toko Aki Sentosa Jaya Mandiri Cirebon - Jual Aki Mobil Motor Truk";

  const fullDescription =
    description ||
    "Toko Aki Sentosa Jaya Mandiri Cirebon - Jual aki mobil, motor, truk dengan harga terbaik. Gratis antar pasang, jumper aki 24 jam, garansi resmi. Melayani seluruh wilayah Cirebon.";

  const defaultKeywords = [
    // Core keywords
    "toko aki cirebon",
    "aki cirebon",
    "sentosa jaya mandiri",
    "jual aki cirebon",
    "aki mobil cirebon",
    "aki motor cirebon",
    "jumper aki cirebon",
    "aki truk cirebon",

    // Brand keywords
    "aki gs cirebon",
    "aki yuasa cirebon",
    "aki amaron cirebon",

    // Service keywords
    "antar pasang aki cirebon",
    "ganti aki cirebon",
    "service aki cirebon",

    // ✅ Area keywords - 10 Kecamatan
    "aki kesambi",
    "toko aki kesambi",
    "aki kedawung",
    "toko aki kedawung",
    "aki lemahwungkuk",
    "toko aki lemahwungkuk",
    "aki harjamukti",
    "toko aki harjamukti",
    "aki talun",
    "toko aki talun",
    "aki mundu",
    "toko aki mundu",
    "aki kejaksan",
    "toko aki kejaksan",
    "aki gunung jati",
    "toko aki gunung jati",
    "aki lemahabang",
    "toko aki lemahabang",
    "aki plumbon",
    "toko aki plumbon",
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(", ");
  const canonicalUrl = canonical || siteUrl;
  const ogImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords} />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Author & Publisher */}
      <meta name="author" content="Sentosa Jaya Mandiri" />
      <meta name="publisher" content="Sentosa Jaya Mandiri" />

      {/* Geo tags untuk local SEO */}
      <meta name="geo.region" content="ID-JB" />
      <meta name="geo.placename" content="Cirebon" />
      <meta name="geo.position" content="-6.720072;108.56589" />
      <meta name="ICBM" content="-6.720072, 108.56589" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Language */}
      <meta httpEquiv="content-language" content="id" />

      {/* Theme color untuk mobile browser */}
      <meta name="theme-color" content="#0d6efd" />
      <meta name="msapplication-TileColor" content="#0d6efd" />
    </Head>
  );
};

export default SEO;
