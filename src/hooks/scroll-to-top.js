// src/components/common/whatsapp-floating.jsx
import React, { useState, useEffect } from "react";

const WhatsAppFloating = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hanya render di client untuk menghindari hydration error
  if (!mounted) return null;

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const message = "Halo SJM Aki Cirebon, saya ingin menanyakan tentang aki";
    const phoneNumber = "6281234567890";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Handle Google Maps click
  const handleMapsClick = () => {
    const mapsUrl =
      "https://www.google.com/maps/place/Toko+Aki+%22Sentosa+Jaya+Mandiri%22/@-6.7200727,108.5658902,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6ee3b9741cae97:0x7efae4ea6b92ca7e!8m2!3d-6.7200727!4d108.5684651!16s%2Fg%2F11svtkh39t?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D";
    window.open(mapsUrl, "_blank");
  };

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="floating-buttons-container">
        {/* Google Maps Button */}
        <div className="floating-btn-item">
          <div className="floating-btn maps-btn" onClick={handleMapsClick}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <span className="tooltip">Lokasi Toko</span>
        </div>

        {/* WhatsApp Button */}
        <div className="floating-btn-item">
          <div
            className="floating-btn whatsapp-btn"
            onClick={handleWhatsAppClick}
          >
            <div className="pulse-ring"></div>
            <i className="fab fa-whatsapp"></i>
          </div>
          <span className="tooltip">WhatsApp Kami</span>
        </div>
      </div>

      <style jsx>{`
        /* Container for stacked buttons */
        .floating-buttons-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 999;
        }

        /* Wrapper for button + tooltip */
        .floating-btn-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        /* Base button style */
        .floating-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: visible;
        }

        .floating-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .floating-btn i {
          font-size: 32px;
          color: white;
          position: relative;
          z-index: 3;
        }

        /* Google Maps Button - Red */
        .maps-btn {
          background: linear-gradient(135deg, #ea4335 0%, #d32f2f 100%);
        }

        .maps-btn:hover {
          background: linear-gradient(135deg, #d32f2f 0%, #c62828 100%);
        }

        /* WhatsApp Button - Green */
        .whatsapp-btn {
          background: #25d366;
        }

        .whatsapp-btn:hover {
          background: #20ba5a;
        }

        /* Pulse animation - real element (no pseudo-element conflict) */
        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #25d366;
          opacity: 0.5;
          animation: pulse 2s infinite;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        /* Tooltip - Real Element (bukan pseudo) */
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

        /* Arrow untuk tooltip */
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

        /* Show tooltip on hover */
        .floating-btn-item:hover .tooltip {
          opacity: 1;
          right: 80px;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .floating-buttons-container {
            bottom: 20px;
            right: 20px;
            gap: 12px;
          }

          .floating-btn {
            width: 50px;
            height: 50px;
          }

          .floating-btn i {
            font-size: 26px;
          }

          /* Hide tooltips on mobile */
          .tooltip {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloating;
