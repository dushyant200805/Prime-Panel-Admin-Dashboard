import { useForm } from "react-hook-form";
function FAQFrom() {
    const {
        register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        reset(data);
        console.log(data);
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-2">
                    <div className="col-md-6 mb-2">
                        <input type="text" name="" id="" className="form-control text-capitalize p-2 border input-bg fs-7 para-text"
                            placeholder="your first name "{...register("firstname", { required: "First name is required" })} />
                        {errors.firstname && (
                            <div className="text-danger fs-8 mt-1 fw-bold">
                                {errors.firstname.message}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-2">
                        <input type="text" name="" id="" className="form-control text-capitalize p-2 border input-bg fs-7 para-text"
                            placeholder="your last name "{...register("lastname", { required: "Last name is required" })} />
                        {errors.lastname && (
                            <div className="text-danger fs-8 mt-1 fw-bold">
                                {errors.lastname.message}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-2">
                        <input type="text" name="" id="" className="form-control text-capitalize p-2 border input-bg fs-7 para-text"
                            placeholder="your mobile number "{...register("mobile", { required: "Mobile number is required", pattern: { value: /^[0-9]+$/, message: "Only digits are allowed" }, minLength: { value: 10, message: "Mobile number must be 10 digits" }, maxLength: { value: 10, message: "Mobile number must be 10 digits" } })} />
                        {errors.mobile && (
                            <div className="text-danger fs-8 mt-1 fw-bold">
                                {errors.mobile.message}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-2">
                        <input type="text" name="" id="" className="form-control text-capitalize p-2 border input-bg fs-7 para-text"
                            placeholder="your email id "{...register('email', { required: "Enter Your Email Address", pattern: { value: /^\S+@\S+$/i, message: "Please Enter A Vaild Email Address" } })} />
                        {errors.email && (
                            <div className="text-danger fs-8 mt-1 fw-bold">
                                {errors.email.message}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-2">
                        <input type="text" name="" id="" className="form-control text-capitalize p-2 border input-bg fs-7 para-text"
                            placeholder="your city "{...register("city", { required: "City is required" })} />
                        {errors.city && (
                            <div className="text-danger fs-8 mt-1 fw-bold">
                                {errors.city.message}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-2">
                        <input type="text" name="" id="" className="form-control text-capitalize p-2 border input-bg fs-7 para-text"
                            placeholder="your state "{...register("state", { required: "State is required" })} />
                        {errors.state && (
                            <div className="text-danger fs-8 mt-1 fw-bold">
                                {errors.state.message}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-2">
                        <input type="text" name="" id="" className="form-control text-capitalize p-2 border input-bg fs-7 para-text"
                            placeholder="how did you hear about us "{...register("how", { required: "How did you hear about us is required" })} />
                        {errors.how && (
                            <div className="text-danger fs-8 mt-1 fw-bold">
                                {errors.how.message}
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 mb-2">
                        <input type="text" className="form-control text-capitalize p-2 border input-bg fs-7 para-text"
                            placeholder="enquiry subject"{...register("subject", { required: "Subject is required" })} />
                        {errors.subject && (
                            <div className="text-danger fs-8 mt-1 fw-bold">
                                {errors.subject.message}
                            </div>
                        )}
                    </div>
                    <div className="col-12 mb-2">
                        <textarea name="" id="" className="form-control text-capitalize p-2 border input-bg fs-7 para-text w-100"
                            rows="6" placeholder="your enquiry"{...register("enquiry", { required: "Enquiry is required" })}></textarea>
                        {errors.enquiry && (
                            <div className="text-danger fs-8 mt-1 fw-bold">
                                {errors.enquiry.message}
                            </div>
                        )}
                    </div>
                    <div className="text-end">
                        <button className="btn prime-btn btn-sm rounded-1" type="submit">submit form</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FAQFrom;