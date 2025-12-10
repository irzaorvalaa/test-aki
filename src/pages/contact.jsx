import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BreadcrumbSchema from "../components/common/breadcrumb-schema";
import Contact from "../components/contact";

const ContactPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Hubungi Kami - Sentosa Jaya Mandiri Cirebon"
        description="Hubungi Toko Aki Sentosa Jaya Mandiri Cirebon di Jl. Lemahwungkuk No.19. Telepon, WhatsApp, atau kunjungi toko kami. Gratis konsultasi aki kendaraan."
        keywords={[
          "kontak aki cirebon",
          "alamat toko aki cirebon",
          "nomor telepon aki cirebon",
        ]}
        canonical="https://www.sentosajayamandiri.com/contact"
      />
      <BreadcrumbSchema
        items={[
          { name: "Beranda", url: "https://www.sentosajayamandiri.com" },
          {
            name: "Hubungi Kami",
            url: "https://www.sentosajayamandiri.com/contact",
          },
        ]}
      />
      <Contact />
    </Wrapper>
  );
};

export default ContactPage;
