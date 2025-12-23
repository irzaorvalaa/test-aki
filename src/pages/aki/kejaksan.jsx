import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SeoAreaCard from "../../components/seo-area";
import AreaBusinessSchema from "../../components/seo-area/AreaBusinessSchema";

const KejaksanPage = () => {
  const pageData = {
    title: "Aki Kejaksan Cirebon - Pusat Aki Original Bergaransi",
    description:
      "Cari aki di Kejaksan? Kami solusinya! Tersedia aki GS, Yuasa, Amaron untuk berbagai jenis kendaraan. Pemasangan profesional, gratis cek aki. Buka setiap hari!",
    ctaLink: "/product",
    ctaText: "Beli Aki Sekarang",
    keywords: [
      "aki kejaksan",
      "toko aki kejaksan cirebon",
      "jual aki kejaksan",
      "aki mobil kejaksan",
      "aki motor kejaksan",
      "pasang aki kejaksan",
      "aki yuasa kejaksan",
    ],
  };

  return (
    <Wrapper>
      <AreaBusinessSchema areaName="Kejaksan" areaSlug="kejaksan" />
      <SEO
        pageTitle="Aki Kejaksan Cirebon - Pusat Aki Original Bergaransi"
        description="Cari aki di Kejaksan? Kami solusinya! Tersedia aki GS, Yuasa, Amaron untuk berbagai jenis kendaraan. Pemasangan profesional, gratis cek aki. Buka setiap hari!"
        keywords={[
          "aki mobil kejaksan",
          "aki motor kejaksan",
          "pasang aki kejaksan",
          "aki yuasa kejaksan",
          "jual aki kejaksan",
          "service aki kejaksan",
          "aki gs kejaksan cirebon",
        ]}
        canonical="https://www.sentosajayamandiri.com/aki/kejaksan"
        ogImage="/assets/img/bg/homepage-sjm2rev.webp"
      />
      <Header />
      <Breadcrumb
        title="Aki Kejaksan"
        subtitle="Aki Original & Bergaransi di Kejaksan"
      />
      <SeoAreaCard {...pageData} />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="h4 mb-4">
                Partner Terpercaya Masyarakat Kejaksan
              </h2>
              <p className="mb-4">
                Berlokasi strategis di Kejaksan, kami memberikan kemudahan akses
                untuk kebutuhan aki Anda. Dengan pengalaman bertahun-tahun, kami
                memahami karakteristik kendaraan dan iklim di wilayah Kejaksan.
              </p>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title">
                    💡 Tips Merawat Aki dari Ahlinya
                  </h5>
                  <ul className="mb-0">
                    <li>Cek level air aki secara rutin (untuk aki basah)</li>
                    <li>Bersihkan terminal aki dari korosi</li>
                    <li>Hindari menghidupkan AC saat mesin belum hidup</li>
                    <li>Servis berkala di bengkel terpercaya</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted">
                <i className="fas fa-phone me-2"></i>
                Butuh konsultasi? Tim kami siap membantu Anda memilih aki yang
                tepat!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
};

export default KejaksanPage;
