import React, { useState, useEffect } from "react";

const brandNames = {
  "amaron-go": "Amaron Go",
  "amaron-onyx": "Amaron Onyx",
  "amaron-hilife": "Amaron Hi-Life",
  "amaron-hilife-pro": "Amaron Hi-Life Pro",
};

// ✅ GRADIENT COLORS PER BRAND
const brandColors = {
  "amaron-go": {
    color: "#84cc16",
    gradient: "linear-gradient(135deg, #84cc16 0%, #a3e635 100%)",
  },
  "amaron-onyx": {
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
  },
  "amaron-hilife": {
    color: "#059669",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
  },
  "amaron-hilife-pro": {
    color: "#047857",
    gradient: "linear-gradient(135deg, #047857 0%, #059669 100%)",
  },
  yuasa: {
    color: "#ff4757",
    gradient: "linear-gradient(135deg, #ff4757 0%, #ff6b6b 100%)",
  },
  gs: {
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
  },
  incoe: {
    color: "#1f2937",
    gradient: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
  },
};

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const brandStyle = brandColors[product.category] || brandColors.gs;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openQuickView = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsModalOpen(true);
  };

  const closeQuickView = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isModalOpen]);

  const handleWhatsAppContact = () => {
    const message = `Halo, saya tertarik dengan produk:\n\n*${
      product.title
    }*\n${product.category?.toUpperCase()}\n\nMohon info harga dan detail produk. Terima kasih!`;
    const phoneNumber = "6281779954236";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    closeQuickView();
  };

  return (
    <>
      <style jsx>{`
        @keyframes backdropFadeIn {
          from {
            background: rgba(0, 0, 0, 0);
            backdrop-filter: blur(0px);
          }
          to {
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(4px);
          }
        }

        @keyframes modalZoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* ✅ CARD DESIGN */}
      <article
        className="product-card"
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "0",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          border: "2px solid #e9ecef",
          transition: "all 0.4s ease",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={openQuickView}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.borderColor = brandStyle.color;
          e.currentTarget.style.boxShadow = `0 15px 40px ${brandStyle.color}25`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "#e9ecef";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* ✅ IMAGE SECTION */}
        <div
          style={{
            background: brandStyle.gradient,
            padding: "30px 25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "200px",
            maxHeight: "220px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              top: "-25px",
              right: "-25px",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "70px",
              height: "70px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              bottom: "-15px",
              left: "-15px",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              maxWidth: "160px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={product.img}
              alt={product.title}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "140px",
                objectFit: "contain",
                borderRadius: "10px",
                filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.15))",
              }}
            />
          </div>

          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              padding: "6px 12px",
              borderRadius: "15px",
              fontSize: "10px",
              fontWeight: "700",
              textTransform: "uppercase",
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              color: "white",
              letterSpacing: "0.5px",
              zIndex: 2,
            }}
          >
            {brandNames[product.category] || product.category}
          </span>
        </div>

        {/* ✅ CONTENT SECTION */}
        <div
          style={{
            padding: "20px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#1e293b",
              marginBottom: "10px",
              lineHeight: "1.3",
              minHeight: "48px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.title}
          </h4>

          {product.description && (
            <p
              style={{
                fontSize: "13px",
                color: "#64748b",
                lineHeight: "1.6",
                marginBottom: "15px",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: "42px",
              }}
            >
              {product.description}
            </p>
          )}

          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "15px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                flex: 1,
                textAlign: "center",
                padding: "10px 6px",
                background: "#f8f9fa",
                borderRadius: "10px",
                border: `2px solid ${brandStyle.color}20`,
              }}
            >
              <i
                className="fas fa-bolt"
                style={{
                  fontSize: "14px",
                  color: brandStyle.color,
                  marginBottom: "4px",
                  display: "block",
                }}
              ></i>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#1e293b",
                }}
              >
                {product.specs.voltage}
              </div>
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                padding: "10px 6px",
                background: "#f8f9fa",
                borderRadius: "10px",
                border: `2px solid ${brandStyle.color}20`,
              }}
            >
              <i
                className="fas fa-battery-full"
                style={{
                  fontSize: "14px",
                  color: brandStyle.color,
                  marginBottom: "4px",
                  display: "block",
                }}
              ></i>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#1e293b",
                }}
              >
                {product.specs.capacity}
              </div>
            </div>
            <div
              style={{
                flex: 1,
                textAlign: "center",
                padding: "10px 6px",
                background: "#f8f9fa",
                borderRadius: "10px",
                border: `2px solid ${brandStyle.color}20`,
              }}
            >
              <i
                className="fas fa-shield-alt"
                style={{
                  fontSize: "14px",
                  color: brandStyle.color,
                  marginBottom: "4px",
                  display: "block",
                }}
              ></i>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#1e293b",
                }}
              >
                {product.specs.warranty}
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(e);
            }}
            style={{
              width: "100%",
              padding: "12px 20px",
              background: brandStyle.gradient,
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "all 0.3s ease",
              boxShadow: `0 4px 15px ${brandStyle.color}30`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 8px 25px ${brandStyle.color}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 4px 15px ${brandStyle.color}30`;
            }}
          >
            <i className="fas fa-eye" style={{ fontSize: "14px" }}></i>
            <span>Lihat Detail</span>
          </button>
        </div>
      </article>

      {/* ✅ MODAL QUICKVIEW */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            display: "flex",
            alignItems: isMobile ? "flex-end" : "flex-start",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
            overflowY: "auto",
            padding: "0",
            animation: "backdropFadeIn 0.3s ease forwards",
          }}
          onClick={closeQuickView}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: isMobile ? "100%" : "1000px",
              margin: isMobile ? "0" : "120px auto 60px",
              padding: isMobile ? "0" : "0 20px",
              opacity: 0,
              transform: isMobile ? "translateY(20px)" : "scale(0.9)",
              animation: isMobile
                ? "modalSlideUp 0.3s ease 0.1s forwards"
                : "modalZoomIn 0.3s ease 0.1s forwards",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: isMobile ? "20px 20px 0 0" : "20px",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
                position: "relative",
                overflow: "hidden",
                maxHeight: isMobile ? "85vh" : "auto",
              }}
            >
              <button
                onClick={closeQuickView}
                style={{
                  position: "absolute",
                  top: isMobile ? "16px" : "24px",
                  right: isMobile ? "16px" : "24px",
                  width: isMobile ? "36px" : "48px",
                  height: isMobile ? "36px" : "48px",
                  background: "white",
                  border: "2px solid #e9ecef",
                  cursor: "pointer",
                  zIndex: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: isMobile ? "18px" : "22px",
                  color: "#64748b",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#ff4757";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = "#ff4757";
                  e.currentTarget.style.transform = "rotate(90deg) scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.color = "#64748b";
                  e.currentTarget.style.borderColor = "#e9ecef";
                  e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                }}
              >
                <i className="fas fa-times"></i>
              </button>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "45% 55%",
                }}
              >
                {/* LEFT: IMAGE */}
                <div
                  style={{
                    background: brandStyle.gradient,
                    padding: isMobile ? "40px 30px 30px" : "60px 40px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: isMobile ? "auto" : "500px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "150px",
                      height: "150px",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "50%",
                      top: "-40px",
                      right: "-40px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      width: "100px",
                      height: "100px",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "50%",
                      bottom: "-30px",
                      left: "-30px",
                    }}
                  />

                  {/* LEFT: IMAGE */}
                  <div
                    style={{
                      background: brandStyle.gradient,
                      padding: isMobile ? "40px 30px 30px" : "60px 40px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: isMobile ? "auto" : "500px",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "150px",
                        height: "150px",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50%",
                        top: "-40px",
                        right: "-40px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        width: "100px",
                        height: "100px",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50%",
                        bottom: "-30px",
                        left: "-30px",
                      }}
                    />

                    {/* LANGSUNG KE PRODUCT IMAGE - TANPA LOGO */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: isMobile ? "220px" : "320px",
                        zIndex: 1,
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

                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                        }}
                      >
                        <span
                          style={{
                            padding: isMobile ? "8px 14px" : "10px 18px",
                            borderRadius: "20px",
                            fontSize: isMobile ? "11px" : "12px",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            background: "rgba(255, 255, 255, 0.25)",
                            backdropFilter: "blur(10px)",
                            color: "white",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                            letterSpacing: "0.5px",
                            display: "inline-block",
                          }}
                        >
                          {brandNames[product.category] || product.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: CONTENT */}
                <div
                  style={{
                    padding: isMobile ? "30px 25px 40px" : "60px 50px",
                    overflowY: "auto",
                    maxHeight: isMobile ? "50vh" : "600px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: isMobile ? "20px" : "28px",
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: isMobile ? "18px" : "24px",
                      lineHeight: "1.3",
                      paddingRight: isMobile ? "35px" : "50px",
                    }}
                  >
                    {product.title}
                  </h2>

                  {/* ✅ SPECS WITH 2 COLUMNS */}
                  {product.specs && (
                    <div
                      style={{
                        background: brandStyle.gradient,
                        padding: isMobile ? "20px" : "28px",
                        borderRadius: isMobile ? "14px" : "18px",
                        marginBottom: isMobile ? "20px" : "28px",
                        boxShadow: `0 10px 30px ${brandStyle.color}30`,
                      }}
                    >
                      <h5
                        style={{
                          color: "white",
                          marginBottom: isMobile ? "14px" : "20px",
                          fontSize: isMobile ? "12px" : "14px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "1.2px",
                        }}
                      >
                        Spesifikasi:
                      </h5>

                      {/* ✅ 2 COLUMN LAYOUT */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: product.substitute_type
                            ? "1fr 1fr"
                            : "1fr",
                          gap: isMobile ? "16px" : "20px",
                        }}
                      >
                        {/* KOLOM KIRI */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: isMobile ? "12px" : "16px",
                          }}
                        >
                          {/* Kapasitas */}
                          {product.specs.capacity && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: isMobile ? "12px" : "16px",
                              }}
                            >
                              <div
                                style={{
                                  width: isMobile ? "36px" : "42px",
                                  height: isMobile ? "36px" : "42px",
                                  background: "rgba(255, 255, 255, 0.2)",
                                  borderRadius: "10px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <i
                                  className="fas fa-battery-full"
                                  style={{
                                    fontSize: isMobile ? "16px" : "20px",
                                    color: "white",
                                  }}
                                ></i>
                              </div>
                              <div style={{ flex: 1 }}>
                                <div
                                  style={{
                                    fontSize: isMobile ? "10px" : "11px",
                                    color: "rgba(255, 255, 255, 0.8)",
                                    marginBottom: "3px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Kapasitas
                                </div>
                                <div
                                  style={{
                                    fontSize: isMobile ? "15px" : "17px",
                                    fontWeight: "700",
                                    color: "white",
                                  }}
                                >
                                  {product.specs.capacity}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Voltase */}
                          {product.specs.voltage && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: isMobile ? "12px" : "16px",
                              }}
                            >
                              <div
                                style={{
                                  width: isMobile ? "36px" : "42px",
                                  height: isMobile ? "36px" : "42px",
                                  background: "rgba(255, 255, 255, 0.2)",
                                  borderRadius: "10px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <i
                                  className="fas fa-bolt"
                                  style={{
                                    fontSize: isMobile ? "16px" : "20px",
                                    color: "white",
                                  }}
                                ></i>
                              </div>
                              <div style={{ flex: 1 }}>
                                <div
                                  style={{
                                    fontSize: isMobile ? "10px" : "11px",
                                    color: "rgba(255, 255, 255, 0.8)",
                                    marginBottom: "3px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Voltase
                                </div>
                                <div
                                  style={{
                                    fontSize: isMobile ? "15px" : "17px",
                                    fontWeight: "700",
                                    color: "white",
                                  }}
                                >
                                  {product.specs.voltage}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Garansi */}
                          {product.specs.warranty && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: isMobile ? "12px" : "16px",
                              }}
                            >
                              <div
                                style={{
                                  width: isMobile ? "36px" : "42px",
                                  height: isMobile ? "36px" : "42px",
                                  background: "rgba(255, 255, 255, 0.2)",
                                  borderRadius: "10px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <i
                                  className="fas fa-shield-alt"
                                  style={{
                                    fontSize: isMobile ? "16px" : "20px",
                                    color: "white",
                                  }}
                                ></i>
                              </div>
                              <div style={{ flex: 1 }}>
                                <div
                                  style={{
                                    fontSize: isMobile ? "10px" : "11px",
                                    color: "rgba(255, 255, 255, 0.8)",
                                    marginBottom: "3px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Garansi
                                </div>
                                <div
                                  style={{
                                    fontSize: isMobile ? "15px" : "17px",
                                    fontWeight: "700",
                                    color: "white",
                                  }}
                                >
                                  {product.specs.warranty}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* KOLOM KANAN - TIPE ALTERNATIF */}
                        {product.substitute_type && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: isMobile ? "16px" : "20px",
                              background: "rgba(255, 255, 255, 0.1)",
                              borderRadius: "12px",
                              border: "2px dashed rgba(255, 255, 255, 0.3)",
                            }}
                          >
                            <div style={{ textAlign: "center" }}>
                              <i
                                className="fas fa-code-branch"
                                style={{
                                  fontSize: isMobile ? "24px" : "32px",
                                  color: "white",
                                  marginBottom: "12px",
                                  display: "block",
                                  opacity: 0.9,
                                }}
                              ></i>
                              <div
                                style={{
                                  fontSize: isMobile ? "10px" : "11px",
                                  color: "rgba(255, 255, 255, 0.8)",
                                  marginBottom: "8px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.5px",
                                  fontWeight: "600",
                                }}
                              >
                                Tipe Alternatif
                              </div>
                              <div
                                style={{
                                  fontSize: isMobile ? "16px" : "19px",
                                  fontWeight: "700",
                                  color: "white",
                                  lineHeight: "1.3",
                                }}
                              >
                                {product.substitute_type}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {product.description && (
                    <p
                      style={{
                        color: "#64748b",
                        lineHeight: 1.7,
                        marginBottom: isMobile ? "20px" : "28px",
                        fontSize: isMobile ? "14px" : "15px",
                      }}
                    >
                      {product.description}
                    </p>
                  )}

                  <button
                    onClick={handleWhatsAppContact}
                    style={{
                      width: "100%",
                      padding: isMobile ? "14px 24px" : "18px 32px",
                      background:
                        "linear-gradient(135deg, #25D366 0%, #1fb855 100%)",
                      color: "white",
                      border: "none",
                      borderRadius: isMobile ? "12px" : "14px",
                      fontSize: isMobile ? "15px" : "17px",
                      fontWeight: "700",
                      cursor: "pointer",
                      marginBottom: isMobile ? "20px" : "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: isMobile ? "10px" : "14px",
                      transition: "all 0.3s ease",
                      boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 30px rgba(37, 211, 102, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(37, 211, 102, 0.35)";
                    }}
                  >
                    <i
                      className="fab fa-whatsapp"
                      style={{ fontSize: isMobile ? "20px" : "24px" }}
                    ></i>
                    Hubungi Kami via WhatsApp
                  </button>

                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                      padding: isMobile ? "18px" : "24px",
                      borderRadius: isMobile ? "12px" : "14px",
                      border: "2px solid #dee2e6",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: isMobile ? "10px" : "14px",
                        padding: isMobile ? "8px 0" : "10px 0",
                      }}
                    >
                      <div
                        style={{
                          width: isMobile ? "32px" : "38px",
                          height: isMobile ? "32px" : "38px",
                          background: brandStyle.gradient,
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          flexShrink: 0,
                          boxShadow: `0 4px 12px ${brandStyle.color}30`,
                        }}
                      >
                        <i
                          className="fas fa-check-circle"
                          style={{ fontSize: isMobile ? "14px" : "18px" }}
                        ></i>
                      </div>
                      <span
                        style={{
                          fontSize: isMobile ? "13px" : "15px",
                          color: "#1e293b",
                          fontWeight: "600",
                        }}
                      >
                        Produk Original Bergaransi
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: isMobile ? "10px" : "14px",
                        padding: isMobile ? "8px 0" : "10px 0",
                      }}
                    >
                      <div
                        style={{
                          width: isMobile ? "32px" : "38px",
                          height: isMobile ? "32px" : "38px",
                          background: brandStyle.gradient,
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          flexShrink: 0,
                          boxShadow: `0 4px 12px ${brandStyle.color}30`,
                        }}
                      >
                        <i
                          className="fas fa-truck"
                          style={{ fontSize: isMobile ? "14px" : "18px" }}
                        ></i>
                      </div>
                      <span
                        style={{
                          fontSize: isMobile ? "13px" : "15px",
                          color: "#1e293b",
                          fontWeight: "600",
                        }}
                      >
                        Gratis Ongkir Area Cirebon
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: isMobile ? "10px" : "14px",
                        padding: isMobile ? "8px 0" : "10px 0",
                      }}
                    >
                      <div
                        style={{
                          width: isMobile ? "32px" : "38px",
                          height: isMobile ? "32px" : "38px",
                          background: brandStyle.gradient,
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          flexShrink: 0,
                          boxShadow: `0 4px 12px ${brandStyle.color}30`,
                        }}
                      >
                        <i
                          className="fas fa-tools"
                          style={{ fontSize: isMobile ? "14px" : "18px" }}
                        ></i>
                      </div>
                      <span
                        style={{
                          fontSize: isMobile ? "13px" : "15px",
                          color: "#1e293b",
                          fontWeight: "600",
                        }}
                      >
                        Gratis Pasang & Instalasi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
