"use client"
import Link from "next/link";
import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutOne = () => {
  return (
    <div className="about-area-1 space-bottom ">
      <div className="about1-shape-img shape-mockup">
        <img
          className="about1-shape-img-1 spin"
          src="assets/img/normal/about_shape1-2.svg"
          alt="Fixturbo"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="assets/img/normal/about_shape1-1.svg"
          alt="Fixturbo"
        />
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-thumb1 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/normal/about_1-1.png" alt="Fixturbo" />
              </div>
              <div className="about-img-2">
                <img src="/assets/img/normal/about_1-2.png" alt="Fixturbo" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area me-xl-5 mb-20">
                <span className="sub-title">Bizim Haqqımızda</span>
                <h2 className="sec-title">
                  Hər Mühərrik üçün Peşəkarlıq
                </h2>
                <p className="sec-text">
                  Avtomobilinizi dərhal təmir edin və sürətli xidmət alın.
                </p>
              </div>
              <div className="row gy-4 justify-content-xl-between justify-content-end align-items-center flex-row-reverse">
                <div className="col-lg-auto">
                  <div className="about-year-wrap">
                    <div
                      className="about-year-mask-wrap"
                      style={{
                        maskImage: "url(assets/img/bg/about_counter-bg1-1.png)",
                      }}
                    >
                      <img
                        src="assets/img/icon/about_icon1-1.svg"
                        alt="Fixturbo"
                      />
                      <h3 className="about-year-wrap-title">
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className="counter-number">
                                <CountUp delay={0} start={0} end={25} />
                                +
                              </span>
                            )
                          }
                        </TrackVisibility>

                      </h3>
                      <p className="about-year-wrap-text">
                        İllik Təcrübə
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto col-lg-6">
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-check-circle" />
                        Peşəkar Avtomobil Təmiri Xidmətləri
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />Avtomobil təmiri
                        xidməti təmir etmək üçün təqdim olunur
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Avtomobilinizi Dərhal Təmir Edin{" "}
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Sürətli və Səmərəli Avtomobil Təmiri
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="btn-wrap mt-20">
                <Link href="/about" className="btn style2 mt-xl-0 mt-20">
                  Daha Çox <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
