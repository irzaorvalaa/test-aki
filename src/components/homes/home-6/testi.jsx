// src/components/homes/home-6/testi.jsx (NEUTRAL COLORS + SMALLER SIZE)
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    position: "Pengusaha Transportasi",
    location: "Kejaksan, Cirebon",
    rating: 5,
    text: "Pelayanan sangat memuaskan! Aki GS Astra yang saya beli awet dan berkualitas. Tim Sentosa Jaya Mandiri profesional, antar pasang gratis dan cepat.",
    date: "2 minggu lalu",
    product: "Aki GS Astra NS60L",
  },
  {
    id: 2,
    name: "Rina Wulandari",
    position: "Ibu Rumah Tangga",
    location: "Lemahwungkuk, Cirebon",
    rating: 5,
    text: "Aki motor saya tiba-tiba soak pagi-pagi. Untung ada Sentosa Jaya Mandiri yang buka dari jam 8. Responnya cepat via WhatsApp, pasangnya rapi dan gratis.",
    date: "1 bulan lalu",
    product: "Aki Yuasa YTX7L-BS",
  },
  {
    id: 3,
    name: "Agus Prasetyo",
    position: "Sopir Truk",
    location: "Harjamukti, Cirebon",
    rating: 5,
    text: "Sudah 3 tahun langganan di sini untuk aki truk. Kualitas aki Incoe yang dijual original, garansi jelas, dan harganya paling bersaing se-Cirebon.",
    date: "3 bulan lalu",
    product: "Aki Incoe N150",
  },
  {
    id: 4,
    name: "Siti Nurhaliza",
    position: "Karyawan Swasta",
    location: "Kesambi, Cirebon",
    rating: 5,
    text: "Tempatnya strategis, mudah dicari. Mas-masnya ramah dan informatif banget jelasin perbedaan aki satu sama lain. Dikasih tips maintenance juga biar aki awet.",
    date: "2 bulan lalu",
    product: "Aki Aspira NS40ZL",
  },
];

