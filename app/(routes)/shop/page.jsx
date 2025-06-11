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
    <div>
      {/* Preloader */}
      <Preloader />


      {/* Breadcrumb */}


      <div style={{ marginTop: "50px" }}>
        <ShopArea size={"large"} />
      </div>

    </div>
  );
};

export default page;
