import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import PageTitle from "../../components/Common/PageTitle";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../assets/collapseHandler";
import DataTable1 from "../../components/Common-Sections/datatables/DataTable1";
import DataTable2 from "../../components/Common-Sections/datatables/DataTable2";
import DataTable3 from "../../components/Common-Sections/datatables/DataTable3";
import DataTable4 from "../../components/Common-Sections/datatables/DataTable4";
import DataTable5 from "../../components/Common-Sections/datatables/DataTable5";
import DataTable6 from "../../components/Common-Sections/datatables/DataTable6";
import DataTable7 from "../../components/Common-Sections/datatables/DataTable7";
import { Link } from "react-router";
function TablePage() {
    useEffect(() => {
    initializeCollapseCards();
    }, []);
    return (
        <>
        <PageTitle title="Tables" />
               <div className="row g-3">
                    <div className="col-12"> 
                        <div className="card border-0 shadow-sm rounded-3 ">
                            <h2 className="fs-4 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">Data Tables</h2>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card collapse-card  border-0 shadow-sm rounded-3"> 
                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">simple responsive datatable
                                <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </Link>
                            </h2>
                            <div className="collapse show p-3" id="smdtble">
                                <div className="data-entries">  
                                   <DataTable2 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                       <DataTable1 />
                    </div>
                    <div className="col-5">
                        <div className="card collapse-card  border-0 shadow-sm rounded-3">
                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">simple responsive datatable
                                 <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                      <FontAwesomeIcon icon={faChevronDown} />
                                  </Link>
                            </h2>
                            <div className="collapse show p-3" id="dtpbar2">
                                <DataTable3/>
                            </div>
                        </div>  
                    </div> 
                    <div className="col-7">
                        <div className="card collapse-card  border-0 shadow-sm rounded-3"> 
                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">simple responsive datatable
                                 <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </Link>
                            </h2>
                            <div className="collapse show p-3" id="dtpbar">
                                <div className="data-entries">  
                                    <DataTable4/>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-8">
                        <div className="card collapse-card  border-0 shadow-sm rounded-3"> 
                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                                responsive datatable with chart</h2>
                            <div className="data-entries p-3">  
                               <DataTable5/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card collapse-card  border-0 shadow-sm rounded-3">  
                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                                responsive datatable with map flag chart</h2>
                            <div className="p-3">
                                <DataTable6/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card collapse-card  border-0 shadow-sm rounded-3"> 
                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">
                                simple responsive datatable
                                <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </Link>
                            </h2>
                            <div className="collapse show p-3" id="smdtble">
                                <div className="data-entries">  
                                   <DataTable7 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                       <DataTable1 />  
                    </div>
                </div>
        </>
    );
}
export default TablePage;