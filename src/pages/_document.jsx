// src/pages/_document.jsx (UPDATE COMPLETE)
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <link
          rel="stylesheet"
          href="/assets/css/fontawesome-fix.css"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link rel="stylesheet" href="/assets/css/fontawesome-fix.css" />
        </noscript>

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

        <link rel="preconnect" href="https://test-aki.vercel.app" />
        <link rel="dns-prefetch" href="https://test-aki.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
