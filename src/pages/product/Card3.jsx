import { Link } from "react-router"
function Card3() {
    return(
        <>
          <div className="card border-0 " >
                <div className="position-relative">
                    <img src="public/earrings.jpg" height="200" className="card-img-top object-fit-cover" alt="..."/>
                    <span className="position-absolute end-0 top-0 m-3 second-shade fs-8 second-text fw-bold rounded-pill px-2">15s ago</span>
                    <h5 className="position-absolute bottom-0 start-0 w-100 card-title prime-bg py-1 px-2 text-capitalize fs-7 m-0 fw-semibold text-white">diamond earrings</h5>
                </div>

                <div className="card-body border-0">
                    
                    <p className="card-text fs-7 para-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate in quos aperiam.</p>
                    <Link to="#" className="btn prime-btn rounded-0">Go somewhere</Link>
                </div>
            </div>
        </>
    )
}
export default Card3
 