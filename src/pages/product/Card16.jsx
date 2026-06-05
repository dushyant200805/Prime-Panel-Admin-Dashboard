import { Link } from "react-router"
function Card16() {
    return(
        <>
           <div className="card border-0 mb-3">
                    <div className="card-header text-capitalize fw-semibold">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title head-text text-capitalize fs-6 fw-bold m-0">product name</h5> 
                            <span className="second-shade border second-border fs-8 second-text fw-bold rounded-pill px-2">15s ago</span>
                        </div> 
                    </div>
                    <div className="card-body">
                        <h5 className="card-title fs-6 head-text">Special title here</h5>
                        <p className="card-text fs-7 para-text para-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, reprehenderit similique possimus, quos in cum omnis, sit incidunt quas iure iste odit laudantium dolores velit debitis. Unde totam fuga harum error dolorum et natus nisi suscipit! Tempore sed voluptas in, provident voluptatibus veritatis sapiente accusantium!</p>
                        <Link to="#" className="btn prime-btn rounded-0">Go somewhere</Link>
                    </div>
                </div>
        </>
    )
}
export default Card16
 