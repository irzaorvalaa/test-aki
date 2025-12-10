import React from "react";

// const contact_standard_data = [
//   {
//     id: 1,
//     icon: "fas fa-map-marker-alt",
//     title: "Lokasi Toko Aki Cirebon",
//     info: "Toko Aki Sentosa Jaya Mandiri - Jl. Lemahwungkuk No.19, Lemahwungkuk, Kec. Lemahwungkuk, Kota Cirebon, Jawa Barat 45117",
//     link: "https://maps.app.goo.gl/nnPerGBuvZ6pL1DSA",
//     actionText: "Lihat di Google Maps",
//     color: "#2b4eff",
//     gradient: "linear-gradient(135deg, #2b4eff 0%, #667eea 100%)",
//   },
//   // {
//   //   id: 2,
//   //   icon: "fas fa-phone-alt",
//   //   title: "Telepon Cirebon",
//   //   info: "+62 812-3456-7890",
//   //   link: "tel:+6281234567890",
//   //   actionText: "Telepon Sekarang",
//   //   color: "#f59e0b",
//   //   gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
//   // },
//   // {
//   //   id: 3,
//   //   icon: "fas fa-envelope",
//   //   title: "Email Kami",
//   //   info: "sentosajayamandiri@gmail.com",
//   //   link: "mailto:sentosajayamandiri@gmail.com",
//   //   actionText: "Kirim Email",
//   //   color: "#10b981",
//   //   gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
//   // },
// ];

