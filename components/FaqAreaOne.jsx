"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Bootstrap'i sadece client-side'da yükle
const BootstrapJS = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), {
  ssr: false
});

const FaqAreaOne = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchFaqs = async () => {
      try {
        const response = await fetch('https://api.iberauto.az/api/faqs?populate=*');
        if (!response.ok) {
          throw new Error('API yanıt vermedi');
        }
        const data = await response.json();
        setFaqs(data.data);
        setLoading(false);
      } catch (err) {
        console.error('FAQ Hatası:', err);
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Yüklənir...</div>;
  }

  if (!mounted) {
    return null;
  }

  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-lg-0">
              <span className="sub-title">Tez-tez verilən suallar</span>
              <h2 className="sec-title">
                Ehtiyat hissələri haqqında suallar
              </h2>
              <p className="sec-text">
                Avtomobil ehtiyat hissələri satın alırkən diqqət etməli olduğunuz məqamlar və sifariş prosesi haqqında məlumat.
              </p>
              <div className="btn-wrap mt-30">
                <Link className="btn style2" href="/contact">
                  Daha çox <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="accordion-item">
                  <h2 className="accordion-header" id={`heading-${faq.id}`}>
                    <button
                      className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${faq.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse-${faq.id}`}
                    >
                      {faq.sual}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${faq.id}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading-${faq.id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">
                        {faq.cavab}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaOne;
