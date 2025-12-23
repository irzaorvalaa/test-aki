// src/pages/aki/index.jsx
import SEO from "../../components/common/seo";
import Wrapper from "../../layout/wrapper";
import Header from "../../layout/headers/header-3";
import Footer from "../../layout/footers/footer";
import Breadcrumb from "../../components/common/breadcrumb/breadcrumb-product";
import Link from "next/link";

const AkiAreasPage = () => {
  const areas = [
    { name: "Kesambi", slug: "kesambi" },
    { name: "Kedawung", slug: "kedawung" },
    { name: "Lemahwungkuk", slug: "lemahwungkuk" },
    { name: "Harjamukti", slug: "harjamukti" },
    { name: "Talun", slug: "talun" },
    { name: "Mundu", slug: "mundu" },
    { name: "Kejaksan", slug: "kejaksan" },
    { name: "Gunung Jati", slug: "gunungjati" },
    { name: "Lemahabang", slug: "lemahabang" },
    { name: "Plumbon", slug: "plumbon" },
  ];

  return (
    <Wrapper>
      <SEO
        pageTitle="Layanan Aki di Seluruh Kecamatan Cirebon - Sentosa Jaya Mandiri"
        description="Melayani penjualan dan pemasangan aki mobil & motor di seluruh wilayah Cirebon: Kesambi, Kedawung, Lemahwungkuk, Harjamukti, Talun, Mundu, Kejaksan, Gunung Jati, Lemahabang, Plumbon dengan layanan antar gratis"
      />
      <Header />
      <Breadcrumb
        title="Area Layanan Aki"
        subtitle="Jangkauan Layanan Kami di Cirebon"
      />

      <section className="area-list-section py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="mb-3">Layanan Aki di Seluruh Cirebon</h1>
              <p className="lead text-muted">
                Sentosa Jaya Mandiri melayani penjualan dan pemasangan aki
                berkualitas di 10 kecamatan wilayah Cirebon dengan layanan antar
                gratis.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {areas.map((area) => (
              <div key={area.slug} className="col-md-6 col-lg-4">
                <Link
                  href={`/aki/${area.slug}`}
                  className="text-decoration-none"
                >
                  <div className="card h-100 shadow-sm area-card">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper mb-3">
                        <i className="fas fa-map-marker-alt fa-3x text-primary"></i>
                      </div>
                      <h3 className="h5 mb-2">Aki {area.name}</h3>
                      <p className="text-muted mb-3">
                        Kecamatan {area.name}, Cirebon
                      </p>
                      <span className="btn btn-sm btn-outline-primary">
                        Lihat Layanan{" "}
                        <i className="fas fa-arrow-right ms-1"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .area-card {
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }
        .area-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          border-color: var(--bs-primary);
        }
        .icon-wrapper {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </Wrapper>
  );
};

export default AkiAreasPage;
