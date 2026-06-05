import { Link } from "react-router"
import "bootstrap-icons/font/bootstrap-icons.css";
function Card12() {
    return(
        <>
           <div className="card border-0 rounded-2">
                            <div className="row g-0 align-items-center">
                                <div className="col-md-10">
                                    <div className="card-body px-3">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5 className="card-title head-text text-capitalize fw-semibold fs-6 m-0">product name here</h5> 
                                                <p className="m-0 fs-7 para-text">Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <div className="col-md-2 text-center"> 
                                    <Link to="#" className="head-text">
                                        <i className="bi bi-cup-hot fs-3"></i>
                                    </Link>
                                </div> 
                            </div>
                        </div>
        </>
    )
}
export default Card12
 