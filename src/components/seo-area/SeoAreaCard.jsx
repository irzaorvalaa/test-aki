// src/components/seo-area/SEOAreaCard.jsx
import Link from "next/link";

const SEOAreaCard = ({
  title,
  description,
  ctaLink,
  ctaText = "Lihat Produk Aki",
  keywords = [],
  imageSrc = "/assets/img/bg/homepage-sjm2rev.webp",
}) => {
  return (
    <section className="seo-area-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Gambar */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={imageSrc}
              alt={title}
              className="img-fluid rounded shadow-sm"
              loading="lazy"
            />
          </div>

          {/* Konten */}
          <div className="col-lg-6">
            <div className="seo-area-content">
              <h1 className="seo-area-title mb-3">{title}</h1>
              <p className="seo-area-description mb-4">{description}</p>

              {/* Keywords tersembunyi untuk SEO */}
              {keywords.length > 0 && (
                <div className="visually-hidden" aria-hidden="true">
                  {keywords.join(", ")}
                </div>
              )}

              {/* CTA Button */}
              <Link href={ctaLink} className="btn btn-primary btn-lg">
                {ctaText} <i className="fas fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Styling inline (bisa dipindah ke CSS global) */}
      <style jsx>{`
        .seo-area-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        .seo-area-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #212529;
        }
        .seo-area-description {
          font-size: 1.125rem;
          color: #495057;
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .seo-area-title {
            font-size: 1.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SEOAreaCard;
