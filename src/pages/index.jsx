import React from "react";
import HomeSix from "./../components/homes/home-6/index";
import SEO from "../components/common/seo";
import OrganizationSchema from "../components/common/organization-schema"; // ✅ IMPORT INI
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Toko Aki Sentosa Jaya Mandiri Cirebon - Jual Aki Mobil Motor Truk"
        description="Toko Aki terpercaya di Cirebon. Jual aki mobil, motor, truk dengan harga terbaik. Gratis antar pasang, jumper aki 24 jam, garansi resmi. Melayani Kejaksan, Kesambi, Harjamukti, Lemahwungkuk, Pekalipan, Palimanan."
        keywords={[
          "toko aki terdekat cirebon",
          "harga aki cirebon",
          "aki murah cirebon",
          "aki lemahwungkuk",
          "aki kejaksan",
          "aki kesambi",
          "aki harjamukti",
          "aki pantura cirebon",
          "jumper aki darurat cirebon",
          "antar pasang aki cirebon",
        ]}
        canonical="https://www.sentosajayamandiri.com"
      />

      {/* ✅ TAMBAH INI - Organization Schema untuk Homepage */}
      <OrganizationSchema />

      <HomeSix />
    </Wrapper>
  );
};

export default index;
