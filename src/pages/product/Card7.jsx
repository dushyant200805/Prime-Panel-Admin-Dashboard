function Card7() {
    return(
        <>
          <div className="card border-0 rounded-2 p-2" >
                <img src="public/shoes.jpg" height="200" className="card-img-top rounded-2 object-fit-cover" alt="..."/>
                <div className="card-body border-0">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title head-text text-capitalize fs-6 fw-bold m-0">product name</h5> 
                        <span className="second-shade border second-border fs-8 second-text fw-bold rounded-pill px-2">15s ago</span>
                    </div> 
                </div>
            </div>
        </>
    )
}
export default Card7
 