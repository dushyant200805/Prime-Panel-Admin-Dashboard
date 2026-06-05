import { Link } from "react-router";

function CreateAccountPage () {
    return (
        <>  
          <div className="auth-page-outer">
                    <div className="container"> 
                           <div className="col-4 mx-auto">
                               <div className="rounded-3 card-bg p-3 h-100">
                                   <div className="text-center mb-4">
                                       <img src="includes/images/logo.png" width="250" alt=""/>
                                   </div>
                                   <h2 className="text-capitalize mb-3 head-text text-center fw-bold ">create account</h2>
                                   <form action="" className="mb-3">
                                       <input type="text" placeholder="username" className="form-control input-bg input-text text-capitalize mb-3 p-2" required/>
                                       <input type="email" placeholder="email" className="form-control input-bg input-text text-capitalize mb-3 p-2" required/>
                                       <input type="text" placeholder="name" className="form-control input-bg input-text text-capitalize mb-3 p-2" required/>
                                       <input type="phone" placeholder="mobile" className="form-control input-bg input-text text-capitalize mb-3 p-2" required/>
                                       <input type="password" placeholder="password" className="form-control input-bg input-text text-capitalize mb-3 p-2" required/>
                                       <input type="password" placeholder="confirm password" className="form-control input-bg input-text text-capitalize mb-3 p-2" required/> 
                                       <Link to="/"  className="btn prime-btn w-100 fw-bold rounded-2 ripple">
                                        create account
                                        <span className="reffect"></span>
                                    </Link>
                                   </form>
                                   <div className="text-center">
                                       <p className="mb-1 head-text text-capitalize">already have an account? 
                                        <Link to="/login" className="prime-text text-capitalize fw-semibold">login now</Link></p> 
                                   </div>
                               </div>
                           </div> 
                    </div>
                 </div> 
        </>
    )
}
export default CreateAccountPage;