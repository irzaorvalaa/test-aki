import React from "react";
import Image from "next/image";
// import Link from "next/link";

const HeroArea = () => {
  return (
    <>
      <section
        className="hero-area"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "400px",
          background: "#f8f9fa",
          width: "100%",
          maxWidth: "100vw",
        }}
      >
        <div
          className="hero-image-desktop"
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&h=600&fit=crop&q=80"
            alt="Toko Aki Sentosa Jaya Mandiri Cirebon - Penjualan Aki Mobil Motor Truk"
            width={1920}
            height={600}
            priority
            quality={85}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              maxHeight: "600px",
              display: "block",
            }}
          />
        </div>

        <div
          className="hero-image-mobile"
          style={{
            width: "100%",
            maxWidth: "100vw",
            overflow: "hidden",
            margin: 0,
            padding: 0,
          }}
        >
          <Image
            src="/assets/img/logo/roll.jpg"
            alt="Toko Aki Sentosa Jaya Mandiri Cirebon - Aki Berkualitas"
            width={1080}
            height={1920}
            priority
            quality={90}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)",
            zIndex: 1,
          }}
        />

        <div
          className="hero-content"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
            zIndex: 2,
            width: "90%",
            maxWidth: "1200px",
            padding: "0 20px",
          }}
        >
          {/* <h1
            style={{
              fontSize: "clamp(24px, 5vw, 56px)",
              fontWeight: "700",
              marginBottom: "15px",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
              lineHeight: "1.2",
              letterSpacing: "-0.5px",
            }}
          >
            Toko Aki Sentosa Jaya Mandiri Cirebon
          </h1> */}

          <p
            style={{
              fontSize: "clamp(14px, 2.5vw, 22px)",
              marginBottom: "30px",
              textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
              fontWeight: "500",
            }}
          >
            Solusi Aki Terpercaya di Cirebon • Gratis Antar Pasang • Garansi
            Resmi
          </p>

          {/* <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          > */}
          {/* <a
              href="https://wa.me/6281234567890?text=Halo%20Sentosa%20Jaya%20Mandiri%2C%20saya%20ingin%20tanya%20tentang%20aki"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                color: "white",
                padding: "16px 35px",
                borderRadius: "50px",
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: "700",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(37, 211, 102, 0.5)",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(37, 211, 102, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(37, 211, 102, 0.5)";
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: "22px" }}></i>
              <span>Chat WhatsApp</span>
            </a> */}

          {/* Product Button */}
          {/* <Link
              href="/product"
              className="btn-product"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "white",
                color: "#2b4eff",
                padding: "16px 35px",
                borderRadius: "50px",
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: "700",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.3)",
                border: "2px solid white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.background = "#2b4eff";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(43, 78, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#2b4eff";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(255, 255, 255, 0.3)";
              }}
            >
              <i
                className="fas fa-shopping-cart"
                style={{ fontSize: "18px" }}
              ></i>
              <span>Lihat Produk</span>
            </Link>
          </div> */}

          {/* Trust Badges */}
          {/* <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <i
                className="fas fa-shipping-fast"
                style={{ fontSize: "28px", marginBottom: "8px" }}
              ></i>
              <p style={{ fontSize: "12px", margin: 0, fontWeight: "600" }}>
                Gratis Antar
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <i
                className="fas fa-shield-alt"
                style={{ fontSize: "28px", marginBottom: "8px" }}
              ></i>
              <p style={{ fontSize: "12px", margin: 0, fontWeight: "600" }}>
                Garansi Resmi
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <i
                className="fas fa-clock"
                style={{ fontSize: "28px", marginBottom: "8px" }}
              ></i>
              <p style={{ fontSize: "12px", margin: 0, fontWeight: "600" }}>
                Jumper 24 Jam
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <i
                className="fas fa-certificate"
                style={{ fontSize: "28px", marginBottom: "8px" }}
              ></i>
              <p style={{ fontSize: "12px", margin: 0, fontWeight: "600" }}>
                Produk Original
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* ✅ CSS FOR RESPONSIVE IMAGES */}
      <style jsx>{`
        /* Desktop Image - Show on desktop only */
        .hero-image-desktop {
          display: block;
        }

        .hero-image-mobile {
          display: none;
        }

        /* Mobile Image - Show on mobile only */
        @media (max-width: 768px) {
          .hero-image-desktop {
            display: none;
          }

          .hero-image-mobile {
            display: block;
            width: 100%;
            max-width: 100vw;
            overflow: hidden;
          }

          /* ✅ NO MAX HEIGHT! Biar panjang penuh */
          .hero-image-mobile img {
            width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
          }

          /* ✅ Overlay lebih transparan di mobile */
          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(0, 0, 0, 0.4) 100%
            ) !important;
          }

          /* ✅ Content position adjusted for tall image */
          .hero-content {
            top: 30% !important;
          }
        }

        /* Extra small devices */
        @media (max-width: 375px) {
          .hero-content {
            top: 25% !important;
          }
        }
      `}</style>
    </>
  );
};

export default HeroArea;
