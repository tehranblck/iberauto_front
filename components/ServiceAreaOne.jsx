import Link from "next/link";

const ServiceAreaOne = () => {
  return (
    <div style={{ marginBottom: "120px" }} className="service-area-1  space-top bg-smoke overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title"> Xidmətlər</span>
              <h2 className="sec-title">
                Peşəkar Avtomobil Təmiri Ən Yaxşı Xidmətlər
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img
                    src="assets/img/icon/service-icon_1-1.svg"
                    alt="Fixturbo"
                  />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Avtomobil Təmirçiləri</Link>
                </h4>
                <p className="service-card_text">
                  Avtomobil təmiri, avtomobilinizdəki hər hansı problem və ya
                  zədələri təmir etmək üçün təqdim olunan xidmətdir{" "}
                </p>
                <Link href="/service-details" className="link-btn">
                  Daha Çox <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-1.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img
                    src="assets/img/icon/service-icon_1-2.svg"
                    alt="Fixturbo"
                  />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Mexanik Ustalar</Link>
                </h4>
                <p className="service-card_text">
                  Avtomobil təmiri, avtomobilinizdəki hər hansı problem və ya
                  zədələri təmir etmək üçün təqdim olunan xidmətdir{" "}
                </p>
                <Link href="/service-details" className="link-btn">
                  Daha Çox <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-2.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_content">
                <div className="service-card_icon">
                  <img
                    src="assets/img/icon/service-icon_1-3.svg"
                    alt="Fixturbo"
                  />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/service-details">Qaraj Xidməti</Link>
                </h4>
                <p className="service-card_text">
                  Avtomobil təmiri, avtomobilinizdəki hər hansı problem və ya
                  zədələri təmir etmək üçün təqdim olunan xidmətdir{" "}
                </p>
                <Link href="/service-details" className="link-btn">
                  Daha Çox <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="service-card_img">
                <img src="assets/img/service/service-1-3.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaOne;
