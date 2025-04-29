import Breadcrumb from "../../../components/Breadcrumb";
import ContactArea from "../../../components/ContactArea";
import FooterAreaOne from "../../../components/FooterAreaOne";
import HeaderOne from "../../../components/HeaderOne";
import SubscribeOne from "../../../components/SubscribeOne";
import Preloader from "../../../helper/Preloader";

export const metadata = {
  title: "Əlaqə || İberAuto - Avtomobil Təmir & Xidmət",
  description:
    "İberAuto - Avtomobil Təmir & Xidmət",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}


      {/* Breadcrumb */}
      <Breadcrumb title={"Əlaqə"} />

      {/* Contact Area */}
      <ContactArea />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
