import React from "react";
import Link from "next/link";

// ✅ 3 PRODUK UNGGULAN UNTUK HOMEPAGE - SESUAI PRODUCT-DATA.JS
const featured_products = [
  {
    id: 1,
    title: "Amaron Go 65D26L",
    category: "amaron-go",
    img: "https://placehold.co/400x400/10b981/white?text=Amaron+Go+65D26L&font=raleway",
    specs: {
      capacity: "65Ah",
      voltage: "12V",
      warranty: "18 Bulan",
    },
    description:
      "Amaron Go adalah aki maintenance free untuk mobil sedan dan MPV dengan teknologi terkini dari Amaron",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    icon: "fas fa-car",
  },
  {
    id: 3,
    title: "Yuasa NS60",
    category: "yuasa",
    img: "https://placehold.co/400x400/ff4757/white?text=Yuasa+NS60&font=raleway",
    specs: {
      capacity: "45 Ah",
      voltage: "12V",
      warranty: "12 Bulan",
    },
    description:
      "Aki basah berkualitas Jepang untuk mobil sedan dengan performa stabil",
    color: "#ff4757",
    gradient: "linear-gradient(135deg, #ff4757 0%, #ff6b6b 100%)",
    icon: "fas fa-car-side",
  },
  {
    id: 7,
    title: "GS Astra NS60LS MF",
    category: "gs",
    img: "https://placehold.co/400x400/22c55e/white?text=GS+Astra+NS60LS&font=raleway",
    specs: {
      capacity: "45 Ah",
      voltage: "12V",
      warranty: "15 Bulan",
    },
    description:
      "Aki maintenance free produksi lokal berkualitas internasional",
    color: "#22c55e",
    gradient: "linear-gradient(135deg, #22c55e 0%, #4ade80 100%)",
    icon: "fas fa-taxi",
  },
];

