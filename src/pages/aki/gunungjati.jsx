import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SeoAreaCard from "../../components/seo-area";
import AreaBusinessSchema from "../../components/seo-area/AreaBusinessSchema";

const GunungJatiPage = () => {
  const pageData = {
    title: "Toko Aki Gunung Jati Cirebon - Layanan 24 Jam",
    description:
      "Aki mogok di Gunung Jati? Tenang, kami siap bantu! Layanan darurat 24 jam untuk ganti aki mobil & motor. Stok lengkap, harga terjangkau, teknisi berpengalaman.",
    ctaLink: "/product",
    ctaText: "Hubungi Kami",
    keywords: [
      "aki gunung jati",
      "toko aki gunung jati cirebon",
      "aki mobil gunung jati",
      "layanan aki 24 jam gunung jati",
      "ganti aki gunung jati",
      "aki darurat gunung jati",
      "jual aki gunung jati",
    ],
  };

  return (
    <Wrapper>
      <AreaBusinessSchema areaName="Gunung Jati" areaSlug="gunungjati" />
      <SEO
        pageTitle="Toko Aki Gunung Jati Cirebon - Layanan 24 Jam"
        description="Aki mogok di Gunung Jati? Tenang, kami siap bantu! Layanan darurat 24 jam untuk ganti aki mobil & motor. Stok lengkap, harga terjangkau, teknisi berpengalaman."
        keywords={[
          "aki mobil gunung jati",
          "layanan aki 24 jam gunung jati",
          "ganti aki gunung jati",
          "aki darurat gunung jati",
          "jual aki gunung jati",
          "aki gs gunung jati",
          "service aki gunung jati cirebon",
        ]}
        canonical="https://www.sentosajayamandiri.com/aki/gunungjati"
        ogImage="/assets/img/bg/homepage-sjm2rev.webp"
      />
      <Header />
      <Breadcrumb
        title="Aki Gunung Jati"
        subtitle="Layanan Aki Darurat 24 Jam di Gunung Jati"
      />
      <SeoAreaCard {...pageData} />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center mb-5">
                <h2 className="h4 mb-3">Siaga 24 Jam untuk Gunung Jati</h2>
                <p className="lead">
                  Masalah aki bisa terjadi kapan saja. Itulah mengapa kami
                  menyediakan layanan darurat 24 jam untuk memastikan mobilitas
                  Anda tidak terganggu.
                </p>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card h-100 border-primary">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className="fas fa-clock text-primary me-2"></i>
                        Layanan Reguler
                      </h5>
                      <p className="card-text">
                        Senin - Minggu: 08.00 - 20.00 WIB
                      </p>
                      <ul className="list-unstyled small">
                        <li>✓ Konsultasi lengkap</li>
                        <li>✓ Test aki gratis</li>
                        <li>✓ Garansi resmi</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card h-100 border-danger">
                    <div className="card-body">
                      <h5 className="card-title">
                        <i className="fas fa-exclamation-triangle text-danger me-2"></i>
                        Layanan Darurat
                      </h5>
                      <p className="card-text">24 Jam (On Call Service)</p>
                      <ul className="list-unstyled small">
                        <li>✓ Respon cepat</li>
                        <li>✓ Datang ke lokasi</li>
                        <li>✓ Penanganan profesional</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="alert alert-warning mt-4">
                <i className="fas fa-info-circle me-2"></i>
                Untuk layanan darurat di luar jam operasional, harap hubungi
                nomor WhatsApp kami.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
};

export default GunungJatiPage;
