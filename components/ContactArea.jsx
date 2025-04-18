import React from "react";

const ContactArea = () => {
  return (
    <>
      <div className="contact-area space">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h6 className="contact-info_title">Ünvan</h6>
                <p className="contact-info_text">
                  Baku,Azerbaijan
                </p>
                <p className="contact-info_text">Bakı,Azərbaycan</p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <h6 className="contact-info_title">Telefon Nömrəsi</h6>
                <p className="contact-info_text">
                  <a href="tel:6295550129">(994) 55 555-55-55</a>
                </p>
                <p className="contact-info_text">
                  <a href="tel:01254693326">01254693326</a>
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-clock" />
                </div>
                <h6 className="contact-info_title">Açılış Saatı</h6>
                <p className="contact-info_text">Bütün gün</p>
                <p className="contact-info_text">09:00-18:00</p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope" />
                </div>
                <h6 className="contact-info_title">E-poçt</h6>
                <p className="contact-info_text">
                  <a href="mailto:info@saytyarat.com">
                    info@saytyarat.com
                  </a>
                </p>
                <p className="contact-info_text">
                  <a href="mailto:info@saytyarat.com">info@saytyarat.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="map-sec">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2s!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              title="address"
            />
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 text-lg-end">
              <div className="faq-thumb2 mb-xl-0 mb-50">
                <div className="about-counter-grid jump">
                  <img
                    src="assets/img/icon/faq2-counter-icon-1.svg"
                    alt="İberAuto"
                  />
                  <div className="media-right">
                    <h3 className="about-counter">
                      <span className="counter-number">250</span>+
                    </h3>
                    <h4 className="about-counter-text">Maşın parçası</h4>
                  </div>
                </div>
                <img src="assets/img/normal/faq-thumb-2-1.png" alt="İberAuto" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap p-0">
                <div className="title-area">
                  <span className="sub-title">Əlaqə formu</span>
                  <h2 className="sec-title">Avtomobil Təmiri Ən Yaxşı Xidmətlər</h2>
                </div>
                <form
                  action="mail.php"
                  method="POST"
                  className="appointment-form ajax-contact"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Adınız"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="E-poçt ünvanı"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder="Telefon nömrəsi"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select"
                          defaultValue={"Choose"}
                        >
                          <option value="Choose">Seçim edin</option>
                          <option value="Construction">Avtomobil təmiri</option>
                          <option value="Real Estate">Maşın təmiri</option>
                          <option value="Industry">Avtomobil xidməti</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      placeholder="Mesajınızı buraya yazın.."
                      id="contactForm"
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button className="btn style2">
                      İndi Randevu Al <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
