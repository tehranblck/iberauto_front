"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Image from "next/image";
const AboutTwo = () => {
  return (
    <div className="space-top">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6">
            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <Image src="/assets/img/normal/about_2-1.png" alt="IberAuto" width={500} height={500} />
              </div>
              <div className="about-img-2">
                <Image src="/assets/img/normal/about_2-2.png" alt="IberAuto" width={500} height={500} />
              </div>
              <div className="about-counter-wrap jump-reverse">
                <Image src="/assets/img/icon/about_icon2-1.svg" alt="IberAuto" width={100} height={100} />
                <h3 className="about-counter" style={{ fontFamily: "Roboto, sans-serif" }}>
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
                <h4 className="about-counter-text" style={{ fontFamily: "Roboto, sans-serif" }}>Müştərilərimiz</h4>
              </div>
              <div className="about-year-wrap2 movingX">
                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <Image src="/assets/img/icon/about_icon2-2.png" alt="IberAuto" width={500} height={500} />
                  </div>
                  <h3 className="about-counter" style={{ fontFamily: "Roboto, sans-serif" }}>
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
                <h4 className="about-year-text" style={{ fontFamily: "Roboto, sans-serif" }}>İllik Təcrübə</h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area mb-30">
                <span className="sub-title" style={{ fontFamily: "Roboto, sans-serif!important" }}>Bizim Haqqımızda</span>
                <h2 className="sec-title" style={{ fontFamily: "Roboto, sans-serif!important" }}>
                  Avtomobil Hissələrinda Etibarlı Tərəfdaş{" "}
                  <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="IberAuto"
                  />
                </h2>
                <p className="sec-text" style={{ fontFamily: "Roboto, sans-serif!important" }}>
                  IberAuto olaraq, bütün marka və modellər üçün orijinal və keyfiyyətli avtomobil Hissələri təqdim edirik. 15 ildən artıq təcrübəmizlə, müştərilərimizə ən yaxşı məhsulları və xidməti təqdim etməyə çalışırıq. Geniş məhsul çeşidimiz və sürətli çatdırılma xidmətimizlə ehtiyacınız olan bütün avtomobil Hissələrinı tapa bilərsiniz.
                </p>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-3.svg" alt="IberAuto" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title" style={{ fontFamily: "Roboto, sans-serif" }}>
                    Orijinal və Keyfiyyətli Parçalar
                  </h5>
                  <p className="about-feature-text" style={{ fontFamily: "Roboto, sans-serif" }}>
                    Bütün marka və modellər üçün orijinal və keyfiyyətli avtomobil Hissələri təqdim edirik.
                  </p>
                </div>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img src="assets/img/icon/about_icon2-4.svg" alt="IberAuto" />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title" style={{ fontFamily: "Roboto, sans-serif" }}>Sürətli Çatdırılma</h5>
                  <p className="about-feature-text" style={{ fontFamily: "Roboto, sans-serif" }}>
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