class Testi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % testimonials.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + testimonials.length) %
        testimonials.length,
    }));
  };

  goToSlide = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { currentIndex } = this.state;
    const currentTesti = testimonials[currentIndex];

    return (
      <section
        className="testimonial-area pt-90 pb-90"
        style={{
          background: "#f8f9fa", // ✅ Neutral light gray
          position: "relative",
          overflow: "hidden",
        }}
        suppressHydrationWarning
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div className="row justify-content-center mb-50">
            <div className="col-xl-7 col-lg-9">
              <div className="text-center">
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 18px",
                    background: "#e9ecef", // ✅ Neutral gray
                    color: "#495057",
                    borderRadius: "50px",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "15px",
                    letterSpacing: "0.5px",
                    border: "1px solid #dee2e6",
                  }}
                >
                  ⭐ TESTIMONI PELANGGAN
                </span>
                <h2
                  style={{
                    fontSize: "32px", // ✅ Smaller
                    fontWeight: "700",
                    color: "#212529", // ✅ Dark neutral
                    marginBottom: "12px",
                    lineHeight: "1.3",
                  }}
                >
                  Apa Kata Pelanggan Kami
                </h2>
                <p
                  style={{
                    fontSize: "15px", // ✅ Smaller
                    color: "#6c757d",
                    lineHeight: "1.6",
                  }}
                >
                  Kepuasan pelanggan adalah prioritas utama kami
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div
                style={{
                  background: "white",
                  borderRadius: "20px", // ✅ Smaller radius
                  padding: "40px 35px", // ✅ Smaller padding
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)", // ✅ Subtle shadow
                  position: "relative",
                  minHeight: "320px", // ✅ Smaller height
                  border: "1px solid #e9ecef",
                }}
              >
                <div className="row align-items-center">
                  {/* Avatar Section */}
                  <div className="col-lg-4 mb-4 mb-lg-0 text-center">
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <div
                        style={{
                          width: "120px", // ✅ Smaller avatar
                          height: "120px",
                          borderRadius: "50%",
                          background: "#495057", // ✅ Neutral dark gray
                          padding: "4px",
                          margin: "0 auto",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            background: "#e9ecef",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "40px", // ✅ Smaller
                            fontWeight: "700",
                            color: "#495057",
                          }}
                        >
                          {currentTesti.name.charAt(0)}
                        </div>
                      </div>

                      {/* Verified Badge */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "5px",
                          right: "5px",
                          width: "35px", // ✅ Smaller badge
                          height: "35px",
                          background: "#28a745", // ✅ Standard green
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(40, 167, 69, 0.3)",
                          border: "3px solid white",
                        }}
                      >
                        <i
                          className="fas fa-check"
                          style={{ color: "white", fontSize: "14px" }}
                        ></i>
                      </div>
                    </div>

                    <div style={{ marginTop: "15px" }}>
                      <h4
                        style={{
                          fontSize: "18px", // ✅ Smaller
                          fontWeight: "700",
                          color: "#212529",
                          marginBottom: "4px",
                        }}
                      >
                        {currentTesti.name}
                      </h4>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#6c757d",
                          marginBottom: "4px",
                        }}
                      >
                        {currentTesti.position}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#adb5bd",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
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
                        gap: "4px",
                        marginBottom: "15px",
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="fas fa-star"
                          style={{
                            fontSize: "16px",
                            color:
                              i < currentTesti.rating ? "#ffc107" : "#e9ecef",
                          }} // ✅ Standard yellow
                        ></i>
                      ))}
                      <span
                        style={{
                          marginLeft: "8px",
                          fontSize: "12px",
                          color: "#6c757d",
                        }}
                      >
                        {currentTesti.date}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "15px", // ✅ Smaller text
                        lineHeight: "1.7",
                        color: "#495057",
                        marginBottom: "18px",
                      }}
                    >
                      "{currentTesti.text}"
                    </p>

                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "#495057", // ✅ Neutral dark
                        color: "white",
                        padding: "8px 16px", // ✅ Smaller padding
                        borderRadius: "50px",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      <i className="fas fa-shopping-cart"></i>
                      <span>{currentTesti.product}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={this.prevSlide}
                  style={{
                    position: "absolute",
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "40px", // ✅ Smaller button
                    height: "40px",
                    borderRadius: "50%",
                    border: "2px solid #dee2e6",
                    background: "white",
                    color: "#495057",
                    fontSize: "16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                  aria-label="Testimoni Sebelumnya"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <button
                  onClick={this.nextSlide}
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "2px solid #dee2e6",
                    background: "white",
                    color: "#495057",
                    fontSize: "16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
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
                  gap: "10px",
                  marginTop: "30px",
                }}
              >
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => this.goToSlide(index)}
                    style={{
                      width: currentIndex === index ? "30px" : "10px", // ✅ Smaller dots
                      height: "10px",
                      borderRadius: "5px",
                      border: "none",
                      background:
                        currentIndex === index ? "#495057" : "#dee2e6",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    aria-label={`Testimoni ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Stats - Smaller & Neutral */}
          <div className="row justify-content-center mt-50">
            <div className="col-lg-9">
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "30px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  border: "1px solid #e9ecef",
                }}
              >
                <div className="row text-center">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div>
                      <h3
                        style={{
                          fontSize: "36px", // ✅ Smaller
                          fontWeight: "700",
                          marginBottom: "8px",
                          color: "#212529",
                        }}
                      >
                        4.9/5
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#6c757d",
                          fontWeight: "500",
                        }}
                      >
                        Rating Pelanggan
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div>
                      <h3
                        style={{
                          fontSize: "36px",
                          fontWeight: "700",
                          marginBottom: "8px",
                          color: "#212529",
                        }}
                      >
                        500+
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#6c757d",
                          fontWeight: "500",
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
                          fontSize: "36px",
                          fontWeight: "700",
                          marginBottom: "8px",
                          color: "#212529",
                        }}
                      >
                        10+
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#6c757d",
                          fontWeight: "500",
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
  }
}

export default Testi;
