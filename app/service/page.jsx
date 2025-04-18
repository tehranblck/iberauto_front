import Breadcrumb from "../../components/Breadcrumb";
import FooterAreaOne from "../../components/FooterAreaOne";
import HeaderOne from "../../components/HeaderOne";
import ServiceAreaOne_multi_img from "../../components/ServiceAreaOne_multi_img";
import SubscribeOne from "../../components/SubscribeOne";
import Preloader from "../../helper/Preloader";

export const metadata = {
  title: "Xidmətlərimiz || Saytyarat",
  description: "Saytyarat",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Xidmətlərimiz"} />

      {/* Service Area One */}
      <ServiceAreaOne_multi_img />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
