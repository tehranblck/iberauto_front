import AboutTwo from "../../../components/AboutTwo";
import Breadcrumb from "../../../components/Breadcrumb";
import SubscribeOne from "../../../components/SubscribeOne";
import TestimonialOne from "../../../components/TestimonialOne";
import Preloader from "../../../helper/Preloader";

export const metadata = {
  title: "Haqqımızda || IberAuto - Avtomobil Hissələri",
  description:
    "IberAuto - Avtomobil Hissələri",
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Breadcrumb */}
      <Breadcrumb title={"Haqqımızda"} />

      {/* About Area */}
      <AboutTwo />

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Subscribe One */}
      <SubscribeOne />
    </>
  );
};

export default page;
