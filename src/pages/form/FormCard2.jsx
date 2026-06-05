import { useState } from "react";

function FormCard2() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <form className={`row g-3 needs-validation ${validated ? "was-validated" : ""}`}noValidate onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <input type="text"className="form-control input-text bg-transparent" placeholder="First Name" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <input type="text" className="form-control input-text bg-transparent" placeholder="Last Name" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <input type="text" className="form-control input-text bg-transparent" placeholder="Mobile Number" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <input type="email" className="form-control input-text bg-transparent" placeholder="Email Address" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <input type="text" className="form-control input-text bg-transparent" placeholder="Your City" required/>
                    <div className="invalid-feedback text-capitalize">
                        Please Provide A Valid City.
                    </div>
                </div>

                <div className="col-md-6">
                    <select className="form-select bg-transparent input-text" required defaultValue="" >
                        <option disabled value="">
                            Choose...
                        </option>
                        <option>Rajasthan</option>
                        <option>Delhi</option>
                        <option>Gujarat</option>
                    </select>

                    <div className="invalid-feedback text-capitalize">
                        Please Select A Valid State.
                    </div>
                </div>

                <div className="col-md-6">
                    <input type="text" maxLength={6} className="form-control input-text bg-transparent" placeholder="Zip Code" required/>
                    <div className="invalid-feedback text-capitalize">
                        Please Provide A Valid Zip.
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="invalidCheck" required/>
                        <label className="form-check-label input-text" htmlFor="invalidCheck" >
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback text-capitalize">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                {/* Single Button */}
                    <div className="col-12">
                        <button className="btn prime-btn ripple" type="submit">
                            Submit Form
                            <span className="reffect"></span>
                        </button>
                    </div>
            </form>
        </>
    );
}

export default FormCard2;