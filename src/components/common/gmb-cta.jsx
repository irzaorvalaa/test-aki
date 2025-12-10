const GMBCallToAction = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #4285f4 0%, #34a853 100%)",
        padding: "30px",
        borderRadius: "20px",
        textAlign: "center",
        margin: "40px 0",
      }}
    >
      <h3 style={{ color: "white", marginBottom: "15px" }}>
        📍 Temukan Kami di Google Maps
      </h3>
      <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "20px" }}>
        Lihat review, foto, dan arah ke Toko Aki Sentosa Jaya Mandiri Cirebon
      </p>
      <a
        href="https://maps.app.goo.gl/nnPerGBuvZ6pL1DSA"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          background: "white",
          color: "#4285f4",
          padding: "15px 30px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "700",
        }}
      >
        Lihat di Google Maps
      </a>
    </div>
  );
};

export default GMBCallToAction;
