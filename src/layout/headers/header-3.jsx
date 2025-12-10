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
          zIndex: 9999, // ✅ TAMBAH INI!
        }}
      >
        <div className="header-area">
          <div className="container">
            <div className="position-relative">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="logo">
                    <Link href="/">
                      <img src="/assets/img/logo/logo.png" alt="theme-pure" />
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
                      zIndex: 9999, // ✅ TAMBAH INI!
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
    </>
  );
};

export default HeaderThree;
