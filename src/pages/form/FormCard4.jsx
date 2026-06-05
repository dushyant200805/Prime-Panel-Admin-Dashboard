import { useForm } from "react-hook-form";
function FormCard4({ Formbutton2 = true }) {
    const {
        register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit(onSubmit)} >
                <div className={Formbutton2 ? "col-6" : "col-12"}>
                    <label htmlFor="validationCustom01" className="form-label head-text">
                        First name
                    </label>
                    <input type="text" className="form-control input-text bg-transparent" id="validationCustom01"  {...register("firstname", { required: "First Name Is Required" })} />
                    {errors.firstname && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.firstname.message}
                        </div>
                    )}
                </div>

                <div className={Formbutton2 ? "col-6" : "col-12"}>
                    <label htmlFor="validationCustom02" className="form-label head-text">
                        Last name
                    </label>
                    <input type="text" className="form-control input-text bg-transparent" id="validationCustom02" {...register("lastname", { required: "Last Name Is Required" })} />
                    {errors.lastname && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.lastname.message}
                        </div>
                    )}
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label head-text">
                        City
                    </label>
                    <input type="text" className="form-control input-text bg-transparent" id="validationCustom03" {...register("city", { required: "City Is Required" })} />
                    {errors.city && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.city.message}
                        </div>
                    )}

                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label head-text">
                        State
                    </label>
                    <select className="form-select bg-transparent input-text" id="validationCustom04" defaultValue=""   {...register("state", { required: "Please Select State" })} >
                        <option disabled value="">Choose...
                        </option>
                        <option>Rajasthan</option>
                        <option>Delhi</option>
                        <option>Gujarat</option>
                    </select>
                    {errors.state && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.state.message}
                        </div>
                    )}
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label head-text">
                        Zip
                    </label>
                    <input type="text" maxLength={6} className="form-control input-text bg-transparent" id="validationCustom05" onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ""); }}
                        {...register("zip", {
                            required: "Zip code is required", pattern: { value: /^[0-9]+$/, message: "Only Digits Are Allowed" },
                            minLength: { value: 6, message: "Zip Must Be 6 Digits" }, maxLength: { value: 6, message: "Zip Must Be 6 Digits" }
                        })} />
                    {errors.zip && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.zip.message}
                        </div>
                    )}
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="invalidCheck"   {...register("terms", { required: "You Must Agree Before Submitting" })} />
                        <label className="form-check-label input-text" htmlFor="invalidCheck" >
                            Agree to terms and conditions
                        </label>
                        {errors.terms && (
                            <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                                {errors.terms.message}
                            </div>
                        )}

                    </div>
                </div>

                {!Formbutton2 && (
                    <div className="col-12"> <button className="btn prime-btn ripple" type="submit" > Submit form <span className="reffect"></span> </button> </div>
                )}
                {Formbutton2 &&
                    <div className="col-12 d-flex align-items-center gap-2">
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
export default FormCard4;