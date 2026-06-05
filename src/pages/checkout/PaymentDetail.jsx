function PaymentDetail () {
    return (
        <>
           <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0"> 
                <h2 className="text-capitalize fw-bold fs-5 mb-3 head-text">choose your preferred payment method</h2>
                <div className="row">
                    <div className="col-12 mb-3">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <input type="radio" name="paymenttype"/>
                            <h3 className="text-capitalize fw-bold fs-6 mb-0 tertiary-text">online method</h3>
                        </div>
                        <div className="row gx-2">
                            <div className="col-3 mb-2">
                                <a href="#" className="pay-card w-100">
                                    <img src="public/payment/paypal.png" width="100" height="50" className="object-fit-contain" alt=""/>
                                </a>
                            </div>
                            <div className="col-3 mb-2">
                                <a href="#" className="pay-card w-100">
                                    <img src="public/payment/gpay.png" width="100" height="50" className="object-fit-contain" alt=""/>
                                </a>
                            </div>
                            <div className="col-3 mb-2">
                                <a href="#" className="pay-card w-100">
                                    <img src="public/payment/stripe.png" width="100" height="50" className="object-fit-contain" alt=""/>
                                </a>
                            </div>
                            <div className="col-3 mb-2">
                                <a href="#" className="pay-card w-100">
                                    <img src="public/payment/amazonpay.png" width="150" height="50" className="object-fit-contain" alt=""/>
                                </a>
                            </div> 
                        </div> 
                    </div>
                    <div className="col-12"> 
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <input type="radio" name="paymenttype"/>
                            <h3 className="text-capitalize fw-bold fs-6 mb-0 tertiary-text">card method (credit card / debit card )</h3>
                        </div> 
                        <div className="row mb-3">
                            <div className="col-4 mb-3">
                                <div className="card-style"> 
                                    <form action="">
                                        <div className="row">
                                            <div className="col-6 mb-3">
                                                <label htmlFor="" className="fs-7 text-capitalize head-text">card number</label>
                                                <input type="text" className="form-control input-bg input-text"/>
                                            </div> 
                                            <div className="col-6 mb-3">
                                                <label htmlFor="" className="fs-7 text-capitalize head-text">name on card</label>
                                                <input type="text" className="form-control input-bg input-text"/>
                                            </div>
                                            <div className="col-4 mb-3">
                                                <label htmlFor="" className="fs-7 text-capitalize head-text">expiration date</label>
                                                <input type="text" className="form-control input-bg input-text"/>
                                            </div> 
                                            <div className="col-4 mb-3">
                                                <label htmlFor="" className="fs-7 text-capitalize head-text">cvv</label>
                                                <input type="text" className="form-control input-bg input-text"/>
                                            </div>
                                            <div className="col-4 mb-3">
                                                <label htmlFor="" className="fs-7 text-capitalize head-text">otp</label>
                                                <input type="text" className="form-control input-bg input-text"/>
                                            </div>
                                        </div>
                                    </form> 
                                </div>
                            </div>
                            <div className="col-8 text-end mb-3">
                                <img src="public/payment/ae.png" width="120" alt="" className="me-2"/>
                                <img src="public/payment/mc.png" width="120" alt="" className="me-2"/>
                                <img src="public/payment/visa.png" width="120" alt=""/>
                            </div>
                            <div className="col-12">
                                <button className="btn second-btn px-3 text-capitalize fw-semibold  head-textrounded-1">pay now</button>
                            </div>
                        </div>
                        <div className="alert alert-danger alert-dismissible fade show">
                            <strong>Failed!</strong> something went wrong!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>success!</strong> payment successfull!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                    </div>
                </div> 
            </div>
        </>
    );
}
export default PaymentDetail