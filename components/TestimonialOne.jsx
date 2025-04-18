"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";

const TestimonialOne = () => {
  return (
    <div
      className="testimonial-area-1 overflow-hidden"
      style={{ backgroundImage: "url(assets/img/bg/testimonial-bg1-1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="testimonial-thumb1">
              <img src="assets/img/bg/testimonial-1-1.png" alt="IberAuto" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="space">
              <div className="title-area">
                <span className="sub-title">Müştərilərimizin Rəyləri</span>
                <h2 className="sec-title text-white">
                  Orijinal və Keyfiyyətli <br /> Avtomobil Parçaları
                </h2>
              </div>
              <div className="row global-carousel testi-slider-1">
                <Swiper
                  loop={true}
                  navigation={{
                    nextEl: ".testimonialOne-button-next",
                    prevEl: ".testimonialOne-button-prev",
                  }}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  speed={1000}
                  autoplay={{ delay: 6000 }}
                  pagination={true}
                  className="mySwiper"
                  modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    500: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    992: { slidesPerView: 1 },
                    1200: { slidesPerView: 1 },
                    1400: { slidesPerView: 1 },
                  }}
                >
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">Nəfiz Bhuian</h4>
                              <span className="testi-profile-desig">Müştəri</span>
                            </div>
                            <div className="quote-icon">
                              <img src="assets/img/icon/quote1-1.svg" alt="IberAuto" />
                            </div>
                          </div>
                          <p className="testi-card_text">
                            IberAuto-dan aldığım mühərrik parçaları çox keyfiyyətli və orijinaldır.
                            Sürətli çatdırılma xidməti və peşəkar məsləhət xidməti ilə məmnun qaldım.
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">Əli Hüseynov</h4>
                              <span className="testi-profile-desig">Müştəri</span>
                            </div>
                            <div className="quote-icon">
                              <img src="assets/img/icon/quote1-1.svg" alt="IberAuto" />
                            </div>
                          </div>
                          <p className="testi-card_text">
                            Geniş məhsul çeşidi və rəqabətli qiymətlərlə avtomobilim üçün lazım olan
                            bütün parçaları tapa bilirəm. Xidmət keyfiyyəti və müştəri məmnuniyyəti çox yüksəkdir.
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="testi-card">
                        <div className="testi-card_content">
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-details">
                              <h4 className="testi-profile-title">Vüsal Əliyev</h4>
                              <span className="testi-profile-desig">Müştəri</span>
                            </div>
                            <div className="quote-icon">
                              <img src="assets/img/icon/quote1-1.svg" alt="IberAuto" />
                            </div>
                          </div>
                          <p className="testi-card_text">
                            Bütün marka və modellər üçün orijinal parçalar tapa bilmək çox rahatdır.
                            Peşəkar komanda və sürətli çatdırılma xidməti ilə daim əməkdaşlıq edirəm.
                          </p>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="testimonialOne arrow">
                  <div className="testimonialOne-button-next testimonialOne-button">
                    <i className="fas fa-arrow-left"></i>
                  </div>
                  <div className="testimonialOne-button-prev testimonialOne-button">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
