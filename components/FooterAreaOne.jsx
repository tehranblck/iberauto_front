"use client";
import Link from "next/link";
import { footerCompanyLinks, footerProductLinks, footerBottomLinks } from "../utils/navLinks";

const FooterAreaOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)" }}
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
            <div className="col-lg-6 text-end">
              <div className="footer-links">
                <ul>
                  {footerBottomLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.path}>{link.title}</Link>
                    </li>
                  ))}
                  <li>
                    <Link href="https://saytyarat.com" target="_blank" rel="noopener noreferrer">
                      by Saytyarat
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-wrapper {
          padding: 80px 0 0;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .widget-area {
          padding-bottom: 40px;
        }
        .footer-logo {
          margin-bottom: 25px;
        }
        .about-text {
          margin-bottom: 25px;
          color: rgba(255, 255, 255, 0.8);
        }
        .social-links {
          display: flex;
          gap: 15px;
        }
        .social-links a {
          color: #fff;
          font-size: 16px;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          color: #dc3545;
        }
        .widget-title {
          color: #fff;
          margin-bottom: 25px;
          font-size: 20px;
        }
        .menu li {
          margin-bottom: 10px;
        }
        .menu li a {
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }
        .menu li a:hover {
          color: #dc3545;
          padding-left: 5px;
        }
        .info-box {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        .info-box_icon {
          margin-right: 15px;
          color: #dc3545;
        }
        .info-box_text {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }
        .info-box_text a {
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }
        .info-box_text a:hover {
          color: #dc3545;
        }
        .copyright-wrap {
          padding: 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .copyright-text {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }
        .copyright-text a {
          color: #dc3545;
        }
        .footer-links ul {
          display: flex;
          justify-content: flex-end;
          gap: 20px;
          margin: 0;
          padding: 0;
        }
        .footer-links li {
          list-style: none;
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }
        .footer-links a:hover {
          color: #dc3545;
        }
        @media (max-width: 991px) {
          .footer-wrapper {
            padding: 60px 0 0;
          }
          .widget-area {
            padding-bottom: 30px;
          }
          .widget {
            margin-bottom: 30px;
          }
          .footer-links ul {
            justify-content: center;
            margin-top: 20px;
          }
          .copyright-text {
            text-align: center;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterAreaOne;