const ProductHighlight = ({ style_fancy }) => {
  const handleWhatsApp = (product) => {
    const message = `Halo, saya tertarik dengan produk:\n\n*${
      product.title
    }*\n${product.category?.toUpperCase()}\n\nMohon info harga dan detail produk. Terima kasih!`;
    const phoneNumber = "6281234567890";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <section
        className={`product-highlight-area ${
          style_fancy ? "pb-110" : "pt-120 pb-90"
        }`}
        style={{ background: "white" }}
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
                        "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
                      color: "white",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "20px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Produk Unggulan
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
                    Aki Berkualitas Pilihan{" "}
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Terbaik
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
                    Pilihan aki original dari brand ternama dengan garansi resmi
                    untuk kendaraan Anda
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Product Cards */}
          <div className="row">
            {featured_products.map((product, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <article
                  className="product-highlight-card"
                  style={{
                    background: "white",
                    borderRadius: "24px",
                    padding: "0",
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
                    e.currentTarget.style.borderColor = product.color;
                    e.currentTarget.style.boxShadow = `0 20px 50px ${product.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#e9ecef";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Product Image Section */}
                  <div
                    style={{
                      background: product.gradient,
                      padding: "40px 30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "280px",
                      position: "relative",
                    }}
                  >
                    {/* Decorative circles */}
                    <div
                      style={{
                        position: "absolute",
                        width: "120px",
                        height: "120px",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50%",
                        top: "-30px",
                        right: "-30px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        width: "80px",
                        height: "80px",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50%",
                        bottom: "-20px",
                        left: "-20px",
                      }}
                    />

                    {/* Product Image */}
                    <div
                      style={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        maxWidth: "200px",
                      }}
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                          borderRadius: "12px",
                          filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.2))",
                        }}
                      />
                    </div>

                    {/* Category Badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: "15px",
                        left: "15px",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        background: "rgba(255, 255, 255, 0.25)",
                        backdropFilter: "blur(10px)",
                        color: "white",
                        letterSpacing: "0.5px",
                        zIndex: 2,
                      }}
                    >
                      {product.category === "amaron-go"
                        ? "Amaron Go"
                        : product.category === "yuasa"
                        ? "Yuasa"
                        : product.category === "gs"
                        ? "GS Astra"
                        : product.category}
                    </span>
                  </div>

                  {/* Product Content */}
                  <div
                    style={{
                      padding: "30px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#1e293b",
                        marginBottom: "15px",
                        lineHeight: "1.3",
                      }}
                    >
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#64748b",
                        lineHeight: "1.7",
                        marginBottom: "20px",
                        flex: 1,
                      }}
                    >
                      {product.description}
                    </p>

                    {/* Specs Grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          padding: "14px 8px",
                          background: "#f8f9fa",
                          borderRadius: "12px",
                          border: `2px solid ${product.color}20`,
                        }}
                      >
                        <i
                          className="fas fa-bolt"
                          style={{
                            fontSize: "18px",
                            color: product.color,
                            marginBottom: "8px",
                            display: "block",
                          }}
                        ></i>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: "700",
                            color: "#1e293b",
                          }}
                        >
                          {product.specs.voltage}
                        </div>
                        <div
                          style={{
                            fontSize: "10px",
                            color: "#64748b",
                            marginTop: "2px",
                          }}
                        >
                          Voltase
                        </div>
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          padding: "14px 8px",
                          background: "#f8f9fa",
                          borderRadius: "12px",
                          border: `2px solid ${product.color}20`,
                        }}
                      >
                        <i
                          className="fas fa-battery-full"
                          style={{
                            fontSize: "18px",
                            color: product.color,
                            marginBottom: "8px",
                            display: "block",
                          }}
                        ></i>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: "700",
                            color: "#1e293b",
                          }}
                        >
                          {product.specs.capacity}
                        </div>
                        <div
                          style={{
                            fontSize: "10px",
                            color: "#64748b",
                            marginTop: "2px",
                          }}
                        >
                          Kapasitas
                        </div>
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          padding: "14px 8px",
                          background: "#f8f9fa",
                          borderRadius: "12px",
                          border: `2px solid ${product.color}20`,
                        }}
                      >
                        <i
                          className="fas fa-shield-alt"
                          style={{
                            fontSize: "18px",
                            color: product.color,
                            marginBottom: "8px",
                            display: "block",
                          }}
                        ></i>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: "700",
                            color: "#1e293b",
                          }}
                        >
                          {product.specs.warranty}
                        </div>
                        <div
                          style={{
                            fontSize: "10px",
                            color: "#64748b",
                            marginTop: "2px",
                          }}
                        >
                          Garansi
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleWhatsApp(product)}
                      style={{
                        width: "100%",
                        padding: "16px 24px",
                        background: product.gradient,
                        color: "white",
                        border: "none",
                        borderRadius: "12px",
                        fontSize: "15px",
                        fontWeight: "700",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        transition: "all 0.3s ease",
                        boxShadow: `0 6px 20px ${product.color}35`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 10px 30px ${product.color}50`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 6px 20px ${product.color}35`;
                      }}
                    >
                      <i
                        className="fab fa-whatsapp"
                        style={{ fontSize: "18px" }}
                      ></i>
                      <span>Tanya Harga</span>
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* ✅ TOMBOL LIHAT SEMUA PRODUK */}
          <div className="row justify-content-center mt-50">
            <div className="col-xl-6 col-lg-8">
              <div className="text-center">
                <Link
                  href="/product"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    background:
                      "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
                    color: "white",
                    padding: "18px 40px",
                    borderRadius: "50px",
                    fontSize: "16px",
                    fontWeight: "700",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 25px rgba(245, 158, 11, 0.4)",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 35px rgba(245, 158, 11, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(245, 158, 11, 0.4)";
                  }}
                >
                  <span>Lihat Semua Produk Aki</span>
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
                  Butuh rekomendasi aki?{" "}
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Sentosa%20Jaya%20Mandiri%2C%20saya%20butuh%20rekomendasi%20aki"
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
                    <i className="fab fa-whatsapp"></i> Chat Kami
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

export default ProductHighlight;
