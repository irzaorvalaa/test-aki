import React from "react";
import Link from "next/link";

// ✅ SERVICE DATA - 3 LAYANAN UTAMA UNTUK HOMEPAGE
const service_data = [
  {
    id: 1,
    icon: "fas fa-car-battery",
    title: "Penjualan Aki Cirebon",
    description:
      "Toko aki terlengkap di Cirebon. Menyediakan berbagai merek aki berkualitas untuk mobil, motor, dan truk dengan harga terbaik dan garansi resmi",
    features: ["Aki Original", "Harga Terbaik Cirebon", "Garansi Resmi"],
    color: "#2b4eff",
    gradient: "linear-gradient(135deg, #2b4eff 0%, #667eea 100%)",
  },
  {
    id: 2,
    icon: "fas fa-shipping-fast",
    title: "Antar Pasang Aki Cirebon",
    description:
      "Gratis antar dan pasang aki ke lokasi Anda di seluruh wilayah Cirebon, tidak perlu repot datang ke toko",
    features: ["Gratis Ongkir Cirebon", "Pasang di Lokasi", "Cepat & Aman"],
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
  },
  {
    id: 3,
    icon: "fas fa-bolt",
    title: "Jumper Aki Darurat Cirebon",
    description:
      "Layanan jumper aki 24/7 di Cirebon untuk kendaraan yang mogok karena aki tekor. Siap membantu Anda kapan saja dan di mana saja",
    features: [
      "Siap 24/7 Cirebon",
      "Respon Cepat 15 Menit",
      "Jangkau Semua Area",
    ],
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
  },
];

const ServiceArea = ({ style_fancy }) => {
  return (
    <>
      <section
        className={`service-area ${style_fancy ? "pb-110" : "pt-120 pb-90"}`}
        style={{ background: "#f8f9fa" }}
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container">
          {/* Section Header */}
          {style_fancy ? null : (
            <div className="row justify-content-center mb-60">
              <div className="col-xl-8 col-lg-10">
                <div className="text-center">
                  <span
                    style={{
                      display: "inline-block",
                      padding: "8px 20px",
                      background:
                        "linear-gradient(135deg, #2b4eff 0%, #667eea 100%)",
                      color: "white",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "20px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Layanan Aki Terpercaya
                  </span>
                  <h2
                    style={{
                      fontSize: "clamp(32px, 4vw, 48px)",
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: "20px",
                      lineHeight: "1.2",
                    }}
                  >
                    Solusi Lengkap Aki Kendaraan di{" "}
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, #2b4eff 0%, #667eea 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Cirebon
                    </span>
                  </h2>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#64748b",
                      lineHeight: "1.7",
                      maxWidth: "650px",
                      margin: "0 auto",
                    }}
                  >
                    Toko aki Sentosa Jaya Mandiri dengan layanan profesional dan
                    gratis ongkir untuk wilayah Cirebon
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Service Cards */}
          <div className="row">
            {service_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <article
                  className="service-card"
                  itemScope
                  itemType="https://schema.org/Service"
                  style={{
                    background: "white",
                    borderRadius: "24px",
                    padding: "40px 30px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid #e9ecef",
                    transition: "all 0.4s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.borderColor = item.color;
                    e.currentTarget.style.boxShadow = `0 20px 50px ${item.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#e9ecef";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Decorative corner */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-40px",
                      right: "-40px",
                      width: "100px",
                      height: "100px",
                      background: item.gradient,
                      opacity: 0.1,
                      borderRadius: "50%",
                    }}
                  />

                  {/* Icon */}
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: item.gradient,
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "25px",
                      boxShadow: `0 10px 30px ${item.color}40`,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <i
                      className={item.icon}
                      style={{
                        fontSize: "36px",
                        color: "white",
                      }}
                    ></i>
                  </div>

                  {/* Title */}
                  <h3
                    itemProp="name"
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: "15px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    itemProp="description"
                    style={{
                      fontSize: "15px",
                      color: "#64748b",
                      lineHeight: "1.7",
                      marginBottom: "20px",
                      flex: 1,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Features List */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 25px 0",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {item.features.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "10px",
                          fontSize: "14px",
                          color: "#475569",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            background: item.color,
                            borderRadius: "50%",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontWeight: "600" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <Link
                    href="/service"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: item.color,
                      textDecoration: "none",
                      fontSize: "15px",
                      fontWeight: "700",
                      transition: "gap 0.3s ease",
                      position: "relative",
                      zIndex: 1,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = "12px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = "8px";
                    }}
                  >
                    <span>Selengkapnya</span>
                    <i
                      className="fas fa-arrow-right"
                      style={{ fontSize: "14px" }}
                    ></i>
                  </Link>
                </article>
              </div>
            ))}
          </div>

          {/* ✅ TOMBOL LIHAT SEMUA LAYANAN */}
          <div className="row justify-content-center mt-50">
            <div className="col-xl-6 col-lg-8">
              <div className="text-center">
                <Link
                  href="/service"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    background:
                      "linear-gradient(135deg, #2b4eff 0%, #667eea 100%)",
                    color: "white",
                    padding: "18px 40px",
                    borderRadius: "50px",
                    fontSize: "16px",
                    fontWeight: "700",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 25px rgba(43, 78, 255, 0.4)",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 35px rgba(43, 78, 255, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(43, 78, 255, 0.4)";
                  }}
                >
                  <span>Lihat Semua Layanan Kami</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>

                {/* CTA WhatsApp */}
                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    color: "#64748b",
                  }}
                >
                  Atau hubungi kami via{" "}
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Sentosa%20Jaya%20Mandiri%2C%20saya%20ingin%20tanya%20tentang%20layanan%20aki%20di%20Cirebon"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#25D366",
                      fontWeight: "700",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
