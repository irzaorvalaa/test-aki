import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SeoAreaCard from "../../components/seo-area";
import AreaBusinessSchema from "../../components/seo-area/AreaBusinessSchema";

const HarjamuktiPage = () => {
  const pageData = {
    title: "Toko Aki Harjamukti Cirebon - Sentosa Jaya Mandiri",
    description:
      "Pusat aki terlengkap di Harjamukti melayani penjualan dan pemasangan aki untuk mobil, motor, truk. Gratis pengecekan aki, garansi resmi, harga bersaing. Hubungi kami!",
    ctaLink: "/product",
    ctaText: "Belanja Aki",
    keywords: [
      "toko aki harjamukti",
      "aki mobil harjamukti cirebon",
      "aki motor harjamukti",
      "pasang aki harjamukti",
      "aki gs harjamukti",
      "aki amaron harjamukti",
      "jual aki harjamukti",
    ],
  };

  return (
    <Wrapper>
      <AreaBusinessSchema areaName="Harjamukti" areaSlug="harjamukti" />
      <SEO
        pageTitle="Toko Aki Harjamukti Cirebon - Sentosa Jaya Mandiri"
        description="Pusat aki terlengkap di Harjamukti melayani penjualan dan pemasangan aki untuk mobil, motor, truk. Gratis pengecekan aki, garansi resmi, harga bersaing. Hubungi kami!"
        keywords={[
          "aki mobil harjamukti cirebon",
          "aki motor harjamukti",
          "pasang aki harjamukti",
          "aki gs harjamukti",
          "aki amaron harjamukti",
          "jual aki harjamukti",
          "antar aki harjamukti",
        ]}
        canonical="https://www.sentosajayamandiri.com/aki/harjamukti"
        ogImage="/assets/img/bg/homepage-sjm2rev.webp"
      />
      <Header />
      <Breadcrumb
        title="Aki Harjamukti"
        subtitle="Pusat Aki Terpercaya di Harjamukti"
      />
      <SeoAreaCard {...pageData} />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="h4 mb-4 text-center">
                Komitmen Kami untuk Harjamukti
              </h2>
              <p className="text-center mb-5">
                Melayani kebutuhan aki masyarakat Harjamukti dengan dedikasi
                penuh. Kami hadir sebagai solusi cepat dan terpercaya untuk
                semua masalah aki kendaraan Anda.
              </p>

              <div className="row g-4">
                <div className="col-md-4 text-center">
                  <div className="mb-3">
                    <i className="fas fa-certificate fa-3x text-primary"></i>
                  </div>
                  <h5 className="h6">100% Original</h5>
                  <p className="text-muted small">
                    Semua produk bergaransi resmi dari distributor
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <div className="mb-3">
                    <i className="fas fa-user-shield fa-3x text-primary"></i>
                  </div>
                  <h5 className="h6">Teknisi Ahli</h5>
                  <p className="text-muted small">
                    Pemasangan dilakukan oleh profesional berpengalaman
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <div className="mb-3">
                    <i className="fas fa-headset fa-3x text-primary"></i>
                  </div>
                  <h5 className="h6">Customer Care</h5>
                  <p className="text-muted small">
                    Siap membantu konsultasi dan after sales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
};

export default HarjamuktiPage;
