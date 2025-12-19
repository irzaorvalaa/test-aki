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
          quality={90}
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
          quality={90}
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
          }
        }
      `}</style>
    </>
  );
};

export default HeroArea;
