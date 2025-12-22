// src/components/contact/contact-standard-area.jsx (OPTIMIZED - SEO BEAST MODE)
import React from "react";
import Head from "next/head";

const ContactStandardArea = () => {
  const handleWhatsApp = () => {
    const message =
      "Halo Toko Aki Sentosa Jaya Mandiri Cirebon, saya ingin bertanya tentang produk aki.";
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WA Anda
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Toko Aki Sentosa Jaya Mandiri Cirebon",
    image: "https://test-aki.vercel.app/assets/img/logo/logo.png",
    telephone: "+6281234567890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Lemahwungkuk",
      addressLocality: "Cirebon",
      addressRegion: "Jawa Barat",
      postalCode: "45111",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.7063,
      longitude: 108.5571,
    },
    url: "https://test-aki.vercel.app",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "Automotive Battery Sales",
    areaServed: [
      "Cirebon",
      "Kejaksan",
      "Kesambi",
      "Harjamukti",
      "Lemahwungkuk",
      "Pekalipan",
      "Palimanan",
      "Plered",
      "Weru",
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section
        className="contact-area pt-120 pb-90"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <div className="container">
          {/* Header Section */}
          <header className="row justify-content-center mb-60">
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
                  role="text"
                  aria-label="Kategori Toko"
                >
                  TOKO AKI CIREBON TERPERCAYA
                </span>
                <h1
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    marginBottom: "15px",
                    color: "#1e293b",
                    lineHeight: "1.2",
                  }}
                  itemProp="name"
                >
                  Hubungi Toko Aki Sentosa Jaya Mandiri Cirebon
                </h1>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#64748b",
                    lineHeight: "1.6",
                  }}
                  itemProp="description"
                >
                  Toko aki terpercaya di Cirebon sejak 1995 melayani penjualan
                  aki mobil, aki motor, aki truk, dan aki kendaraan berat dengan
                  layanan antar pasang gratis area Cirebon Raya
                </p>
              </div>
            </div>
          </header>

          {/* WhatsApp CTA Card - Priority */}
          <div className="row justify-content-center mb-60">
            <div className="col-xl-10 col-lg-10">
              <article
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
                itemScope
                itemType="https://schema.org/ContactPoint"
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
                  aria-hidden="true"
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
                  aria-hidden="true"
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
                          role="img"
                          aria-label="WhatsApp Icon"
                        >
                          <i
                            className="fab fa-whatsapp"
                            style={{
                              fontSize: "45px",
                              color: "#25D366",
                            }}
                            aria-hidden="true"
                          ></i>
                        </div>

                        <div style={{ textAlign: "left" }}>
                          <h2
                            style={{
                              color: "white",
                              fontSize: "32px",
                              fontWeight: "700",
                              marginBottom: "8px",
                              lineHeight: "1.2",
                            }}
                          >
                            Chat WhatsApp Toko Aki Cirebon
                          </h2>
                          <p
                            style={{
                              color: "rgba(255,255,255,0.95)",
                              fontSize: "16px",
                              marginBottom: "0",
                            }}
                            itemProp="description"
                          >
                            Sentosa Jaya Mandiri Cirebon • Respon Cepat 5 Menit
                            • Gratis Konsultasi Aki
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
                      aria-label="Hubungi via WhatsApp Toko Aki Sentosa Jaya Mandiri Cirebon"
                      type="button"
                    >
                      <i
                        className="fab fa-whatsapp"
                        style={{ fontSize: "22px" }}
                        aria-hidden="true"
                      ></i>
                      Hubungi Sekarang
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>

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
                    <article
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "20px",
                      }}
                      itemScope
                      itemType="https://schema.org/OpeningHoursSpecification"
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
                        role="img"
                        aria-label="Ikon Jam Operasional"
                      >
                        <i
                          className="far fa-clock"
                          style={{ fontSize: "28px", color: "white" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            marginBottom: "12px",
                            color: "#1e293b",
                          }}
                        >
                          Jam Operasional Toko Aki Cirebon
                        </h3>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "#64748b",
                            marginBottom: "6px",
                          }}
                        >
                          <strong>Senin - Jumat:</strong>{" "}
                          <time>08:00 - 17:00 WIB</time>
                        </p>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "#64748b",
                            marginBottom: "6px",
                          }}
                        >
                          <strong>Sabtu:</strong> <time>08:00 - 15:00 WIB</time>
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
                        <p
                          style={{
                            fontSize: "13px",
                            color: "#22c55e",
                            marginTop: "8px",
                            marginBottom: "0",
                            fontWeight: "600",
                          }}
                        >
                          ✓ Layanan Jumper Aki Darurat 24/7
                        </p>
                      </div>
                    </article>
                  </div>

                  {/* Area Layanan */}
                  <div className="col-md-6">
                    <article
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "20px",
                      }}
                      itemScope
                      itemType="https://schema.org/Service"
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
                        role="img"
                        aria-label="Ikon Area Layanan"
                      >
                        <i
                          className="fas fa-map-marked-alt"
                          style={{ fontSize: "28px", color: "white" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            marginBottom: "12px",
                            color: "#1e293b",
                          }}
                          itemProp="serviceType"
                        >
                          Area Layanan Antar Pasang Aki Cirebon
                        </h3>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "#64748b",
                            marginBottom: "12px",
                            lineHeight: "1.6",
                          }}
                          itemProp="areaServed"
                        >
                          Kedawung • Kejaksan • Kesambi • Harjamukti
                          <br />
                          Lemahwungkuk • Pekalipan • Palimanan • Plered
                          <br />
                          Weru • Tengah Tani • Lemah Abang • Sumber
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
                          role="text"
                        >
                          <i
                            className="fas fa-check-circle"
                            aria-hidden="true"
                          ></i>
                          <span>Gratis Ongkir & Pasang Aki</span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO Info Section */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <article
                style={{
                  background:
                    "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                  borderRadius: "24px",
                  padding: "40px",
                  border: "2px solid #dee2e6",
                  textAlign: "center",
                }}
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: "700",
                    color: "#1e293b",
                    marginBottom: "20px",
                  }}
                  itemProp="name"
                >
                  Toko Aki Sentosa Jaya Mandiri Cirebon - Aki Terlengkap Harga
                  Terbaik
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#64748b",
                    lineHeight: "1.8",
                    marginBottom: "0",
                    maxWidth: "850px",
                    margin: "0 auto",
                  }}
                  itemProp="description"
                >
                  <strong>Toko Aki Sentosa Jaya Mandiri</strong> adalah toko aki
                  terpercaya di <strong>Cirebon</strong> yang melayani penjualan{" "}
                  <strong>aki mobil</strong>, <strong>aki motor</strong>,{" "}
                  <strong>aki truk</strong>, dan{" "}
                  <strong>aki kendaraan berat</strong> untuk seluruh wilayah{" "}
                  <strong>Kota Cirebon</strong> dan sekitarnya. Berlokasi
                  strategis di <strong>Lemahwungkuk Cirebon</strong>, kami
                  melayani area <strong>Kejaksan</strong>,{" "}
                  <strong>Kesambi</strong>, <strong>Harjamukti</strong>,{" "}
                  <strong>Pekalipan</strong>, <strong>Kedawung</strong>, dan
                  sepanjang <strong>jalur Pantura Cirebon</strong>. Kami juga
                  menjangkau wilayah kabupaten seperti{" "}
                  <strong>Palimanan</strong>, <strong>Plered</strong>,{" "}
                  <strong>Weru</strong>, <strong>Tengah Tani</strong>,{" "}
                  <strong>Lemah Abang</strong>, <strong>Sumber</strong>,{" "}
                  <strong>Talun</strong>, <strong>Losari</strong>,{" "}
                  <strong>Gebang</strong>, dan <strong>Babakan</strong>. Dengan
                  layanan <strong>antar pasang aki gratis</strong>,{" "}
                  <strong>jumper aki darurat 24 jam</strong>,{" "}
                  <strong>garansi resmi</strong>, dan{" "}
                  <strong>harga aki terbaik di Cirebon</strong>,{" "}
                  <strong>Toko Aki Sentosa Jaya Mandiri Cirebon</strong> menjadi
                  pilihan utama untuk kebutuhan <strong>aki GS Astra</strong>,{" "}
                  <strong>aki Yuasa</strong>, <strong>aki Incoe</strong>,{" "}
                  <strong>aki Aspira</strong>, <strong>aki Motobatt</strong>,
                  dan berbagai merek aki terkemuka lainnya. Hubungi kami
                  sekarang untuk mendapatkan{" "}
                  <strong>aki berkualitas original</strong> dengan{" "}
                  <strong>harga terjangkau</strong>,{" "}
                  <strong>gratis ongkir</strong> untuk wilayah{" "}
                  <strong>Cirebon Raya</strong>, dan{" "}
                  <strong>garansi 1 tahun</strong> untuk semua produk aki.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactStandardArea;
