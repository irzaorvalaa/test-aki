import React from "react";

const WhatsAppFloating = () => {
  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const message = "Halo SJM Aki Cirebon, saya ingin menanyakan tentang aki";
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WA Anda
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="whatsapp-floating-btn" onClick={handleWhatsAppClick}>
        <i className="fab fa-whatsapp"></i>
      </div>

      <style jsx>{`
        .whatsapp-floating-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 999;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
        }

        .whatsapp-floating-btn:hover {
          background: #20ba5a;
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        .whatsapp-floating-btn i {
          font-size: 32px;
          color: white;
        }

        /* Pulse animation */
        .whatsapp-floating-btn::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #25d366;
          opacity: 0.5;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .whatsapp-floating-btn {
            width: 50px;
            height: 50px;
            bottom: 20px;
            right: 20px;
          }

          .whatsapp-floating-btn i {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloating;
