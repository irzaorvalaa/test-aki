// src/layout/footers/footer.jsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks, { CopyRight } from "../../components/common/social-links";

// footer data
const footer_data = [
  {
    id: 1,
    title: "Quick Links",
    links: [
      { link_title: "Beranda", link: "/" },
      { link_title: "Tentang Kami", link: "/about" },
      { link_title: "Galeri Kami", link: "/galeri" },
      { link_title: "Produk", link: "/product" },
      { link_title: "Layanan", link: "/service" },
      { link_title: "Hubungi Kami", link: "/contact" },
    ],
  },
  {
    id: 2,
    title: "Area Layanan",
    links: [
      { link_title: "Wilayah Kesambi", link: "/aki/kesambi" },
      { link_title: "Wilayah Kedawung", link: "/aki/kedawung" },
      { link_title: "Wilayah Lemahwungkuk", link: "/aki/lemahwungkuk" },
      { link_title: "Wilayah Harjamukti", link: "/aki/harjamukti" },
      { link_title: "Wilayah Talun", link: "/aki/talun" },
      { link_title: "Wilayah Mundu", link: "/aki/mundu" },
      { link_title: "Wilayah Kejaksan", link: "/aki/kejaksan" },
      { link_title: "Wilayah Gunung Jati", link: "/aki/gunungjati" },
      { link_title: "Wilayah Lemahabang", link: "/aki/lemahabang" },
      { link_title: "Wilayah Plumbon", link: "/aki/plumbon" },
    ],
  },
];

const Footer = ({ home_2, style_4, footer_bg, no_style, style_footer_el }) => {
  return (
    <>
      <footer
        className={`${
          no_style
            ? ""
            : home_2
            ? "footer-bg"
            : style_4
            ? "footer-4-bg"
            : "gray-bg"
        } ${style_footer_el && "mt-50"}`}
        style={{
          backgroundImage: `url(${
            footer_bg ? "/assets/img/bg/footer-bg.png" : ""
          })`,
        }}
      >
        <div
          className={`footer-area ${
            style_4 ? "pt-100" : footer_bg ? "pt-180" : "pt-120"
          } pb-60`}
        >
          <div className="container">
            <div className="row">
              {/* Logo & Description */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-text">
                    <Link href="/" className="footer-logo-link">
                      <Image
                        src="/assets/img/logo/logo.webp"
                        alt="Sentosa Jaya Mandiri - Toko Aki Cirebon"
                        width={220}
                        height={100}
                        style={{
                          width: "auto",
                          height: "100px",
                          maxWidth: "220px",
                          objectFit: "contain",
                        }}
                        priority
                      />
                    </Link>
                    <p>
                      Toko aki terpercaya di Cirebon dengan layanan 24 jam.
                      Melayani penjualan aki mobil, motor, dan truk dengan
                      garansi resmi dan harga terbaik.
                    </p>
                  </div>
                  <div className="footer-social">
                    <SocialLinks />
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-40">
                  <h3
                    className="quick-links-title"
                    style={{ marginBottom: "25px" }}
                  >
                    Quick Links
                  </h3>
                  <div className="footer-links">
                    <ul>
                      {footer_data[0].links.map((link, index) => (
                        <li key={index}>
                          <Link href={link.link}>{link.link_title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Area Layanan - 2 Kolom Grid */}
              <div className="col-xl-6 col-lg-4 col-md-12">
                <div className="footer-widget mb-40">
                  <h3
                    className="area-layanan-title"
                    style={{
                      marginBottom: "25px",
                      textAlign: "center",
                      marginLeft: "-180px",
                    }}
                  >
                    Area Layanan Kami
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px 20px",
                    }}
                  >
                    <ul>
                      {footer_data[1].links.slice(0, 5).map((link, index) => (
                        <li key={index}>
                          <Link href={link.link}>{link.link_title}</Link>
                        </li>
                      ))}
                    </ul>
                    <ul>
                      {footer_data[1].links.slice(5, 10).map((link, index) => (
                        <li key={index}>
                          <Link href={link.link}>{link.link_title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-border">
              <div className="row">
                <div className="col-12">
                  <div className="copyright text-center">
                    <p>
                      <CopyRight />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ✅ CSS RESPONSIVE FOOTER */}
      <style jsx>{`
        .footer-logo-link img {
          width: auto !important;
          height: 100px !important;
          max-width: 220px;
          object-fit: contain;
          display: block;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links ul li {
          margin-bottom: 10px;
        }

        .footer-links ul li a {
          color: #666;
          transition: color 0.3s;
        }

        .footer-links ul li a:hover {
          color: #ff5722;
        }

        /* Tablet */
        @media (max-width: 991px) {
          .footer-logo-link img {
            height: 80px !important;
            max-width: 200px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .footer-logo-link img {
            height: 60px !important;
            max-width: 180px;
            margin: 0 auto 20px;
          }

          /* ✅ Quick Links & Area Layanan rata kiri di mobile */
          .quick-links-title,
          .area-layanan-title {
            text-align: left !important;
            margin-left: 0 !important;
          }
        }

        /* Extra small devices */
        @media (max-width: 480px) {
          .footer-logo-link img {
            height: 50px !important;
            max-width: 160px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
