import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="contact-map">
        <div id="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.4071305731!2d108.56589017499472!3d-6.720072693275849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee3b9741cae97%3A0x7efae4ea6b92ca7e!2sToko%20Aki%20%22Sentosa%20Jaya%20Mandiri%22!5e0!3m2!1sen!2sid!4v1765210885854!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
