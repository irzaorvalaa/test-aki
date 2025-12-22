// src/pages/_document.jsx (ROLLBACK - SIMPLE VERSION)
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* ✅ NORMAL LOAD (no async trick) */}
        <link rel="stylesheet" href="/assets/css/fontawesome-fix.css" />

        {/* PRELOAD HERO IMAGES - Desktop */}
        <link
          rel="preload"
          as="image"
          href="/assets/img/bg/homepage-sjm2rev.png"
          imageSrcSet="
            /_next/image?url=/assets/img/bg/homepage-sjm2rev.png&w=640&q=75 640w,
            /_next/image?url=/assets/img/bg/homepage-sjm2rev.png&w=1080&q=75 1080w,
            /_next/image?url=/assets/img/bg/homepage-sjm2rev.png&w=1920&q=75 1920w
          "
          imageSizes="100vw"
          fetchpriority="high"
        />

        {/* Preconnect untuk faster resources */}
        <link rel="preconnect" href="https://test-aki.vercel.app" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://test-aki.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
