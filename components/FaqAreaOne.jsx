import Link from "next/link";

const FaqAreaOne = () => {
  return (
    <section style={{ marginTop: "120px" }} className="faq-area-1 space-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-lg-0">
              <span className="sub-title">Tez-tez verilən suallar</span>
              <h2 className="sec-title">
                Avtomobil Parçaları Haqqında Suallar
              </h2>
              <p className="sec-text">
                Avtomobil parçaları satın alırkən diqqət etməli olduğunuz məqamlar və sifariş prosesi haqqında məlumat.
              </p>
              <div className="btn-wrap mt-30">
                <Link className="btn style2" href="/contact">
                  Daha çox <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    Orijinal parçaları necə təmin edirsiniz?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Bütün parçalarımız rəsmi distribütorlardan və etibarlı təchizatçılardan təmin edilir.
                      Hər bir parça üçün orijinallıq sertifikatı və zəmanət təqdim edirik.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    Sifariş etdiyim parçalar nə qədər müddətdə çatdırılır?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Stokda olan parçalar 1-2 iş günü ərzində çatdırılır. Xüsusi sifarişlər üçün
                      çatdırılma müddəti parçanın növündən və təchizatçıdan asılı olaraq dəyişir.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    Hansı ödəniş üsullarını qəbul edirsiniz?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Nağd ödəniş, bank kartı və bank köçürməsi ilə ödəniş qəbul edirik.
                      Həmçinin, bəzi bankların təklif etdiyi taksit imkanlarından da yararlana bilərsiniz.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    Zəmanət şərtləriniz nələrdir?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse"
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Bütün orijinal parçalarımız üçün istehsalçı zəmanəti təqdim edirik.
                      Zəmanət müddəti parçanın növündən asılı olaraq 6 ay ilə 2 il arasında dəyişir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaOne;
