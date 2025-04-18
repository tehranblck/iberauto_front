'use client'
import React, { useState } from "react";
import Slider from "rc-slider";
import Link from "next/link";

const ShopArea = () => {
  const [range, setRange] = useState([0, 100]);

  const handleRangeChange = (value) => {
    setRange(value);
  };
  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-9 col-lg-8">
            <div className="shop-sort-bar">
              <div className="row justify-content-between align-items-center">
                <div className="col-md">
                  <p className="woocommerce-result-count">
                    52 nəticədən 1–15 göstərilir
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
                        <option value="popularity">Populyarlığa görə sırala</option>
                        <option value="rating">Orta reytinqə görə sırala</option>
                        <option value="date">Ən sona görə sırala</option>
                        <option value="price">
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
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-1.png"
                      alt="Fixturbo"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">Mühərrik pistonları və dişli</Link>
                    </h3>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <span className="price">
                      <del>$30</del> $25
                    </span>
                    <Link href="#" className="link-btn">
                      Məhsulu al <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-2.png"
                      alt="Fixturbo"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">Egzoz manifoldu</Link>
                    </h3>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <span className="price">
                      <del>$30</del> $25
                    </span>
                    <Link href="#" className="link-btn">
                      Məhsulu al  <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-3.png"
                      alt="Fixturbo"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">Ön şüşə silgici mühərriki</Link>
                    </h3>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <span className="price">
                      <del>$30</del> $25
                    </span>
                    <Link href="#" className="link-btn">
                      Məhsulu al <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-4.png"
                      alt="Fixturbo"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">Güc idarəetmə nasosu</Link>
                    </h3>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <span className="price">
                      <del>$30</del> $25
                    </span>
                    <Link href="#" className="link-btn">
                      Məhsulu al  <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-5.png"
                      alt="Fixturbo"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">Ön şüşə silgici mühərriki</Link>
                    </h3>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <span className="price">
                      <del>$30</del> $25
                    </span>
                    <Link href="#" className="link-btn">
                      Məhsulu al  <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-6.png"
                      alt="Fixturbo"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">Egzoz manifoldu</Link>
                    </h3>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <span className="price">
                      <del>$30</del> $25
                    </span>
                    <Link href="#" className="link-btn">
                      Məhsulu al <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-7.png"
                      alt="Fixturbo"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">Mühərrik pistonları və dişli</Link>
                    </h3>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <span className="price">
                      <del>$30</del> $25
                    </span>
                    <Link href="#" className="link-btn">
                      Məhsulu al <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-8.png"
                      alt="Fixturbo"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">Egzoz manifoldu</Link>
                    </h3>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <span className="price">
                      <del>$30</del> $25
                    </span>
                    <Link href="#" className="link-btn">
                      Məhsulu al <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="product-card style2">
                  <div className="product-img">
                    <img
                      src="assets/img/update-img/product/1-9.png"
                      alt="Fixturbo"
                    />
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">
                      <Link href="/shop-details">Ön şüşə silgici mühərriki</Link>
                    </h3>
                    <span className="star-rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                    <span className="price">
                      <del>$30</del> $25
                    </span>
                    <Link href="#" className="link-btn">
                      Məhsulu al <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
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
              <div className="widget widget_categories  ">
                <h3 className="widget_title">Məhsul kateqoriyaları</h3>
                <ul>
                  <li>
                    <Link href="/service-details">Sükan</Link>
                    <span>(12)</span>
                  </li>
                  <li>
                    <Link href="/service-details">Asqı yayı</Link>{" "}
                    <span>(12)</span>
                  </li>
                  <li>
                    <Link href="/service-details">Arxa işıq</Link>
                    <span>(08)</span>
                  </li>
                  <li>
                    <Link href="/service-details">Ötürücü</Link>
                    <span>(13)</span>
                  </li>
                  <li>
                    <Link href="/service-details">Ön şüşə silgici mühərriki</Link>
                    <span>(03)</span>
                  </li>
                  <li>
                    <Link href="/service-details">Yanacaq enjektoru</Link>
                    <span>(03)</span>
                  </li>
                  <li>
                    <Link href="/service-details">Məhsulunuzu tapın</Link>
                    <span>(03)</span>
                  </li>
                </ul>
              </div>


            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopArea;
