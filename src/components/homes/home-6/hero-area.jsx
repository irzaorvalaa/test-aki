// src/components/homes/home-6/hero-area.jsx (OPTIMIZED - NO CLS!)
import React from "react";
import Image from "next/image";

const HeroArea = () => {
  return (
    <>
      {/* Desktop Banner */}
      <div className="hero-image-desktop">
        <Image
          src="/assets/img/bg/homepage-sjm2rev.png"
          alt="Toko Aki Sentosa Jaya Mandiri Cirebon"
          width={1920}
          height={544}
          priority
          fetchPriority="high" // ✅ TAMBAH INI - Force high priority
          quality={75} // ✅ TURUNKAN dari 90 ke 75 (cukup bagus, lebih ringan)
          sizes="100vw" // ✅ TAMBAH untuk responsive optimization
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Mobile Banner */}
      <div className="hero-image-mobile">
        <Image
          src="/assets/img/logo/roll.jpg"
          alt="Toko Aki Sentosa Jaya Mandiri Cirebon"
          width={1080}
          height={1920}
          priority
          fetchPriority="high" // ✅ TAMBAH INI
          quality={75} // ✅ TURUNKAN dari 90 ke 75
          sizes="100vw" // ✅ TAMBAH
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      <style jsx>{`
        .hero-image-desktop {
          display: block;
          width: 100%;
          margin: 0;
          padding: 0;
          /* ✅ TAMBAH aspect-ratio untuk prevent CLS */
          aspect-ratio: 1920 / 544;
        }

        .hero-image-mobile {
          display: none;
        }

        @media (max-width: 768px) {
          .hero-image-desktop {
            display: none;
          }

          .hero-image-mobile {
            display: block;
            /* ✅ TAMBAH aspect-ratio untuk prevent CLS */
            aspect-ratio: 1080 / 1920;
          }
        }
      `}</style>
    </>
  );
};

export default HeroArea;
