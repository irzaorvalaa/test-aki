// src/components/common/whatsapp-floating.jsx (WITH GOOGLE MAPS BUTTON)
import React from "react";

const WhatsAppFloating = () => {
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
      {/* ✅ Floating Buttons Container */}
      <div className="floating-buttons-container">
        {/* Google Maps Button */}
        <div
          className="floating-btn maps-btn"
          onClick={handleMapsClick}
          title="Lokasi Toko"
        >
          <i className="fas fa-map-marker-alt"></i>
        </div>

        {/* WhatsApp Button */}
        <div
          className="floating-btn whatsapp-btn"
          onClick={handleWhatsAppClick}
          title="Chat WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </div>
      </div>

      <style jsx>{`
        /* ✅ Container for stacked buttons */
        .floating-buttons-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 999;
        }

        /* ✅ Base button style */
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
        }

        .floating-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        .floating-btn i {
          font-size: 32px;
          color: white;
          position: relative;
          z-index: 2;
        }

        /* ✅ Google Maps Button - Red */
        .maps-btn {
          background: linear-gradient(135deg, #ea4335 0%, #d32f2f 100%);
        }

        .maps-btn:hover {
          background: linear-gradient(135deg, #d32f2f 0%, #c62828 100%);
        }

        /* ✅ WhatsApp Button - Green */
        .whatsapp-btn {
          background: #25d366;
        }

        .whatsapp-btn:hover {
          background: #20ba5a;
        }

        /* ✅ Pulse animation for WhatsApp only */
        .whatsapp-btn::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #25d366;
          opacity: 0.5;
          animation: pulse 2s infinite;
          z-index: 1;
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

        /* ✅ Tooltip on hover */
        .floating-btn::after {
          content: attr(title);
          position: absolute;
          right: 70px;
          background: rgba(0, 0, 0, 0.85);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 3;
        }

        .floating-btn:hover::after {
          opacity: 1;
        }

        /* ✅ Mobile Responsive */
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
          .floating-btn::after {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloating;
