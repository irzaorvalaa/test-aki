"use client";
import React, { useState } from "react";
import Wrapper from "@/src/layout/wrapper";
import SEO from "@/src/components/common/seo";
import HeaderFive from "@/src/layout/headers/header-3";
import Footer from "@/src/layout/footers/footer";
import Breadcrumb from "@/src/components/common/breadcrumb/breadcrumb-galeri";
import gallery_data from "@/src/data/gallery-data";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(9);

  // Categories
  // Categories
  const categories = [
    { value: "all", label: "Semua Foto" },
    { value: "products", label: "Produk Aki" },
    { value: "automotive", label: "Pemasangan" },
    { value: "service", label: "Layanan" },
  ];

  // Filter photos by category
  const filteredPhotos =
    selectedCategory === "all"
      ? gallery_data
      : gallery_data.filter((photo) => photo.category === selectedCategory);

  // Photos to display based on load more
  const displayedPhotos = filteredPhotos.slice(0, itemsToShow);

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
      prev === displayedPhotos.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? displayedPhotos.length - 1 : prev - 1
    );
  };

  // Load more
  const loadMore = () => {
    setItemsToShow((prev) => prev + 6);
  };

  // Keyboard navigation
  React.useEffect(() => {
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
    <Wrapper>
      <SEO pageTitle="Galeri Kami - Photo Gallery" />
      <HeaderFive />
      <Breadcrumb
        title="Galeri - Sentosa Jaya Mandiri Cirebon"
        subtitle="Explore our services and discover what we can do for you"
      />

      <section className="gallery-area">
        <div className="container">
          {/* Gallery Header */}
          <div className="gallery-header">
            <h2 className="gallery-title">Galeri foto kami</h2>
            <p className="gallery-subtitle">-</p>
          </div>

          {/* Filter Tabs */}
          <div className="gallery-filter">
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  className={`filter-btn ${
                    selectedCategory === cat.value ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat.value);
                    setItemsToShow(9);
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {displayedPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3 className="gallery-item-title">{photo.title}</h3>
                    <p className="gallery-item-desc">{photo.description}</p>
                  </div>
                </div>
                <div className="gallery-icon">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {itemsToShow < filteredPhotos.length && (
            <div className="gallery-load-more">
              <button className="btn-load-more" onClick={loadMore}>
                <span>Load More Photos</span>
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className={`gallery-lightbox ${lightboxOpen ? "active" : ""}`}
          onClick={closeLightbox}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            <img
              src={displayedPhotos[currentImage].image}
              alt={displayedPhotos[currentImage].title}
              className="lightbox-image"
            />
            <button className="lightbox-nav prev" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="lightbox-nav next" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Caption */}
            <div className="lightbox-caption">
              <h4>{displayedPhotos[currentImage].title}</h4>
              <p>{displayedPhotos[currentImage].description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </Wrapper>
  );
};

export default Gallery;
