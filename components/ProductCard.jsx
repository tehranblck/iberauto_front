"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ id, title, price, image, brand, model, code, slug, size = "large" }) => {
    if (!id || !title || !price || !image || !brand || !slug) {
        return null;
    }

    const whatsappMessage = `Salam mən ${title} məhsulu almaq istəyirəm`;
    const whatsappUrl = `https://wa.me/994551004038?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className={`product-card style2 ${size === "small" ? "small" : ""}`}>
            <Link href={`/shop/${slug}`} className="product-image-link">
                <Image style={{ width: '100%' }}
                    src={image}
                    alt={title}
                    width={size === "small" ? 150 : 300}
                    height={size === "small" ? 150 : 300}
                    priority
                    className="product-image"
                />
            </Link>
            <div className="product-content">
                <h3 className="product-title">
                    <Link href={`/shop/${slug}`}>{title}</Link>
                </h3>
                <div className="product-meta">
                    <div className="meta-item">
                        <i className="fas fa-car"></i>
                        <span>{brand}</span>
                    </div>
                    {model && (
                        <div className="meta-item">
                            <i className="fas fa-tag"></i>
                            <span>{model}</span>
                        </div>
                    )}
                    {code && (
                        <div className="meta-item">
                            <i className="fas fa-barcode"></i>
                            <span>{code}</span>
                        </div>
                    )}
                </div>

                <div className="product-footer">
                    <span className="price">
                        {price} AZN
                    </span>
                    <Link href={whatsappUrl} className="link-btn" target="_blank" rel="noopener noreferrer">
                        Məhsulu al <i className="fas fa-arrow-right" />
                    </Link>
                </div>
            </div>
            <style jsx>{`
                .product-card {
                    border: 1px solid #eee;
                    border-radius: 8px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    background: white;
                    width: 100%;
                }
                .product-card.small {
                    max-width: 100%;
                }
                .product-image-link {
                    display: block;
                    width: 100%;
                    height: auto;
                    position: relative;
                }
                .product-image {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }
                .product-content {
                    padding: ${size === "small" ? "10px" : "15px"};
                }
                .product-title {
                    margin: 0 0 8px;
                    font-size: ${size === "small" ? "14px" : "24px"};
                    line-height: 1.3;
                }
                .product-title a {
                    color: #333;
                    text-decoration: none;
                }
                .product-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4px;
                    margin: 8px 0;
                    font-size: ${size === "small" ? "10px" : "13px"};
                }
                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 3px;
                    padding: ${size === "small" ? "2px 4px" : "4px 8px"};
                    background-color: #f8f9fa;
                    border-radius: 4px;
                    color: black;
                }
                .meta-item i {
                    color: black;
                    font-size: ${size === "small" ? "8px" : "12px"};
                }
                .product-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 8px;
                }
                .price {
                    font-size: ${size === "small" ? "14px" : "18px"};
                    font-weight: 600;
                    color: #dc3545;
                }
                .link-btn {
                    padding: ${size === "small" ? "4px 8px" : "8px 15px"};
                    background-color: #dc3545;
                    color: white;
                    border-radius: 4px;
                    text-decoration: none;
                    font-size: ${size === "small" ? "10px" : "14px"};
                    transition: background-color 0.3s;
                }
                .link-btn:hover {
                    background-color: #c82333;
                }
                @media (max-width: 768px) {
                    .product-card.small {
                        max-width: 100%;
                    }
                    .product-title {
                        font-size: 14px;
                    }
                    .product-meta {
                        font-size: 10px;
                    }
                    .price {
                        font-size: 14px;
                    }
                    .link-btn {
                        padding: 4px 8px;
                        font-size: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductCard; 