"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import Image from "next/image";
import { useEffect, useState } from "react";

const CounterOne = () => {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const fetchBgImage = async () => {
      try {
        const response = await fetch('https://api.iberauto.az/api/kampaniya?populate=*');
        const data = await response.json();
        if (data.data?.foto?.url) {
          setBgImage(`https://api.iberauto.az${data.data.foto.url}`);
        }
      } catch (error) {
        console.error('Error fetching background image:', error);
      }
    };

    fetchBgImage();
  }, []);

  return (
    <div className="counter-area-1 space-bottom">
      <div className="container">
        <div className="counter-wrap1">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-6">
              <div className="counter-card-wrap">
                <div className="row gy-30 justify-content-between">
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp delay={0} start={0} end={500} />
                                  +
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">Məhsul Növləri</p>
                      </div>
                      <div className="counter-card_icon">
                        <img
                          src="assets/img/icon/counter-icon_1-1.svg"
                          alt="IberAuto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp delay={0} start={0} end={50} />
                                  +
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">Marka</p>
                      </div>
                      <div className="counter-card_icon">
                        <Image
                          src="/assets/img/icon/counter-icon_1-2.svg"
                          alt="IberAuto"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp delay={0} start={0} end={200} />
                                  +
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">Məmnun Müştəri</p>
                      </div>
                      <div className="counter-card_icon">
                        <Image
                          src="/assets/img/icon/counter-icon_1-3.svg"
                          alt="IberAuto"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp delay={0} start={0} end={5} />
                                  +
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">İl Təcrübə</p>
                      </div>
                      <div className="counter-card_icon">
                        <Image
                          src="/assets/img/icon/counter-icon_1-4.svg"
                          alt="IberAuto"
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="counter-checklist-wrap">
                {bgImage && (
                  <div className="bg-image-wrapper">
                    <Image
                      src={bgImage}
                      alt="Background"
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .counter-checklist-wrap {
          position: relative;
          min-height: 400px;
          border-radius: 8px;
          overflow: hidden;
        }
        .bg-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .bg-image-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2;
        }
        .content-wrapper {
          position: relative;
          z-index: 3;
          padding: 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .checklist ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .checklist ul li {
          color: white;
          margin-bottom: 15px;
          font-size: 18px;
          display: flex;
          align-items: center;
        }
        .checklist ul li i {
          color: white;
          margin-right: 10px;
        }
        .call-media-wrap {
          margin-top: 30px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .call-media-wrap .title {
          margin: 0;
          font-size: 16px;
        }
        .call-media-wrap .link {
          margin: 0;
        }
        .call-media-wrap .link a {
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default CounterOne;
