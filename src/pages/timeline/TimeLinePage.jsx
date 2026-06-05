import TimeLineCard1 from "../../components/Common-Sections/TimeLineCard1";
import PageTitle from "../../components/Common/PageTitle";
import TimeLineCard2 from "./TimeLineCard2";
import TimeLineCard3 from "./TimeLineCard3";
import TimeLineCard4 from "./TimeLineCard4";

function TimeLinePage() {
    return (
        <>
        <PageTitle title="TimeLine" />
            <div className="row g-3">
                <div className="col-12">
                        <div className="card-bg border-0 shadow-sm rounded-3 ">
                            <h2 className="fs-4 m-0 p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">timeline</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="card-bg h-100 border-0 shadow-sm rounded-3">
                            <div id="content" className="show p-3 position-relative">
                                <ul className="timeline-1 text-black m-0">
                                    <TimeLineCard1/>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="card-bg h-100 border-0 shadow-sm rounded-3">
                            <TimeLineCard2 />
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="card-bg h-100 border-0 shadow-sm rounded-3 p-3">
                            <TimeLineCard3/>
                        </div>
                    </div>
                    <div className="col-12 my-5">
                       <TimeLineCard4/>
                    </div>
                   
                </div>
        </>
    );
}
export default TimeLinePage;