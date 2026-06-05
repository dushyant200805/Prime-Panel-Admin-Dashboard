import DataTable9 from "../../components/Common-Sections/datatables/DataTable9";
import PageTitle from "../../components/Common/PageTitle";
import CartDetails from "./CartDetail";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { initializeCollapseCards, handleSingleToggle } from "../../assets/collapseHandler";
import { useEffect } from "react";
function CartPage () {
        useEffect(() => {
      initializeCollapseCards();
    }, []);
    return (
        <>
        <PageTitle title="Cart" />
          <div className="row g-3 mb-3">
                    <div className="col-9">
                        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">cart Details 
                                 <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </Link>
                            </h2>   
                            <div id="cartmain" className="collapse  p-2 show">  
                               <DataTable9/>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card collapse-card h-100 border-0 shadow-sm rounded-3">
                            <h2 className="fs-6 m-0 border-bottom light-border-bottom p-2 fw-bold text-capitalize d-flex justify-content-between align-items-center head-text">order summary 
                              <Link to="#"  onClick={handleSingleToggle} className="togglecard fs-6 head-text"> 
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </Link>
                            </h2>   
                            <div id="cartdetail" className="collapse  p-2 show">  
                                <div className="body-bg p-2 rounded-2 mb-3">
                                     <CartDetails/>
                                    <div className="blue-shade d-flex border-top border-2 prime-border p-3 mb-2 justify-content-between">
                                        <p className="m-0 fs-7 blue-text fw-bold text-capitalize">total:</p>
                                        <p className="m-0 fs-7 blue-text fw-bold">  $484</p>
                                    </div> 
                                </div>
                                <select name="couponcode"  className="form-select mb-2 input-bg input-text text-capitalize " id="">
                                    <option defaultValue  disabled>select coupon code</option>
                                    <option defaultValue="1">coupon code 1</option>
                                    <option defaultValue="2">coupon code 2</option>
                                    <option defaultValue="3">coupon code 3</option>
                                </select>
                                <div className="border coupon p-2 rounded-2 mb-2">
                                    <h2 className="fs-6 m-0 text-capitalize fw-semibold mb-1 head-text">coupon code</h2>
                                    <p className="fs-7 m-0 text-capitalize para-text">
                                    <i className="bi bi-check-circle-fill second-text me-1"></i>
                                    coupon applied you save $50 on this order
                                    </p>
                                </div> 
                                <div className="border coupon p-2 rounded-2">
                                    <h3 className="fs-6 m-0  fw-bold text-capitalize mb-3 blue-shade p-2 rounded-2 blue-text">choose delivery option</h3>  
                                        <div className="d-flex mb-3 justify-content-between">
                                            <div className="d-flex align-items-center gap-1">
                                                <input type="radio" name="shipping"/> 
                                                <p className="m-0 text-capitalize fs-7 fw-semibold head-text">standard shipping</p>
                                            </div>
                                            <div>
                                                <p className="m-0 fs-7 fw-semibold para-text text-capitalize">
                                                    charges :
                                                    <span className="m-0 prime-text">$5</span>
                                                </p>
                                                <p className="m-0 para-text text-capitalize fw-semibold fs-8">
                                                    delivery :
                                                    5 to 8 days
                                                </p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mb-3">
                                            <div className="d-flex align-items-center gap-1">
                                                <input type="radio" name="shipping"/> 
                                                <p className="m-0 text-capitalize fs-7 fw-semibold head-text">Express shipping</p>
                                            </div>
                                            <div>
                                                <p className="m-0 fs-7 fw-semibold para-text text-capitalize">
                                                    charges :
                                                    <span className="m-0 prime-text">$10</span>
                                                </p>
                                                <p className="m-0 para-text text-capitalize fw-semibold fs-8">
                                                    delivery :
                                                   2 to 3 days
                                                </p>
                                            </div>
                                        </div>
                                        <button className="btn blue-btn w-100 rounded-2 fs-6 mb-2">checkout</button>
                                        <button className="btn second-btn w-100 rounded-2 fs-6">continue shopping</button>
                                      
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
        </>
    );
}
export default CartPage