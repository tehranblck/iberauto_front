"use client";
import Link from "next/link";
import { footerCompanyLinks, footerProductLinks, footerBottomLinks } from "../utils/navLinks";
import Image from "next/image";

const FooterAreaOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="widget footer-widget">
                <div className="widget-about">
                  <div className="footer-logo mb-3">
                    <Link href="/">
                      <Image
                        src="assets/img/logo.svg"
                        alt="IberAuto"
                        width={150}
                        height={150}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <p className="about-text mb-4">
                    Orijinal və keyfiyyətli avtomobil Hissələri satışında etibarlı tərəfdaşınız.
                  </p>
                  <div className="social-links d-flex gap-3">
                    <Link target="_blank" href="https://www.facebook.com/profile.php?id=61576043817629" className="social-link">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/iberauto__az" className="social-link">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com/iberauto_az/" className="social-link">
                      <i className="fab fa-whatsapp" />
                    </Link>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <div className="widget widget_nav_menu footer-widget">
                <h3 style={{ color: 'white' }} className="widget-title mb-3">Linklər</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu list-unstyled">
                    {footerCompanyLinks.map((link, index) => (
                      <li key={index} className="mb-2">
                        <Link href={link.path} className="text-decoration-none">{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="widget footer-widget">
                <h3 style={{ color: 'white' }} className="widget-title mb-3">Əlaqə</h3>
                <div className="widget-contact">
                  <div className="info-box mb-3">
                    <div className="info-box_icon">
                      <i className="fas fa-location-dot" />
                    </div>
                    <p className="info-box_text mb-0">
                      Bakı şəhəri, Azərbaycan
                    </p>
                  </div>
                  <div className="info-box mb-3">
                    <div className="info-box_icon">
                      <i className="fas fa-phone" />
                    </div>
                    <p className="info-box_text mb-0">
                      <Link href="tel:+994551004038" className="text-decoration-none">+994 55 100 40 38</Link>
                    </p>
                  </div>
                  <div className="info-box">
                    <div className="info-box_icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <p className="info-box_text mb-0">
                      <Link href="mailto:info@iberauto.az" className="text-decoration-none">info@iberauto.az</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap py-3">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <p className="copyright-text mb-0">
                Copyright © {new Date().getFullYear()} <Link href="/" className="text-decoration-none">IberAuto</Link>. Bütün hüquqlar qorunur. | Designed by <Link href="https://saytpro.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Sayt Pro</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaOne;
