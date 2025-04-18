import Breadcrumb from "../../../../components/Breadcrumb";
import FooterAreaOne from "../../../../components/FooterAreaOne";
import HeaderOne from "../../../../components/HeaderOne";
import ShopDetails from "../../../../components/ShopDetails";
import SubscribeOne from "../../../../components/SubscribeOne";
import Preloader from "../../../../helper/Preloader";

export const metadata = {
    title: "Məhsul Detalları || IberAuto - Avtomobil Parçaları",
    description:
        "IberAuto - Bütün marka və modellər üçün orijinal və keyfiyyətli avtomobil parçaları. Sürətli çatdırılma və rəqabətli qiymətlər.",
};

const ProductDetailsPage = ({ params }) => {
    return (
        <>
            {/* Preloader */}
            <Preloader />

            {/* Header one */}
            <HeaderOne />

            {/* Breadcrumb */}
            <Breadcrumb title={"Məhsul Detalları"} />

            {/* Shop Details */}
            <ShopDetails productId={params.id} />

            {/* Subscribe One */}
            <SubscribeOne />

            {/* Footer Area One */}
            <FooterAreaOne />
        </>
    );
};

export default ProductDetailsPage; 