import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SeoAreaCard from "../../components/seo-area";
import AreaBusinessSchema from "../../components/seo-area/AreaBusinessSchema";

const LemahabangPage = () => {
  const pageData = {
    title: "Aki Lemahabang Cirebon - Gratis Ongkir & Pemasangan",
    description:
      "Belanja aki di Lemahabang kini lebih mudah! Gratis ongkir dan pasang untuk area Lemahabang. Aki berkualitas dengan harga pabrik langsung. Pesan online atau datang langsung!",
    ctaLink: "/product",
    ctaText: "Pesan Aki Online",
    keywords: [
      "aki lemahabang",
      "toko aki lemahabang cirebon",
      "jual aki lemahabang",
      "aki mobil lemahabang",
      "gratis ongkir aki lemahabang",
      "aki motor lemahabang",
      "beli aki lemahabang",
    ],
  };

  return (
    <Wrapper>
      <AreaBusinessSchema areaName="Lemahabang" areaSlug="lemahabang" />
      <SEO
        pageTitle="Aki Lemahabang Cirebon - Gratis Ongkir & Pemasangan"
        description="Belanja aki di Lemahabang kini lebih mudah! Gratis ongkir dan pasang untuk area Lemahabang. Aki berkualitas dengan harga pabrik langsung. Pesan online atau datang langsung!"
        keywords={[
          "aki mobil lemahabang",
          "gratis ongkir aki lemahabang",
          "aki motor lemahabang",
          "beli aki lemahabang",
          "jual aki lemahabang",
          "antar aki lemahabang",
          "aki gs lemahabang cirebon",
        ]}
        canonical="https://www.sentosajayamandiri.com/aki/lemahabang"
        ogImage="/assets/img/bg/homepage-sjm2rev.webp"
      />
      <Header />
      <Breadcrumb
        title="Aki Lemahabang"
        subtitle="Belanja Aki Mudah di Lemahabang"
      />
      <SeoAreaCard {...pageData} />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="h4 mb-3">
                Belanja Aki Makin Praktis di Lemahabang
              </h2>
              <p className="mb-4">
                Kami menghadirkan kemudahan berbelanja aki untuk masyarakat
                Lemahabang. Tidak perlu repot datang ke toko, cukup pesan via
                telepon atau WhatsApp, kami antar dan pasang langsung di tempat
                Anda.
              </p>

              <div className="row g-3">
                <div className="col-12">
                  <div className="d-flex align-items-center bg-white p-3 rounded shadow-sm">
                    <div className="flex-shrink-0">
                      <i className="fas fa-shipping-fast fa-2x text-primary"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Gratis Ongkir</h6>
                      <p className="text-muted small mb-0">
                        Untuk area Lemahabang dan sekitarnya
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-center bg-white p-3 rounded shadow-sm">
                    <div className="flex-shrink-0">
                      <i className="fas fa-wrench fa-2x text-primary"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">Pasang di Tempat</h6>
                      <p className="text-muted small mb-0">
                        Teknisi datang ke lokasi Anda
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h5 className="card-title mb-4">Cara Pesan Aki</h5>
                  <ol className="mb-0">
                    <li className="mb-3">
                      <strong>Pilih Aki</strong> - Browse katalog kami atau
                      konsultasi dengan tim
                    </li>
                    <li className="mb-3">
                      <strong>Konfirmasi Pesanan</strong> - Via telepon/WhatsApp
                    </li>
                    <li className="mb-3">
                      <strong>Tunggu Kami Datang</strong> - Maksimal 1 jam di
                      area Lemahabang
                    </li>
                    <li className="mb-0">
                      <strong>Selesai!</strong> - Kendaraan siap digunakan
                      kembali
                    </li>
                  </ol>
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

export default LemahabangPage;
