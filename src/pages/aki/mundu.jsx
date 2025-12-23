import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SeoAreaCard from "../../components/seo-area";
import AreaBusinessSchema from "../../components/seo-area/AreaBusinessSchema";

const MunduPage = () => {
  const pageData = {
    title: "Jual Aki Mundu Cirebon - Semua Merek Tersedia",
    description:
      "Toko aki lengkap di Mundu menyediakan aki untuk mobil, motor, dan kendaraan berat. Harga transparan, kualitas terjamin. Layanan home service tersedia untuk area Mundu!",
    ctaLink: "/product",
    ctaText: "Lihat Katalog Aki",
    keywords: [
      "jual aki mundu",
      "toko aki mundu cirebon",
      "aki mobil mundu",
      "aki motor mundu",
      "home service aki mundu",
      "aki gs mundu",
      "harga aki mundu",
    ],
  };

  return (
    <Wrapper>
      <AreaBusinessSchema areaName="Mundu" areaSlug="mundu" />
      <SEO
        pageTitle="Jual Aki Mundu Cirebon - Semua Merek Tersedia"
        description="Toko aki lengkap di Mundu menyediakan aki untuk mobil, motor, dan kendaraan berat. Harga transparan, kualitas terjamin. Layanan home service tersedia untuk area Mundu!"
        keywords={[
          "aki mobil mundu",
          "aki motor mundu",
          "home service aki mundu",
          "aki gs mundu",
          "harga aki mundu",
          "jual aki mundu cirebon",
          "distributor aki mundu",
        ]}
        canonical="https://www.sentosajayamandiri.com/aki/mundu"
        ogImage="/assets/img/bg/homepage-sjm2rev.webp"
      />
      <Header />
      <Breadcrumb
        title="Aki Mundu"
        subtitle="Penyedia Aki Berkualitas di Mundu"
      />
      <SeoAreaCard {...pageData} />
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="h4 mb-3">
                Aki Berkualitas untuk Mundu dan Sekitarnya
              </h2>
              <p className="mb-3">
                Di kawasan Mundu, kami dikenal sebagai distributor aki yang
                handal dan terpercaya. Setiap produk yang kami jual sudah
                melalui quality control ketat untuk memastikan performa optimal
                kendaraan Anda.
              </p>
              <div className="alert alert-info">
                <i className="fas fa-info-circle me-2"></i>
                <strong>Info:</strong> Kami melayani pembelian dalam jumlah
                besar untuk fleet/perusahaan di Mundu dengan harga khusus.
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-primary text-white p-4 rounded">
                <h5 className="mb-3">Keunggulan Kami</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="fas fa-check-circle me-2"></i>
                    Stok lengkap berbagai tipe & kapasitas
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle me-2"></i>
                    Gratis konsultasi pemilihan aki
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle me-2"></i>
                    Tukar tambah aki lama Anda
                  </li>
                  <li className="mb-0">
                    <i className="fas fa-check-circle me-2"></i>
                    Garansi pabrik hingga 12 bulan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Wrapper>
  );
};

export default MunduPage;
