import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SeoAreaCard from "../../components/seo-area";
import AreaBusinessSchema from "../../components/seo-area/AreaBusinessSchema";

const PlumbonPage = () => {
  const pageData = {
    title: "Aki Plumbon Cirebon - Spesialis Aki Mobil & Motor",
    description:
      "Distributor resmi aki terpercaya di Plumbon. Menyediakan aki untuk segala jenis kendaraan dengan harga kompetitif. Garansi pabrik, tukar tambah aki lama tersedia!",
    ctaLink: "/product",
    ctaText: "Lihat Penawaran Aki",
    keywords: [
      "aki plumbon",
      "toko aki plumbon cirebon",
      "distributor aki plumbon",
      "aki mobil plumbon",
      "aki motor plumbon",
      "tukar tambah aki plumbon",
      "jual aki plumbon",
    ],
  };

  return (
    <Wrapper>
      <AreaBusinessSchema areaName="Plumbon" areaSlug="plumbon" />
      <SEO
        pageTitle="Aki Plumbon Cirebon - Spesialis Aki Mobil & Motor"
        description="Distributor resmi aki terpercaya di Plumbon. Menyediakan aki untuk segala jenis kendaraan dengan harga kompetitif. Garansi pabrik, tukar tambah aki lama tersedia!"
        keywords={[
          "distributor aki plumbon",
          "aki mobil plumbon",
          "aki motor plumbon",
          "tukar tambah aki plumbon",
          "jual aki plumbon",
          "aki gs plumbon",
          "aki yuasa plumbon cirebon",
        ]}
        canonical="https://www.sentosajayamandiri.com/aki/plumbon"
        ogImage="/assets/img/bg/homepage-sjm2rev.webp"
      />
      <Header />
      <Breadcrumb
        title="Aki Plumbon"
        subtitle="Distributor Resmi Aki di Plumbon"
      />
      <SeoAreaCard {...pageData} />
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="h4 mb-4 text-center">
                Dipercaya Masyarakat Plumbon
              </h2>
              <p className="text-center mb-5">
                Sebagai distributor resmi di kawasan Plumbon, kami berkomitmen
                menyediakan aki original dengan harga terbaik. Kepuasan
                pelanggan adalah prioritas utama kami.
              </p>

              <div className="row g-4 mb-5">
                <div className="col-md-4 text-center">
                  <div className="counter-box p-4 bg-light rounded">
                    <h3 className="display-4 text-primary mb-2">1000+</h3>
                    <p className="text-muted mb-0">Pelanggan Setia</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="counter-box p-4 bg-light rounded">
                    <h3 className="display-4 text-primary mb-2">3</h3>
                    <p className="text-muted mb-0">Brand Utama</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="counter-box p-4 bg-light rounded">
                    <h3 className="display-4 text-primary mb-2">24/7</h3>
                    <p className="text-muted mb-0">Support</p>
                  </div>
                </div>
              </div>

              <div className="card bg-primary text-white">
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">
                    <i className="fas fa-recycle me-2"></i>
                    Program Tukar Tambah Aki
                  </h5>
                  <p className="mb-3">
                    Punya aki lama yang sudah tidak terpakai? Tukarkan dengan
                    yang baru dan dapatkan potongan harga spesial! Semakin besar
                    kapasitas aki lama, semakin besar pula potongan yang Anda
                    dapatkan.
                  </p>
                  <a href="/contact" className="btn btn-light">
                    Tanya Detail Program{" "}
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
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

export default PlumbonPage;
