import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SeoAreaCard from "../../components/seo-area";
import AreaBusinessSchema from "../../components/seo-area/AreaBusinessSchema";

const TalunPage = () => {
  const pageData = {
    title: "Aki Talun Cirebon - Antar Pasang Gratis Area Talun",
    description:
      "Solusi aki untuk kendaraan Anda di Talun, Cirebon. Menyediakan aki basah dan kering untuk mobil & motor dengan harga pabrik. Pesan hari ini, pasang hari ini!",
    ctaLink: "/product",
    ctaText: "Pesan Aki",
    keywords: [
      "aki talun cirebon",
      "toko aki talun",
      "jual aki talun",
      "aki mobil talun",
      "antar aki talun",
      "ganti aki talun",
      "service aki talun",
    ],
  };

  return (
    <Wrapper>
      <AreaBusinessSchema areaName="Talun" areaSlug="talun" />
      <SEO
        pageTitle="Aki Talun Cirebon - Antar Pasang Gratis Area Talun"
        description="Solusi aki untuk kendaraan Anda di Talun, Cirebon. Menyediakan aki basah dan kering untuk mobil & motor dengan harga pabrik. Pesan hari ini, pasang hari ini!"
        keywords={[
          "aki mobil talun",
          "antar aki talun",
          "ganti aki talun",
          "service aki talun",
          "aki gs talun",
          "aki yuasa talun",
          "jual aki talun cirebon",
        ]}
        canonical="https://www.sentosajayamandiri.com/aki/talun"
        ogImage="/assets/img/bg/homepage-sjm2rev.webp"
      />
      <Header />
      <Breadcrumb
        title="Aki Talun"
        subtitle="Layanan Aki Cepat & Terpercaya di Talun"
      />
      <SeoAreaCard {...pageData} />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="h4 mb-4">Proses Mudah, Hasil Memuaskan</h2>
              <p className="mb-5">
                Kami memahami pentingnya mobilitas bagi masyarakat Talun. Oleh
                karena itu, layanan kami dirancang untuk memberikan kemudahan
                maksimal kepada Anda.
              </p>

              <div className="row g-4">
                <div className="col-md-3">
                  <div className="process-step">
                    <div className="step-number">1</div>
                    <h5 className="h6 mt-3">Hubungi Kami</h5>
                    <p className="text-muted small">
                      Via telepon atau WhatsApp
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="process-step">
                    <div className="step-number">2</div>
                    <h5 className="h6 mt-3">Pilih Aki</h5>
                    <p className="text-muted small">
                      Konsultasi gratis dengan tim kami
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="process-step">
                    <div className="step-number">3</div>
                    <h5 className="h6 mt-3">Antar & Pasang</h5>
                    <p className="text-muted small">
                      Gratis ke lokasi Anda di Talun
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="process-step">
                    <div className="step-number">4</div>
                    <h5 className="h6 mt-3">Nikmati</h5>
                    <p className="text-muted small">Kendaraan siap digunakan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .process-step {
          padding: 20px;
        }
        .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.25rem;
        }
      `}</style>
      <Footer />
    </Wrapper>
  );
};

export default TalunPage;
