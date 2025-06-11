"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../utils/productData";
import ProductCard from "./ProductCard";

const ShopDetails = ({ product }) => {
  if (!product) return null;
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id);

  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-image">
              <Image
                src={
                  product?.foto?.formats?.large?.url
                    ? `https://api.iberauto.az${product.foto.formats.large.url}`
                    : product?.foto?.url
                      ? `https://api.iberauto.az${product.foto.url}`
                      : '/assets/img/no-image.png'
                }
                alt={product?.mehsul_adi || 'Məhsul şəkli'}
                width={1200}
                height={1200}
                quality={100}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-details">
              <h2 className="product-title">{product?.mehsul_adi}</h2>
              <div className="product-meta">
                <div className="meta-item">
                  <i className="fas fa-car"></i>
                  <span>{product?.marka_adi}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-tag"></i>
                  <span>{product?.model}</span>
                </div>
                <div className="meta-item">
                  <i className="fas fa-barcode"></i>
                  <span>{product?.kod}</span>
                </div>
                {product?.oem && (
                  <div className="meta-item">
                    <i className="fas fa-cog"></i>
                    <span>OEM: {product.oem}</span>
                  </div>
                )}
              </div>
              <div className="product-price">
                <span className="price">{product?.qiymet} ₼</span>
              </div>
              <div className="product-actions">
                <Link href="/contact" className="btn btn-danger">
                  <i className="fas fa-shopping-cart me-2"></i>
                  Sifariş et
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
      <style jsx>{`
        .product-image {
          margin-bottom: 30px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          overflow: hidden;
        }
        .product-title {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
        }
        .product-meta {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 15px;
          background-color: #f8f8f8;
          border-radius: 4px;
        }
        .meta-item i {
          color: #dc3545;
          width: 20px;
        }
        .product-price {
          font-size: 24px;
          color: #dc3545;
          margin-bottom: 20px;
        }
        .product-actions {
          margin-top: 30px;
        }
        .btn-danger {
          padding: 12px 30px;
          font-size: 16px;
        }
        @media (max-width: 768px) {
          .product-title {
            font-size: 20px;
          }
          .product-price {
            font-size: 20px;
          }
          .btn-danger {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ShopDetails;

