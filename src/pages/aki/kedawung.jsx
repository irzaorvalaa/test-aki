import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SeoAreaCard from "../../components/seo-area";
import AreaBusinessSchema from "../../components/seo-area/AreaBusinessSchema";

const KedawungPage = () => {
  const pageData = {
    title: "Jual Aki Kedawung Cirebon - Harga Terjangkau Garansi Resmi",
    description:
      "Distributor aki terpercaya di Kedawung, Cirebon. Tersedia aki untuk semua jenis kendaraan dengan layanan konsultasi gratis. Aki GS, Yuasa, Amaron ready stock. Pesan sekarang!",
    ctaLink: "/product",
    ctaText: "Cek Harga Aki",
    keywords: [
      "jual aki kedawung",
      "toko aki kedawung cirebon",
      "aki mobil kedawung",
      "aki motor kedawung",
      "harga aki kedawung",
      "distributor aki kedawung",
      "antar aki kedawung",
    ],
  };

  return (
    <Wrapper>
      <AreaBusinessSchema areaName="Kedawung" areaSlug="kedawung" />
      <SEO
        pageTitle="Jual Aki Kedawung Cirebon - Harga Terjangkau Garansi Resmi"
        description="Distributor aki terpercaya di Kedawung, Cirebon. Tersedia aki untuk semua jenis kendaraan dengan layanan konsultasi gratis. Aki GS, Yuasa, Amaron ready stock. Pesan sekarang!"
        keywords={[
          "aki mobil kedawung",
          "aki motor kedawung",
          "harga aki kedawung",
          "distributor aki kedawung",
          "antar aki kedawung",
          "aki gs kedawung",
          "aki yuasa kedawung",
        ]}
        canonical="https://www.sentosajayamandiri.com/aki/kedawung"
        ogImage="/assets/img/bg/homepage-sjm2rev.webp"
      />
      <Header />
      <Breadcrumb
        title="Aki Kedawung"
        subtitle="Distributor Aki Terlengkap di Kedawung"
      />
      <SeoAreaCard {...pageData} />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="h4 mb-4">Layanan Unggulan Kami di Kedawung</h2>
              <p className="mb-4">
                Berpengalaman melayani masyarakat Kedawung sejak lama, kami
                memahami kebutuhan aki untuk berbagai kondisi kendaraan. Tim
                profesional kami siap membantu pemilihan aki yang tepat untuk
                kendaraan Anda.
              </p>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-tools text-primary me-3 mt-1"></i>
                    <div>
                      <h5 className="h6 mb-1">Pengecekan Gratis</h5>
                      <p className="text-muted small mb-0">
                        Cek kondisi aki lama Anda tanpa biaya
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <i className="fas fa-shipping-fast text-primary me-3 mt-1"></i>
                    <div>
                      <h5 className="h6 mb-1">Antar Cepat</h5>
                      <p className="text-muted small mb-0">
                        Pengiriman ke seluruh Kedawung
                      </p>
                    </div>
                  </div>
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

export default KedawungPage;
