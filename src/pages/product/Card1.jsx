function Card1() {
    return(
        <>
           <div className="card border-0 " >
                <div className="position-relative">
                    <img src="public/earrings.jpg" height="170" className="card-img-top object-fit-cover" alt="..."/>
                    <span className="position-absolute end-0 top-0 m-3 second-shade fs-8 second-text fw-bold rounded-pill px-2">15s ago</span>
                </div>
                <div className="card-body border-0">
                <h5 className="card-title text-capitalize fs-5 m-0 fw-semibold head-text mb-1">diamond earrings</h5>
                <p className="card-text fs-7 para-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate in quos aperiam.</p> 
                </div>
            </div>  
        </>
    )
}
export default Card1
 