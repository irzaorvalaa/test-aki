import Image from "next/image";
import Link from "next/link";
import React from "react";
import footer_logo from "@assets/img/logo/logo.png";
import SocialLinks, { CopyRight } from "@/src/components/common/social-links";

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
              <div className="col-xl-4 col-lg-6 col-md-8">
                <div className="footer-widget mb-40">
                  <div className="footer-text">
                    <Link href="/">
                      <Image src={footer_logo} alt="theme-pure" />
                    </Link>
                    <p>
                      Winged moving moveth created for shall and a divide the
                      their days male midst shall hath doesn't won't for. Midst
                      life.Over a great night. Green upon years rule ying.
                    </p>
                  </div>
                  <div className="footer-social">
                    <SocialLinks />
                  </div>
                </div>
              </div>

              {/* Quick Links - Custom Layout */}
              {footer_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-6 col-md-4">
                  <div className="footer-widget mb-40">
                    {/* Title Center */}
                    <h3 style={{ textAlign: "center", marginBottom: "25px" }}>
                      {item.title}
                    </h3>

                    {/* 2 Kolom Layout */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px",
                      }}
                    >
                      {/* Kolom Kiri - 3 link pertama */}
                      <ul>
                        {item.links.slice(0, 3).map((link, index) => (
                          <li key={index}>
                            <Link href={link.link}>{link.link_title}</Link>
                          </li>
                        ))}
                      </ul>

                      {/* Kolom Kanan - 3 link terakhir */}
                      <ul>
                        {item.links.slice(3, 6).map((link, index) => (
                          <li key={index}>
                            <Link href={link.link}>{link.link_title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
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
    </>
  );
};

export default Footer;
