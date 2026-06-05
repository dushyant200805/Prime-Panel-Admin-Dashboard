import { Link } from "react-router-dom";
import { useEffect } from "react";
import PageTitle from "../../components/Common/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NotificationCard from "./NotificationCard";
import BoxCard1 from "./BoxCard1";
import ButtonCard1 from "./ButtonCard1";
import ButtonCard2 from "./ButtonCard2";
import ButtonCard3 from "./ButtonCard3";
import ButtonCard4 from "./ButtonCard4";
import CopyCodeCard1 from "./CopyCodeCard1";
import DataTable8 from "../../components/Common-Sections/datatables/DataTable8";
import TimeLineCard1 from "../../components/Common-Sections/TimeLineCard1";
import FlagCard from "./FlagCard";
import { initializeCollapseCards, handleSingleToggle } from "../../assets/collapseHandler";
function WidgetsPage(Smallbox = true) {

      useEffect(() => {
      initializeCollapseCards();
    }, []);

    return (
        <>
            <PageTitle title="Widget" />
            <div className="row g-3 mb-3">
                <div className="col-12">
                    <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                        <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">message box
                             <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </Link>
                        </h2>
                        <div className="collapse show p-3 mb-3" id="msbox">
                            <div className="d-flex flex-wrap gap-2">
                                <NotificationCard />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                        <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">small box
                            <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                           <FontAwesomeIcon icon={faChevronDown} />
                                       </Link>
                        </h2>
                        <div className="collapse show p-3" id="smbox">
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <BoxCard1 Smallbox={Smallbox = true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                        <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">large box
                             <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </Link>
                        </h2>
                        <div className="collapse show p-3" id="lgbox">
                            <div className="d-flex flex-wrap gap-2 mb-3">
                                <BoxCard1 Smallbox={Smallbox = false} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                        <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">buttons ui
                            <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                           <FontAwesomeIcon icon={faChevronDown} />
                                       </Link>
                        </h2>
                        <div className="collapse show p-3" id="btnui">
                            <div className="mb-3 d-flex gap-2 flex-wrap">
                                <ButtonCard1 roundedclassName={"rounded-0"} />
                            </div>
                            <div className="mb-3 d-flex gap-2 flex-wrap">
                                <ButtonCard1 />
                            </div>
                            <div className="mb-3 d-flex gap-2 flex-wrap">
                                <ButtonCard1 roundedclassName={"rounded-pill"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                        <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">Buttons with ripple effect
                            <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                           <FontAwesomeIcon icon={faChevronDown} />
                                       </Link>
                        </h2>
                        <div className="collapse show p-3" id="btnui2">
                            <div className="mb-3 d-flex gap-2 flex-wrap">
                                <ButtonCard2 roundedclassName={"rounded-0"} />
                            </div>
                            <div className="mb-3 d-flex gap-2 flex-wrap">
                                <ButtonCard2 />
                            </div>
                            <div className="mb-3 d-flex gap-2 flex-wrap">
                                <ButtonCard2 roundedclassName={"rounded-pill"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="cardnew card-bg h-100 border-0 shadow-sm rounded-3 p-0">
                        <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">popover button</h2>
                        <div className="p-3 d-flex gap-2">
                            <ButtonCard3 />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="cardnew card-bg h-100 border-0 shadow-sm rounded-3 p-0">
                        <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">popover button with ripple effect</h2>
                        <div className="p-3 d-flex gap-2">
                            <ButtonCard4 />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <CopyCodeCard1 />
                </div>
                <div className="col-6">
                    <CopyCodeCard1 />
                </div>
                <div className="col-5">
                    <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                        <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text"> datalist
                             <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </Link>
                        </h2>
                        <DataTable8 />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                        <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text"> timeline
                          <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                        </h2>
                        <div id="content" className="collapse show p-3 position-relative">
                            <ul className="timeline-1 text-black m-0">
                                <TimeLineCard1 />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                        <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text"> world status
                             <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                        </h2>
                        <div id="toglecont" className="collapse p-3 show">
                            <FlagCard />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default WidgetsPage;