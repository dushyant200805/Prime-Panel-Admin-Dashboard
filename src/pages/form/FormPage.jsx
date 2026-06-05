import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageTitle from "../../components/Common/PageTitle";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FormCard1 from "./FormCard1";
import FormCard2 from "./FormCard2";
import FormCard4 from "./FormCard4";
import FormCard5 from "./FormCard5";
import NewsLatterCard1 from "./NewsLatterCard1";
import NewsLatterCard2 from "./NewsLatterCard2";
import { Link } from "react-router";
import { initializeCollapseCards, handleSingleToggle } from "../../assets/collapseHandler";
import { useEffect } from "react";
function FormPage(Formbutton2=false ,NewsLatterCard3=false) {
    useEffect(() => {
  initializeCollapseCards();
}, []);
  return (
     <>
      <PageTitle title="forms | Prime Panel" />
       
        <div className="row g-3"> 
                    {/* form 1 */}
                    <div className="col-12"> 
                        <div className="card border-0 shadow-sm rounded-3  ">
                          <h2 className="fs-4 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">forms with bootstrap validation</h2>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xxl-3"> 
                        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 "> 
                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">form 1
                              <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                                <FontAwesomeIcon icon={faChevronDown} />
                              </Link>
                            </h2>   
                          <div className="collapse show p-3" id="f1">
                            {/*form 1 content */}
                            <FormCard1 Formbutton2={Formbutton2=false}/>
                          </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-8 col-xxl-6">
                        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 ">
                          <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">form 2
                            <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                          </h2>    
                          <div className="collapse show p-3" id="f2">
                             {/*form 1 content */}
                            <FormCard1 Formbutton2={Formbutton2=true}/>
                          </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xxl-3">
                        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 "> 

                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">form 3
                              <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                            </h2>
                            
                            <div className="collapse show p-3" id="f3">
                              <FormCard2 />
                            </div>

                        </div>
                    </div>
                     {/* newsletter 1 */}
                    <div className="col-sm-6 col-lg-4">
                      <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 "> 
                          <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">News letter Form 1
                             <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                          </h2> 
                          <div className="collapse show p-3" id="f4">
                            <NewsLatterCard1 />
                          </div> 
                      </div> 
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 "> 
                        <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">News letter Form 2
                         <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                        </h2> 
                        <div className="collapse show p-3" id="f5">
                            <NewsLatterCard2 NewsLatterCard3={NewsLatterCard3=false} />
                        </div>
                      </div>
                    </div> 
                    <div className="col-sm-6 col-lg-4">
                      <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 "> 
                        <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">News letter Form 3
                          <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                        </h2> 
                        <div className="collapse show p-3" id="f6">
                            <NewsLatterCard2 NewsLatterCard3={NewsLatterCard3=true} />
                        </div>
                      </div>
                    </div>
                     {/* form 2 */}
                    <div className="col-12"> 
                      <div className="card border-0 shadow-sm rounded-3  ">
                        <h2 className="fs-4 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">forms with jquery validation</h2>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xxl-3"> 
                        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 ">
                          <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">form 1
                             <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                          </h2>   

                          <div className="collapse show p-3" id="f2-1">
                             <FormCard4 Formbutton2={Formbutton2=false} />
                          </div>
                          
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-8 col-xxl-6"> 
                        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 "> 
                          <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">form 2
                            <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                          </h2>   
                          <div className="collapse show p-3" id="f2-2">
                                <FormCard4 Formbutton2={Formbutton2=true} />
                          </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xxl-3"> 
                        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 "> 
                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">form 3
                               <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                            </h2>  
                            <div className="collapse show p-3" id="f2-3">
                                <FormCard5 />
                            </div> 
                        </div>
                    </div>
                    {/* newsletter 2 */}
                    <div className="col-sm-6 col-lg-4">
                      <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 "> 
                          <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">News letter Form 1
                            <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                          </h2> 
                          <div className="collapse show p-3" id="f4">
                            <NewsLatterCard1 />
                          </div> 
                      </div> 
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 ">
                          <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">News letter Form 2
                           <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                          </h2> 
                          <div className="collapse show p-3" id="f2-5">
                           <NewsLatterCard2 NewsLatterCard3={NewsLatterCard3=false} />
                          </div>
                        </div>
                        
                    </div> 
                    <div className="col-sm-6 col-lg-4">
                        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3 ">
                          <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">News letter Form 3
                            <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                <FontAwesomeIcon icon={faChevronDown} />
                            </Link>
                          </h2> 
                          <div className="collapse show p-3" id="f2-6">
                            <NewsLatterCard2 NewsLatterCard3={NewsLatterCard3=true} />
                          </div>
                        </div> 
                    </div>
              </div>
     </>
  );
}

export default FormPage;