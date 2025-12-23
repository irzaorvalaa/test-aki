// src/components/product/product-card.jsx
import React, { useState, useEffect, useRef } from "react";

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
      setViewportHeight(window.visualViewport?.height || window.innerHeight);
    };

    updateViewport();

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

        @supports (-webkit-touch-callout: none) {
          button[data-close-modal] {
            position: fixed !important;
            top: 16px !important;
            right: 16px !important;
            z-index: 999999999 !important;
            transform: translate3d(0, 0, 999px) !important;
          }

          @supports (top: env(safe-area-inset-top)) {
            button[data-close-modal] {
              top: calc(env(safe-area-inset-top) + 16px) !important;
              right: calc(env(safe-area-inset-right) + 16px) !important;
            }
          }
        }

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
            alignItems: isMobile ? "flex-end" : "flex-start", // ✅ UBAH dari "center" ke "flex-start"
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0)",
            backdropFilter: "blur(0px)",
            overflowY: isMobile ? "hidden" : "hidden", // ✅ Desktop bisa scroll
            overflowX: "hidden",
            padding: isMobile ? "0" : "0", // ✅ Reset padding
            paddingTop: isMobile ? "0" : "90px", // ✅ 80px gap dari navbar
            paddingBottom: isMobile ? "0" : "40px",
            paddingLeft: isMobile ? "0" : "20px",
            paddingRight: isMobile ? "0" : "20px",
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
                maxHeight: isMobile ? "92vh" : "calc(100vh - 40px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* STICKY HEADER */}
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

                {/* Close Button */}
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
                  maxHeight: isMobile
                    ? "calc(92vh - 140px)"
                    : "calc(100vh - 100px)",
                  overflowY: "auto",
                  overflowX: "hidden",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {/* IMAGE SECTION */}
                <div
                  style={{
                    background: "white",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    minHeight: isMobile ? "220px" : "400px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                    }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: isMobile ? "auto" : "400px",
                        maxWidth: "100%",
                        objectFit: "cover",
                        borderRadius: "0",
                        filter: "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15))",
                      }}
                    />

                    {/* Brand Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: isMobile ? "16px" : "20px",
                        left: isMobile ? "16px" : "20px",
                      }}
                    >
                      <span
                        style={{
                          padding: isMobile ? "6px 10px" : "10px 18px",
                          borderRadius: "20px",
                          fontSize: isMobile ? "9px" : "12px",
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
                    padding: isMobile ? "16px 16px 32px" : "30px 40px 40px",
                    background: "white",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <h2
                    style={{
                      fontSize: isMobile ? "18px" : "24px",
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: isMobile ? "16px" : "20px",
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
                        padding: isMobile ? "14px" : "20px",
                        borderRadius: "16px",
                        marginBottom: isMobile ? "16px" : "20px",
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
                          marginBottom: isMobile ? "12px" : "14px",
                          fontSize: isMobile ? "11px" : "12px",
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
                          gap: isMobile ? "8px" : "12px",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: isMobile ? "6px" : "10px",
                          }}
                        >
                          {product.specs.capacity && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: isMobile ? "8px" : "12px",
                                padding: isMobile ? "8px" : "12px",
                                background: "#f8f9fa",
                                borderRadius: "10px",
                              }}
                            >
                              <div
                                style={{
                                  width: isMobile ? "32px" : "40px",
                                  height: isMobile ? "32px" : "40px",
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
                                    fontSize: isMobile ? "14px" : "18px",
                                    color: brandColor,
                                  }}
                                ></i>
                              </div>
                              <div style={{ minWidth: 0, flex: 1 }}>
                                <div
                                  style={{
                                    fontSize: isMobile ? "8px" : "10px",
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
                                    fontSize: isMobile ? "13px" : "16px",
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
                                gap: isMobile ? "8px" : "12px",
                                padding: isMobile ? "8px" : "12px",
                                background: "#f8f9fa",
                                borderRadius: "10px",
                              }}
                            >
                              <div
                                style={{
                                  width: isMobile ? "32px" : "40px",
                                  height: isMobile ? "32px" : "40px",
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
                                    fontSize: isMobile ? "14px" : "18px",
                                    color: brandColor,
                                  }}
                                ></i>
                              </div>
                              <div style={{ minWidth: 0, flex: 1 }}>
                                <div
                                  style={{
                                    fontSize: isMobile ? "8px" : "10px",
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
                                    fontSize: isMobile ? "13px" : "16px",
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
                                gap: isMobile ? "8px" : "12px",
                                padding: isMobile ? "8px" : "12px",
                                background: "#f8f9fa",
                                borderRadius: "10px",
                              }}
                            >
                              <div
                                style={{
                                  width: isMobile ? "32px" : "40px",
                                  height: isMobile ? "32px" : "40px",
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
                                    fontSize: isMobile ? "14px" : "18px",
                                    color: brandColor,
                                  }}
                                ></i>
                              </div>
                              <div style={{ minWidth: 0, flex: 1 }}>
                                <div
                                  style={{
                                    fontSize: isMobile ? "8px" : "10px",
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
                                    fontSize: isMobile ? "13px" : "16px",
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
                              padding: isMobile ? "10px" : "16px",
                              background: `${brandColor}08`,
                              borderRadius: "12px",
                              border: `2px dashed ${brandColor}40`,
                            }}
                          >
                            <div style={{ textAlign: "center" }}>
                              <i
                                className="fas fa-code-branch"
                                style={{
                                  fontSize: isMobile ? "20px" : "28px",
                                  color: brandColor,
                                  marginBottom: isMobile ? "6px" : "8px",
                                  display: "block",
                                }}
                              ></i>
                              <div
                                style={{
                                  fontSize: isMobile ? "8px" : "10px",
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
                                  fontSize: isMobile ? "14px" : "18px",
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
                        marginBottom: isMobile ? "16px" : "18px",
                        fontSize: isMobile ? "12px" : "14px",
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
                      padding: isMobile ? "12px 18px" : "16px 24px",
                      background:
                        "linear-gradient(135deg, #25D366 0%, #1fb855 100%)",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: isMobile ? "13px" : "15px",
                      fontWeight: "700",
                      cursor: "pointer",
                      marginBottom: isMobile ? "14px" : "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: isMobile ? "8px" : "12px",
                      transition: "all 0.3s ease",
                      boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                    }}
                  >
                    <i
                      className="fab fa-whatsapp"
                      style={{
                        fontSize: isMobile ? "16px" : "20px",
                      }}
                    ></i>
                    Hubungi Kami via WhatsApp
                  </button>

                  <div
                    style={{
                      background: "#f8f9fa",
                      padding: isMobile ? "12px" : "16px",
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
                          gap: isMobile ? "8px" : "12px",
                          padding: isMobile ? "5px 0" : "6px 0",
                        }}
                      >
                        <div
                          style={{
                            width: isMobile ? "28px" : "36px",
                            height: isMobile ? "28px" : "36px",
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
                              fontSize: isMobile ? "12px" : "16px",
                              color: brandColor,
                            }}
                          ></i>
                        </div>
                        <span
                          style={{
                            fontSize: isMobile ? "11px" : "13px",
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
