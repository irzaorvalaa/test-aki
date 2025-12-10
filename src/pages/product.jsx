import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import BreadcrumbSchema from "../components/common/breadcrumb-schema";
import Product from "../components/product";

const ProductPage = () => {
  return (
    <Wrapper>
      <SEO
        pageTitle="Produk Aki Cirebon - Aki Mobil, Motor, Truk Terlengkap"
        description="Jual aki mobil, motor, truk berbagai merek di Cirebon. GS Astra, Yuasa, Incoe, Bosch dengan harga terbaik. Gratis antar pasang untuk wilayah Cirebon: Kejaksan, Kesambi, Harjamukti, Lemahwungkuk, Palimanan."
        keywords={[
          "jual aki cirebon",
          "aki mobil cirebon",
          "aki motor cirebon",
          "aki truk cirebon",
          "harga aki gs cirebon",
          "aki yuasa cirebon",
          "aki incoe cirebon",
          "aki bosch cirebon",
          "toko aki lengkap cirebon",
          "distributor aki cirebon",
        ]}
        canonical="https://www.sentosajayamandiri.com/product"
      />
      <BreadcrumbSchema
        items={[
          { name: "Beranda", url: "https://www.sentosajayamandiri.com" },
          { name: "Produk", url: "https://www.sentosajayamandiri.com/product" },
        ]}
      />
      <Product />
    </Wrapper>
  );
};

export default ProductPage;
