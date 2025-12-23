"use client";
import React, { useState, useMemo, useEffect } from "react"; // ✅ TAMBAH useEffect
import Wrapper from "@/src/layout/wrapper";
import SEO from "@/src/components/common/seo";
import HeaderFive from "@/src/layout/headers/header-3";
import Footer from "@/src/layout/footers/footer";
import BreadcrumbProduct from "@/src/components/common/breadcrumb/breadcrumb-product";
import ProductCard from "./product-card";
import ProductFilter from "./product-filter";
import Pagination from "./pagination";
import product_data from "@/src/data/product-data";

const ITEMS_PER_PAGE = 12;

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  // ✅ TAMBAH INI - SCROLL TO TOP SETIAP CURRENTPAGE BERUBAH
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [currentPage]); // ✅ Trigger setiap currentPage berubah

  // Filter dan sort produk
  const filteredProducts = useMemo(() => {
    let filtered = [...product_data];

    // Filter by category (brand)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategories, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, sortBy]);

  return (
    <Wrapper>
      <SEO pageTitle="Produk Aki - Aki Berkualitas Cirebon" />
      <HeaderFive />
      <BreadcrumbProduct />

      <section className="product-area">
        <div className="container">
          <div className="row">
            {/* Sidebar Filter */}
            <div className="col-xl-3 col-lg-4">
              <ProductFilter
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                totalProducts={filteredProducts.length}
              />
            </div>

            {/* Product Grid */}
            <div className="col-xl-9 col-lg-8">
              {/* Toolbar */}
              <div className="product-toolbar">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="product-showing">
                      <p>
                        Menampilkan {startIndex + 1}–
                        {Math.min(endIndex, filteredProducts.length)} dari{" "}
                        {filteredProducts.length} produk
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-sorting text-md-end">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="form-select"
                      >
                        <option value="default">Urutkan: Default</option>
                        <option value="name">Nama A-Z</option>
                        <option value="rating">Rating Tertinggi</option>
                        <option value="price-low">
                          Harga: Rendah ke Tinggi
                        </option>
                        <option value="price-high">
                          Harga: Tinggi ke Rendah
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="row product-grid">
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => (
                    <div
                      key={product.id}
                      className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30"
                    >
                      <ProductCard product={product} />
                    </div>
                  ))
                ) : (
                  <div className="col-12">
                    <div className="no-products">
                      <i
                        className="fas fa-battery-empty"
                        style={{ fontSize: "48px" }}
                      ></i>
                      <h4>Tidak ada produk ditemukan</h4>
                      <p>Coba ubah filter pencarian Anda</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Wrapper>
  );
};

export default Product;
