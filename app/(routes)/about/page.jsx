
import AboutTwo from "../../../components/AboutTwo";
import Breadcrumb from "../../../components/Breadcrumb";
import CTAAreaOne from "../../../components/CTAAreaOne";
import FooterAreaOne from "../../../components/FooterAreaOne";
import HeaderOne from "../../../components/HeaderOne";
import ProcessAreaOne from "../../../components/ProcessAreaOne";
import SubscribeOne from "../../../components/SubscribeOne";
import TeamAreaTwo from "../../../components/TeamAreaTwo";
import TestimonialOne from "../../../components/TestimonialOne";
import Preloader from "../../../helper/Preloader";

export const metadata = {
  title: "Haqqımızda || saytyarat - Avtomobil Təmir & Xidmət",
  description:
    "saytyarat",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Haqqımızda"} />

      {/* About Area */}
      <AboutTwo />



      {/* Testimonial One */}
      <TestimonialOne />



      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
