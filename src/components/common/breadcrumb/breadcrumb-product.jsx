import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import breadcrumb_shape_1 from "@assets/img/shape/shape2.png";
import breadcrumb_shape_2 from "@assets/img/shape/shape3.png";
import breadcrumb_shape_3 from "@assets/img/shape/shape-sq.png";
import breadcrumb_shape_4 from "@assets/img/shape/shape-c-2.png";

const BreadcrumbProduct = ({
  top_title = "List Produk Kami",
  title = "title",
}) => {
  // ✅ DETECT SCREEN SIZE
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ BRAND LOGOS
  const brands = [
    {
      id: 1,
      name: "Amaron",
      logo: "/assets/img/brand/amaron-logo.jpg",
      color: "#10b981",
    },
    {
      id: 2,
      name: "GS Astra",
      logo: "/assets/img/brand/gs-logo.jpg",
      color: "#22c55e",
    },
    {
      id: 3,
      name: "Yuasa",
      logo: "/assets/img/brand/yuasa-logo.png",
      color: "#ff4757",
    },
  ];

  return (
    <>
      <div
        className="page-title-area pos-relative gray-bg pt-90 pb-60 fix"
        style={{ backgroundImage: `url(/assets/img/bg/page-title-bg.jpg)` }}
      >
        <div className="shape-slider">
          <Image
            className="shape shape-2"
            src={breadcrumb_shape_1}
            alt="theme-pure"
          />
          <Image
            className="shape shape-4"
            src={breadcrumb_shape_2}
            alt="theme-pure"
          />
          <Image
            className="shape shape-5"
            src={breadcrumb_shape_3}
            alt="theme-pure"
          />
          <Image
            className="shape shape-6"
            src={breadcrumb_shape_4}
            alt="theme-pure"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="page-title mb-30">
                <h3>{top_title}</h3>
                <p>Dapatkan AKI sesuai kebutuhan anda !</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-list text-left text-lg-end mb-30">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>{title}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ✅ BRAND PARTNERS SECTION - PAKAI STRUKTUR CONTACT (SIMPLE!) */}
          <div className="row mt-40">
            <div className="col-12">
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: isMobile ? "30px 20px" : "50px 60px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* ✅ TITLE - STRUKTUR SEPERTI CONTACT (PASTI TENGAH!) */}
                <div className="row justify-content-center mb-40">
                  <div className="col-xl-12 col-lg-12">
                    <div className="text-center">
                      <h5
                        style={{
                          fontSize: isMobile ? "14px" : "16px",
                          fontWeight: "700",
                          color: "#64748b",
                          textTransform: "uppercase",
                          letterSpacing: isMobile ? "1px" : "2px",
                          marginBottom: 0,
                        }}
                      >
                        BRAND PARTNER TERPERCAYA
                      </h5>
                    </div>
                  </div>
                </div>

                {/* ✅ LOGO CONTAINER - RESPONSIVE */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: isMobile ? "30px" : "50px",
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  {brands.map((brand) => (
                    <div key={brand.id}>
                      <img
                        src={brand.logo}
                        alt={`${brand.name} - Aki Terpercaya Cirebon`}
                        style={{
                          height: isMobile ? "150px" : "240px",
                          width: "auto",
                          maxWidth: isMobile ? "180px" : "320px",
                          objectFit: "contain",
                          opacity: 0.65,
                          transition: "all 0.3s ease",
                          display: "block",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbProduct;
