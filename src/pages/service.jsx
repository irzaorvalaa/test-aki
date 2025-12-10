import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BreadcrumbSchema from "../components/common/breadcrumb-schema";
import ServiceComponents from "../components/service";

const ServicePage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Layanan Aki Cirebon - Antar Pasang, Jumper, Garansi"
        description="Layanan lengkap aki di Cirebon: penjualan aki, antar pasang gratis, jumper aki darurat 24 jam, cek kesehatan aki gratis, garansi resmi. Melayani Kejaksan, Kesambi, Harjamukti, Lemahwungkuk."
        keywords={[
          "layanan aki cirebon",
          "antar pasang aki cirebon",
          "jumper aki cirebon",
          "service aki cirebon",
          "garansi aki cirebon",
        ]}
        canonical="https://www.sentosajayamandiri.com/service"
      />
      <BreadcrumbSchema
        items={[
          { name: "Beranda", url: "https://www.sentosajayamandiri.com" },
          {
            name: "Layanan",
            url: "https://www.sentosajayamandiri.com/service",
          },
        ]}
      />
      <ServiceComponents />
    </Wrapper>
  );
};

export default ServicePage;
