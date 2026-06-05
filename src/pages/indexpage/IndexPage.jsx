import IndexCard1 from "./IndexCard1";
import SwiperSliderCard1 from "./SwiperSliderCard1";
import SwiperSliderCard2 from "./SwiperSliderCard2";
import PageTitle from "../../components/Common/PageTitle";
function IndexPage() {
    return (
        <>
            <PageTitle title="Dashboard" />
            <div className="row g-3 mb-3">
                <IndexCard1 bgclassName={false} />
            </div>
            <div className="row g-3">
                <SwiperSliderCard1 />
                <SwiperSliderCard2 />
            </div>
        </>
    )
}

export default IndexPage;