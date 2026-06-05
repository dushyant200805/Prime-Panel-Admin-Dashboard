import ProductSliderCard from "./ProductSliderCard";
import ProductDetailCard from "./ProductDetailCard";
import SimilerProduct from "./SimilerProduct";
import PageTitle from "../../components/Common/PageTitle";
import { Link } from "react-router";
function ProductDetailPage (){
    const handleRipple = (e) => {
  const button = e.currentTarget;
  const span = button.querySelector("span");

  const rect = button.getBoundingClientRect();

  const relX = e.clientX - rect.left;
  const relY = e.clientY - rect.top;

  span.style.left = `${relX}px`;
  span.style.top = `${relY}px`;
};
    return (
        <>
        <PageTitle title="Product Details" />
           <div className="row g-2">
                        <div className="col-12">
                            <div className="card-bg p-2 rounded-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="fs-5 fw-semibold m-0 text-capitalize head-text">product detail</h2> 
                                    <button className="btn second-btn btn-sm rounded-1"> <i className="bi bi-sort-down"></i> sort by</button>
                                </div>
                            </div> 
                        </div>
                       <ProductSliderCard/>
                        <ProductDetailCard/>
                        <div className="col-xxl-4">
                            <div className="card-bg p-3 mb-2 rounded-2">
                                <div className="body-bg p-2 mb-2">
                                    <div className="card-bg text-capitalize prime-text fw-semibold p-2 mb-2">
                                        <i className="bi bi-dropbox"></i> free delivery
                                    </div>
                                    <div className="card-bg text-capitalize red-text fw-semibold p-2 mb-2">
                                        <i className="bi bi-shield-check"></i> safety
                                    </div>
                                    <div className="card-bg text-capitalize second-text fw-semibold p-2">
                                        <i className="bi bi-cash-coin"></i> secured payment
                                    </div>
                                </div>
                                <button className=" btn red-btn w-100 ripple mb-2 d-flex align-items-center justify-content-between shadow-sm p-2 rounded-2 text-capitalize fw-semibold"
                                 data-bs-toggle="modal" data-bs-target="#CouponCode" onMouseEnter={handleRipple}
                                    onMouseLeave={handleRipple}>
                                    <span className="reffect"></span>
                                    <span>coupon code</span>
                                    <span><i className="bi bi-receipt"></i></span>
                                </button>
                                <p className="fs-7 p-2 m-0 second-shade mb-2 second-text fw-semibold text-capitalize"><i className="bi bi-check-circle"></i> firstcoupon! coupon code is applied!</p>
                                <p className="fs-7 p-2 m-0 red-shade mb-2 red-text fw-semibold text-capitalize"><i className="bi bi-x-circle"></i> this coupon code can't be applied on this product!</p>
                                <p className="fs-7 p-2 m-0 tertiary-shade tertiary-text fw-semibold text-capitalize"><i className="bi bi-exclamation-triangle-fill"></i> error while applying coupon code!</p>
                            </div>
                            <div className="card-bg p-2 rounded-2"> 
                               <SimilerProduct/>
                            </div>
                        </div>
                    </div>
                     {/* coupn code modal */}
                      <div class="modal fade" id="CouponCode" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="CouponCodeLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content card-bg">
                        <div class="modal-header py-1 px-2 d-flex align-items-center justify-content-between">
                          <p class="modal-title head-text fs-6 text-capitalize" id="CouponCodeLabel">choose coupon code</p>
                          <button type="button" class="btn btn-sm btn-transparent border-0 shadow-none p-0" data-bs-dismiss="modal" aria-label="Close">
                            <i class="bi bi-x head-text fs-2"></i>
                          </button>
                        </div>
                        <div class="modal-body">
                                 <Link to="#" class="d-block text-capitalize para-text mb-2 border py-2 px-1">1. coupon code  <span class="fw-bold">HELLO! 123</span></Link>

                                 <Link to="#" class="d-block text-capitalize para-text mb-2 border py-2 px-1">2. coupon code  <span class="fw-bold">HELLO! 123</span></Link>
                             
                                 <Link to="#" class="d-block text-capitalize para-text mb-2 border py-2 px-1">3. coupon code  <span class="fw-bold">HELLO! 123</span></Link>
                             
                                 <Link to="#" class="d-block text-capitalize para-text mb-2 border py-2 px-1">4. coupon code  <span class="fw-bold">HELLO! 123</span></Link>
                             
                                 <Link to="#" class="d-block text-capitalize para-text mb-2 border py-2 px-1">5. coupon code  <span class="fw-bold">HELLO! 123</span></Link>
                             
                                 <Link to="#" class="d-block text-capitalize para-text mb-2 border py-2 px-1">6. coupon code  <span class="fw-bold">HELLO! 123</span></Link>
                             
                                 <Link to="#" class="d-block text-capitalize para-text mb-2 border py-2 px-1">7. coupon code  <span class="fw-bold">HELLO! 123</span></Link>
                             
                        </div>
                        <div class="modal-footer"> 
                          <button type="button" class="btn red-btn btn-sm rounded-1">apply <i class="bi bi-check-circle ps-2"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
        </>
    );
}
export default ProductDetailPage