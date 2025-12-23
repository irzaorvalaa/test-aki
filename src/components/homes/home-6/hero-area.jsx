// src/components/homes/home-6/hero-area.jsx (WITH AUTOPLAY SLIDER)
import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    desktop: "/assets/img/bg/homepage-sjm2rev.webp",
    mobile: "/assets/img/logo/roll.jpg",
    alt: "Toko Aki Sentosa Jaya Mandiri Cirebon - Slide 1",
  },
  {
    id: 2,
    desktop: "/assets/img/bg/page-banner.jpg",
    mobile: "/assets/img/logo/roll.jpg",
    alt: "Toko Aki Sentosa Jaya Mandiri Cirebon - Slide 2",
  },
  {
    id: 3,
    desktop: "/assets/img/bg/homepage-sjm2rev.webp",
    mobile: "/assets/img/logo/roll.jpg",
    alt: "Toko Aki Sentosa Jaya Mandiri Cirebon - Slide 3",
  },
  {
    id: 4,
    desktop: "/assets/img/bg/page-title-bg-3.jpg",
    mobile: "/assets/img/logo/roll.jpg",
    alt: "Toko Aki Sentosa Jaya Mandiri Cirebon - Slide 4",
  },
  {
    id: 5,
    desktop: "/assets/img/bg/homepage-sjm2rev.webp",
    mobile: "/assets/img/logo/roll.jpg",
    alt: "Toko Aki Sentosa Jaya Mandiri Cirebon - Slide 5",
  },
];

const HeroArea = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="hero-slider-wrapper">
        {/* Desktop Slider */}
        <div className="hero-image-desktop">
          <div className="slider-container">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? "active" : ""}`}
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <Image
                  src={slide.desktop}
                  alt={slide.alt}
                  width={1920}
                  height={544}
                  priority={index === 0}
                  quality={75}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="slider-arrow slider-prev"
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="slider-arrow slider-next"
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Dots Indicator */}
            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Image (No Slider) */}
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
      </div>

      <style jsx>{`
        .hero-slider-wrapper {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .hero-image-desktop {
          display: block;
          width: 100%;
          aspect-ratio: 1920 / 544;
          position: relative;
        }

        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        /* Navigation Arrows */
        .slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .slider-arrow:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .slider-prev {
          left: 20px;
        }

        .slider-next {
          right: 20px;
        }

        .slider-arrow i {
          font-size: 20px;
          color: #1e293b;
        }

        /* Dots Indicator */
        .slider-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid white;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot.active {
          width: 40px;
          border-radius: 6px;
          background: white;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.5);
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.7);
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

          .slider-arrow {
            width: 40px;
            height: 40px;
          }

          .slider-prev {
            left: 10px;
          }

          .slider-next {
            right: 10px;
          }

          .slider-arrow i {
            font-size: 16px;
          }

          .slider-dots {
            bottom: 15px;
            gap: 8px;
          }

          .dot {
            width: 10px;
            height: 10px;
          }

          .dot.active {
            width: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroArea;
