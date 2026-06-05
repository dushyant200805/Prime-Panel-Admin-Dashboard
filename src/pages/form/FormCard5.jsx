import { useForm } from "react-hook-form";
function FormCard5() {
    const {
        register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        reset(data);
        console.log(data);
    };
    return (
        <>
            <form className="row g-3" id="form3" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6">
                    <input type="text" className="form-control input-text bg-transparent" placeholder="First Name" aria-label="first name" name="fname"
                        id="fname" {...register("firstname", { required: "First Name Is Required" })} />
                    {errors.firstname && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.firstname.message}
                        </div>
                    )}
                </div>
                <div className="col-md-6">
                    <input type="text" placeholder="Last Name" aria-label="last name" className="form-control input-text bg-transparent" name="lname"
                        id="lname" {...register("lastname", { required: "Last Name Is Required" })} />
                    {errors.lastname && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.lastname.message}
                        </div>
                    )}
                </div>
                <div className="col-md-6">
                    <input type="text" className="form-control input-text bg-transparent" placeholder="Mobile Number" aria-label="mobile number" name="mobile"
                        id="mobile" {...register("mobile", { required: "Mobile Number Is Required" })} />
                    {errors.mobile && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.mobile.message}
                        </div>
                    )}
                </div>
                <div className="col-md-6">
                    <input type="email" placeholder="Email Address" aria-label="Email Address" className="form-control input-text bg-transparent" name="email"
                        id="email"  {...register('email', { required: "Enter Your Email Address", pattern: { value: /^\S+@\S+$/i, message: "Please Enter A Vaild Email Address" } })} />
                    {errors.email && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.email.message}
                        </div>
                    )}
                </div>
                <div className="col-md-6">
                    <input type="text" placeholder="City" aria-label="city" className="form-control input-text bg-transparent" name="city"
                        id="city" {...register("city", { required: "City Is Required" })} />
                    {errors.city && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.city.message}
                        </div>
                    )}
                </div>
                <div className="col-md-6">
                    <select className="form-select bg-transparent input-text" placeholder="State" aria-label="state" id="state"
                        name="state" {...register("state", { required: "State Is Required" })}>
                        <option className="input-text" disabled value="">Choose...</option>
                        <option className="input-text">...</option>
                    </select>
                    {errors.state && (
                        <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                            {errors.state.message}
                        </div>
                    )}
                </div>
                <div className="col-md-6">
                    <input type="text" placeholder="Zip" aria-label="zip" maxLength="6" className="form-control input-text bg-transparent"
                        id="zip" onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, ""); }}
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
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" {...register("terms", { required: "You Must Agree To The Terms And Conditions" })} />
                        <label className="form-check-label input-text" htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        {errors.terms && (
                            <div className="text-danger fs-8 mt-1 fw-bold  text-capitalize">
                                {errors.terms.message}
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn prime-btn ripple" type="submit">Submit form
                        <span className="reffect"></span>
                    </button>
                </div>
            </form>
        </>
    );
}
export default FormCard5;