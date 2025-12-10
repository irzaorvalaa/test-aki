import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [subMenu, setSubMenu] = useState("");
  const [navTitle, setNavTitle] = useState("");
  const [toggle, setToggle] = useState(false);
  const [mounted, setMounted] = useState(false);

  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const openSubMobileMenu = (s_menu) => {
    if (subMenu === s_menu) {
      setSubMenu("");
    } else {
      setSubMenu(s_menu);
    }
  };

  useEffect(() => {
    setMounted(true);
    setToggle(false);
  }, []);

  const handleMenuClick = () => {
    setToggle(false);
    setNavTitle("");
    setSubMenu("");
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  // Menu Portal Content
  const menuContent =
    toggle && mounted
      ? createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 99999,
              isolation: "isolate",
            }}
          >
            {/* BACKDROP - PURE BLACK */}
            <div
              onClick={handleMenuClick}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                background: "rgb(0, 0, 0)",
                opacity: 0.75,
                zIndex: 1,
              }}
            />

            {/* MENU CONTAINER - ABSOLUTE SOLID */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: "100%",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                pointerEvents: "none",
              }}
            >
              {/* HEADER WITH CLOSE BUTTON */}
              <div
                style={{
                  width: "100%",
                  height: "70px",
                  background: "rgb(255, 255, 255)",
                  flexShrink: 0,
                  borderBottom: "3px solid rgb(43, 78, 255)", // ✅ TEBELIN JADI 3px + WARNA BIRU
                  pointerEvents: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 20px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)", // ✅ BONUS: Shadow biar lebih tegas
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "rgb(30, 41, 59)",
                  }}
                >
                  Menu
                </span>

                {/* CLOSE BUTTON BESAR DI HEADER */}
                <button
                  onClick={handleMenuClick}
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(239, 68, 68) 0%, rgb(220, 38, 38) 100%)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(239, 68, 68, 0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "rotate(90deg) scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                  }}
                >
                  <i
                    className="fas fa-times"
                    style={{
                      fontSize: "20px",
                      color: "white",
                    }}
                  ></i>
                </button>
              </div>

              {/* MENU AREA - PURE WHITE */}
              <div
                style={{
                  width: "100%",
                  flex: 1,
                  background: "rgb(255, 255, 255)",
                  overflowY: "auto",
                  overflowX: "hidden",
                  WebkitOverflowScrolling: "touch",
                  pointerEvents: "auto",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    background: "rgb(255, 255, 255)",
                    minHeight: "100%",
                  }}
                >
                  {menu_data.map((menu, i) => (
                    <React.Fragment key={i}>
                      {/* Simple Link */}
                      {!menu.has_dropdown && (
                        <li
                          style={{
                            background: "rgb(255, 255, 255)",
                            borderBottom: "1px solid rgb(233, 236, 239)",
                          }}
                        >
                          <Link
                            href={menu.link}
                            onClick={handleMenuClick}
                            style={{
                              display: "block",
                              padding: "18px 25px",
                              color: "rgb(30, 41, 59)",
                              textDecoration: "none",
                              fontSize: "16px",
                              fontWeight: "600",
                              background: "rgb(255, 255, 255)",
                            }}
                          >
                            {menu.title}
                          </Link>
                        </li>
                      )}

                      {/* Has Dropdown */}
                      {menu.has_dropdown && !menu.mega_menu && (
                        <li
                          style={{
                            background: "rgb(255, 255, 255)",
                            borderBottom: "1px solid rgb(233, 236, 239)",
                          }}
                        >
                          <div
                            onClick={() => openMobileMenu(menu.title)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "18px 25px",
                              cursor: "pointer",
                              background:
                                navTitle === menu.title
                                  ? "rgb(248, 249, 250)"
                                  : "rgb(255, 255, 255)",
                            }}
                          >
                            <span
                              style={{
                                color: "rgb(30, 41, 59)",
                                fontSize: "16px",
                                fontWeight: "600",
                              }}
                            >
                              {menu.title}
                            </span>
                            <i
                              className={
                                navTitle === menu.title
                                  ? "fas fa-chevron-up"
                                  : "fas fa-chevron-down"
                              }
                              style={{
                                fontSize: "14px",
                                color: "rgb(43, 78, 255)",
                              }}
                            />
                          </div>

                          {navTitle === menu.title &&
                            menu.sub_menus &&
                            menu.sub_menus.length > 0 && (
                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: 0,
                                  margin: 0,
                                  background: "rgb(248, 249, 250)",
                                }}
                              >
                                {menu.sub_menus.map((sub, idx) => (
                                  <li
                                    key={idx}
                                    style={{
                                      background: "rgb(248, 249, 250)",
                                    }}
                                  >
                                    <Link
                                      href={sub.link}
                                      onClick={handleMenuClick}
                                      style={{
                                        display: "block",
                                        padding: "14px 25px 14px 50px",
                                        color: "rgb(71, 85, 105)",
                                        textDecoration: "none",
                                        fontSize: "15px",
                                        background: "rgb(248, 249, 250)",
                                        borderLeft:
                                          "3px solid rgb(43, 78, 255)",
                                      }}
                                    >
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </li>
                      )}

                      {/* Mega Menu */}
                      {menu.mega_menu && (
                        <li
                          style={{
                            background: "rgb(255, 255, 255)",
                            borderBottom: "1px solid rgb(233, 236, 239)",
                          }}
                        >
                          <div
                            onClick={() => openMobileMenu(menu.title)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "18px 25px",
                              cursor: "pointer",
                              background:
                                navTitle === menu.title
                                  ? "rgb(248, 249, 250)"
                                  : "rgb(255, 255, 255)",
                            }}
                          >
                            <span
                              style={{
                                color: "rgb(30, 41, 59)",
                                fontSize: "16px",
                                fontWeight: "600",
                              }}
                            >
                              {menu.title}
                            </span>
                            <i
                              className={
                                navTitle === menu.title
                                  ? "fas fa-chevron-up"
                                  : "fas fa-chevron-down"
                              }
                              style={{
                                fontSize: "14px",
                                color: "rgb(43, 78, 255)",
                              }}
                            />
                          </div>

                          {navTitle === menu.title &&
                            menu.mega_menus &&
                            menu.mega_menus.length > 0 && (
                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: 0,
                                  margin: 0,
                                  background: "rgb(248, 249, 250)",
                                }}
                              >
                                {menu.mega_menus.map((mega_m, idx) => (
                                  <li key={idx}>
                                    <div
                                      onClick={() =>
                                        openSubMobileMenu(mega_m.title)
                                      }
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "14px 25px 14px 50px",
                                        cursor: "pointer",
                                        background: "rgb(248, 249, 250)",
                                      }}
                                    >
                                      <span
                                        style={{
                                          color: "rgb(30, 41, 59)",
                                          fontSize: "15px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {mega_m.title}
                                      </span>
                                      <i
                                        className={
                                          subMenu === mega_m.title
                                            ? "fas fa-chevron-up"
                                            : "fas fa-chevron-down"
                                        }
                                        style={{
                                          fontSize: "12px",
                                          color: "rgb(43, 78, 255)",
                                        }}
                                      />
                                    </div>

                                    {subMenu === mega_m.title &&
                                      mega_m.layout &&
                                      mega_m.layout.length > 0 && (
                                        <ul
                                          style={{
                                            listStyle: "none",
                                            padding: 0,
                                            margin: 0,
                                            background: "rgb(255, 255, 255)",
                                          }}
                                        >
                                          {mega_m.layout.map(
                                            (sub_m, subIdx) => (
                                              <li key={subIdx}>
                                                <Link
                                                  href={sub_m.link}
                                                  onClick={handleMenuClick}
                                                  style={{
                                                    display: "block",
                                                    padding:
                                                      "12px 25px 12px 75px",
                                                    color: "rgb(100, 116, 139)",
                                                    textDecoration: "none",
                                                    fontSize: "14px",
                                                    background:
                                                      "rgb(255, 255, 255)",
                                                  }}
                                                >
                                                  {sub_m.title}
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                  </li>
                                ))}
                              </ul>
                            )}
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      {/* ✅ HAMBURGER BUTTON - BERUBAH JADI X */}
      <button
        onClick={() => setToggle(!toggle)}
        style={{
          background: toggle
            ? "linear-gradient(135deg, rgb(239, 68, 68) 0%, rgb(220, 38, 38) 100%)"
            : "linear-gradient(135deg, rgb(43, 78, 255) 0%, rgb(102, 126, 234) 100%)",
          border: "none",
          borderRadius: "12px",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "4px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: toggle
            ? "0 4px 15px rgba(239, 68, 68, 0.4)"
            : "0 4px 15px rgba(43, 78, 255, 0.4)",
          position: "relative",
          zIndex: 100000,
        }}
        onMouseEnter={(e) => {
          if (toggle) {
            e.currentTarget.style.transform = "rotate(90deg) scale(1.1)";
          } else {
            e.currentTarget.style.transform = "scale(1.1)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotate(0deg) scale(1)";
        }}
      >
        {toggle ? (
          // ✅ ICON X KETIKA MENU TERBUKA
          <i
            className="fas fa-times"
            style={{
              fontSize: "24px",
              color: "white",
              fontWeight: "bold",
            }}
          ></i>
        ) : (
          // ICON HAMBURGER KETIKA MENU TERTUTUP
          <>
            <span
              style={{
                width: "22px",
                height: "2.5px",
                background: "white",
                borderRadius: "2px",
              }}
            ></span>
            <span
              style={{
                width: "22px",
                height: "2.5px",
                background: "white",
                borderRadius: "2px",
              }}
            ></span>
            <span
              style={{
                width: "22px",
                height: "2.5px",
                background: "white",
                borderRadius: "2px",
              }}
            ></span>
          </>
        )}
      </button>

      {/* Menu Portal */}
      {menuContent}
    </>
  );
};

export default MobileMenus;
