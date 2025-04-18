"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../utils/productData";
import ProductCard from "./ProductCard";

const ShopDetails = ({ productId }) => {
  const product = products.find(p => p.id === parseInt(productId));
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id);

  if (!product) {
    return <div>Məhsul tapılmadı</div>;
  }

  return (
    <section className="product-details space-top">
      <div className="container">
        <div className="row gx-80">
          <div className="col-lg-6">
            <div className="product-thumb">
              <div className="img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-tag">Sale</div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="product-about">
              <h2 className="product-title">{product.title}</h2>
              <div className="product-specs">
                <table className="specs-table">
                  <tbody>
                    <tr>
                      <th>Marka:</th>
                      <td>{product.brand || "IberAuto"}</td>
                    </tr>
                    <tr>
                      <th>Model:</th>
                      <td>{product.model || "N/A"}</td>
                    </tr>
                    <tr>
                      <th>Məhsul Kodu:</th>
                      <td>{product.code || `IBER-${product.id}`}</td>
                    </tr>
                    <tr>
                      <th>İstehsalçı:</th>
                      <td>{product.manufacturer || "IberAuto"}</td>
                    </tr>
                    <tr>
                      <th>İstehsalçı Kodu:</th>
                      <td>{product.manufacturerCode || `IBER-MC-${product.id}`}</td>
                    </tr>
                    <tr>
                      <th>Qiymət:</th>
                      <td className="price">
                        {product.price}
                        {product.oldPrice && <del>{product.oldPrice}</del>}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="product-actions">
                <button className="btn style2">Sifariş et</button>
                <Link href="/products" className="btn style-border2">
                  Geri qayıt
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="space-extra-top space-bottom">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <div className="title-area">
                <h2 className="sec-title">Oxşar Məhsullar</h2>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="sec-btn mb-40">
                <Link href="/products" className="btn style-border2">
                  Daha çox
                </Link>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            {relatedProducts.slice(0, 4).map((relatedProduct) => (
              <div key={relatedProduct.id} className="col-xl-3 col-md-6">
                <ProductCard product={relatedProduct} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