const ContactStandardArea = () => {
  const handleWhatsApp = () => {
    const message =
      "Halo Sentosa Jaya Mandiri Cirebon, saya ingin bertanya tentang produk aki.";
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WA Anda
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <section className="contact-area pt-120 pb-90">
        <div className="container">
          {/* Header Section */}
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
                  TOKO AKI CIREBON
                </span>
                <h1
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    marginBottom: "15px",
                    color: "#1e293b",
                    lineHeight: "1.2",
                  }}
                >
                  Hubungi Sentosa Jaya Mandiri
                </h1>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#64748b",
                    lineHeight: "1.6",
                  }}
                >
                  Toko aki terpercaya di Cirebon melayani penjualan aki mobil,
                  motor, dan truk dengan layanan antar pasang gratis
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Card - Priority */}
          <div className="row justify-content-center mb-60">
            <div className="col-xl-10 col-lg-10">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #25D366 0%, #1fb855 100%)",
                  borderRadius: "24px",
                  padding: "50px 40px",
                  textAlign: "center",
                  boxShadow: "0 20px 60px rgba(37, 211, 102, 0.25)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative elements */}
                <div
                  style={{
                    position: "absolute",
                    width: "250px",
                    height: "250px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    top: "-100px",
                    right: "-50px",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    width: "180px",
                    height: "180px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    bottom: "-60px",
                    left: "-40px",
                  }}
                ></div>

                <div className="row align-items-center">
                  <div className="col-lg-8 text-lg-start text-center mb-4 mb-lg-0">
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          justifyContent: "flex-start",
                          gap: "20px",
                          marginBottom: "20px",
                        }}
                      >
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
                            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                            flexShrink: 0,
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

                        <div style={{ textAlign: "left" }}>
                          <h3
                            style={{
                              color: "white",
                              fontSize: "32px",
                              fontWeight: "700",
                              marginBottom: "8px",
                              lineHeight: "1.2",
                            }}
                          >
                            Chat WhatsApp Kami
                          </h3>
                          <p
                            style={{
                              color: "rgba(255,255,255,0.95)",
                              fontSize: "16px",
                              marginBottom: "0",
                            }}
                          >
                            Sentosa Jaya Mandiri Cirebon • Respon Cepat 5 Menit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 text-lg-end text-center">
                    <button
                      onClick={handleWhatsApp}
                      style={{
                        background: "white",
                        color: "#25D366",
                        border: "none",
                        padding: "18px 35px",
                        borderRadius: "50px",
                        fontSize: "17px",
                        fontWeight: "700",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "12px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                        position: "relative",
                        zIndex: 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 35px rgba(0,0,0,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(0,0,0,0.2)";
                      }}
                    >
                      <i
                        className="fab fa-whatsapp"
                        style={{ fontSize: "22px" }}
                      ></i>
                      Hubungi Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}

          {/* Additional Info Section */}
          <div className="row justify-content-center mb-50">
            <div className="col-xl-10">
              <div
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "45px",
                  border: "2px solid #e9ecef",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                }}
              >
                <div className="row align-items-center">
                  {/* Jam Operasional */}
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          background:
                            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 8px 20px rgba(99,102,241,0.3)",
                        }}
                      >
                        <i
                          className="far fa-clock"
                          style={{ fontSize: "28px", color: "white" }}
                        ></i>
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            marginBottom: "12px",
                            color: "#1e293b",
                          }}
                        >
                          Jam Operasional
                        </h4>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "#64748b",
                            marginBottom: "6px",
                          }}
                        >
                          <strong>Senin - Jumat:</strong> 08:00 - 17:00 WIB
                        </p>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "#64748b",
                            marginBottom: "6px",
                          }}
                        >
                          <strong>Sabtu:</strong> 08:00 - 15:00 WIB
                        </p>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#ef4444",
                            marginTop: "8px",
                            marginBottom: "0",
                            fontWeight: "600",
                          }}
                        >
                          Minggu & Tanggal Merah: Tutup
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Area Layanan */}
                  <div className="col-md-6">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          background:
                            "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          boxShadow: "0 8px 20px rgba(236,72,153,0.3)",
                        }}
                      >
                        <i
                          className="fas fa-map-marked-alt"
                          style={{ fontSize: "28px", color: "white" }}
                        ></i>
                      </div>
                      <div>
                        <h4
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            marginBottom: "12px",
                            color: "#1e293b",
                          }}
                        >
                          Area Layanan Cirebon
                        </h4>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "#64748b",
                            marginBottom: "12px",
                            lineHeight: "1.6",
                          }}
                        >
                          Kedawung • Kejaksan • Kesambi
                          <br />
                          Harjamukti • Lemahwungkuk • Pekalipan
                        </p>
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            background:
                              "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                            color: "white",
                            padding: "8px 16px",
                            borderRadius: "50px",
                            fontSize: "13px",
                            fontWeight: "700",
                            boxShadow: "0 4px 15px rgba(34,197,94,0.3)",
                          }}
                        >
                          <i className="fas fa-check-circle"></i>
                          <span>Gratis Ongkir & Pasang</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Info Section */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                  borderRadius: "24px",
                  padding: "40px",
                  border: "2px solid #dee2e6",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "20px",
                  }}
                >
                  Toko Aki Sentosa Jaya Mandiri Cirebon
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#64748b",
                    lineHeight: "1.8",
                    marginBottom: "0",
                    maxWidth: "850px",
                    margin: "0 auto",
                  }}
                >
                  <strong>Sentosa Jaya Mandiri</strong> adalah toko aki
                  terpercaya di <strong>Cirebon</strong> yang melayani penjualan
                  aki mobil, aki motor, dan aki truk untuk seluruh wilayah{" "}
                  <strong>Kota Cirebon</strong>. Berlokasi strategis di{" "}
                  <strong>Lemahwungkuk Cirebon</strong>, kami melayani area{" "}
                  <strong>Kejaksan</strong>, <strong>Kesambi</strong>,{" "}
                  <strong>Harjamukti</strong>, <strong>Pekalipan</strong>, dan
                  sepanjang <strong>jalur Pantura Cirebon</strong>. Kami juga
                  menjangkau wilayah kabupaten seperti{" "}
                  <strong>Palimanan</strong>, <strong>Plered</strong>,{" "}
                  <strong>Weru</strong>, <strong>Tengah Tani</strong>,{" "}
                  <strong>Lemah Abang</strong>, <strong>Sumber</strong>,{" "}
                  <strong>Talun</strong>, dan <strong>Losari</strong>. Dengan
                  layanan antar pasang gratis, jumper aki darurat 24 jam, dan
                  garansi resmi,{" "}
                  <strong>Toko Aki Sentosa Jaya Mandiri Cirebon</strong> menjadi
                  pilihan utama untuk kebutuhan aki kendaraan di{" "}
                  <strong>Cirebon</strong> dan sekitarnya. Hubungi kami untuk
                  mendapatkan aki berkualitas dengan harga terbaik, gratis
                  ongkir untuk wilayah <strong>Cirebon Raya</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactStandardArea;
