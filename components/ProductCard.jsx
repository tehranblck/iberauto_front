"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ id, title, price, image, brand, model, code, slug }) => {
    if (!id || !title || !price || !image || !brand || !slug) {
        return null;
    }
    console.log(image)

    const whatsappMessage = `Salam mən ${title} məhsulu almaq istəyirəm`;
    const whatsappUrl = `https://wa.me/994551004038?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="product-card style2">
            <div className="product-img">
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    priority
                />
            </div>
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
                .product-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin: 10px 0;
                    font-size: 13px;
                }
                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    padding: 4px 8px;
                    background-color: #f8f9fa;
                    border-radius: 4px;
                    color: #495057;
                }
                .meta-item i {
                    color: #dc3545;
                    font-size: 12px;
                }
                .product-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 10px;
                }
                .price {
                    font-size: 18px;
                    font-weight: 600;
                    color: #dc3545;
                }
                .link-btn {
                    padding: 8px 15px;
                    background-color: #dc3545;
                    color: white;
                    border-radius: 4px;
                    text-decoration: none;
                    font-size: 14px;
                    transition: background-color 0.3s;
                }
                .link-btn:hover {
                    background-color: #c82333;
                }
                .star-rating i {
                    color: #dc3545;
                }
            `}</style>
        </div>
    );
};

export default ProductCard; 