import "bootstrap-icons/font/bootstrap-icons.css";
import PageTitle from "../../components/Common/PageTitle";
import ProductCard from "./ProductCard";
import FilterCard1 from "./FilterCard1";
import FilterCard2 from "./FilterCard2";
import FilterCard3 from "./FilterCard3";
import FilterCard4 from "./FilterCard4";
function ProductListPage () {
    return (
        <>
        <PageTitle title="Product List" />
            <div className="row g-3">
                <div className="col-12">
                    <div className="card-bg p-2 rounded-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="fs-5 fw-semibold m-0 text-capitalize head-text">product listing</h2> 
                            <button className="btn second-btn btn-sm rounded-1"> <i className="bi bi-sort-down"></i> sort by</button>
                        </div>
                    </div> 
                </div>
                <div className="col-xl-9">
                    <div className="card-bg h-100 rounded-2 p-2">
                        <div className="row g-2 mb-3"> 
                           <ProductCard/>
                        </div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end m-0">
                                <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="card-bg h-100 rounded-2 p-2">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-2">
                            <h3 className="fs-5 fw-semibold m-0 text-capitalize head-text">filter</h3>
                            <a href="#" className="text-capitalize fw-semibold text-decoration-underline fs-7 head-text"> clear all</a>
                        </div>
                        <form id="prod-filters">
                            <h4 className="m-0 mb-2 fs-5 text-capitalize fw-bold blue-shade blue-text p-2 rounded-2">brands</h4>
                                <table className="table table-borderless">
                                    <tbody>
                                        <FilterCard1 />
                                    </tbody>
                                </table>

                                <h4 className="m-0 mb-2 fs-5 text-capitalize fw-bold blue-shade blue-text p-2 rounded-2">categories</h4>
                                
                                <table className="table table-borderless">
                                    <tbody>
                                        <FilterCard2 />
                                    </tbody>
                                </table>
                                <h4 className="m-0 mb-2 fs-5 text-capitalize fw-bold blue-shade blue-text p-2 rounded-2">price</h4>

                                  <table className="table table-borderless"> 
                                    <tbody>
                                        <FilterCard3/>
                                    </tbody>
                                  </table> 

                                <h4 className="m-0 mb-2 fs-5 text-capitalize fw-bold blue-shade blue-text p-2 rounded-2">Color</h4>

                                <table className="table table-borderless"> 
                                    <tbody>
                                        <FilterCard4/>
                                    </tbody>
                                </table>

                            <div className="px-2">
                                <button type="submit" className="btn second-btn btn-sm rounded-0">apply filter</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </>
    );
}
export default ProductListPage