// AboutUs.jsx (OPTIMIZED - Indonesian + SEO + Performance)
import React from "react";
import Image from "next/image";
import about_img from "@assets/img/bg/fea-3.png";

const about_content = {
  sub_title: "Tentang Kami",
  title: "Solusi Aki Terpercaya untuk Generasi Bisnis Masa Depan",
  sm_des_1: (
    <>
      Toko Aki Sentosa Jaya Mandiri Cirebon telah melayani kebutuhan aki
      kendaraan sejak lama dengan komitmen memberikan produk berkualitas tinggi
      dan layanan profesional. Kami menyediakan berbagai merek aki terpercaya
      untuk mobil, motor, truk, dan kendaraan komersial lainnya.
    </>
  ),
  sm_des_2: (
    <>
      Dengan pengalaman bertahun-tahun di industri aki otomotif, kami memahami
      pentingnya daya tahan dan performa aki untuk kendaraan Anda. Tim teknisi
      kami siap membantu instalasi, pengecekan, dan konsultasi gratis untuk
      memastikan Anda mendapatkan aki yang tepat sesuai kebutuhan kendaraan.
      Kepercayaan pelanggan adalah prioritas utama kami.
    </>
  ),
};

const { sub_title, title, sm_des_1, sm_des_2 } = about_content;

const AboutUs = () => {
  return (
    <section
      className="features-3-area features-3-area-top pt-150 pb-100 fix"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div
              className="fea-3-img mb-30 wow fadeInLeft animated"
              data-wow-duration="1.5s"
              data-wow-delay=".5s"
            >
              <Image
                src={about_img}
                alt="Toko Aki Sentosa Jaya Mandiri Cirebon - Penyedia Aki Berkualitas"
                title="Aki Berkualitas Tinggi untuk Semua Jenis Kendaraan"
                loading="lazy"
                quality={85}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 offset-xl-1">
            <article className="fea-3-content mb-30 pt-150">
              <span className="theme-color-sub">{sub_title}</span>
              <h2 id="about-heading">{title}</h2>
              <p>{sm_des_1}</p>
              <p>{sm_des_2}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
