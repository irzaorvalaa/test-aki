import React from "react";

const categories = [
  { value: "amaron-go", label: "Amaron Go", color: "#84cc16" }, // ✅ Lime Green
  { value: "amaron-onyx", label: "Amaron Onyx", color: "#10b981" }, // ✅ Emerald Green
  { value: "amaron-hilife", label: "Amaron Hi-Life", color: "#059669" }, // ✅ Green
  { value: "amaron-hilife-pro", label: "Amaron Hi-Life Pro", color: "#047857" }, // ✅ Dark Green
];

const ProductFilter = ({
  selectedCategories,
  setSelectedCategories,
  totalProducts,
}) => {
  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="product-sidebar">
      {/* Brand Filter dengan Hapus Semua di kanan */}
      <div className="filter-widget">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            paddingBottom: "15px",
            borderBottom: "2px solid #007bff",
          }}
        >
          <h5 style={{ margin: 0, paddingBottom: 0, border: "none" }}>
            Merek Aki
          </h5>

          {/* Button Hapus Semua - Hanya muncul kalau ada filter aktif */}
          {selectedCategories.length > 0 && (
            <button
              onClick={clearFilters}
              className="clear-all-btn"
              style={{
                background: "linear-gradient(135deg, #ff4757 0%, #ff6b6b 100%)",
                color: "#FFFFFF",
                border: "none",
                padding: "6px 12px",
                borderRadius: "16px",
                fontSize: "11px",
                fontWeight: "700",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                boxShadow: "0 2px 6px rgba(255, 71, 87, 0.25)",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 3px 10px rgba(255, 71, 87, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 6px rgba(255, 71, 87, 0.25)";
              }}
            >
              <i
                className="fas fa-times-circle"
                style={{ fontSize: "11px", color: "#FFFFFF" }}
              ></i>
              <span
                style={{
                  color: "#FFFFFF",
                  fontWeight: "700",
                  fontSize: "11px",
                }}
              >
                Hapus Semua
              </span>
            </button>
          )}
        </div>

        <div className="filter-list">
          {categories.map((category) => (
            <label key={category.value} className="filter-checkbox">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.value)}
                onChange={() => handleCategoryToggle(category.value)}
              />
              <span
                className="checkmark"
                style={{
                  borderColor: selectedCategories.includes(category.value)
                    ? category.color
                    : "#ddd",
                  background: selectedCategories.includes(category.value)
                    ? category.color
                    : "transparent",
                }}
              ></span>
              <span className="label-text">{category.label}</span>
              <span
                className="brand-badge"
                style={{ background: category.color }}
              ></span>
            </label>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="filter-widget results-count">
        <div className="count-box">
          <div className="count-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="count-content">
            <strong className="count-number">{totalProducts}</strong>
            <p className="count-text">Produk Ditemukan</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="filter-widget info-banner">
        <div className="banner-content">
          <div className="banner-icon">
            <i className="fas fa-shipping-fast"></i>
          </div>
          <div className="banner-text">
            <h6>Gratis Ongkir</h6>
            <p>Untuk wilayah Cirebon & sekitarnya</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Contact */}
      <div className="filter-widget whatsapp-contact">
        <a
          href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20tanya%20tentang%20produk%20aki"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <div className="whatsapp-icon">
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className="whatsapp-text">
            <strong>Butuh Bantuan?</strong>
            <p>Hubungi Kami</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductFilter;
