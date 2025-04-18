import Link from "next/link";


const CTAAreaOne = () => {
  return (
    <div className="cta-area-1 my-12">
      <div className="cta1-bg-thumb">
        <img src="assets/img/bg/cta-bg1-1.png" alt="Fixturbo" />
      </div>
      <div className="container">
        <div className="cta-wrap1">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="title-area mb-md-0">
                <span className="sub-title style2 text-white">Bizimlə Əlaqə</span>
                <h2 className="sec-title text-white mb-0">
                  Mühərriklər Gurlayır, Problemlər Həll Olur
                </h2>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="title-area mb-0">
                <Link className="btn" href="/contact">
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

export default CTAAreaOne;
