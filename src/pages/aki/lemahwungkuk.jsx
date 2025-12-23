import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb";
import SeoAreaCard from "../../components/seo-area";
import AreaBusinessSchema from "../../components/seo-area/AreaBusinessSchema";

const LemahwungkukPage = () => {
  const pageData = {
    title: "Aki Lemahwungkuk Cirebon - Service & Ganti Aki Profesional",
    description:
      "Spesialis aki mobil dan motor di Lemahwungkuk dengan layanan ganti aki di lokasi Anda. Aki berkualitas tinggi dari brand terpercaya. Konsultasi gratis, harga bersahabat!",
    ctaLink: "/product",
    ctaText: "Pilih Aki Sekarang",
    keywords: [
      "aki lemahwungkuk",
      "toko aki lemahwungkuk cirebon",
      "ganti aki lemahwungkuk",
      "service aki lemahwungkuk",
      "aki mobil lemahwungkuk",
      "aki yuasa lemahwungkuk",
      "jual aki lemahwungkuk",
    ],
  };

  return (
    <Wrapper>
      <AreaBusinessSchema areaName="Lemahwungkuk" areaSlug="lemahwungkuk" />
      <SEO
        pageTitle="Aki Lemahwungkuk Cirebon - Service & Ganti Aki Profesional"
        description="Spesialis aki mobil dan motor di Lemahwungkuk dengan layanan ganti aki di lokasi Anda. Aki berkualitas tinggi dari brand terpercaya. Konsultasi gratis, harga bersahabat!"
        keywords={[
          "ganti aki lemahwungkuk",
          "service aki lemahwungkuk",
          "aki mobil lemahwungkuk",
          "aki yuasa lemahwungkuk",
          "jual aki lemahwungkuk",
          "pasang aki lemahwungkuk",
          "aki amaron lemahwungkuk",
        ]}
        canonical="https://www.sentosajayamandiri.com/aki/lemahwungkuk"
        ogImage="/assets/img/bg/homepage-sjm2rev.webp"
      />
      <Header />
      <Breadcrumb
        title="Aki Lemahwungkuk"
        subtitle="Spesialis Aki di Kecamatan Lemahwungkuk"
      />
      <SeoAreaCard {...pageData} />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="h4 mb-3">
                Mengapa Warga Lemahwungkuk Percaya Pada Kami?
              </h2>
              <p className="mb-3">
                Sebagai mitra terpercaya masyarakat Lemahwungkuk, kami
                menyediakan solusi aki lengkap dari konsultasi hingga instalasi.
                Lokasi kami mudah dijangkau dari pusat Lemahwungkuk.
              </p>
              <p className="mb-0">
                <strong>Jam Operasional:</strong> Senin - Minggu, 08.00 - 20.00
                WIB
              </p>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="card-title mb-3">Brand Aki Tersedia</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">✓ GS Astra (Maintenance Free)</li>
                    <li className="mb-2">✓ Yuasa (High Performance)</li>
                    <li className="mb-2">✓ Amaron (Long Lasting)</li>
                    <li className="mb-0">✓ Dan brand terpercaya lainnya</li>
                  </ul>
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

export default LemahwungkukPage;
