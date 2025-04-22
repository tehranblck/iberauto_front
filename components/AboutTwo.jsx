"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutTwo = () => {
  return (
    <div className="space-top">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6">
            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="assets/img/normal/about_2-1.png" alt="IberAuto" />
              </div>
              <div className="about-img-2">
                <img src="assets/img/normal/about_2-2.png" alt="IberAuto" />
              </div>
              <div className="about-counter-wrap jump-reverse">
                <img src="assets/img/icon/about_icon2-1.svg" alt="IberAuto" />
                <h3 className="about-counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={5} />
                          k+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className="about-counter-text">Müştərilərimiz</h4>
              </div>
              <div className="about-year-wrap2 movingX">
                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <img
                      src="assets/img/icon/about_icon2-2.png"
                      alt="IberAuto"
                    />
                  </div>
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={5} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                </div>
                <h4 className="about-year-text">5 İllik Təcrübə</h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area mb-30">
                <span className="sub-title">Bizim Haqqımızda</span>
                <h2 className="sec-title">
                  Avtomobil Hissələrinda Etibarlı Tərəfdaş{" "}
                  <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="IberAuto"
                  />
                </h2>
                <p className="sec-text">
                  IberAuto olaraq, bütün marka və modellər üçün orijinal və keyfiyyətli avtomobil Hissələri təqdim edirik. 15 ildən artıq təcrübəmizlə, müştərilərimizə ən yaxşı məhsulları və xidməti təqdim etməyə çalışırıq. Geniş məhsul çeşidimiz və sürətli çatdırılma xidmətimizlə ehtiyacınız olan bütün avtomobil Hissələrinı tapa bilərsiniz.
                </p>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-3.svg" alt="IberAuto" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">
                    Orijinal və Keyfiyyətli Parçalar
                  </h5>
                  <p className="about-feature-text">
                    Bütün marka və modellər üçün orijinal və keyfiyyətli avtomobil Hissələri təqdim edirik.
                  </p>
                </div>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-4.svg" alt="IberAuto" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">Sürətli Çatdırılma</h5>
                  <p className="about-feature-text">
                    Sifariş etdiyiniz məhsulları ən qısa müddətdə çatdırırıq.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
