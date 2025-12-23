import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import breadcrumb_shape_1 from "@assets/img/shape/shape2.png";
import breadcrumb_shape_2 from "@assets/img/shape/shape3.png";
import breadcrumb_shape_3 from "@assets/img/shape/shape-sq.png";
import breadcrumb_shape_4 from "@assets/img/shape/shape-c-2.png";

const BreadcrumbProduct = ({
  top_title = "List Produk Kami",
  title = "Produk AKI - Sentosa Jaya Mandiri Cirebon",
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

          {/* ✅ SPANDUK TOKO - RESPONSIVE */}
          <div className="row mt-40">
            <div className="col-12">
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: isMobile ? "20px 15px" : "30px 40px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                  overflow: "hidden",
                }}
              >
                {/* ✅ SPANDUK IMAGE - FULL WIDTH RESPONSIVE */}
                <div
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    borderRadius: "12px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src="/assets/img/logo/sspanduk.jpg"
                    alt="Sentosa Jaya Mandiri - Toko Aki Cirebon | Jl. Lemahwungkuk No. 28 | 081 7799 54236"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "contain",
                      borderRadius: "12px",
                    }}
                  />
                </div>

                {/* ✅ INFO TAMBAHAN DIBAWAH SPANDUK (OPTIONAL) */}
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: "15px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Alamat */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 20px",
                      background: "#f8f9fa",
                      borderRadius: "50px",
                      fontSize: isMobile ? "12px" : "14px",
                      fontWeight: "600",
                      color: "#1e293b",
                    }}
                  >
                    <i
                      className="fas fa-map-marker-alt"
                      style={{ color: "#ef4444", fontSize: "16px" }}
                    ></i>
                    <span>Jl. Lemahwungkuk No. 28</span>
                  </div>

                  {/* Telepon */}
                  <a
                    href="tel:081779954236"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 20px",
                      background: "#f8f9fa",
                      borderRadius: "50px",
                      fontSize: isMobile ? "12px" : "14px",
                      fontWeight: "600",
                      color: "#1e293b",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#25D366";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f8f9fa";
                      e.currentTarget.style.color = "#1e293b";
                    }}
                  >
                    <i
                      className="fas fa-phone-alt"
                      style={{ fontSize: "16px" }}
                    ></i>
                    <span>081 7799 54236</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/6281779954236?text=Halo%20Sentosa%20Jaya%20Mandiri%2C%20saya%20ingin%20tanya%20produk%20aki"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 20px",
                      background:
                        "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                      borderRadius: "50px",
                      fontSize: isMobile ? "12px" : "14px",
                      fontWeight: "600",
                      color: "white",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(37, 211, 102, 0.5)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 15px rgba(37, 211, 102, 0.3)";
                    }}
                  >
                    <i
                      className="fab fa-whatsapp"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <span>Chat WhatsApp</span>
                  </a>
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

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// import breadcrumb_shape_1 from "@assets/img/shape/shape2.png";
// import breadcrumb_shape_2 from "@assets/img/shape/shape3.png";
// import breadcrumb_shape_3 from "@assets/img/shape/shape-sq.png";
// import breadcrumb_shape_4 from "@assets/img/shape/shape-c-2.png";

// const BreadcrumbProduct = ({
//   top_title = "List Produk Kami",
//   title = "Product AKI SJM Cirebon",
// }) => {
//   // ✅ DETECT SCREEN SIZE
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // ✅ BRAND LOGOS
//   const brands = [
//     {
//       id: 1,
//       name: "Amaron",
//       logo: "/assets/img/brand/amaron-logo.jpg",
//       color: "#10b981",
//     },
//     {
//       id: 2,
//       name: "GS Astra",
//       logo: "/assets/img/brand/gs-logo.jpg",
//       color: "#22c55e",
//     },
//     {
//       id: 3,
//       name: "Yuasa",
//       logo: "/assets/img/brand/yuasa-logo.png",
//       color: "#ff4757",
//     },
//   ];

//   return (
//     <>
//       <div
//         className="page-title-area pos-relative gray-bg pt-90 pb-60 fix"
//         style={{ backgroundImage: `url(/assets/img/bg/page-title-bg.jpg)` }}
//       >
//         <div className="shape-slider">
//           <Image
//             className="shape shape-2"
//             src={breadcrumb_shape_1}
//             alt="theme-pure"
//           />
//           <Image
//             className="shape shape-4"
//             src={breadcrumb_shape_2}
//             alt="theme-pure"
//           />
//           <Image
//             className="shape shape-5"
//             src={breadcrumb_shape_3}
//             alt="theme-pure"
//           />
//           <Image
//             className="shape shape-6"
//             src={breadcrumb_shape_4}
//             alt="theme-pure"
//           />
//         </div>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <div className="page-title mb-30">
//                 <h3>{top_title}</h3>
//                 <p>Dapatkan AKI sesuai kebutuhan anda !</p>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="breadcrumb-list text-left text-lg-end mb-30">
//                 <ul>
//                   <li>
//                     <Link href="/">Home</Link>
//                   </li>
//                   <li>{title}</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* ✅ BRAND PARTNERS SECTION - PAKAI STRUKTUR CONTACT (SIMPLE!) */}
//           <div className="row mt-40">
//             <div className="col-12">
//               <div
//                 style={{
//                   background: "white",
//                   borderRadius: "20px",
//                   padding: isMobile ? "30px 20px" : "50px 60px",
//                   boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
//                 }}
//               >
//                 {/* ✅ TITLE - GESER KANAN DI DESKTOP */}
//                 <div className="row mb-40">
//                   <div className="col-xl-12 col-lg-12">
//                     <div
//                       style={{
//                         textAlign: "center",
//                         position: "relative",
//                         left: isMobile ? "0" : "3.8%", // ✅ GESER KANAN 8% DI DESKTOP
//                       }}
//                     >
//                       <h5
//                         style={{
//                           fontSize: isMobile ? "14px" : "16px",
//                           fontWeight: "700",
//                           color: "#64748b",
//                           textTransform: "uppercase",
//                           letterSpacing: isMobile ? "1px" : "2px",
//                           marginBottom: 0,
//                         }}
//                       >
//                         BRAND PARTNER TERPERCAYA
//                       </h5>
//                     </div>
//                   </div>
//                 </div>

//                 {/* ✅ LOGO CONTAINER - RESPONSIVE */}
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     gap: isMobile ? "30px" : "50px",
//                     flexWrap: "wrap",
//                     width: "100%",
//                   }}
//                 >
//                   {brands.map((brand) => (
//                     <div key={brand.id}>
//                       <img
//                         src={brand.logo}
//                         alt={`${brand.name} - Aki Terpercaya Cirebon`}
//                         style={{
//                           height: isMobile ? "150px" : "240px",
//                           width: "auto",
//                           maxWidth: isMobile ? "180px" : "320px",
//                           objectFit: "contain",
//                           opacity: 0.65,
//                           transition: "all 0.3s ease",
//                           display: "block",
//                         }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BreadcrumbProduct;
