import { Link } from "react-router";
import PageTitle from "../../components/Common/PageTitle";
function ForgetPass () {
    return (
        <>
        <PageTitle title="Forgot Password" />
             <div className="auth-page-outer">
                    <div className="container"> 
                           <div className="col-4 mx-auto">
                               <div className="rounded-3 card-bg p-3 h-100">
                                    <div className="text-center mb-4">
                                        <img src="includes/images/logo.png" width="250" alt=""/>
                                    </div>
                                   <h2 className="text-capitalize mb-3 head-text text-center fw-bold ">forgot password</h2>
                                   <form action="" className="mb-3"> 
                                       <input type="email" placeholder="email"
                                        className="form-control input-bg input-text text-capitalize mb-3 p-2"  required /> 
                                       <Link to="/"  className="btn prime-btn w-100">send otp</Link>
                                   </form>
                                   <div className="text-center">
                                       <p className="mb-1 head-text text-capitalize">back to login screen ? 
                                        <Link to="/login" className="prime-text text-capitalize fw-semibold">login</Link></p> 
                                   </div>
                               </div>
                           </div> 
                    </div>
                 </div> 
        </>
    );
}
export default ForgetPass