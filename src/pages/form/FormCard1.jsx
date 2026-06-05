import { useState } from "react";

function FormCard({Formbutton2=true}) {

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
            <form className={`row g-3 needs-validation ${validated ? "was-validated" : ""}`} noValidate onSubmit={handleSubmit} >
                <div className={Formbutton2 ? "col-6" : "col-12"}>
                    <label htmlFor="validationCustom01" className="form-label head-text">
                        First name
                    </label>
                    <input type="text" className="form-control input-text bg-transparent" id="validationCustom01" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className={Formbutton2 ? "col-6" : "col-12"}>
                    <label htmlFor="validationCustom02" className="form-label head-text">
                        Last name
                    </label>
                    <input type="text"  className="form-control input-text bg-transparent"  id="validationCustom02" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label head-text">
                        City
                    </label>
                    <input type="text" className="form-control input-text bg-transparent" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label head-text">
                        State
                    </label>
                    <select className="form-select bg-transparent input-text" id="validationCustom04" required defaultValue="" >
                        <option disabled value="">Choose...
                        </option>
                        <option>Rajasthan</option>
                        <option>Delhi</option>
                        <option>Gujarat</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label head-text">
                        Zip
                    </label>
                    <input type="text" maxLength={6} className="form-control input-text bg-transparent" id="validationCustom05" required />
                    <div className="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                        <label className="form-check-label input-text" htmlFor="invalidCheck" >
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>

                    </div>
                </div>

                {!Formbutton2 && (
                <div className="col-12"> <button className="btn prime-btn ripple" type="submit" > Submit form <span className="reffect"></span> </button> </div>
                )}
            {Formbutton2 && 
                <div className="col-12">
                    <button className="btn second-btn ripple me-2" type="submit">
                        Submit form
                        <span className="reffect"></span>
                    </button>
                    <button className="btn red-btn ripple" type="reset" >
                        clear form
                        <span className="reffect"></span>
                    </button>
                </div>
            }

            </form>
        </>
    );
}

export default FormCard;