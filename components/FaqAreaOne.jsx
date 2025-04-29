"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const FaqAreaOne = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
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

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  if (loading) {
    return <div className="text-center py-5">Yüklənir...</div>;
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
            <div className="custom-accordion">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="accordion-item">
                  <div
                    className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3>{faq.sual}</h3>
                    <span className="accordion-icon">
                      <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`} />
                    </span>
                  </div>
                  <div
                    className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
                  >
                    <p>{faq.cavab}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-accordion {
          width: 100%;
        }
        .accordion-item {
          margin-bottom: 15px;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
        }
        .accordion-header {
          padding: 15px 20px;
          background-color: #f8f9fa;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }
        .accordion-header h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }
        .accordion-header.active {
          background-color: var(--theme-color);
        }
        .accordion-header.active h3 {
          color: white;
        }
        .accordion-icon {
          color: #666;
          transition: transform 0.3s ease;
        }
        .accordion-header.active .accordion-icon {
          color: white;
        }
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background-color: white;
        }
        .accordion-content.active {
          max-height: 500px;
        }
        .accordion-content p {
          padding: 20px;
          margin: 0;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default FaqAreaOne;
