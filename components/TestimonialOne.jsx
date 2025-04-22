"use client"
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import Image from "next/image";

const TestimonialOne = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://api.iberauto.az/api/testimonials?populate=*');
        if (!response.ok) {
          throw new Error('API yanıt vermedi');
        }
        const data = await response.json();
        setTestimonials(data.data);
        setLoading(false);
      } catch (err) {
        console.error('Testimonial Hatası:', err);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Yüklənir...</div>;
  }

  return (
    <div
      className="testimonial-area-1 overflow-hidden"
      style={{ backgroundImage: "url(assets/img/bg/testimonial-bg1-1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div style={{ visibility: 'hidden' }} className="col-lg-6">
            <div className="testimonial-thumb1">
              <Image src="/assets/img/bg/testimonial-1-1.png" alt="IberAuto" width={500} height={500} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="space">
              <div className="title-area">
                <span className="sub-title">Müştərilərimizin Rəyləri</span>
                <h2 className="sec-title text-white">
                  Orijinal və Keyfiyyətli <br /> Avtomobil Hissələri
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
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div>
                        <div className="testi-card">
                          <div className="testi-card_content">
                            <div className="testi-card-profile">
                              <div className="testi-card-profile-details">
                                <h4 className="testi-profile-title">{testimonial.ad_soyad}</h4>
                                <span className="testi-profile-desig">{testimonial.client}</span>
                              </div>
                              <div className="quote-icon">
                                <Image src="/assets/img/icon/quote1-1.svg" alt="IberAuto" width={50} height={50} />
                              </div>
                            </div>
                            <p className="testi-card_text">
                              {testimonial.rey}
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
                  ))}
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
