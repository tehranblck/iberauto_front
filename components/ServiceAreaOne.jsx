"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceAreaOne = () => {
  return (
    <section className="service-area-1 space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Məhsul Kateqoriyaları</span>
              <h2 className="sec-title">
                Avtomobil hissələri kateqoriyaları
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_icon">
                <Image src="/assets/img/icon/service-icon_1-1.svg" alt="IberAuto" width={50} height={50} />
              </div>
              <h4 className="service-card_title">
                <Link href="/shop">Mühərrik hissələri</Link>
              </h4>
              <p className="service-card_text">
                Bütün marka və modellər üçün mühərrik hissələri
              </p>
              <Link href="/shop" className="link-btn">
                Daha çox <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_icon">
                <Image src="/assets/img/icon/service-icon_1-2.svg" alt="IberAuto" width={50} height={50} />
              </div>
              <h4 className="service-card_title">
                <Link href="/shop">Süspansiya hissələri</Link>
              </h4>
              <p className="service-card_text">
                Amortizatorlar, yaylar və digər süspansiya komponentləri
              </p>
              <Link href="/shop" className="link-btn">
                Daha çox <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <div className="service-card_icon">
                <Image src="/assets/img/icon/service-icon_1-3.svg" alt="IberAuto" width={50} height={50} />
              </div>
              <h4 className="service-card_title">
                <Link href="/shop">Fren sistemi hissələri</Link>
              </h4>
              <p className="service-card_text">
                Fren balataları, disk və digər fren sistemi komponentləri
              </p>
              <Link href="/shop" className="link-btn">
                Daha çox <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaOne;
