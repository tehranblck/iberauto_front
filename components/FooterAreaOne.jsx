import Link from "next/link";


const FooterAreaOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg1-1.png)" }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Şirkət</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/about">Haqqımızda</Link>
                    </li>
                    <li>
                      <Link href="/team">Komanda</Link>
                    </li>
                    <li>
                      <Link href="/contact">Tez-tez verilən suallar</Link>
                    </li>
                    <li>
                      <Link href="/contact">Məxfilik Siyasəti</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Xidmətlər</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/service">Mexanik Ustalar</Link>
                    </li>
                    <li>
                      <Link href="/service">Sürətli Avtomobil Təmiri</Link>
                    </li>
                    <li>
                      <Link href="/service">Mobil Avtomobil Təmiri</Link>
                    </li>
                    <li>
                      <Link href="/service">Peşəkar Avtomobil Təmiri</Link>
                    </li>
                    <li>
                      <Link href="/service">Dəqiq Avtomobil Təmiri</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Əlaqə</h3>
                <div className="widget-contact">
                  <p>
                    <Link href="tel:888123456765">(+888) 123 456 765</Link>
                  </p>
                  <p>
                    <Link href="mailto:infoname@mail.com">
                      infoname@mail.com
                    </Link>
                  </p>
                  <p>
                    Köhnə şəhər küçəsi, ABŞ <br /> 1212 Nyu York-3500
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget widget-newsletter">
                <h3 className="widget_title">Əlaqə Saxlayın</h3>
                <p className="footer-text mb-50">
                  Lorem Ipsum sadəcə dumiomy mətni Lorem Ipsum sadəcə
                </p>
                <form className="newsletter-form">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="E-poçt Ünvanınız"
                      required=""
                    />
                  </div>
                  <button type="submit" className="btn">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link href="#">Fixturbo</Link> 2024 | Bütün Hüquqlar Qorunur
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link href="/contact">Şərtlər və Qaydalar</Link>
                <Link href="/contact">Məxfilik Siyasəti</Link>
                <Link href="/contact">Bizimlə Əlaqə</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaOne;
