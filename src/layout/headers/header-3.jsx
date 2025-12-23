// src/components/layout/headers/header-3.jsx (CLEAN DYNAMIC UNDERLINE)
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
                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/assets/img/logo/logo.webp"
                        alt="Sentosa Jaya Mandiri - Toko Aki Cirebon"
                        style={{
                          width: "auto",
                          height: "70px",
                          maxWidth: "180px",
                          objectFit: "contain",
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

      <style jsx global>{`
        /* Logo responsive */
        .logo img {
          width: auto;
          height: 50px;
          max-width: 180px;
          object-fit: contain;
          display: block;
          transition: all 0.3s ease;
        }

        .sticky-bar .logo img {
          height: 45px;
          max-width: 160px;
        }

        /* ✅ REMOVE OLD UNDERLINES */
        .main-menu nav > ul > li > a,
        .main-menu nav > ul > li > a::before,
        .main-menu nav > ul > li > a::after {
          text-decoration: none !important;
          border: none !important;
          background-image: none !important;
          outline: none !important;
          box-shadow: none !important;
        }

        /* ✅ HIDE OLD PSEUDO ELEMENTS */
        .main-menu nav > ul > li > a::before {
          display: none !important;
          content: none !important;
        }

        /* ✅ NAVBAR STRUCTURE */
        .main-menu nav > ul {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 0;
        }

        .main-menu nav > ul > li {
          position: relative !important;
          display: inline-block;
          margin: 0 10px;
        }

        .main-menu nav > ul > li > a {
          position: relative !important;
          display: inline-block;
          padding: 28px 20px 28px 20px !important;
          font-weight: 600;
          font-size: 16px;
          transition: color 0.3s ease;
        }

        /* ✅ NEW CLEAN UNDERLINE - BELOW TEXT */
        .main-menu nav > ul > li > a::after {
          content: "" !important;
          display: block !important;
          position: absolute !important;
          left: 20px !important;
          right: 20px !important;
          bottom: 18px !important;
          height: 2px !important;
          background: currentColor !important;
          transform: scaleX(0) !important;
          transform-origin: center !important;
          transition: transform 0.3s ease !important;
          opacity: 1 !important;
        }

        /* ✅ HOVER & ACTIVE STATE */
        .main-menu nav > ul > li > a:hover::after,
        .main-menu nav > ul > li.active > a::after {
          transform: scaleX(1) !important;
        }

        /* ✅ ACTIVE PAGE - ALWAYS SHOW UNDERLINE */
        .main-menu nav > ul > li.active > a::after {
          transform: scaleX(1) !important;
        }

        /* Mobile responsive */
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
