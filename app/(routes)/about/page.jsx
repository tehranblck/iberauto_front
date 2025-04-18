
import AboutTwo from "../../../components/AboutTwo";
import Breadcrumb from "../../../components/Breadcrumb";
import FooterAreaOne from "../../../components/FooterAreaOne";
import HeaderOne from "../../../components/HeaderOne";
import SubscribeOne from "../../../components/SubscribeOne";
import TestimonialOne from "../../../components/TestimonialOne";
import Preloader from "../../../helper/Preloader";

export const metadata = {
  title: "Haqqımızda || IberAuto - Avtomobil Parçaları",
  description:
    "IberAuto - Avtomobil Parçaları",
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
