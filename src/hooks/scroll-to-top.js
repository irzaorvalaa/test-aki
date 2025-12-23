// src/components/common/whatsapp-floating.jsx
import React, { useState, useEffect } from "react";

const WhatsAppFloating = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleWhatsAppClick = () => {
    const message = "Halo SJM Aki Cirebon, saya ingin menanyakan tentang aki";
    const phoneNumber = "6281779954236";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleMapsClick = () => {
    const mapsUrl =
      "https://www.google.com/maps/place/Toko+Aki+%22Sentosa+Jaya+Mandiri%22/@-6.7200727,108.5658902,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6ee3b9741cae97:0x7efae4ea6b92ca7e!8m2!3d-6.7200727!4d108.5684651!16s%2Fg%2F11svtkh39t?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D";
    window.open(mapsUrl, "_blank");
  };

  return (
    <>
      <div className="floating-buttons-container">
        {/* Google Maps Button */}
        <div className="floating-btn-wrapper">
          <button className="floating-btn maps-btn" onClick={handleMapsClick}>
            <i className="fas fa-map-marker-alt"></i>
          </button>
          <span className="tooltip">Lokasi Toko</span>
        </div>

        {/* WhatsApp Button */}
        <div className="floating-btn-wrapper">
          <div className="pulse-container">
            <div className="pulse-ring"></div>
          </div>
          <button
            className="floating-btn whatsapp-btn"
            onClick={handleWhatsAppClick}
          >
            <i className="fab fa-whatsapp"></i>
          </button>
          <span className="tooltip">WhatsApp Kami</span>
        </div>
      </div>

      <style jsx>{`
        .floating-buttons-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 999;
        }

        /* Wrapper - NO CLICK */
        .floating-btn-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          pointer-events: none;
        }

        /* Button - EXACT CLICK AREA */
        .floating-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
          z-index: 10;
          pointer-events: auto;
          overflow: hidden; /* ✅ FORCE CUT */
        }

        .floating-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .floating-btn i {
          font-size: 32px;
          color: white;
          z-index: 3;
          pointer-events: none;
        }

        /* Maps Button */
        .maps-btn {
          background: linear-gradient(135deg, #ea4335 0%, #d32f2f 100%);
        }

        .maps-btn:hover {
          background: linear-gradient(135deg, #d32f2f 0%, #c62828 100%);
        }

        /* WhatsApp Button */
        .whatsapp-btn {
          background: #25d366;
        }

        .whatsapp-btn:hover {
          background: #20ba5a;
        }

        /* ✅ Pulse container - BEHIND button, NO CLICK */
        .pulse-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 1;
        }

        .pulse-ring {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25d366;
          animation: pulse 2s infinite;
          pointer-events: none;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        /* Tooltip */
        .tooltip {
          position: absolute;
          right: 75px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .tooltip::after {
          content: "";
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 8px solid rgba(0, 0, 0, 0.9);
        }

        .floating-btn-wrapper:hover .tooltip {
          opacity: 1;
          right: 80px;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .floating-buttons-container {
            bottom: 20px;
            right: 20px;
            gap: 12px;
          }

          .floating-btn-wrapper {
            width: 50px;
            height: 50px;
          }

          .floating-btn {
            width: 50px;
            height: 50px;
          }

          .floating-btn i {
            font-size: 26px;
          }

          .pulse-container {
            width: 50px;
            height: 50px;
          }

          .pulse-ring {
            width: 50px;
            height: 50px;
          }

          .tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloating;
