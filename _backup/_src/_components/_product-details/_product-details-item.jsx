import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../common/social-links";
import { addToCart } from "@/src/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { add_to_wishlist } from "@/src/redux/features/wishlist/wishlistSlice";
import CommentsReply from "./../blog-pages/blog-details/comments-reply";

const setting = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProductDetailsItem = ({ sp_item }) => {
  const dispatch = useDispatch();
  const {
    title,
    price,
    old_price,
    stock,
    category,
    tags,
    sku,
    sm_des,
    slider_imgs,
    description,
    specs,
    rating = 5,
    img,
  } = sp_item || {};

  // Format price to IDR
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Ensure slider_imgs has fallback
  const productImages =
    slider_imgs && slider_imgs.length > 0
      ? slider_imgs
      : img
      ? [img]
      : ["/assets/img/shop/img1.jpg"];

  return (
    <>
      <section className="shop-banner-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="product-details-img mb-30">
                <Slider {...setting} className="product-large-img">
                  {productImages.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      width={600}
                      height={600}
                      style={{ objectFit: "cover" }}
                      alt={title || "Product"}
                    />
                  ))}
                </Slider>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="product-details mb-30">
                <div className="product-details-title mb0">
                  <div className="ratings mb-10">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`ti-star ${i < rating ? "active" : ""}`}
                      ></i>
                    ))}
                  </div>
                  <h3>{title}</h3>
                  <div className="price details-price pb-15">
                    <span>{formatPrice(price)}</span>
                    {old_price && (
                      <span className="old-price">
                        {formatPrice(old_price)}
                      </span>
                    )}
                  </div>
                  <span className="stock">
                    {stock !== false ? "Tersedia" : "Stok Habis"}
                  </span>
                </div>

                {/* Specifications Section */}
                {specs && (
                  <div className="product-specs-box mt-20 mb-20">
                    <h5>Spesifikasi:</h5>
                    <ul className="specs-list">
                      {specs.capacity && (
                        <li>
                          <i className="fas fa-battery-full"></i>
                          <strong>Kapasitas:</strong> {specs.capacity}
                        </li>
                      )}
                      {specs.voltage && (
                        <li>
                          <i className="fas fa-bolt"></i>
                          <strong>Voltase:</strong> {specs.voltage}
                        </li>
                      )}
                      {specs.warranty && (
                        <li>
                          <i className="fas fa-shield-alt"></i>
                          <strong>Garansi:</strong> {specs.warranty}
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                <p>{sm_des || description}</p>

                <div className="product-cat mt-5 mb0">
                  <span>Kategori: </span>
                  {/* Fix: Check if category is array or string */}
                  {Array.isArray(category) ? (
                    category.map((cate, index) => (
                      <Link href="#" key={index}>
                        {cate}
                      </Link>
                    ))
                  ) : (
                    <Link href="#">{category || "Aki Mobil"}</Link>
                  )}
                </div>

                {tags && (
                  <div className="product-cat mb0">
                    <span>Tags: </span>
                    {Array.isArray(tags) ? (
                      tags.map((tag, i) => (
                        <Link href="#" key={i}>
                          {tag}{" "}
                        </Link>
                      ))
                    ) : (
                      <Link href="#">{tags}</Link>
                    )}
                  </div>
                )}

                <div className="product-cat mb0">
                  <span>SKU: </span>
                  <Link href="#">{sku || `AKI-${sp_item?.id}`}</Link>
                </div>

                <div className="product-details-action mb-45 fix">
                  <form className="f-left" action="#">
                    <div className="plus-minus">
                      <div className="cart-plus-minus">
                        <input type="text" defaultValue="1" />
                      </div>
                    </div>
                  </form>
                  <div className="product-action-list f-left">
                    <button
                      className="btn-cart"
                      onClick={() => dispatch(addToCart(sp_item))}
                    >
                      Tambah ke Keranjang
                    </button>
                    <button
                      className="action-btn"
                      onClick={() => dispatch(add_to_wishlist(sp_item))}
                    >
                      <i className="ti-heart"></i>
                    </button>
                  </div>
                </div>

                <div className="product-social fix">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-desc-area pb-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bakix-details-tab">
                <ul
                  className="nav text-center justify-content-center pb-30 mb-30"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="description-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#description-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="description-tab-pane"
                      aria-selected="true"
                      tabIndex="-1"
                    >
                      Deskripsi
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="information-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#information-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="information-tab-pane"
                      aria-selected="false"
                      tabIndex="-1"
                    >
                      Informasi Tambahan
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="reviews-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#reviews-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="reviews-tab-pane"
                      aria-selected="false"
                      tabIndex="-1"
                    >
                      Review (10)
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description-tab-pane"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div className="event-text mb-40">
                    <h5>Tentang Produk Ini</h5>
                    <p>
                      {description ||
                        sm_des ||
                        "Aki berkualitas tinggi dengan performa maksimal untuk kendaraan Anda. Dilengkapi dengan teknologi terkini untuk daya tahan yang lebih lama dan performa yang stabil."}
                    </p>

                    <h5 className="mt-30">Keunggulan Produk:</h5>
                    <ul className="product-features">
                      <li>
                        <i className="fas fa-check-circle"></i> Produk original
                        bergaransi resmi
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Maintenance free
                        (bebas perawatan)
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Daya tahan
                        baterai lebih lama
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Cocok untuk
                        berbagai jenis kendaraan
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Gratis instalasi
                        dan pasang
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> Gratis ongkir
                        area Cirebon
                      </li>
                    </ul>

                    <h5 className="mt-30">Cara Perawatan:</h5>
                    <p>
                      Untuk menjaga performa aki tetap optimal, pastikan
                      terminal aki selalu bersih dari korosi, periksa level air
                      aki secara berkala (untuk tipe basah), dan hindari
                      penggunaan aksesori elektronik berlebihan saat mesin mati.
                      Lakukan pengecekan rutin di bengkel terpercaya.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="information-tab-pane"
                  role="tabpanel"
                  aria-labelledby="information-tab"
                >
                  <div className="additional-info">
                    <div className="table-responsive">
                      <h4>Informasi Tambahan</h4>
                      <table className="table">
                        <tbody>
                          {specs?.capacity && (
                            <tr>
                              <th>Kapasitas</th>
                              <td>{specs.capacity}</td>
                            </tr>
                          )}
                          {specs?.voltage && (
                            <tr>
                              <th>Voltase</th>
                              <td>{specs.voltage}</td>
                            </tr>
                          )}
                          {specs?.warranty && (
                            <tr>
                              <th>Garansi</th>
                              <td>{specs.warranty}</td>
                            </tr>
                          )}
                          <tr>
                            <th>Brand</th>
                            <td className="text-capitalize">
                              {category || "-"}
                            </td>
                          </tr>
                          <tr>
                            <th>Kondisi</th>
                            <td>Baru</td>
                          </tr>
                          <tr>
                            <th>Gratis Ongkir</th>
                            <td>Area Cirebon & Sekitarnya</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="reviews-tab-pane"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <div className="additional-info">
                    <div className="event-text mb-40">
                      <CommentsReply />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .product-specs-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          border-radius: 10px;
          color: white;
        }

        .product-specs-box h5 {
          color: white;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .specs-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .specs-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .specs-list li:last-child {
          border-bottom: none;
        }

        .specs-list i {
          font-size: 18px;
          width: 25px;
        }

        .specs-list strong {
          margin-right: 5px;
        }

        .ratings .ti-star {
          color: #ddd;
          font-size: 16px;
        }

        .ratings .ti-star.active {
          color: #ffc107;
        }

        .product-features {
          list-style: none;
          padding: 0;
        }

        .product-features li {
          padding: 10px 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .product-features i {
          color: #2b4eff;
          font-size: 18px;
        }

        .text-capitalize {
          text-transform: capitalize;
        }
      `}</style>
    </>
  );
};

export default ProductDetailsItem;
