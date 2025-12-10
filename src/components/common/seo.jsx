import Head from "next/head";

const SEO = ({
  pageTitle,
  description,
  keywords = [],
  canonical,
  ogImage = "/assets/img/logo/logo.png",
  noindex = false,
}) => {
  const siteName = "Toko Aki Sentosa Jaya Mandiri Cirebon";
  const siteUrl = "https://www.sentosajayamandiri.com"; // Ganti dengan domain Anda

  const fullTitle = pageTitle
    ? `${pageTitle} | ${siteName}`
    : "Toko Aki Sentosa Jaya Mandiri Cirebon - Jual Aki Mobil Motor Truk";

  const fullDescription =
    description ||
    "Toko Aki Sentosa Jaya Mandiri Cirebon - Jual aki mobil, motor, truk dengan harga terbaik. Gratis antar pasang, jumper aki 24 jam, garansi resmi. Melayani seluruh wilayah Cirebon.";

  const defaultKeywords = [
    "toko aki cirebon",
    "aki cirebon",
    "sentosa jaya mandiri",
    "jual aki cirebon",
    "aki mobil cirebon",
    "aki motor cirebon",
    "jumper aki cirebon",
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
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Language */}
      <meta httpEquiv="content-language" content="id" />
    </Head>
  );
};

export default SEO;
