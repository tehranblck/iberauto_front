import Breadcrumb from "../../../components/Breadcrumb";
import ShopArea from "../../../components/ShopArea";
import SubscribeOne from "../../../components/SubscribeOne";
import Preloader from "../../../helper/Preloader";

export const metadata = {
  title: "Shop || saytyarat - Avtomobil Təmir & Xidmət",
  description:
    "saytyarat ",
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Breadcrumb */}
      <Breadcrumb title={"Mağaza"} />

      {/* Shop Area */}
      <ShopArea />

      {/* Subscribe One */}
      <SubscribeOne />
    </>
  );
};

export default page;
