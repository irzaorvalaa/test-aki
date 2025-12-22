// src/components/services/our-service.jsx (OPTIMIZED - INDONESIA + SEO)
import React from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    icon: "/assets/img/icon/ss-01.png",
    title: "Layanan Lengkap",
    description:
      "Menyediakan berbagai jenis aki untuk mobil, motor, truk dan kendaraan lainnya dengan stok lengkap dan harga terbaik di Cirebon",
  },
  {
    id: 2,
    icon: "/assets/img/icon/ss-02.png",
    title: "Mudah Dijangkau",
    description:
      "Lokasi strategis di Cirebon dengan akses mudah, pelayanan ramah dan konsultasi gratis untuk memilih aki yang tepat untuk kendaraan Anda",
  },
  {
    id: 3,
    icon: "/assets/img/icon/ss-03.png",
    title: "Hemat Waktu Anda",
    description:
      "Proses pembelian dan pemasangan aki cepat dengan teknisi berpengalaman, garansi produk dan layanan antar tersedia untuk area Cirebon",
  },
];

const OurService = () => {
  return (
    <>
      <section
        className="soft-area pos-relative pb-115"
        aria-label="Layanan Toko Aki Sentosa Jaya Mandiri"
      >
        <div className="shape-slider" aria-hidden="true">
          <span className="shape shape-circle shape-c5-1"></span>
          <span className="shape shape-circle shape-c5-2"></span>
          <span className="shape shape-circle shape-c5-3"></span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section-title-2 text-center mb-70">
                <h2 className="mb-20">Keunggulan Layanan Kami</h2>
                <p>
                  Toko Aki Sentosa Jaya Mandiri Cirebon memberikan pelayanan
                  terbaik dengan produk berkualitas untuk semua jenis kendaraan
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <article className="soft-fea-list text-center mb-30">
                  <div className="soft-fea-list-img mb-35">
                    <Image
                      src={service.icon}
                      alt={`Icon ${service.title} - Toko Aki Sentosa Jaya Mandiri Cirebon`}
                      width={80}
                      height={80}
                      quality={75}
                      loading="lazy"
                      style={{
                        width: "auto",
                        height: "auto",
                        maxWidth: "80px",
                      }}
                    />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurService;
