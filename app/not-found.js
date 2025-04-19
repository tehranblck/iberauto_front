"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function NotFound() {
  return (
    <Fragment>
      <section className="error-section" style={{ padding: "120px 0", background: "#f8f9fa" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="error-content">
                <div className="error-image mb-4">
                  <Image
                    src="/assets/img/404.svg"
                    alt="404 Error"
                    width={400}
                    height={300}
                    className="img-fluid"
                  />
                </div>
                <h1 className="error-title mb-3" style={{ color: "#dc3545", fontSize: "48px", fontWeight: "700" }}>
                  404
                </h1>
                <h2 className="error-subtitle mb-4" style={{ color: "#333", fontSize: "32px", fontWeight: "600" }}>
                  Səhifə tapılmadı!
                </h2>
                <p className="error-text mb-5" style={{ color: "#666", fontSize: "18px", lineHeight: "1.6" }}>
                  Üzr istəyirik, axtardığınız səhifə mövcud deyil. Səhifə silinmiş və ya köçürülmüş ola bilər.
                </p>
                <div className="error-actions">
                  <Link
                    href="/"
                    className="btn btn-danger btn-lg px-5 py-3"
                    style={{
                      borderRadius: "30px",
                      fontSize: "18px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}
                  >
                    Ana səhifəyə qayıt
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .error-section {
            min-height: calc(100vh - 400px);
            display: flex;
            align-items: center;
          }
          .error-content {
            padding: 40px;
            background: #fff;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          .error-image {
            max-width: 400px;
            margin: 0 auto;
          }
          .btn-danger {
            background-color: #dc3545;
            border-color: #dc3545;
            transition: all 0.3s ease;
          }
          .btn-danger:hover {
            background-color: #c82333;
            border-color: #bd2130;
            transform: translateY(-2px);
          }
          @media (max-width: 768px) {
            .error-section {
              padding: 80px 0;
            }
            .error-content {
              padding: 20px;
            }
            .error-title {
              font-size: 36px;
            }
            .error-subtitle {
              font-size: 24px;
            }
            .error-text {
              font-size: 16px;
            }
            .btn-lg {
              padding: 12px 24px;
              font-size: 16px;
            }
          }
        `}</style>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.documentElement.setAttribute('data-404', 'true');
          `,
        }}
      />
    </Fragment>
  );
}
