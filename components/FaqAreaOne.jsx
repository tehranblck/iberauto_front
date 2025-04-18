import Link from "next/link";

const FaqAreaOne = () => {
  return (
    <section style={{ marginTop: "120px" }} className="faq-area-1 space-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-lg-0">
              <span className="sub-title">İstifadəçi sualları</span>
              <h2 className="sec-title">
                İstifadəçi sualları
              </h2>
              <p className="sec-text">
                Avtomobil təmiri, avtomobilin hansı hissəsini təmir etdirməyi seçə bilərəm?
              </p>
              <div className="btn-wrap mt-30">
                <Link className="btn style2" href="/contact">
                  Daha Çox <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    Avtomobilimin hansı hissəsini təmir etdirməyi seçə bilərəm?
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
                      Səhifənin oxunaqlı məzmunu oxucunu diqqətindən yayındırır. Bir çox masaüstü nəşr paketləri və veb səhifə redaktorları indi Lorem Ipsum{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    Avtomobilimi nə qədər tezliklə servisə gətirməliyəm?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Səhifənin oxunaqlı məzmunu oxucunu diqqətindən yayındırır. Bir çox masaüstü nəşr paketləri və veb səhifə redaktorları indi Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    Yoxlama lampası yandıqda nə etməliyəm?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Səhifənin oxunaqlı məzmunu oxucunu diqqətindən yayındırır. Bir çox masaüstü nəşr paketləri və veb səhifə redaktorları indi Lorem Ipsum
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    Avtomobilin təmiri nə qədər vaxt aparır?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Səhifənin oxunaqlı məzmunu oxucunu diqqətindən yayındırır. Bir çox masaüstü nəşr paketləri və veb səhifə redaktorları indi Lorem Ipsum
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
