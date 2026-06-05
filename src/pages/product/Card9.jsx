import { Link } from "react-router"
import "bootstrap-icons/font/bootstrap-icons.css";
function Card9() {
    return(
        <>
          <div className="card border-0 rounded-2">
                <div className="row g-0 align-items-center">
                    <div className="col-md-2 p-2">
                    <img src="public/can.jpg" width="60" height="60" className="rounded-2 object-fit-cover" alt="..."/>
                    </div>
                    <div className="col-md-10">
                    <div className="card-body px-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="card-title head-text text-capitalize fw-semibold fs-6 m-0">product name here</h5> 
                            <p className="m-0 fs-7 para-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                         <Link to="#" className="me-2 head-text">
                            <i className="bi bi-three-dots-vertical fs-6"></i>
                        </Link>
                    </div>  
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card9
 