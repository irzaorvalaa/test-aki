import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeroArea = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {!isMobile ? (
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
      ) : (
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
      )}
    </>
  );
};

export default HeroArea;
