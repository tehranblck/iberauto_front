import AboutOne from "../components/AboutOne";
import CTAAreaOne from "../components/CTAAreaOne";
import CounterOne from "../components/CounterOne";
import FaqAreaOne from "../components/FaqAreaOne";
import HeaderOne from "../components/HeaderOne";
import HeroOne from "../components/HeroOne";
import ServiceAreaOne from "../components/ServiceAreaOne";
import TestimonialOne from "../components/TestimonialOne";
import Animation from "../helper/Animation";
import Preloader from "../helper/Preloader";
import ShopArea from "../components/ShopArea";
export const metadata = {
  title: "Ana Səhifə || IberAuto - Avtomobil Hissələri Satışı",
  description:
    "IberAuto - Bütün marka və modellər üçün orijinal və keyfiyyətli avtomobil Hissələri",
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Animation init */}
      <Animation />

      {/* Header one */}


      {/* Hero One */}
      <HeroOne />
      <div style={{ marginBottom: '30px' }}>
        <ShopArea size={"small"} />
      </div>

      {/* Counter One */}
      <CounterOne />

      {/* About One */}
      <AboutOne />

      {/* Service Area One */}
      <ServiceAreaOne />

      {/* CTA Area One */}
      <CTAAreaOne />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Faq Area One */}
      <FaqAreaOne />

      {/* Footer Area One */}
    </>
  );
};

export default page;
