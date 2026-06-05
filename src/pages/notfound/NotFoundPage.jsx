import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
       {/* <!-- error section --> */}
       <section className="vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-10">
                    <div className="pe-lg-5">
                        <h1 className="display-2 fw-bold mb-4">
                            <span className="prime-text d-block mb-3">Error 404</span>
                            <span className="d-block para-text font-shadow">Page Not Found!</span>
                        </h1>
                        <Link to="/" className="btn prime-btn rounded-2">
                            <span className="d-inline-block">Go to Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
       </section>
        {/* <!-- error section end --> */}
    </>
  );
}

export default NotFoundPage; 