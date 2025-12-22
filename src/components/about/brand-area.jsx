// src/components/brand/brand-area.jsx (OPTIMIZED - INDONESIA + SEO)
import Link from "next/link";
import Image from "next/image";
import shape_1 from "@assets/img/shape/shape-tr-2.png";
import shape_2 from "@assets/img/shape/shape-c-1.png";

import brand_img_1 from "@assets/img/brand/01.png";
import brand_img_2 from "@assets/img/brand/02.png";
import brand_img_3 from "@assets/img/brand/03.png";
import brand_img_4 from "@assets/img/brand/04.png";
import brand_img_5 from "@assets/img/brand/05.png";

// Brand names untuk SEO alt text
const brandNames = [
  "GS Astra",
  "Yuasa",
  "Incoe",
  "Aspira",
  "Motobatt",
  "GS Astra",
  "Aspira",
  "Motobatt",
  "GS Astra",
];

const brands = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_1,
  brand_img_4,
  brand_img_5,
  brand_img_1,
];

const BrandArea = ({ team }) => {
  return (
    <>
      <div className={`brand-area pos-relative ${team ? "" : "pt-145"} pb-90`}>
        <div className="shape-slider">
          <Image
            className="shape shape-1 shape-5-1"
            src={shape_1}
            alt="Dekorasi bentuk latar belakang"
            quality={70}
            loading="lazy"
            placeholder="blur"
            aria-hidden="true"
          />
          <Image
            className="shape shape-5"
            src={shape_2}
            alt="Dekorasi lingkaran latar belakang"
            quality={70}
            loading="lazy"
            placeholder="blur"
            aria-hidden="true"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="section-title-2 text-center mb-70">
                <h2 className="mb-20">Dipercaya Lebih dari 100+ Perusahaan</h2>
                <p>
                  Melayani berbagai kebutuhan aki untuk kendaraan Anda dengan
                  produk berkualitas terbaik
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {brands.map((item, i) => (
              <div key={i} className="logo-brand-item">
                <div className="brand-img">
                  <Link href="#" aria-label={`Brand aki ${brandNames[i]}`}>
                    <Image
                      src={item}
                      alt={`Logo aki ${brandNames[i]} - Partner Toko Aki Sentosa Jaya Mandiri Cirebon`}
                      quality={70}
                      loading="lazy"
                      placeholder="blur"
                      sizes="(max-width: 768px) 80px, 120px"
                      title={`Aki ${brandNames[i]} tersedia di Toko Aki Sentosa Jaya Mandiri`}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandArea;
