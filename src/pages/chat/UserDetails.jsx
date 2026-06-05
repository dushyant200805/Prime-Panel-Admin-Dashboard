import { faInstagram, faLinkedinIn, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
function UserDetails({ selectedUser }){
    return(
        <>
           <div className="d-flex align-items-center gap-3 p-3">
                <img src={selectedUser?.image}  width="140" height="140" className="object-fit-cover rounded-4" alt=""/>
                <div>
                    <h2 className="text-capitalize fs-4 fw-bold m-0 head-text">{selectedUser?.name}</h2>
                    <p className="m-0 text-capitalize head-text fw-semibold prime-text fs-7 mb-1">{selectedUser?.post}</p>
                    <div className="mb-3"> 
                            <span className="tertiary-shade rounded-pill px-1 fs-9 text-capitalize fw-semibold border tertiary-border tertiary-text d-inline-flex align-items-center"> 
                            <span className="p-1 tertiary-bg rounded-pill me-1"></span>  {selectedUser?.status}</span> 
                    </div>
                    <div className="d-flex gap-2">
                        <Link to="tel:#" className="icon-main">
                            <FontAwesomeIcon icon={faPhone} />
                        </Link> 
                        <Link to="#" className="icon-main">
                            <FontAwesomeIcon icon={faMessage} />
                        </Link> 
                        <Link to="#" className="icon-main">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link> 
                        <Link to="#" className="icon-main">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </Link> 
                        <Link to="#" className="icon-main">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </Link> 
                        <Link to="#" className="icon-main">
                            <FontAwesomeIcon icon={faWhatsapp} /> 
                        </Link> 
                    </div>
                </div> 
                </div>
                  <div className="p-3 mb-3">
                    <h3 className="border-bottom light-border-bottom fs-5 text-capitalize fw-semibold mb-3 pb-2 fw-semibold head-text">official details</h3>
                    <p className="m-0 mb-2 text-capitalize head-text"><span className="fw-bold">designation: </span> {selectedUser?.designation}</p>
                    <p className="m-0 mb-2 text-capitalize head-text"><span className="fw-bold">experience: </span> {selectedUser?.experience}</p>
                    <p className="m-0 mb-2 head-text"><span className="fw-bold text-capitalize">official email id: </span> <a href="mailto:#">{selectedUser?.email}</a> </p>
                    <p className="m-0 mb-2 text-capitalize head-text"><span className="fw-bold text-capitalize">team: </span> {selectedUser?.team}</p> 
                    <p className="m-0 text-capitalize head-text"><span className="fw-bold text-capitalize">joined prime panel: </span> {selectedUser?.joined}</p> 
                </div>
                <div className="p-3">
                    <h3 className="border-bottom light-border-bottom fs-5 text-capitalize fw-semibold mb-3 pb-2 fw-semibold head-text">personal details</h3>
                    <p className="m-0 mb-2 text-capitalize head-text"><span className="fw-bold">education: </span> {selectedUser?.education}</p> 
                    <p className="m-0 mb-2 text-capitalize head-text"><span className="fw-bold">total working experience: </span> {selectedUser?.totalExperience}</p> 
                </div>
                <div className="d-flex align-items-center gap-2 px-3">
                    <Link to="#" className="btn prime-btn ripple btn-lg rounded-3">
                        make a call
                        <span className="reffect"></span>
                    </Link>
                    <Link to="#" className="btn second-btn ripple btn-lg rounded-3">
                        chat now
                        <span className="reffect"></span>
                    </Link>
                </div>
           
           
        </>
    )
}
export default UserDetails; 