// src/components/social-links.jsx (INSTAGRAM ONLY - CUSTOM STYLED - BIGGER)
import Link from "next/link";

const social_links = [
  {
    link: "https://www.instagram.com/toko_aki_sentosajayamandiri/",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          target={l.target ? l.target : ""}
          className="instagram-link"
          aria-label={l.name}
        >
          <i className={l.icon}></i>
        </Link>
      ))}

      {/* ✅ CUSTOM INSTAGRAM STYLING - BIGGER VERSION */}
      <style jsx>{`
        .instagram-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px; /* ⬆️ Naik dari 40px */
          height: 50px; /* ⬆️ Naik dari 40px */
          border-radius: 14px;
          background: linear-gradient(
            135deg,
            #405de6 0%,
            #5851db 10%,
            #833ab4 25%,
            #c13584 50%,
            #e1306c 75%,
            #fd1d1d 100%
          );
          color: white;
          font-size: 26px; /* ⬆️ Naik dari 20px */
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(225, 48, 108, 0.3);
          text-decoration: none;
        }

        .instagram-link:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 6px 20px rgba(225, 48, 108, 0.5);
        }

        .instagram-link i {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </>
  );
};

export default SocialLinks;

const copy_right_text = {
  copy_right: (
    <>
      © Copyright <span>©{new Date().getFullYear()}</span> Sentosa Jaya Mandiri
      Cirebon. All Rights Reserved{" "}
    </>
  ),
};
const { copy_right } = copy_right_text;

export const CopyRight = () => {
  return <>{copy_right}</>;
};

//  social link data 02 - INSTAGRAM ONLY (BIGGER VERSION)
const social_links_two = [
  {
    link: "https://www.instagram.com/sentosajayamandiri_cirebon/",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_two.map((link, i) => (
        <Link
          key={i}
          target={link.target}
          href={link.link}
          className="instagram-link-two"
          aria-label={link.name}
        >
          <i className={link.icon}></i>
          <span></span>
        </Link>
      ))}

      {/* ✅ CUSTOM INSTAGRAM STYLING - VERSION 2 (BIGGER) */}
      <style jsx>{`
        .instagram-link-two {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 55px; /* ⬆️ Naik dari 45px */
          height: 55px; /* ⬆️ Naik dari 45px */
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #405de6 0%,
            #5851db 10%,
            #833ab4 25%,
            #c13584 50%,
            #e1306c 75%,
            #fd1d1d 100%
          );
          color: white;
          font-size: 28px; /* ⬆️ Naik dari 22px */
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(225, 48, 108, 0.4);
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .instagram-link-two:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 25px rgba(225, 48, 108, 0.6);
        }

        .instagram-link-two i {
          position: relative;
          z-index: 2;
        }

        .instagram-link-two span {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle at 30% 107%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .instagram-link-two:hover span {
          opacity: 1;
        }
      `}</style>
    </>
  );
};
