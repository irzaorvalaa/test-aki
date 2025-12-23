import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SeoAreaCard from "../../components/seo-area";
import AreaBusinessSchema from "../../components/seo-area/AreaBusinessSchema";

const KesambiPage = () => {
  const pageData = {
    title: "Toko Aki Kesambi Cirebon - Aki Mobil & Motor Berkualitas",
    description:
      "Pusat penjualan aki terlengkap di Kesambi, Cirebon. Melayani wilayah Kesambi dan sekitarnya dengan aki original GS, Yuasa, Amaron. Gratis antar pasang, garansi resmi. Buka setiap hari!",
    ctaLink: "/product",
    ctaText: "Lihat Produk Aki Kami",
    keywords: [
      "toko aki kesambi",
      "aki mobil kesambi cirebon",
      "aki motor kesambi",
      "jual aki kesambi",
      "ganti aki kesambi",
      "aki gs kesambi",
      "service aki kesambi",
    ],
  };

  return (
    <Wrapper>
      <AreaBusinessSchema areaName="Kesambi" areaSlug="kesambi" />
      <SEO
        pageTitle="Toko Aki Kesambi Cirebon - Aki Mobil & Motor Berkualitas"
        description="Pusat penjualan aki terlengkap di Kesambi, Cirebon. Melayani wilayah Kesambi dan sekitarnya dengan aki original GS, Yuasa, Amaron. Gratis antar pasang, garansi resmi. Buka setiap hari!"
        keywords={[
          "aki mobil kesambi",
          "aki motor kesambi",
          "jual aki kesambi",
          "ganti aki kesambi",
          "aki gs kesambi",
          "service aki kesambi",
          "antar aki kesambi",
        ]}
        canonical="https://www.sentosajayamandiri.com/aki/kesambi"
        ogImage="/assets/img/bg/homepage-sjm2rev.webp"
      />
      <Header />
      <Breadcrumb
        title="Aki Kesambi"
        subtitle="Solusi Aki Terpercaya di Kecamatan Kesambi"
      />
      <SeoAreaCard {...pageData} />
      {/* ... konten lainnya ... */}

      <Footer />
    </Wrapper>
  );
};

export default KesambiPage;
