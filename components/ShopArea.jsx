'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";

const ShopArea = ({ size }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCarBrand, setSelectedCarBrand] = useState("");
  const [selectedCarModel, setSelectedCarModel] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expandedBrand, setExpandedBrand] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Azerbaycan karakterlerini normalize et
  const normalizeText = (text) => {
    if (!text) return '';
    return text
      .toLowerCase()
      .replace(/[ı]/g, 'i')
      .replace(/[ğ]/g, 'g')
      .replace(/[ü]/g, 'u')
      .replace(/[ş]/g, 's')
      .replace(/[ç]/g, 'c')
      .replace(/[ö]/g, 'o')
      .replace(/[ə]/g, 'e')
      .replace(/[ı]/g, 'i')
      .replace(/[Ğ]/g, 'g')
      .replace(/[Ü]/g, 'u')
      .replace(/[Ş]/g, 's')
      .replace(/[Ç]/g, 'c')
      .replace(/[Ö]/g, 'o')
      .replace(/[Ə]/g, 'e')
      .replace(/\s+/g, '');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.iberauto.az/api/products?populate=*');
        if (!response.ok) {
          throw new Error(`API yanıt vermedi: ${response.status}`);
        }
        const data = await response.json();
        if (!data.data) {
          throw new Error('API veri formatı hatalı');
        }
        setProducts(data.data);
        setLoading(false);
      } catch (err) {
        console.error('API Hatası:', err);
        setError(err.message || 'Bir hata oluştu');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleCarBrandChange = (brand) => {
    setSelectedCarBrand(brand);
    setSelectedCarModel("");
    setExpandedBrand(brand === expandedBrand ? "" : brand);
  };

  const handleCarModelChange = (model) => {
    setSelectedCarModel(model);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleResetFilters = () => {
    setSelectedCarBrand("");
    setSelectedCarModel("");
    setSearchTerm("");
    setSortOrder("default");
    setExpandedBrand("");
  };

  // Filtrelenmiş ve sıralanmış ürünleri hesapla
  const filteredProducts = products.filter(product => {
    const matchesCarBrand = !selectedCarBrand || product.marka_adi === selectedCarBrand;
    const matchesCarModel = !selectedCarModel || product.model === selectedCarModel;

    if (!searchTerm) {
      return matchesCarBrand && matchesCarModel;
    }

    const normalizedSearchTerm = normalizeText(searchTerm);

    const productBrand = normalizeText(product.marka_adi || '');
    const productModel = normalizeText(product.model || '');
    const productCode = normalizeText(product.kod || '');
    const productName = normalizeText(product.mehsul_adi || '');
    const productOEM = normalizeText(product.oem || '');



    const matchesSearch =
      productBrand.includes(normalizedSearchTerm) ||
      productModel.includes(normalizedSearchTerm) ||
      productCode.includes(normalizedSearchTerm) ||
      productName.includes(normalizedSearchTerm) ||
      productOEM.includes(normalizedSearchTerm);

    const result = matchesCarBrand && matchesCarModel && matchesSearch;
    if (result) {
    }
    return result;
  });

  // Debug için filtrelenmiş ürünleri kontrol et

  // Sıralama işlemi
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "price-asc":
        return a.qiymet - b.qiymet;
      case "price-desc":
        return b.qiymet - a.qiymet;
      default:
        return 0;
    }
  });

  // Filtreleme veya sıralama değiştiğinde sayfayı sıfırla
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCarBrand, selectedCarModel, searchTerm, sortOrder]);

  // Debug için filtrelenmiş ürünleri kontrol et
  useEffect(() => {
  }, [filteredProducts, currentPage, sortedProducts]);

  // Sayfalama için gerekli hesaplamalar
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Sayfa değiştirme fonksiyonu
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sayfa numaralarını oluştur
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? 'active' : ''}>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
            className={currentPage === i ? 'active' : ''}
          >
            {i}
          </Link>
        </li>
      );
    }

    return pageNumbers;
  };

  // Benzersiz araba markalarını al
  const uniqueCarBrands = Array.from(new Set(products.map(p => p.marka_adi)));

  // Seçili markaya ait modelleri al
  const getModelsForBrand = (brand) => {
    return Array.from(new Set(
      products
        .filter(p => p.marka_adi === brand)
        .map(p => p.model)
    ));
  };

  if (loading) {
    return <div className="text-center py-5">Yüklənir...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Xəta: {error}</div>;
  }

  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          {/* Filtreler - Mobilde üstte, masaüstünde sağda */}
          <div className="col-12 d-lg-none mb-4">
            <div className="card">
              <div className="card-body">
                <div className="widget widget_search">
                  <h3 className="widget_title">Axtarış</h3>
                  <form className="search-form">
                    <input
                      type="text"
                      placeholder="Axtarış..."
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    <button type="button">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                  <div className="search-info">
                    <small>Marka, Model, Kod, OEM kodu və ya Məhsul adı üzrə axtarış edə bilərsiniz</small>
                  </div>
                </div>
                <div className="widget widget_categories mt-4">
                  <h3 className="widget_title">Avtomobil Seçimi</h3>
                  <div className="car-selection">
                    {uniqueCarBrands.map((carBrand) => (
                      <div key={carBrand} className="car-brand-item">
                        <div
                          className={`car-brand-header ${expandedBrand === carBrand ? 'active' : ''}`}
                          onClick={() => handleCarBrandChange(carBrand)}
                        >
                          <span>{carBrand}</span>
                          <i className={`fas fa-chevron-${expandedBrand === carBrand ? 'up' : 'down'}`} />
                        </div>
                        {expandedBrand === carBrand && (
                          <div className="car-model-list">
                            {getModelsForBrand(carBrand).map((model) => (
                              <div
                                key={model}
                                className={`car-model-item ${selectedCarModel === model ? 'active' : ''}`}
                                onClick={() => handleCarModelChange(model)}
                              >
                                {model}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ana İçerik */}
          <div className="col-xl-9 col-lg-8 order-lg-2">
            <div className="shop-sort-bar">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-6 col-12 mb-3 mb-md-0">
                  <p className="woocommerce-result-count mb-0">
                    {filteredProducts.length} nəticədən {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, filteredProducts.length)} göstərilir
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2">
                    <button
                      className="btn btn-outline-primary btn-sm w-100 w-md-auto"
                      onClick={handleResetFilters}
                      disabled={!selectedCarBrand && !selectedCarModel && !searchTerm && sortOrder === "default"}
                    >
                      <i className="fas fa-times me-1"></i>
                      Filtləri Sıfırla
                    </button>
                    <form className="woocommerce-ordering w-100 w-md-auto" method="get">
                      <div className="form-group mb-0">
                        <select
                          name="orderby"
                          className="form-select"
                          aria-label="Shop order"
                          value={sortOrder}
                          onChange={handleSortChange}
                        >
                          <option value="default">Standart Sıralama</option>
                          <option value="price-asc">
                            Qiymətə görə sırala: aşağıdan yuxarıya
                          </option>
                          <option value="price-desc">
                            Qiymətə görə sırala: yuxarıdan aşağıya
                          </option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-3 ${size === "small" ? "row-cols-lg-4" : "row-cols-lg-3"} g-4`}>
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <div className="col" key={product.id}>
                    <ProductCard
                      size={size}
                      slug={product.slug}
                      id={product.id}
                      title={product.mehsul_adi}
                      price={product.qiymet}
                      image={`https://api.iberauto.az${product.foto.url}`}
                      brand={product.marka_adi}
                      model={product.model}
                      code={product.kod}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p>Heç bir məhsul tapılmadı</p>
                </div>
              )}
            </div>
            {totalPages > 1 && (
              <div className="pagination justify-content-center mt-70">
                <ul>
                  <li>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(1);
                      }}
                      className={currentPage === 1 ? 'disabled' : ''}
                    >
                      <i className="fas fa-angle-double-left" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }}
                      className={currentPage === 1 ? 'disabled' : ''}
                    >
                      <i className="fas fa-angle-left" />
                    </Link>
                  </li>
                  {renderPageNumbers()}
                  <li>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }}
                      className={currentPage === totalPages ? 'disabled' : ''}
                    >
                      <i className="fas fa-angle-right" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(totalPages);
                      }}
                      className={currentPage === totalPages ? 'disabled' : ''}
                    >
                      <i className="fas fa-angle-double-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Filtreler - Masaüstünde sağda */}
          <div className="col-xl-3 col-lg-4 d-none d-lg-block order-lg-1">
            <aside className="sidebar-sticky-area sidebar-area sidebar-shop">
              <div className="widget widget_search">
                <h3 className="widget_title">Axtarış</h3>
                <form className="search-form">
                  <input
                    type="text"
                    placeholder="Axtarış..."
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <button type="button">
                    <i className="fas fa-search" />
                  </button>
                </form>
                <div className="search-info">
                  <small>Marka, Model, Kod, OEM kodu və ya Məhsul adı üzrə axtarış edə bilərsiniz</small>
                </div>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">Avtomobil Seçimi</h3>
                <div className="car-selection">
                  {uniqueCarBrands.map((carBrand) => (
                    <div key={carBrand} className="car-brand-item">
                      <div
                        className={`car-brand-header ${expandedBrand === carBrand ? 'active' : ''}`}
                        onClick={() => handleCarBrandChange(carBrand)}
                      >
                        <span>{carBrand}</span>
                        <i className={`fas fa-chevron-${expandedBrand === carBrand ? 'up' : 'down'}`} />
                      </div>
                      {expandedBrand === carBrand && (
                        <div className="car-model-list">
                          {getModelsForBrand(carBrand).map((model) => (
                            <div
                              key={model}
                              className={`car-model-item ${selectedCarModel === model ? 'active' : ''}`}
                              onClick={() => handleCarModelChange(model)}
                            >
                              {model}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <style jsx>{`
        .car-selection {
          border: 1px solid #e5e5e5;
          border-radius: 4px;
        }
        .car-brand-item {
          border-bottom: 1px solid #e5e5e5;
        }
        .car-brand-item:last-child {
          border-bottom: none;
        }
        .car-brand-header {
          padding: 12px 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f8f8f8;
          transition: all 0.3s ease;
        }
        .car-brand-header:hover {
          background-color: #f0f0f0;
        }
        .car-brand-header.active {
          background-color: #e5e5e5;
        }
        .car-model-list {
          padding: 10px 15px;
          background-color: #fff;
        }
        .car-model-item {
          padding: 8px 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
        }
        .car-model-item:hover {
          background-color: #f8f8f8;
        }
        .car-model-item.active {
          background-color: #e5e5e5;
          font-weight: bold;
        }
        .search-info {
          margin-top: 8px;
          color: #666;
          font-size: 12px;
        }
        .search-form input {
          width: 100%;
          padding: 10px 15px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        .search-form input:focus {
          outline: none;
          border-color: #dc3545;
        }
        .form-select {
          border-color: #e5e5e5;
          padding: 8px 15px;
          height: auto;
          font-size: 14px;
        }
        .form-select:focus {
          border-color: #dc3545;
          box-shadow: none;
        }
        .btn-outline-danger {
          border-color: #dc3545;
          color: white !important;
          background-color: #dc3545;
          transition: all 0.3s ease;
        }
        .btn-outline-danger:hover {
          background-color: white;
          color: #dc3545 !important;
          border-color: #dc3545;
        }
        .btn-outline-danger:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          color: white !important;
          background-color: #dc3545;
        }
        .btn-outline-danger:disabled:hover {
          background-color: #dc3545;
          color: white !important;
        }

        .pagination {
          margin-top: 30px;
        }
        .pagination ul {
          display: flex;
          gap: 5px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .pagination li a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          background: white;
          color: #333;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .pagination li a:hover:not(.disabled) {
          background-color: #dc3545;
          color: white;
          border-color: #dc3545;
        }
        .pagination li a.active {
          background-color: #dc3545;
          color: white;
          border-color: #dc3545;
        }
        .pagination li a.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        }
        .pagination li a i {
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .shop-sort-bar {
            margin-bottom: 20px;
          }
          .woocommerce-result-count {
            font-size: 14px;
          }
          .form-select {
            font-size: 13px;
          }
          .btn-outline-danger {
            font-size: 13px;
          }
          .car-brand-header {
            padding: 10px 12px;
          }
          .car-model-item {
            padding: 6px 12px;
          }
          .widget_title {
            font-size: 16px;
          }
          .search-form input {
            font-size: 14px;
          }
          .card {
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            margin-bottom: 20px;
          }
          .card-body {
            padding: 15px;
          }
          .pagination li a {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </section>
  );
};

export default ShopArea;
