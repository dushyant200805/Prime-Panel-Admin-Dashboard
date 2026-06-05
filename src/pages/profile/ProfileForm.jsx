import { useState } from "react";
function ProfileForm(){
        const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return(
        <>
           <form className={`row g-3 needs-validation ${validated ? "was-validated" : ""}` }noValidate onSubmit={handleSubmit}>
                <div className="col-md-12"> 
                    <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none fs-7 para-text bg-transparent" id="validationCustom01" defaultValue="Steven" placeholder="your first name" required />
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-12"> 
                    <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none fs-7 para-text bg-transparent" id="validationCustom02" placeholder="your last name" defaultValue="Robinson" required />
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div> 
                <div className="col-md-12"> 
                    <input type="text" className="form-control border-0 border-bottom rounded-0 shadow-none fs-7 para-text bg-transparent" placeholder="your city" defaultValue="New York" id="validationCustom03" required />
                    <div className="invalid-feedback">
                    Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-12"> 
                    <select className="form-select border-0 border-bottom rounded-0 shadow-none fs-7 para-text bg-transparent" id="validationCustom04" required >
                    <option disabled defaultValue="">Choose...</option>
                    <option>China</option>
                    <option>Austrailia</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option defaultValue>USA</option>
                    </select>
                    <div className="invalid-feedback">
                    Please select a valid state.
                    </div>
                </div>
                <div className="col-md-12"> 
                    <input type="text" placeholder="zip code" defaultValue="01234" className="form-control border-0 border-bottom rounded-0 shadow-none fs-7 para-text bg-transparent" id="validationCustom05" required />
                    <div className="invalid-feedback">
                    Please provide a valid zip.
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input shadow-none" type="checkbox" defaultValue="" id="invalidCheck" required/>
                    <label className="form-check-label fs-7 para-text" htmlFor="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback fs-7 para-text">
                        You must agree before submitting.
                    </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary text-capitalize" type="submit">Submit form</button>
                </div>
            </form>
        </>
    )
}

export default ProfileForm; 