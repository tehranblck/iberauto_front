import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function NotFound() {
  return (
    <Fragment>
      {/* Error Section start */}
      <section className="error-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wrapper">
                <div
                  className="img-file"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Image
                    className="img-fluid"
                    src="/assets/img/error.png"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="text-file">
                  <h4 data-aos="fade-up" data-aos-delay="300">
                    Səhifə tapılmadı!
                  </h4>
                  <p data-aos="fade-up" data-aos-delay="400">
                    Üzr istəyirik, bu səhifə tapılmadı! Axtardığınız səhifə mövcud deyil.
                    <br />
                    Səhifənin mövcud olduğunu təsəvvür edin.
                  </p>
                </div>
                <div
                  className="d-adjust"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Link className="default-btn" href="/">
                    Ana səhifəyə qayıt
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
