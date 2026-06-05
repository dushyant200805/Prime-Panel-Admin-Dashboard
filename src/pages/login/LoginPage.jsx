import { Link } from "react-router";
import PageTitle from "../../components/Common/PageTitle";
import { useEffect } from "react";

function LoginPage () {
    useEffect(() => {
        document.documentElement.setAttribute(
          "data-bs-primetheme",
          "light"
        );
    },[]);
    return (
        <>
        <PageTitle title="Login" />
          
            <div className="auth-page-outer">
                <div className="container"> 
                    <div className="col-4 mx-auto">
                        <div className="rounded-3 card-bg p-3 h-100">
                            <div className="text-center mb-4">
                                <img src="public/logo.png" width="250" alt=""/>
                            </div>
                            <h2 className="text-capitalize head-text mb-3 text-center fw-bold ">login</h2>
                            <form action="" className="mb-3">
                                <input type="text" placeholder="username"
                                 className="form-control input-bg input-text text-capitalize mb-3 p-2" required/>
                                <input type="email" placeholder="email" 
                                className="form-control input-bg input-text text-capitalize mb-3 p-2" required/> 
                                <Link to="/"  className="btn prime-btn w-100">login</Link>
                            </form>
                            <div className="text-center">
                                <p className="mb-1 head-text text-capitalize">don't have any account? <a href="/createaccount" className="prime-text text-capitalize fw-semibold">create account</a></p>
                                <p className="mb-1 head-text text-capitalize">forgot password <a href="/forgetpass" className="prime-text text-capitalize fw-semibold">recover now</a></p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </>
    );
}
export default  LoginPage