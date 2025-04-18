'use client'
import React, { useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "../utils/productData";

const ShopArea = () => {
  const [range, setRange] = useState([0, 100]);
  const [selectedCarBrand, setSelectedCarBrand] = useState("");
  const [selectedCarModel, setSelectedCarModel] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expandedBrand, setExpandedBrand] = useState("");

  const handleRangeChange = (value) => {
    setRange(value);
  };

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

  // Filtrelenmiş ürünleri hesapla
  const filteredProducts = products.filter(product => {
    const matchesCarBrand = !selectedCarBrand || product.carBrand === selectedCarBrand;
    const matchesCarModel = !selectedCarModel || product.carModel === selectedCarModel;
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesCarBrand && matchesCarModel && matchesCategory;
  });

  // Benzersiz araba markalarını al
  const uniqueCarBrands = Array.from(new Set(products.map(p => p.carBrand)));

  // Benzersiz kategorileri al
  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));

  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-9 col-lg-8">
            <div className="shop-sort-bar">
              <div className="row justify-content-between align-items-center">
                <div className="col-md">
                  <p className="woocommerce-result-count">
                    {filteredProducts.length}+ nəticədən 1–{filteredProducts.length} göstərilir
                  </p>
                </div>
                <div className="col-md-auto">
                  <form className="woocommerce-ordering" method="get">
                    <div className="form-group mb-0">
                      <select
                        name="orderby"
                        className="single-select orderby"
                        aria-label="Shop order"
                        defaultValue={"Choose"}
                      >
                        <option value="Choose">Standart Sıralama</option>
                        <option value="date">
                          Qiymətə görə sırala: aşağıdan yuxarıya
                        </option>
                        <option value="price-desc">
                          Qiymətə görə sırala: yuxarıdan aşağıya
                        </option>
                      </select>
                      <i className="fas fa-angle-down" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row gy-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-xl-4 col-md-6">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="pagination justify-content-center mt-70">
              <ul>
                <li>
                  <Link href="/blog">1</Link>
                </li>
                <li>
                  <Link href="/blog">2</Link>
                </li>
                <li>
                  <Link href="/blog">3</Link>
                </li>
                <li>
                  <Link href="/blog">
                    <i className="fas fa-angle-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 sidebar-widget-area">
            <aside className="sidebar-sticky-area sidebar-area sidebar-shop">
              <div className="widget widget_search">
                <h3 className="widget_title">Axtarış</h3>
                <form className="search-form">
                  <input type="text" placeholder="Məhsulunuzu tapın" />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">Avtomobil Seçimi</h3>
                <div className="car-selection">
                  {uniqueCarBrands.map((carBrand) => {
                    const brandModels = Array.from(
                      new Set(
                        products
                          .filter((p) => p.carBrand === carBrand)
                          .map((p) => p.carModel)
                      )
                    );

                    return (
                      <div key={carBrand} className="car-brand-item">
                        <div
                          className={`car-brand-header ${expandedBrand === carBrand ? 'active' : ''}`}
                          onClick={() => handleCarBrandChange(carBrand)}
                        >
                          <span>{carBrand}</span>
                          <i className={`fas fa-chevron-${expandedBrand === carBrand ? 'up' : 'down'}`} />
                        </div>
                        {expandedBrand === carBrand && (
                          <div className="car-models-list">
                            {brandModels.map((model) => (
                              <div
                                key={model}
                                className={`car-model-item ${selectedCarModel === model ? 'selected' : ''}`}
                                onClick={() => handleCarModelChange(model)}
                              >
                                {model}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="widget widget_categories">
                <h3 className="widget_title">Kateqoriya</h3>
                <select
                  className="form-select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Bütün Kateqoriyalar</option>
                  {uniqueCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
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
        .car-models-list {
          padding: 10px 15px;
          background-color: #fff;
        }
        .car-model-item {
          padding: 8px 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .car-model-item:hover {
          color: #007bff;
        }
        .car-model-item.selected {
          color: #007bff;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};

export default ShopArea;
