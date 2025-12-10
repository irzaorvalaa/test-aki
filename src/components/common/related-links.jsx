import Link from "next/link";

const RelatedLinks = () => {
  return (
    <section style={{ padding: "60px 0", background: "#f8f9fa" }}>
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            fontWeight: "700",
            color: "#1e293b",
          }}
        >
          Halaman Terkait
        </h2>
        <div className="row">
          <div className="col-md-3 mb-3">
            <Link
              href="/product"
              style={{
                display: "block",
                padding: "20px",
                background: "white",
                borderRadius: "12px",
                textAlign: "center",
                textDecoration: "none",
                color: "#2b4eff",
                fontWeight: "600",
                transition: "all 0.3s",
              }}
            >
              🔋 Produk Aki Cirebon
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link
              href="/service"
              style={{
                display: "block",
                padding: "20px",
                background: "white",
                borderRadius: "12px",
                textAlign: "center",
                textDecoration: "none",
                color: "#2b4eff",
                fontWeight: "600",
              }}
            >
              ⚡ Layanan Aki Cirebon
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link
              href="/contact"
              style={{
                display: "block",
                padding: "20px",
                background: "white",
                borderRadius: "12px",
                textAlign: "center",
                textDecoration: "none",
                color: "#2b4eff",
                fontWeight: "600",
              }}
            >
              📞 Hubungi Kami
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link
              href="/faq"
              style={{
                display: "block",
                padding: "20px",
                background: "white",
                borderRadius: "12px",
                textAlign: "center",
                textDecoration: "none",
                color: "#2b4eff",
                fontWeight: "600",
              }}
            >
              ❓ FAQ Aki Cirebon
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
