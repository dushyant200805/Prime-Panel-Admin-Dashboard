import AddressCard1 from "./AddressCard1";
import ShoppingMethod from "./ShoppingMethod";

function ShoppingCard1 () {
    return (
        <>
            {/* <!-- shipping details --> */}
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0"> 
                <h2 className="mb-0 fs-5 text-capitalize fw-bold head-text">shipping details:</h2>
                <p className="mb-2 para-text text-capitalize fs-7">choose address where you want to deliver your order</p> 
                <div className="text-start d-flex gap-2">
                    <button className="btn prime-btn rounded-1 mb-3 text-capitalize fw-semibold  head-textbtn-sm">
                        <i className="bi bi-plus"></i> add address
                    </button>
                    <button className="btn yellow-btn rounded-1 mb-3 text-capitalize fw-semibold  head-textbtn-sm">
                    <i className="bi bi-pencil"></i> edit address
                </button>
                    <button className="btn red-btn rounded-1 mb-3 text-capitalize fw-semibold  head-textbtn-sm">
                    <i className="bi bi-trash"></i> delete address
                </button>
                </div>
                <div className="row gx-2 mb-2">
                    <AddressCard1/>
                </div> 
                <div className="mb-3">
                    <h2 className="mb-0 fs-5 text-capitalize fw-bold mb-2 head-text">shipping methods:</h2>
                    <div className="row gx-2">
                        <ShoppingMethod/>
                    </div>
                </div>
                <div className="text-end">
                    <button className="btn prime-btn">
                        next <i className="bi bi-arrow-right-circle ms-1"></i>
                    </button>
                </div>
            </div>
                   
        </>
    );
}
export default ShoppingCard1