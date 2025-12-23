import React, { useState, useEffect, useRef } from "react";

// ✅ 1. CONSTANTS FIRST
const brandNames = {
  "amaron-go": "Amaron Go",
  "amaron-onyx": "Amaron Onyx",
  "amaron-hilife": "Amaron Hi-Life",
  "amaron-hilife-pro": "Amaron Hi-Life Pro",
};

const brandColors = {
  "amaron-go": "#84cc16",
  "amaron-onyx": "#10b981",
  "amaron-hilife": "#059669",
  "amaron-hilife-pro": "#047857",
  yuasa: "#ff4757",
  gs: "#f59e0b",
  incoe: "#1f2937",
};

// ✅ 2. COMPONENT SECOND
const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const scrollPositionRef = useRef(0);

  const brandColor = brandColors[product.category] || brandColors.gs;

  const getBrandGradient = (color) => {
    return `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`;
  };

  useEffect(() => {
    const updateViewport = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.visualViewport?.height || window.innerHeight); // ✅ Use visualViewport
    };

    updateViewport();

    // ✅ Listen to both resize and visualViewport changes
    window.addEventListener("resize", updateViewport);
    window.visualViewport?.addEventListener("resize", updateViewport);
    window.visualViewport?.addEventListener("scroll", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.visualViewport?.removeEventListener("resize", updateViewport);
      window.visualViewport?.removeEventListener("scroll", updateViewport);
    };
  }, []);

  const openQuickView = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    scrollPositionRef.current = window.scrollY;
    setIsModalOpen(true);
  };

  const closeQuickView = () => {
    setIsModalOpen(false);
    requestAnimationFrame(() => {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: "instant",
      });
    });
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
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

  const getResponsiveValue = (values) => {
    if (viewportWidth < 375) return values.xs;
    if (viewportWidth < 576) return values.sm;
    if (viewportWidth < 768) return values.md;
    if (viewportWidth < 1024) return values.lg;
    return values.xl;
  };

  const isMobile = viewportWidth < 768;
  const isTablet = viewportWidth >= 768 && viewportWidth < 1024;

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
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-content::-webkit-scrollbar {
          width: 0px;
        }
        .modal-content {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        input,
        select,
        textarea {
          font-size: 16px;
        }

        @supports (padding: max(0px)) {
          .modal-safe-area {
            padding-left: max(20px, env(safe-area-inset-left));
            padding-right: max(20px, env(safe-area-inset-right));
            padding-bottom: max(32px, env(safe-area-inset-bottom));
          }
        }

        /* ✅ iOS Safari Close Button Fix */
        @supports (-webkit-touch-callout: none) {
          button[data-close-modal] {
            position: fixed !important;
            top: 16px !important;
            right: 16px !important;
            z-index: 999999999 !important;
            transform: translate3d(0, 0, 999px) !important;
          }

          /* ✅ Account for notch */
          @supports (top: env(safe-area-inset-top)) {
            button[data-close-modal] {
              top: calc(env(safe-area-inset-top) + 16px) !important;
              right: calc(env(safe-area-inset-right) + 16px) !important;
            }
          }
        }

        /* ✅ Force button to stay on top */
        button[data-close-modal] {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
      `}</style>

      {/* CARD DESIGN */}
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
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.borderColor = brandColor;
            e.currentTarget.style.boxShadow = `0 15px 40px ${brandColor}25`;
          }
        }}
        onMouseLeave={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "#e9ecef";
            e.currentTarget.style.boxShadow = "none";
          }
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #f1f3f5 0%, #e9ecef 100%)",
            padding: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "260px",
            maxHeight: "260px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
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
                height: "100%",
                objectFit: "cover",
                borderRadius: "0",
                filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.15))",
              }}
            />
          </div>

          <span
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              padding: "6px 12px",
              borderRadius: "15px",
              fontSize: "10px",
              fontWeight: "700",
              textTransform: "uppercase",
              background: brandColor,
              color: "white",
              letterSpacing: "0.5px",
              zIndex: 2,
              boxShadow: `0 4px 12px ${brandColor}40`,
            }}
          >
            {brandNames[product.category] || product.category}
          </span>
        </div>

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
              paddingLeft: "12px",
              borderLeft: `4px solid ${brandColor}`,
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
                border: `2px solid ${brandColor}20`,
              }}
            >
              <i
                className="fas fa-bolt"
                style={{
                  fontSize: "14px",
                  color: brandColor,
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
                border: `2px solid ${brandColor}20`,
              }}
            >
              <i
                className="fas fa-battery-full"
                style={{
                  fontSize: "14px",
                  color: brandColor,
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
                border: `2px solid ${brandColor}20`,
              }}
            >
              <i
                className="fas fa-shield-alt"
                style={{
                  fontSize: "14px",
                  color: brandColor,
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
              background: getBrandGradient(brandColor),
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
              boxShadow: `0 4px 15px ${brandColor}30`,
            }}
          >
            <i className="fas fa-eye" style={{ fontSize: "14px" }}></i>
            <span>Lihat Detail</span>
          </button>
        </div>
      </article>

      {/* MODAL */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999999,
            display: "flex",
            alignItems: isMobile ? "flex-end" : "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
            overflowY: "hidden",
            overflowX: "hidden",
            padding: "0",
            animation: "backdropFadeIn 0.3s ease forwards",
          }}
          onClick={closeQuickView}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: isMobile ? "100%" : isTablet ? "90%" : "900px",
              margin: "0",
              opacity: 0,
              transform: isMobile ? "translateY(100px)" : "scale(0.95)",
              animation: isMobile
                ? "modalSlideUp 0.4s ease 0.1s forwards"
                : "modalZoomIn 0.3s ease 0.1s forwards",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: isMobile ? "24px 24px 0 0" : "24px",
                boxShadow: "0 -10px 40px rgba(0, 0, 0, 0.3)",
                position: "relative",
                overflow: "hidden",
                maxHeight: getResponsiveValue({
                  xs: "92vh",
                  sm: "90vh",
                  md: "90vh",
                  lg: "88vh",
                  xl: "85vh",
                }),
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* ✅ STICKY HEADER - 60px Padding Top */}
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 1000,
                  background: "white",
                  borderRadius: isMobile ? "24px 24px 0 0" : "24px 24px 0 0",
                  paddingTop: isMobile ? "60px" : "0",
                  paddingBottom: isMobile ? "12px" : "0",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                {/* Pull Bar */}
                {isMobile && (
                  <div
                    onClick={closeQuickView}
                    style={{
                      padding: "12px 0 8px",
                      display: "flex",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "4px",
                        background: "#cbd5e1",
                        borderRadius: "2px",
                      }}
                    />
                  </div>
                )}

                {/* ✅ Close Button - Always 16px from Container Top */}
                <button
                  onClick={closeQuickView}
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "44px",
                    height: "44px",
                    background: "#ff4757",
                    border: "2px solid #ff4757",
                    cursor: "pointer",
                    zIndex: 1001,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "white",
                    boxShadow: "0 6px 24px rgba(255, 71, 87, 0.6)",
                    borderRadius: "50%",
                    transition: "all 0.2s ease",
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.background = "#ee5a6f";
                    e.currentTarget.style.transform = "scale(0.9)";
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.background = "#ff4757";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* SCROLLABLE CONTENT */}
              <div
                className="modal-content modal-safe-area"
                style={{
                  display: "block",
                  maxHeight: getResponsiveValue({
                    xs: "calc(92vh - 140px)", // ✅ Adjust for header padding
                    sm: "calc(90vh - 140px)",
                    md: "calc(90vh - 140px)",
                    lg: "calc(88vh - 60px)",
                    xl: "85vh",
                  }),
                  overflowY: "auto",
                  overflowX: "hidden",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {/* IMAGE SECTION */}
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                    padding: getResponsiveValue({
                      xs: "16px 16px 24px",
                      sm: "18px 18px 26px",
                      md: "20px 20px 30px",
                      lg: "40px 40px 50px",
                      xl: "60px 40px",
                    }),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    minHeight: getResponsiveValue({
                      xs: "220px",
                      sm: "240px",
                      md: "260px",
                      lg: "400px",
                      xl: "500px",
                    }),
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "120px",
                      height: "120px",
                      background: "rgba(255, 255, 255, 0.4)",
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
                      background: "rgba(255, 255, 255, 0.4)",
                      borderRadius: "50%",
                      bottom: "-20px",
                      left: "-20px",
                    }}
                  />

                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: getResponsiveValue({
                        xs: "85%",
                        sm: "88%",
                        md: "90%",
                        lg: "80%",
                        xl: "320px",
                      }),
                      zIndex: 1,
                    }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                        borderRadius: "12px",
                        filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))",
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
                          padding: getResponsiveValue({
                            xs: "6px 10px",
                            sm: "7px 12px",
                            md: "8px 14px",
                            lg: "9px 16px",
                            xl: "10px 18px",
                          }),
                          borderRadius: "20px",
                          fontSize: getResponsiveValue({
                            xs: "9px",
                            sm: "10px",
                            md: "11px",
                            lg: "11px",
                            xl: "12px",
                          }),
                          fontWeight: "700",
                          textTransform: "uppercase",
                          background: brandColor,
                          color: "white",
                          boxShadow: `0 4px 15px ${brandColor}40`,
                          letterSpacing: "0.5px",
                          display: "inline-block",
                        }}
                      >
                        {brandNames[product.category] || product.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div
                  style={{
                    padding: getResponsiveValue({
                      xs: "16px 16px 32px",
                      sm: "18px 18px 36px",
                      md: "20px 20px 40px",
                      lg: "30px 30px 50px",
                      xl: "50px 40px",
                    }),
                    background: "white",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <h2
                    style={{
                      fontSize: getResponsiveValue({
                        xs: "18px",
                        sm: "19px",
                        md: "20px",
                        lg: "24px",
                        xl: "28px",
                      }),
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: getResponsiveValue({
                        xs: "16px",
                        sm: "18px",
                        md: "20px",
                        lg: "20px",
                        xl: "20px",
                      }),
                      lineHeight: "1.3",
                      paddingLeft: "14px",
                      borderLeft: `4px solid ${brandColor}`,
                      wordWrap: "break-word",
                    }}
                  >
                    {product.title}
                  </h2>

                  {product.specs && (
                    <div
                      style={{
                        background: "white",
                        padding: getResponsiveValue({
                          xs: "14px",
                          sm: "15px",
                          md: "16px",
                          lg: "20px",
                          xl: "24px",
                        }),
                        borderRadius: "16px",
                        marginBottom: getResponsiveValue({
                          xs: "16px",
                          sm: "18px",
                          md: "20px",
                          lg: "20px",
                          xl: "20px",
                        }),
                        border: `2px solid ${brandColor}`,
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: brandColor,
                        }}
                      />

                      <h5
                        style={{
                          color: "#1e293b",
                          marginBottom: getResponsiveValue({
                            xs: "12px",
                            sm: "13px",
                            md: "14px",
                            lg: "14px",
                            xl: "14px",
                          }),
                          fontSize: getResponsiveValue({
                            xs: "11px",
                            sm: "11px",
                            md: "12px",
                            lg: "12px",
                            xl: "12px",
                          }),
                          fontWeight: "700",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        Spesifikasi:
                      </h5>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: product.substitute_type
                            ? "1fr 1fr"
                            : "1fr",
                          gap: getResponsiveValue({
                            xs: "8px",
                            sm: "9px",
                            md: "10px",
                            lg: "12px",
                            xl: "14px",
                          }),
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: getResponsiveValue({
                              xs: "6px",
                              sm: "7px",
                              md: "8px",
                              lg: "10px",
                              xl: "12px",
                            }),
                          }}
                        >
                          {product.specs.capacity && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: getResponsiveValue({
                                  xs: "8px",
                                  sm: "9px",
                                  md: "10px",
                                  lg: "10px",
                                  xl: "12px",
                                }),
                                padding: getResponsiveValue({
                                  xs: "8px",
                                  sm: "9px",
                                  md: "10px",
                                  lg: "10px",
                                  xl: "12px",
                                }),
                                background: "#f8f9fa",
                                borderRadius: "10px",
                              }}
                            >
                              <div
                                style={{
                                  width: getResponsiveValue({
                                    xs: "32px",
                                    sm: "34px",
                                    md: "36px",
                                    lg: "36px",
                                    xl: "40px",
                                  }),
                                  height: getResponsiveValue({
                                    xs: "32px",
                                    sm: "34px",
                                    md: "36px",
                                    lg: "36px",
                                    xl: "40px",
                                  }),
                                  background: `${brandColor}15`,
                                  borderRadius: "8px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <i
                                  className="fas fa-battery-full"
                                  style={{
                                    fontSize: getResponsiveValue({
                                      xs: "14px",
                                      sm: "15px",
                                      md: "16px",
                                      lg: "16px",
                                      xl: "18px",
                                    }),
                                    color: brandColor,
                                  }}
                                ></i>
                              </div>
                              <div style={{ minWidth: 0, flex: 1 }}>
                                <div
                                  style={{
                                    fontSize: getResponsiveValue({
                                      xs: "8px",
                                      sm: "8px",
                                      md: "9px",
                                      lg: "9px",
                                      xl: "10px",
                                    }),
                                    color: "#64748b",
                                    marginBottom: "2px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Kapasitas
                                </div>
                                <div
                                  style={{
                                    fontSize: getResponsiveValue({
                                      xs: "13px",
                                      sm: "14px",
                                      md: "15px",
                                      lg: "15px",
                                      xl: "16px",
                                    }),
                                    fontWeight: "700",
                                    color: "#1e293b",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {product.specs.capacity}
                                </div>
                              </div>
                            </div>
                          )}

                          {product.specs.voltage && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: getResponsiveValue({
                                  xs: "8px",
                                  sm: "9px",
                                  md: "10px",
                                  lg: "10px",
                                  xl: "12px",
                                }),
                                padding: getResponsiveValue({
                                  xs: "8px",
                                  sm: "9px",
                                  md: "10px",
                                  lg: "10px",
                                  xl: "12px",
                                }),
                                background: "#f8f9fa",
                                borderRadius: "10px",
                              }}
                            >
                              <div
                                style={{
                                  width: getResponsiveValue({
                                    xs: "32px",
                                    sm: "34px",
                                    md: "36px",
                                    lg: "36px",
                                    xl: "40px",
                                  }),
                                  height: getResponsiveValue({
                                    xs: "32px",
                                    sm: "34px",
                                    md: "36px",
                                    lg: "36px",
                                    xl: "40px",
                                  }),
                                  background: `${brandColor}15`,
                                  borderRadius: "8px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <i
                                  className="fas fa-bolt"
                                  style={{
                                    fontSize: getResponsiveValue({
                                      xs: "14px",
                                      sm: "15px",
                                      md: "16px",
                                      lg: "16px",
                                      xl: "18px",
                                    }),
                                    color: brandColor,
                                  }}
                                ></i>
                              </div>
                              <div style={{ minWidth: 0, flex: 1 }}>
                                <div
                                  style={{
                                    fontSize: getResponsiveValue({
                                      xs: "8px",
                                      sm: "8px",
                                      md: "9px",
                                      lg: "9px",
                                      xl: "10px",
                                    }),
                                    color: "#64748b",
                                    marginBottom: "2px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Voltase
                                </div>
                                <div
                                  style={{
                                    fontSize: getResponsiveValue({
                                      xs: "13px",
                                      sm: "14px",
                                      md: "15px",
                                      lg: "15px",
                                      xl: "16px",
                                    }),
                                    fontWeight: "700",
                                    color: "#1e293b",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {product.specs.voltage}
                                </div>
                              </div>
                            </div>
                          )}

                          {product.specs.warranty && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: getResponsiveValue({
                                  xs: "8px",
                                  sm: "9px",
                                  md: "10px",
                                  lg: "10px",
                                  xl: "12px",
                                }),
                                padding: getResponsiveValue({
                                  xs: "8px",
                                  sm: "9px",
                                  md: "10px",
                                  lg: "10px",
                                  xl: "12px",
                                }),
                                background: "#f8f9fa",
                                borderRadius: "10px",
                              }}
                            >
                              <div
                                style={{
                                  width: getResponsiveValue({
                                    xs: "32px",
                                    sm: "34px",
                                    md: "36px",
                                    lg: "36px",
                                    xl: "40px",
                                  }),
                                  height: getResponsiveValue({
                                    xs: "32px",
                                    sm: "34px",
                                    md: "36px",
                                    lg: "36px",
                                    xl: "40px",
                                  }),
                                  background: `${brandColor}15`,
                                  borderRadius: "8px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <i
                                  className="fas fa-shield-alt"
                                  style={{
                                    fontSize: getResponsiveValue({
                                      xs: "14px",
                                      sm: "15px",
                                      md: "16px",
                                      lg: "16px",
                                      xl: "18px",
                                    }),
                                    color: brandColor,
                                  }}
                                ></i>
                              </div>
                              <div style={{ minWidth: 0, flex: 1 }}>
                                <div
                                  style={{
                                    fontSize: getResponsiveValue({
                                      xs: "8px",
                                      sm: "8px",
                                      md: "9px",
                                      lg: "9px",
                                      xl: "10px",
                                    }),
                                    color: "#64748b",
                                    marginBottom: "2px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Garansi
                                </div>
                                <div
                                  style={{
                                    fontSize: getResponsiveValue({
                                      xs: "13px",
                                      sm: "14px",
                                      md: "15px",
                                      lg: "15px",
                                      xl: "16px",
                                    }),
                                    fontWeight: "700",
                                    color: "#1e293b",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {product.specs.warranty}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {product.substitute_type && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: getResponsiveValue({
                                xs: "10px",
                                sm: "11px",
                                md: "12px",
                                lg: "14px",
                                xl: "16px",
                              }),
                              background: `${brandColor}08`,
                              borderRadius: "12px",
                              border: `2px dashed ${brandColor}40`,
                            }}
                          >
                            <div style={{ textAlign: "center" }}>
                              <i
                                className="fas fa-code-branch"
                                style={{
                                  fontSize: getResponsiveValue({
                                    xs: "20px",
                                    sm: "22px",
                                    md: "24px",
                                    lg: "26px",
                                    xl: "28px",
                                  }),
                                  color: brandColor,
                                  marginBottom: getResponsiveValue({
                                    xs: "6px",
                                    sm: "7px",
                                    md: "8px",
                                    lg: "8px",
                                    xl: "8px",
                                  }),
                                  display: "block",
                                }}
                              ></i>
                              <div
                                style={{
                                  fontSize: getResponsiveValue({
                                    xs: "8px",
                                    sm: "8px",
                                    md: "9px",
                                    lg: "9px",
                                    xl: "10px",
                                  }),
                                  color: "#64748b",
                                  marginBottom: "6px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.5px",
                                  fontWeight: "600",
                                }}
                              >
                                Tipe Alternatif
                              </div>
                              <div
                                style={{
                                  fontSize: getResponsiveValue({
                                    xs: "14px",
                                    sm: "15px",
                                    md: "16px",
                                    lg: "17px",
                                    xl: "18px",
                                  }),
                                  fontWeight: "700",
                                  color: "#1e293b",
                                  lineHeight: "1.3",
                                  wordWrap: "break-word",
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
                        marginBottom: getResponsiveValue({
                          xs: "16px",
                          sm: "17px",
                          md: "18px",
                          lg: "18px",
                          xl: "18px",
                        }),
                        fontSize: getResponsiveValue({
                          xs: "12px",
                          sm: "12px",
                          md: "13px",
                          lg: "13px",
                          xl: "14px",
                        }),
                        wordWrap: "break-word",
                      }}
                    >
                      {product.description}
                    </p>
                  )}

                  <button
                    onClick={handleWhatsAppContact}
                    style={{
                      width: "100%",
                      padding: getResponsiveValue({
                        xs: "12px 18px",
                        sm: "13px 19px",
                        md: "14px 20px",
                        lg: "15px 22px",
                        xl: "16px 24px",
                      }),
                      background:
                        "linear-gradient(135deg, #25D366 0%, #1fb855 100%)",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: getResponsiveValue({
                        xs: "13px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "15px",
                      }),
                      fontWeight: "700",
                      cursor: "pointer",
                      marginBottom: getResponsiveValue({
                        xs: "14px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                        xl: "16px",
                      }),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: getResponsiveValue({
                        xs: "8px",
                        sm: "9px",
                        md: "10px",
                        lg: "10px",
                        xl: "12px",
                      }),
                      transition: "all 0.3s ease",
                      boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                    }}
                  >
                    <i
                      className="fab fa-whatsapp"
                      style={{
                        fontSize: getResponsiveValue({
                          xs: "16px",
                          sm: "17px",
                          md: "18px",
                          lg: "18px",
                          xl: "20px",
                        }),
                      }}
                    ></i>
                    Hubungi Kami via WhatsApp
                  </button>

                  <div
                    style={{
                      background: "#f8f9fa",
                      padding: getResponsiveValue({
                        xs: "12px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "16px",
                      }),
                      borderRadius: "12px",
                      border: "1px solid #e9ecef",
                      width: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    {[
                      {
                        icon: "fa-check-circle",
                        text: "Produk Original Bergaransi",
                      },
                      { icon: "fa-truck", text: "Gratis Ongkir Area Cirebon" },
                      { icon: "fa-tools", text: "Gratis Pasang & Instalasi" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: getResponsiveValue({
                            xs: "8px",
                            sm: "9px",
                            md: "10px",
                            lg: "10px",
                            xl: "12px",
                          }),
                          padding: getResponsiveValue({
                            xs: "5px 0",
                            sm: "5px 0",
                            md: "6px 0",
                            lg: "6px 0",
                            xl: "6px 0",
                          }),
                        }}
                      >
                        <div
                          style={{
                            width: getResponsiveValue({
                              xs: "28px",
                              sm: "30px",
                              md: "32px",
                              lg: "32px",
                              xl: "36px",
                            }),
                            height: getResponsiveValue({
                              xs: "28px",
                              sm: "30px",
                              md: "32px",
                              lg: "32px",
                              xl: "36px",
                            }),
                            background: `${brandColor}15`,
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <i
                            className={`fas ${item.icon}`}
                            style={{
                              fontSize: getResponsiveValue({
                                xs: "12px",
                                sm: "13px",
                                md: "14px",
                                lg: "14px",
                                xl: "16px",
                              }),
                              color: brandColor,
                            }}
                          ></i>
                        </div>
                        <span
                          style={{
                            fontSize: getResponsiveValue({
                              xs: "11px",
                              sm: "11px",
                              md: "12px",
                              lg: "12px",
                              xl: "13px",
                            }),
                            color: "#1e293b",
                            fontWeight: "600",
                            flex: 1,
                          }}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
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
