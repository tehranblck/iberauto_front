import Breadcrumb from "../../../components/Breadcrumb";
import Cart from "../../../components/Cart";
import FooterAreaOne from "../../../components/FooterAreaOne";
import HeaderOne from "../../../components/HeaderOne";
import SubscribeOne from "../../../components/SubscribeOne";
import Preloader from "../../../helper/Preloader";

export const metadata = {
  title: "Səbət || IberAuto - Avtomobil Parçaları",
  description:
    "Səbət",
};


const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Cart"} />

      {/* Cart */}
      <Cart />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
