"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderOne = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <header className="nav-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link href="mailto:info@example.com">
                        info@saytyarat.com
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Baki Şəhəri
                    </li>
                    <li>
                      <i className="fas fa-clock" />
                      Bazar - Cümə
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links ps-0">
                  <ul>
                    <li>
                      <div className="social-links">
                        <Link href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link href="https://www.twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link href="https://www.linkedin.com/">
                          <i className="fab fa-linkedin" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="header-navbar-logo">
              <Link href="/">
                <img src="assets/img/logo-white.svg" alt="Fixturbo" />
              </Link>
            </div>
            <div className="container">
              <div className="row align-items-center justify-content-lg-start justify-content-between">
                <div className="col-auto d-xl-none d-block">
                  <div className="header-logo">
                    <Link href="/">
                      <img src="assets/img/logo-white.svg" alt="Fixturbo" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item">
                        <Link href="#">Ana Səhifə</Link>

                      </li>
                      <li>
                        <Link href="/about">Haqqımızda</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/service">Xidmətlər</Link>
                      </li>
                      <li>
                        <Link href="/shop">Mağaza Səhifəsi</Link>
                      </li>
                      <li>
                        <Link href="/contact">Əlaqə</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      className="menu-toggle icon-btn"
                      onClick={mobileMenu}
                    >
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                </div>
                <div className="col-auto ms-auto d-xl-block d-none">
                  <div className="navbar-right-desc">
                    <img src="assets/img/icon/chat.svg" alt="Fixturbo" />
                    <div className="navbar-right-desc-details">
                      <h6 className="title">Köməyə ehtiyac var?</h6>
                      <Link className="link" href="tel:+2590256215">
                        +994 51 444 44 44
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-bg" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper  ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link href="/">
                <img src="assets/img/logo.svg" alt="Fixturbo" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Ana Səhifə</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/">Ana Səhifə 01</Link>
                    </li>
                    <li>
                      <Link href="/home-2">Ana Səhifə 02</Link>
                    </li>
                    <li>
                      <Link href="/home-3">Ana Səhifə 03</Link>
                    </li>
                    <li>
                      <Link href="/home-4">Ana Səhifə 04</Link>
                    </li>
                    <li>
                      <Link href="/home-5">Ana Səhifə 05</Link>
                    </li>
                    <li>
                      <Link href="/home-6">Ana Səhifə 06</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/about">Haqqımızda</Link>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Səhifələr</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/team">Komanda Səhifəsi</Link>
                    </li>
                    <li>
                      <Link href="/team-details">Komanda Detalları</Link>
                    </li>
                    <li>
                      <Link href="/shop">Mağaza Səhifəsi</Link>
                    </li>
                    <li>
                      <Link href="/shop-details">Mağaza Detalları</Link>
                    </li>
                    <li>
                      <Link href="/cart">Səbət</Link>
                    </li>
                    <li>
                      <Link href="/checkout">Ödəniş</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">İstək Siyahısı</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Layihələr</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/project">Layihələr</Link>
                    </li>
                    <li>
                      <Link href="/project-details">Layihə Detalları</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Xidmətlər</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/service">Xidmətlər</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Xidmət Detalları</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Blog</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Blog Detalları</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Əlaqə</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
