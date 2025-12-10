"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import gallery_data from "@/src/data/gallery-data";

const GalleryHighlight = ({ style_fancy }) => {
  // ✅ AMBIL 6 FOTO TERBAIK UNTUK HOMEPAGE
  const featured_gallery = gallery_data.slice(0, 6);

  // ✅ LIGHTBOX STATE
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Open lightbox
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Navigate lightbox
  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === featured_gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? featured_gallery.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <section
        className={`gallery-highlight-area ${
          style_fancy ? "pb-110" : "pt-120 pb-90"
        }`}
        style={{ background: "#f8f9fa" }}
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
                        "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
                      color: "white",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "20px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Galeri Kami
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
                    Dokumentasi{" "}
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Layanan Kami
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
                    Lihat dokumentasi produk dan layanan pemasangan aki terbaik
                    kami di Cirebon
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="row">
            {featured_gallery.map((photo, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <article
                  className="gallery-highlight-card"
                  onClick={() => openLightbox(i)}
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.borderColor = "#8b5cf6";
                    e.currentTarget.style.boxShadow =
                      "0 20px 50px rgba(139, 92, 246, 0.25)";
                    const overlay =
                      e.currentTarget.querySelector(".gallery-overlay");
                    const icon = e.currentTarget.querySelector(".gallery-icon");
                    if (overlay) overlay.style.opacity = "1";
                    if (icon) icon.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#e9ecef";
                    e.currentTarget.style.boxShadow = "none";
                    const overlay =
                      e.currentTarget.querySelector(".gallery-overlay");
                    const icon = e.currentTarget.querySelector(".gallery-icon");
                    if (overlay) overlay.style.opacity = "0";
                    if (icon) icon.style.opacity = "0";
                  }}
                >
                  {/* Gallery Image */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "280px",
                      overflow: "hidden",
                      borderRadius: "20px 20px 0 0",
                    }}
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />

                    {/* Overlay - SAMA DENGAN GALERI.JSX */}
                    <div
                      className="gallery-overlay"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "20px",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      <div className="gallery-info">
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            color: "white",
                            marginBottom: "8px",
                            lineHeight: "1.3",
                          }}
                        >
                          {photo.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.9)",
                            lineHeight: "1.5",
                            marginBottom: "0",
                          }}
                        >
                          {photo.description}
                        </p>
                      </div>
                    </div>

                    {/* ✅ Icon Search Plus - POJOK KANAN ATAS! */}
                    <div
                      className="gallery-icon"
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        width: "48px",
                        height: "48px",
                        background: "white",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        zIndex: 3,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.background = "#8b5cf6";
                        const icon = e.currentTarget.querySelector("i");
                        if (icon) icon.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background = "white";
                        const icon = e.currentTarget.querySelector("i");
                        if (icon) icon.style.color = "#8b5cf6";
                      }}
                    >
                      <i
                        className="fas fa-search-plus"
                        style={{
                          fontSize: "20px",
                          color: "#8b5cf6",
                          transition: "color 0.3s ease",
                        }}
                      ></i>
                    </div>

                    {/* Category Badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: "15px",
                        left: "15px",
                        padding: "6px 14px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        color: "#8b5cf6",
                        letterSpacing: "0.5px",
                        zIndex: 2,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      {photo.category === "products"
                        ? "Produk"
                        : photo.category === "automotive"
                        ? "Pemasangan"
                        : photo.category === "service"
                        ? "Layanan"
                        : photo.category}
                    </span>
                  </div>

                  {/* Gallery Content */}
                  <div style={{ padding: "20px" }}>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#1e293b",
                        marginBottom: "10px",
                        lineHeight: "1.3",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: "48px",
                      }}
                    >
                      {photo.title}
                    </h4>

                    <p
                      style={{
                        fontSize: "14px",
                        color: "#64748b",
                        lineHeight: "1.6",
                        marginBottom: "0",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {photo.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* ✅ TOMBOL LIHAT SEMUA GALERI */}
          <div className="row justify-content-center mt-50">
            <div className="col-xl-6 col-lg-8">
              <div className="text-center">
                <Link
                  href="/galeri"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
                    color: "white",
                    padding: "18px 40px",
                    borderRadius: "50px",
                    fontSize: "16px",
                    fontWeight: "700",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 25px rgba(139, 92, 246, 0.4)",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 35px rgba(139, 92, 246, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(139, 92, 246, 0.4)";
                  }}
                >
                  <span>Lihat Semua Foto</span>
                  <i className="fas fa-images"></i>
                </Link>

                {/* Additional Info */}
                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "14px",
                    color: "#64748b",
                  }}
                >
                  Lebih dari{" "}
                  <strong style={{ color: "#8b5cf6" }}>
                    {gallery_data.length}+ foto
                  </strong>{" "}
                  dokumentasi tersedia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ LIGHTBOX MODAL - SAMA DENGAN GALERI.JSX */}
      {lightboxOpen && (
        <div
          className={`gallery-lightbox ${lightboxOpen ? "active" : ""}`}
          onClick={closeLightbox}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.95)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Close Button */}
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: "-50px",
                right: "0",
                width: "48px",
                height: "48px",
                background: "white",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#1e293b",
                transition: "all 0.3s ease",
                zIndex: 100,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ff4757";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "rotate(90deg) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#1e293b";
                e.currentTarget.style.transform = "rotate(0deg) scale(1)";
              }}
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Image */}
            <img
              src={featured_gallery[currentImage].image}
              alt={featured_gallery[currentImage].title}
              className="lightbox-image"
              style={{
                maxWidth: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
              }}
            />

            {/* Previous Button */}
            <button
              className="lightbox-nav prev"
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                background: "white",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#1e293b",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8b5cf6";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#1e293b";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Next Button */}
            <button
              className="lightbox-nav next"
              onClick={nextImage}
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "48px",
                background: "white",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#1e293b",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8b5cf6";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#1e293b";
                e.currentTarget.style.transform = "translateY(-50%) scale(1)";
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Caption */}
            <div
              className="lightbox-caption"
              style={{
                marginTop: "20px",
                textAlign: "center",
                maxWidth: "600px",
              }}
            >
              <h4
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "8px",
                }}
              >
                {featured_gallery[currentImage].title}
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.6",
                }}
              >
                {featured_gallery[currentImage].description}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgba(255, 255, 255, 0.6)",
                  marginTop: "8px",
                }}
              >
                {currentImage + 1} / {featured_gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ✅ FADE IN ANIMATION */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default GalleryHighlight;
