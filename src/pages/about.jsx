import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BreadcrumbSchema from "../components/common/breadcrumb-schema";
import About from "../components/about";

const AboutPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Tentang Kami - Sentosa Jaya Mandiri Toko Aki Cirebon"
        description="Sentosa Jaya Mandiri adalah toko aki terpercaya di Cirebon. Melayani penjualan aki mobil, motor, truk dengan harga terbaik dan layanan profesional sejak tahun berdiri."
        keywords={["profil toko aki cirebon", "about sentosa jaya mandiri"]}
        canonical="https://www.sentosajayamandiri.com/about"
      />
      <BreadcrumbSchema
        items={[
          { name: "Beranda", url: "https://www.sentosajayamandiri.com" },
          {
            name: "Tentang Kami",
            url: "https://www.sentosajayamandiri.com/about",
          },
        ]}
      />
      <About />
    </Wrapper>
  );
};

export default AboutPage;
