import Image from "next/image";
import Link from "next/link";


const HeroOne = () => {
  return (
    <div
      className="hero-wrapper hero-1"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero.png)", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    >
      <div className="container">
        <div style={{ width: '100%' }} className="row ">
          <div style={{ alignSelf: 'flex-start', margin: '70px 0px' }} className="col-xl-12 ">
            <div className="hero-style1">
              <span className="sub-title text-white">Ən etibarlı avtomobil Hissələri</span>
              <h1 className="hero-title text-white">

                Keyfiyyətli Avtomobil ehtiyat hissələri
              </h1>
              <p className="hero-text text-white">
                Bütün marka və modellər üçün orijinal və keyfiyyətli avtomobil ehtiyat hissələri.
                Geniş çeşid, sürətli çatdırılma və ən yaxşı qiymətlərlə sizə xidmət edirik.
                Avtomobiliniz üçün lazım olan bütün ehtiyat hissələrini bir yerdə tapın.
              </p>
              <div className="btn-group">
                <Link href="/shop" className="btn">
                  Məhsullar
                </Link>
                <Link href="/contact" className="btn style-border">
                  Əlaqə
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroOne;
