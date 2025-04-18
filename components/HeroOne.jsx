import Link from "next/link";


const HeroOne = () => {
  return (
    <div
      className="hero-wrapper hero-1"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero.png)", backgroundSize: 'cover' }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6">
            <div className="hero-style1">
              <span className="sub-title text-white">Böyümə Sürətləndirici</span>
              <h1 className="hero-title text-white">
                Hazır Olun{" "}
                <span clas>
                  <img src="assets/img/hero/hero_shape_1.png" alt="Fixturbo" />
                  Ən Yaxşı
                </span>{" "}
                Keyfiyyətli Xidmət Üçün
              </h1>
              <p className="hero-text text-white">
                Avtomobilinizə ehtiyac duyduğu bütün xidmətləri təqdim edirik.
                Təcrübəli mütəxəssislərimiz və müasir avadanlıqlarımızla
                avtomobilinizin ən yaxşı vəziyyətdə olmasını təmin edirik.
              </p>
              <div className="btn-group">
                <Link href="/about" className="btn">
                  Haqqımızda
                </Link>
                <Link href="/service" className="btn style-border">
                  Xidmətlərimiz
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="hero-thumb bottom-0 text-center">
              <img src="assets/img/hero/hero_thumb_1_1.png" alt="Fixturbo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
