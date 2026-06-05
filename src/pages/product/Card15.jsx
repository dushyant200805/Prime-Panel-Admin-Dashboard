import { Link } from "react-router"
function Card15() {
    return(
        <>
           <div className="card mb-3 rounded-2 border-0">
                    <div className="row g-0">
                        <div className="col-md-5 p-2">
                        <img src="public/can.jpg" className="img-fluid rounded-2 h-100 object-fit-cover" alt="..."/>
                        </div>
                        <div className="col-md-7">
                        <div className="card-body p-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title head-text text-capitalize fs-6 fw-bold m-0">product name</h5> 
                            <span className="second-shade border second-border fs-8 second-text fw-bold rounded-pill px-2">15s ago</span>
                        </div> 
                        <p className="card-text para-text fw-semibold m-0 mb-1"><small className="second-text">Last updated 3 mins ago</small></p>
                            <p className="card-text fs-7 para-text mb-1 para-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, vitae.</p>
                            <p className="card-text fs-7 para-text mb-1 para-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, vitae.</p> 
                            <p className="card-text fs-7 para-text mb-2 para-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, vitae.</p> 
                            <Link to="#" className="btn prime-btn rounded-0">Go somewhere</Link>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Card15
 