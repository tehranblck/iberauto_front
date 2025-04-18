"use client"
import Link from "next/link";
import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";

const AboutOne = () => {
  return (
    <div className="about-area-1 space-bottom">
      <div className="about1-shape-img shape-mockup">
        <img
          className="about1-shape-img-1 spin"
          src="assets/img/normal/about_shape1-2.svg"
          alt="IberAuto"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="assets/img/normal/about_shape1-1.svg"
          alt="IberAuto"
        />
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-thumb1 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/normal/about_1-1.png" alt="IberAuto" />
              </div>
              <div className="about-img-2">
                <img src="/assets/img/normal/about_1-2.png" alt="IberAuto" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area">
                <span className="sub-title">Haqqımızda</span>
                <h2 className="sec-title">
                  Avtomobil Parçaları Satışında Etibarlı Tərəfdaş
                </h2>
                <p className="sec-text">
                  IberAuto olaraq, bütün marka və modellər üçün orijinal və keyfiyyətli avtomobil parçaları təqdim edirik.
                  Geniş məhsul çeşidimiz, sürətli çatdırılma xidmətimiz və rəqabətli qiymətlərimizlə müştərilərimizə ən yaxşı xidməti göstərməyə çalışırıq.
                </p>
              </div>
              <div className="checklist style2">
                <ul>
                  <li>
                    <i className="fas fa-check-double" />
                    Orijinal və keyfiyyətli parçalar
                  </li>
                  <li>
                    <i className="fas fa-check-double" />
                    Sürətli çatdırılma xidməti
                  </li>
                  <li>
                    <i className="fas fa-check-double" />
                    Rəqabətli qiymətlər
                  </li>
                  <li>
                    <i className="fas fa-check-double" />
                    Peşəkar məsləhət xidməti
                  </li>
                </ul>
              </div>
              <div className="btn-wrap mt-40">
                <Link href="/about" className="btn style2">
                  Daha çox <i className="fas fa-arrow-right ms-2" />
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
