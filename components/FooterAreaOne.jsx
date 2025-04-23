"use client";
import Link from "next/link";
import { footerCompanyLinks, footerProductLinks, footerBottomLinks } from "../utils/navLinks";

const FooterAreaOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-3">
              <div className="widget footer-widget">
                <div className="widget-about">
                  <div className="footer-logo">
                    <Link href="/">
                      <img src="assets/img/logo-white.svg" alt="IberAuto" />
                    </Link>
                  </div>
                  <p className="about-text">
                    Orijinal və keyfiyyətli avtomobil Hissələri satışında etibarlı tərəfdaşınız.
                  </p>
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
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget-title">Şirkət</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    {footerCompanyLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.path}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget-title">Məhsul Kateqoriyaları</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    {footerProductLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.path}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="widget footer-widget">
                <h3 className="widget-title">Əlaqə</h3>
                <div className="widget-contact">
                  <div className="info-box">
                    <div className="info-box_icon">
                      <i className="fas fa-location-dot" />
                    </div>
                    <p className="info-box_text">
                      Bakı şəhəri, Azərbaycan
                    </p>
                  </div>
                  <div className="info-box">
                    <div className="info-box_icon">
                      <i className="fas fa-phone" />
                    </div>
                    <p className="info-box_text">
                      <Link href="tel:+994551004038">+994 55 100 40 38</Link>
                    </p>
                  </div>
                  <div className="info-box">
                    <div className="info-box_icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <p className="info-box_text">
                      <Link href="mailto:info@iberauto.az">info@iberauto.az</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()} <Link href="/">IberAuto</Link>. Bütün hüquqlar qorunur.
              </p>
            </div>
            <div className="col-lg-6 text-end d-none d-lg-block">
              <div className="footer-links">
                <ul>
                  {footerBottomLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaOne;
