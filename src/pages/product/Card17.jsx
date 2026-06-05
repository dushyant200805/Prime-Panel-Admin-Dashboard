import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
function Card17() {
    return(
        <>
           <div className="card border-0">
                    <div className="p-3"> 
                        <img src="public/message1.jpg" width="75" height="75" className="rounded-2 mb-3" alt=""/>
                        <h4 className="fs-6 m-0 fw-semibold prime-font mb-1 head-text">Robert Davis</h4>
                        <p className="m-0 fs-7 mb-2 para-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id fugiat, qui totam voluptatibus minus fugit architecto esse adipisci tenetur ea!</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex flex-wrap gap-2 justify-content-center">
                                <Link to="#" title="connect on instagram" className="rounded-2 btn red-btn d-flex align-items-center">
                                    <FontAwesomeIcon icon={faInstagram} className="fs-6"/>
                                </Link>
                                <Link to="#" title="connect on twitter" className="rounded-2 btn blue-btn d-flex align-items-center">
                                    <FontAwesomeIcon icon={faXTwitter} className="fs-6"/>
                                </Link>
                                <Link to="#" title="connect on whatsapp" className="rounded-2 btn second-btn d-flex align-items-center">
                                   <FontAwesomeIcon icon={faWhatsapp} className="fs-6"/>
                                </Link> 
                                <Link to="tel:#" title="+1-0123456789" className="rounded-2 btn prime-btn d-flex align-items-center">
                                   <FontAwesomeIcon icon={faMobileScreenButton} className="fs-6"/>
                                </Link> 
                            </div> 
                        </div>
                        
                    </div>
                </div> 
        </>
    )
}
export default Card17
 