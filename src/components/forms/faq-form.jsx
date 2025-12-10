import React from "react";
import Link from "next/link";

const FaqForm = () => {
  const handleWhatsApp = () => {
    const message = "Halo, saya ingin bertanya tentang produk aki Anda.";
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WA Anda
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="faq-contact-area">
        {/* Header */}
        <div className="text-center mb-40">
          <h3
            className="faq-contact-title"
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "15px",
              color: "#1e293b",
            }}
          >
            Punya Pertanyaan?
          </h3>
          <p style={{ fontSize: "16px", color: "#64748b" }}>
            Hubungi kami melalui WhatsApp untuk konsultasi gratis
          </p>
        </div>

        {/* WhatsApp CTA Card */}
        <div
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #1fb855 100%)",
            borderRadius: "20px",
            padding: "40px 30px",
            textAlign: "center",
            marginBottom: "30px",
            boxShadow: "0 10px 30px rgba(37, 211, 102, 0.3)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              width: "150px",
              height: "150px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              top: "-50px",
              right: "-30px",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
              bottom: "-30px",
              left: "-20px",
            }}
          ></div>

          {/* WhatsApp Icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <i
              className="fab fa-whatsapp"
              style={{
                fontSize: "45px",
                color: "#25D366",
              }}
            ></i>
          </div>

          <h4
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "10px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Chat via WhatsApp
          </h4>
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "15px",
              marginBottom: "25px",
              position: "relative",
              zIndex: 1,
            }}
          >
            Respon cepat • Konsultasi gratis • Available 24/7
          </p>

          <button
            onClick={handleWhatsApp}
            style={{
              background: "white",
              color: "#25D366",
              border: "none",
              padding: "16px 40px",
              borderRadius: "50px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.3s ease",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
              position: "relative",
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
            }}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: "20px" }}></i>
            Hubungi Sekarang
          </button>
        </div>

        {/* Info Cards Grid */}
        <div className="row g-3 mb-30">
          {/* Jam Operasional */}
          <div className="col-md-6">
            <div
              style={{
                background: "white",
                border: "2px solid #e9ecef",
                borderRadius: "15px",
                padding: "25px",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2b4eff";
                e.currentTarget.style.boxShadow =
                  "0 5px 20px rgba(43,78,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e9ecef";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background:
                    "linear-gradient(135deg, #2b4eff 0%, #667eea 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                }}
              >
                <i
                  className="far fa-clock"
                  style={{ fontSize: "24px", color: "white" }}
                ></i>
              </div>
              <h5
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#1e293b",
                }}
              >
                Jam Operasional
              </h5>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  marginBottom: "0",
                }}
              >
                Senin - Sabtu
                <br />
                08:00 - 17:00 WIB
              </p>
            </div>
          </div>

          {/* Response Time */}
          <div className="col-md-6">
            <div
              style={{
                background: "white",
                border: "2px solid #e9ecef",
                borderRadius: "15px",
                padding: "25px",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2b4eff";
                e.currentTarget.style.boxShadow =
                  "0 5px 20px rgba(43,78,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e9ecef";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background:
                    "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 15px",
                }}
              >
                <i
                  className="far fa-comments"
                  style={{ fontSize: "24px", color: "white" }}
                ></i>
              </div>
              <h5
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#1e293b",
                }}
              >
                Respon Cepat
              </h5>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  marginBottom: "0",
                }}
              >
                Rata-rata balas
                <br />
                &lt; 5 menit
              </p>
            </div>
          </div>
        </div>

        {/* Alternative Contact */}
        <div
          style={{
            background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            borderRadius: "15px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <h5
            style={{
              fontSize: "16px",
              fontWeight: "700",
              marginBottom: "15px",
              color: "#1e293b",
            }}
          >
            Kontak Alternatif
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
            }}
          >
            {/* Phone */}
            <a
              href="tel:+6281234567890"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#64748b",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2b4eff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              <i className="fas fa-phone-alt"></i>
              <span style={{ fontWeight: "600" }}>+62 812-3456-7890</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@akicirebon.com"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#64748b",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2b4eff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}
            >
              <i className="fas fa-envelope"></i>
              <span style={{ fontWeight: "600" }}>info@akicirebon.com</span>
            </a>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-30">
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Atau lihat{" "}
            <Link
              href="/faq"
              style={{
                color: "#2b4eff",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              FAQ (Pertanyaan Umum)
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default FaqForm;
