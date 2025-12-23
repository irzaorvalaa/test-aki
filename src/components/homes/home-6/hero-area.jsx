import React from "react";
import Image from "next/image";

const HeroArea = () => {
  return (
    <>
      <div className="hero-image-desktop">
        <Image
          src="/assets/img/bg/homepage-sjm2rev.webp"
          alt="Toko Aki Sentosa Jaya Mandiri Cirebon"
          width={1920}
          height={544}
          priority
          fetchPriority="high"
          quality={75}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      <div className="hero-image-mobile">
        <Image
          src="/assets/img/logo/roll.jpg"
          alt="Toko Aki Sentosa Jaya Mandiri Cirebon"
          width={1080}
          height={1920}
          priority
          fetchPriority="high"
          quality={75}
          sizes="100vw"
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
            aspect-ratio: 1080 / 1920;
          }
        }
      `}</style>
    </>
  );
};

export default HeroArea;
