// src/components/homes/home-6/testi.jsx (COMPLETE - NO EXTRA FILE NEEDED)
"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    position: "Pengusaha Transportasi",
    location: "Kejaksan, Cirebon",
    rating: 5,
    text: "Pelayanan sangat memuaskan! Aki GS Astra yang saya beli awet dan berkualitas. Tim Sentosa Jaya Mandiri profesional, antar pasang gratis dan cepat. Harga juga kompetitif. Highly recommended untuk yang cari toko aki terpercaya di Cirebon!",
    date: "2 minggu lalu",
    product: "Aki GS Astra NS60L",
  },
  {
    id: 2,
    name: "Rina Wulandari",
    position: "Ibu Rumah Tangga",
    location: "Lemahwungkuk, Cirebon",
    rating: 5,
    text: "Aki motor saya tiba-tiba soak pagi-pagi. Untung ada Sentosa Jaya Mandiri yang buka dari jam 8. Responnya cepat via WhatsApp, langsung dikasih rekomendasi aki Yuasa yang cocok. Pasangnya rapi dan gratis. Puas banget!",
    date: "1 bulan lalu",
    product: "Aki Yuasa YTX7L-BS",
  },
  {
    id: 3,
    name: "Agus Prasetyo",
    position: "Sopir Truk",
    location: "Harjamukti, Cirebon",
    rating: 5,
    text: "Sudah 3 tahun langganan di sini untuk aki truk. Kualitas aki Incoe yang dijual original, garansi jelas, dan harganya paling bersaing se-Cirebon. Service jumper aki 24 jam juga sangat membantu ketika darurat di jalan.",
    date: "3 bulan lalu",
    product: "Aki Incoe N150",
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    position: "Karyawan Swasta",
    location: "Kesambi, Cirebon",
    rating: 5,
    text: "Tempatnya strategis, mudah dicari. Mas-masnya ramah dan informatif banget jelasin perbedaan aki satu sama lain. Dikasih tips maintenance juga biar aki awet. Next time pasti kesini lagi kalau butuh aki. Mantap!",
    date: "2 bulan lalu",
    product: "Aki Aspira NS40ZL",
  },
];

const Testi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!isMounted) {
    return (
      <section
        className="testimonial-area pt-120 pb-120"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "600px",
        }}
      />
    );
  }

  const currentTesti = testimonials[currentIndex];

  return (
    <section
      className="testimonial-area pt-120 pb-120"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          top: "-200px",
          right: "-100px",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          bottom: "-150px",
          left: "-80px",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="row justify-content-center mb-60">
          <div className="col-xl-8 col-lg-10">
            <div className="text-center">
              <span
                style={{
                  display: "inline-block",
                  padding: "10px 24px",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  borderRadius: "50px",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "20px",
                  letterSpacing: "1px",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                ⭐ TESTIMONI PELANGGAN
              </span>
              <h2
                style={{
                  fontSize: "48px",
                  fontWeight: "800",
                  color: "white",
                  marginBottom: "15px",
                  lineHeight: "1.2",
                }}
              >
                Apa Kata Pelanggan Kami
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: "1.6",
                }}
              >
                Kepuasan pelanggan adalah prioritas utama kami di Toko Aki
                Sentosa Jaya Mandiri Cirebon
              </p>
            </div>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11">
            <div
              style={{
                background: "white",
                borderRadius: "32px",
                padding: "60px 50px",
                boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
                position: "relative",
                minHeight: "450px",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "40px",
                  fontSize: "80px",
                  color: "#667eea",
                  opacity: "0.15",
                  fontFamily: "Georgia, serif",
                  lineHeight: "1",
                }}
                aria-hidden="true"
              >
                "
              </div>

              <div className="row align-items-center">
                {/* Avatar Section */}
                <div className="col-lg-4 mb-4 mb-lg-0 text-center">
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        padding: "6px",
                        margin: "0 auto",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          background: "#f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "60px",
                          fontWeight: "700",
                          color: "#667eea",
                        }}
                      >
                        {currentTesti.name.charAt(0)}
                      </div>
                    </div>

                    {/* Verified Badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        width: "50px",
                        height: "50px",
                        background: "#22c55e",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 15px rgba(34, 197, 94, 0.4)",
                        border: "4px solid white",
                      }}
                      title="Pembeli Terverifikasi"
                    >
                      <i
                        className="fas fa-check"
                        style={{ color: "white", fontSize: "22px" }}
                      ></i>
                    </div>
                  </div>

                  <div style={{ marginTop: "25px" }}>
                    <h4
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "#1e293b",
                        marginBottom: "5px",
                      }}
                    >
                      {currentTesti.name}
                    </h4>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#64748b",
                        marginBottom: "5px",
                      }}
                    >
                      {currentTesti.position}
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#94a3b8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                      }}
                    >
                      <i className="fas fa-map-marker-alt"></i>
                      {currentTesti.location}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="col-lg-8">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      marginBottom: "20px",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className="fas fa-star"
                        style={{
                          fontSize: "24px",
                          color:
                            i < currentTesti.rating ? "#fbbf24" : "#e5e7eb",
                        }}
                      ></i>
                    ))}
                    <span
                      style={{
                        marginLeft: "10px",
                        fontSize: "14px",
                        color: "#64748b",
                      }}
                    >
                      {currentTesti.date}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.8",
                      color: "#334155",
                      marginBottom: "25px",
                      fontStyle: "italic",
                    }}
                  >
                    "{currentTesti.text}"
                  </p>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      padding: "12px 20px",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i>
                    <span>Produk: {currentTesti.product}</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <button
                onClick={prevSlide}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "none",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                }}
                aria-label="Testimoni Sebelumnya"
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <button
                onClick={nextSlide}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  border: "none",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                }}
                aria-label="Testimoni Selanjutnya"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            {/* Dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                marginTop: "40px",
              }}
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: currentIndex === index ? "40px" : "12px",
                    height: "12px",
                    borderRadius: "6px",
                    border: "none",
                    background:
                      currentIndex === index
                        ? "white"
                        : "rgba(255,255,255,0.4)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow:
                      currentIndex === index
                        ? "0 4px 15px rgba(255,255,255,0.5)"
                        : "none",
                  }}
                  aria-label={`Testimoni ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Stats */}
        // Stats Section - UPDATE ONLY THIS PART (di bagian bawah component)
        <div className="row justify-content-center mt-60">
          <div className="col-lg-10">
            <div
              style={{
                background: "rgba(255,255,255,0.95)", // ✅ CHANGE: Lebih solid white
                borderRadius: "24px",
                padding: "40px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)", // ✅ ADD: Better shadow
              }}
            >
              <div className="row text-center">
                <div className="col-md-4 mb-4 mb-md-0">
                  <div>
                    <h3
                      style={{
                        fontSize: "48px",
                        fontWeight: "800",
                        marginBottom: "10px",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // ✅ ADD: Gradient text
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      4.9/5
                    </h3>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#1e293b", // ✅ CHANGE: Dark text for contrast
                        fontWeight: "600",
                      }}
                    >
                      Rating Pelanggan
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                  <div>
                    <h3
                      style={{
                        fontSize: "48px",
                        fontWeight: "800",
                        marginBottom: "10px",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      500+
                    </h3>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#1e293b",
                        fontWeight: "600",
                      }}
                    >
                      Pelanggan Puas
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <h3
                      style={{
                        fontSize: "48px",
                        fontWeight: "800",
                        marginBottom: "10px",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      10+
                    </h3>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#1e293b",
                        fontWeight: "600",
                      }}
                    >
                      Tahun Pengalaman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testi;
