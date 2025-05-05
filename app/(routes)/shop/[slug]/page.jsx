'use client'
import { useEffect, useState } from "react";
import Breadcrumb from "../../../../components/Breadcrumb";
import FooterAreaOne from "../../../../components/FooterAreaOne";
import HeaderOne from "../../../../components/HeaderOne";
import ShopDetails from "../../../../components/ShopDetails";
import SubscribeOne from "../../../../components/SubscribeOne";
import Preloader from "../../../../helper/Preloader";
import Image from "next/image";
import Link from "next/link";



const ProductDetailsPage = ({ params }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://api.iberauto.az/api/products?filters[slug][$eq]=${params?.slug}&populate=*`);
                if (!response.ok) {
                    throw new Error('API yanıt vermedi');
                }
                const data = await response.json();

                if (!data.data || data.data.length === 0) {
                    throw new Error('Məhsul tapılmadı');
                }

                // İlk ürünü al (slug benzersiz olmalı)
                const productData = data.data[0];
                setProduct(productData);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Bir hata oluştu');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params.slug]);

    if (loading) {
        return <Preloader />;
    }

    if (error) {
        return (
            <div className="container text-center py-5">
                <h3 className="text-danger">Xəta: {error}</h3>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container text-center py-5">
                <h3>Məhsul tapılmadı</h3>
            </div>
        );
    }

    return (
        <>
            {/* Header one */}
            <HeaderOne />

            {/* Breadcrumb */}
            <Breadcrumb
                title={product?.mehsul_adi}
                subtitle={`${product?.marka_adi} ${product?.model}`}
            />

            {/* Shop Details */}
            <div style={{ marginTop: '2rem' }} className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-image mb-4">
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
                            <h2 className="product-title mb-4">{product?.mehsul_adi}</h2>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th className="bg-light" style={{ width: '30%' }}>Marka</th>
                                            <td>{product?.marka_adi}</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-light">Model</th>
                                            <td>{product?.model}</td>
                                        </tr>
                                        <tr>
                                            <th className="bg-light">Kod</th>
                                            <td>{product?.kod}</td>
                                        </tr>
                                        {product?.oem && (
                                            <tr>
                                                <th className="bg-light">OEM</th>
                                                <td>{product.oem}</td>
                                            </tr>
                                        )}
                                        <tr>
                                            <th className="bg-light">Qiymət</th>
                                            <td className="text-danger fw-bold">{product?.qiymet} ₼</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="product-actions mt-4">
                                <Link href="https://wa.me/994551004038" className="btn btn-danger">
                                    <i className="fas fa-shopping-cart me-2"></i>
                                    Sifariş et
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .product-image {
                    border: 1px solid #e5e5e5;
                    border-radius: 4px;
                    overflow: hidden;
                    padding: 10px;
                    background: #fff;
                }
                .product-title {
                    font-size: 24px;
                    color: #333;
                }
                .table th {
                    font-weight: 600;
                }
                .table td {
                    vertical-align: middle;
                }
                @media (max-width: 768px) {
                    .product-title {
                        font-size: 20px;
                    }
                    .table th {
                        font-size: 14px;
                    }
                    .table td {
                        font-size: 14px;
                    }
                }
            `}</style>



        </>
    );
};

export default ProductDetailsPage; 