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
        <div className="row flex-row-reverse">
          <div style={{ alignSelf: 'flex-start', marginBottom: '10px' }} className="col-xl-6 ">
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
          <div style={{ alignSelf: 'flex-end' }} className="col-xl-6">
            <div className="hero-thumb bottom-0 text-center">
              <Image src="/assets/img/hero/hero_thumb_1_1.png" alt="IberAuto" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
