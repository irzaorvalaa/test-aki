import useSticky from "@/src/hooks/use-sticky";
import Link from "next/link";
import React from "react";
import NavMenu from "./nav-menu";
import MobileMenus from "./mobile-menus";

const HeaderThree = ({ style_7 }) => {
  const { sticky } = useSticky();

  return (
    <>
      <header
        id="header-sticky"
        className={`${
          style_7 ? "header-transparent header-green" : "header-normal"
        }  ${sticky && "sticky-bar"}`}
        style={{
          position: "relative",
          zIndex: 9999,
        }}
      >
        <div className="header-area">
          <div className="container">
            <div className="position-relative">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-6">
                  {/* ✅ LOGO DENGAN UKURAN RESPONSIVE */}
                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/assets/img/logo/Logo.png"
                        alt="Sentosa Jaya Mandiri - Toko Aki Cirebon"
                        style={{
                          width: "auto",
                          height: "70px", // ✅ HEIGHT TETAP 50PX
                          maxWidth: "180px", // ✅ MAX WIDTH
                          objectFit: "contain", // ✅ MAINTAIN ASPECT RATIO
                          display: "block",
                        }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 position-static d-none d-lg-block">
                  <div
                    className={`main-menu ${
                      style_7 ? "" : "pink-menu"
                    } text-center`}
                    style={{
                      position: "relative",
                      zIndex: 9999,
                    }}
                  >
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="col-6 d-lg-none">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <MobileMenus />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ✅ CSS RESPONSIVE LOGO */}
      <style jsx>{`
        .logo img {
          width: auto;
          height: 50px;
          max-width: 180px;
          object-fit: contain;
          display: block;
          transition: all 0.3s ease;
        }

        /* Sticky header - logo lebih kecil */
        .sticky-bar .logo img {
          height: 45px;
          max-width: 160px;
        }

        /* Mobile - logo lebih kecil */
        @media (max-width: 768px) {
          .logo img {
            height: 40px;
            max-width: 140px;
          }

          .sticky-bar .logo img {
            height: 38px;
            max-width: 130px;
          }
        }

        /* Extra small devices */
        @media (max-width: 480px) {
          .logo img {
            height: 35px;
            max-width: 120px;
          }

          .sticky-bar .logo img {
            height: 33px;
            max-width: 110px;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderThree;
