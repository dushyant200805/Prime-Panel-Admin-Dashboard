import { Link } from "react-router";
import ChartUI5 from "../../components/Common-Sections/charts/Chart-5";
import ProfileForm from "./ProfileForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TicketCard from "./TicketsCard";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../assets/collapseHandler";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ChartUI21 from "../../components/Common-Sections/charts/Chart-21";
function ProfilePage({ShowTitle=false}) {

    useEffect(() => {
        initializeCollapseCards();
    }, []);

     const Chartdetails = {
        "name2":"Monthly working report",
      };
    return (
        <>
            <div className="row g-3">   
                        <div className="col-12 col-xxl-6">
                            <div className="card h-100 border-0 shadow-sm rounded-3 position-relative p-2 mb-3"> 
                                <div className="card rounded-3 col-12 mb-5 border-0 banner">
                                    
                                </div>
                                <div className="profile-content py-3 px-4">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="position-relative mb-4">
                                                <img src="public/profile.jpg" width="90" height="90" className="profile-page-img" alt=""/>
                                                <h2 className="prime-font fw-bold fs-4 m-0 head-text">Steven Robinson</h2> 
                                                <p className="text-uppercase prime-text fw-bold fs-7 fw-semibold m-0 mb-3">sr software engineer</p>
                                                <p className="text-uppercase para-text fs-7 m-0 mb-1">DOB : 14-12-1985</p>
                                                <p className="text-uppercase para-text fs-7 m-0 ">Joining Date : 14-12-2014</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-capitalize para-text fs-7 m-0">We'll put a happy little sky in here. We touch the canvas, the canvas takes what it wants. A little happy sunlight shining through there. Let's build some happy little clouds up here.</p>
                                            </div>
                                            <p className="text-uppercase fs-7 prime-text fw-bold m-0 mb-2">connect with me <i className="fa-solid fa-link"></i> </p>
                                            <div className="d-flex gap-2 align-items-center">
                                                <Link to="#" className="shadow-sm border border-light prime-shade py-1 px-2 rounded-3">
                                                    <FontAwesomeIcon icon={faFacebookF} className="prime-text fs-6" />
                                                </Link>
                                                <Link to="#" className="shadow-sm border border-light second-shade py-1 px-2 rounded-3">
                                                    <FontAwesomeIcon icon={faInstagram} className="second-text fs-6" />
                                                </Link>
                                                <Link to="#" className="shadow-sm border border-light tertiary-shade py-1 px-2 rounded-3">
                                                    <FontAwesomeIcon icon={faLinkedinIn} className="tertiary-text fs-6" />
                                                </Link>
                                            </div>
                                        </div>
                                         <div className="col-6">   
                                            <div className="accordion" id="accordionExample">
                                                <div className="accordion-item mb-2 border-0 rounded-2">
                                                    <h2 className="accordion-header">
                                                    <button className="accordion-button shadow-none prime-shade border prime-border prime-text rounded-2 collapsed text-capitalize"
                                                     type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        permanent address
                                                    </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ad, labore similique vel quam voluptates nemo mollitia iusto ab, veniam aperiam, eveniet quidem quae?
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0 rounded-2">
                                                    <h2 className="accordion-header">
                                                    <button className="accordion-button second-shade second-text border second-border rounded-2 shadow-none collapsed text-capitalize"
                                                     type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        communication address
                                                    </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ad, labore similique vel quam voluptates nemo mollitia iusto ab, veniam aperiam, eveniet quidem quae?
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                        <div className="col-6 col-xl-4 col-xxl-3">
                            <div className="taskinhand collapse-card card-bg border-0 shadow-sm rounded-3 position-relative">
                                <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">User Details & Documents
                                    <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </Link>
                                </h2>  
                                <div className="collapse p-3 show" id="usrdtls">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                          <button className="nav-link fs-7 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">User Details</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                          <button className="nav-link fs-7" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Academic</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                          <button className="nav-link fs-7" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Address</button>
                                        </li> 
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                            <ProfileForm/>
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                                          <ProfileForm/>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                                           <ProfileForm/>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-6 col-xl-4 col-xxl-3">
                            <div className="taskinhand collapse-card card h-100 border-0 shadow-sm rounded-3 position-relative"> 
                                <h2 className="fs-6 m-0 border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">Tickets
                                    <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </Link>
                                </h2>
                                <div className="collapse show p-3" id="taskinhand">   
                                    <TicketCard/>
                                </div> 
                            </div>
                        </div>  
                        <div className="col-6">
                            <div className="row gx-0  card-bg  border-0 shadow-sm rounded-3 position-relative ">
                               <ChartUI21/>
                            </div>
                        </div>
                        <div className="col-12 col-xxl-6">
                             <ChartUI5 showTitle={ShowTitle=true} name={Chartdetails.name2} />  
                        </div>  
                    </div>
        </>
    );
}

export default ProfilePage;