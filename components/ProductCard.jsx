"use client";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card style2">
            <div className="product-img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-content">
                <h3 className="product-title">
                    <Link href={`/service/shop-details/${product.id}`}>{product.title}</Link>
                </h3>
                <span className="star-rating">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star" />
                    ))}
                </span>
                <span className="price">
                    {product.oldPrice && <del>{product.oldPrice}</del>} {product.price}
                </span>
                <Link href={`/service/shop-details/${product.id}`} className="link-btn">
                    Məhsulu al <i className="fas fa-arrow-right" />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard; 