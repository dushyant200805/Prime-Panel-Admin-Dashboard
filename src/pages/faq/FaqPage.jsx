import FaqCard1 from "./FaqCard1";
import PageTitle from "../../components/Common/PageTitle";
import FaqCard2 from "./FaqCard2";
import FaqCard3 from "./FaqCard3";
import FAQFrom from "./FAQFrom";

function FaqPage() {
    return (
        <>
        <PageTitle title="FAQ" />
            <div className="row g-3"> 
                    <div className="col-12">
                        <div className="card-bg border-0 shadow-sm rounded-3 ">
                            <h2 className="fs-4 m-0 p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">ask question</h2>
                        </div>
                    </div> 
                    <div className="col-8"> 
                        <div className="card-bg p-2 border-0 shadow-sm rounded-3"> 
                            <div className="p-3 body-bg mb-3">
                                <h2 className="fs-2 fw-bold text-capitalize text-center prime-text">frequently ask question</h2>
                                <h3 className="fs-5 fw-bold text-capitalize text-center para-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, odit.</h3>
                                <p className="fs-7 fw-semibold text-center para-text m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima laboriosam natus sed recusandae placeat illum temporibus illo obcaecati, doloremque suscipit consectetur facere alias eos quos vel inventore? Necessitatibus atque tenetur est suscipit expedita fugiat? Cum libero.</p>
                            </div> 
                            <ul className="nav nav-pills gap-2 mb-3 border border-dashed rounded-2 p-2" id="faqtab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize fs-7 fw-semibold px-4 py-2 active" id="tabone-tab" data-bs-toggle="pill" data-bs-target="#tabone" type="button" role="tab" aria-controls="tabone" aria-selected="true">account settings</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize fs-7 fw-semibold px-4 py-2" id="tabtwo-tab" data-bs-toggle="pill" data-bs-target="#tabtwo" type="button" role="tab" aria-controls="tabtwo" aria-selected="false">privacy settings</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-capitalize fs-7 fw-semibold px-4 py-2" id="tabthree-tab" data-bs-toggle="pill" data-bs-target="#tabthree" type="button" role="tab" aria-controls="tabthree" aria-selected="false">billings and payment</button>
                                </li> 
                            </ul>
                            <div className="tab-content" id="faqtabContent">
                                <div className="tab-pane fade show active" id="tabone" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                    <div className="accordion card-bg " id="accountaccordion">
                                        <FaqCard1/>
                                    </div>
                                    
                                </div>
                                <div className="tab-pane fade" id="tabtwo" role="tabpanel" aria-labelledby="tabtwo-tab" tabIndex="0">
                                    <div className="accordion card-bg " id="privacyaccordion">
                                       <FaqCard2/>
                                    </div> 
                                </div>
                                <div className="tab-pane fade" id="tabthree" role="tabpanel" aria-labelledby="tabthree-tab" tabIndex="0">
                                    <div className="accordion card-bg " id="billingaccordion">
                                        <FaqCard3/> 
                                    </div> 
                                </div> 
                            </div>  
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card-bg p-2 border-0 shadow-sm rounded-3">
                            <div className="text-center mb-2">
                                <i className="bi bi-patch-question-fill prime-text display-1"></i>
                                <h2 className="fw-bold para-text text-capitalize mb-2 fs-5">any question?</h2>
                                <p className="para-text fs-6 text-capitalize m-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, vel?</p>
                            </div>
                            <div className="rounded-1 p-2">
                                <FAQFrom/>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default FaqPage;