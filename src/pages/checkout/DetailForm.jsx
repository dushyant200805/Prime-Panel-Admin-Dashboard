import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function DetailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [gender, setGender] = useState(0);

  useEffect(() => {
    setValue("gender", gender);
  }, [gender, setValue]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const genderOptions = [
    { label: "?", value: 0, color: "var(--prime-bg)", image: "/gender.png" },
    { label: "m", value: 1, color: "var(--blue-bg)", image: "/men2.png" },
    { label: "f", value: 2, color: "#FF69B4", image: "/women2.png" },
  ];

  const selectedGender =
    genderOptions.find((option) => option.value === gender) || genderOptions[0];

  const handleGenderClick = (value) => {
    setGender(value);
  };

  return (
    <>
      {/* <!-- personal details --> */}
      <div
        className="tab-pane fade"
        id="v-pills-profile"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
        tabIndex="0"
      >
        <div className="row">
          <div className="col-4">
            <div className="d-flex justify-contet-between gap-3 align-items-center">
              <h2 className="text-capitalize fs-5 m-0 head-text">
                Could you please share your gender identity?
              </h2>
              <div className="toggle-container">
                <label
                  className="toggle-label"
                  style={{ background: selectedGender.color }}
                >
                  {genderOptions.map((option) => (
                    <span
                      key={option.value}
                      className={gender === option.value ? "active" : ""}
                      onClick={() => handleGenderClick(option.value)}
                    >
                      {option.label}
                    </span>
                  ))}
                  <div
                    className="toggle-btn"
                    style={{
                      left:
                        gender === 0 ? "0px" : gender === 1 ? "35px" : "70px",
                    }}
                  ></div>
                </label>
                <input
                  type="hidden"
                  {...register("gender")}
                  defaultValue={gender}
                />
              </div>
            </div>

            <div className="image-container">
              <img
                id="gender-image"
                src={selectedGender.image}
                className="w-100"
                alt="Gender Image"
              />
            </div>
          </div>
          <div className="col-8">
            <h2 className="text-capitalize fw-semibold  head-textfs-4 mb-2 head-text">
              let us know more about you!
            </h2>
            <p className="para-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
              repellat accusamus cumque dolore! Magni nostrum, quidem blanditiis
              veniam dolor nobis!
            </p>
            <form
              className="row g-3"
              id="form3"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="col-md-6">
                <label
                  htmlFor="fname"
                  className="text-capitalize fw-semibold  head-text"
                >
                  first name
                </label>
                <input
                  type="text"
                  className="form-control input-text input-bg"
                  aria-label="first name"
                  name="fname"
                  id="fname"
                  {...register("firstname", {
                    required: "First Name Is required",
                  })}
                />
                {errors.firstname && (
                  <div className="text-danger fs-8 mt-1 fw-bold">
                    {errors.firstname.message}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="lname"
                  className="text-capitalize fw-semibold  head-text"
                >
                  last name
                </label>
                <input
                  type="text"
                  aria-label="last name"
                  className="form-control input-text input-bg"
                  name="lname"
                  id="lname"
                  {...register("lastname", {
                    required: "Last Name Is required",
                  })}
                />
                {errors.lastname && (
                  <div className="text-danger fs-8 mt-1 fw-bold">
                    {errors.lastname.message}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="mobile"
                  className="text-capitalize fw-semibold  head-text"
                >
                  mobile number
                </label>
                <input
                  type="text"
                  className="form-control input-text input-bg"
                  aria-label="mobile number"
                  name="mobile"
                  id="mobile"
                  {...register("mobile", {
                    required: "Mobile Number Is Required",
                  })}
                />
                {errors.mobile && (
                  <div className="text-danger fs-8 mt-1 fw-bold">
                    {errors.mobile.message}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="email"
                  className="text-capitalize fw-semibold  head-text"
                >
                  email address
                </label>
                <input
                  type="email"
                  aria-label="Email Address"
                  className="form-control input-text input-bg"
                  name="email"
                  id="email"
                  {...register("email", {
                    required: "Enter Your Email Address",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please Enter A Vaild Email Address",
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-danger fs-8 mt-1 fw-bold">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="city"
                  className="text-capitalize fw-semibold  head-text"
                >
                  city
                </label>
                <input
                  type="text"
                  aria-label="city"
                  className="form-control input-text input-bg"
                  name="city"
                  id="city"
                  {...register("city", { required: "City  Name Is Required" })}
                />
                {errors.city && (
                  <div className="text-danger fs-8 mt-1 fw-bold">
                    {errors.city.message}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="state"
                  className="text-capitalize fw-semibold  head-text"
                >
                  choose state
                </label>
                <select
                  className="form-select bg-transparent input-text input-bg"
                  placeholder="State"
                  aria-label="state"
                  id="state"
                  name="state"
                  {...register("state", { required: "State Is Required" })}
                >
                  <option className="input-text" defaultValue disabled>
                    Choose...
                  </option>
                  <option className="input-text">...</option>
                </select>
                {errors.state && (
                  <div className="text-danger fs-8 mt-1 fw-bold">
                    {errors.state.message}
                  </div>
                )}
              </div>
              <div className="col-md-6">
                <label
                  htmlFor="zip"
                  className="text-capitalize fw-semibold  head-text"
                >
                  zip address
                </label>
                <input
                  type="text"
                  aria-label="zip"
                  maxLength="6"
                  className="form-control input-text input-bg"
                  id="zip"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  {...register("zip", {
                    required: "Zip code is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only digits are allowed",
                    },
                    minLength: { value: 6, message: "Zip Must Be 6 Digits" },
                    maxLength: { value: 6, message: "Zip Must Be 6 Digits" },
                  })}
                />
                {errors.zip && (
                  <div className="text-danger fs-8 mt-1 fw-bold">
                    {errors.zip.message}
                  </div>
                )}
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="invalidCheck"
                    {...register("terms", {
                      required: "You Must Agree To The Terms And Conditions",
                    })}
                  />
                  <label
                    className="form-check-label input-text text-capitalize"
                    htmlFor="invalidCheck"
                  >
                    Agree to receive notifications
                  </label>
                  {errors.terms && (
                    <div className="text-danger fs-8 mt-1 fw-bold">
                      {errors.terms.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12">
                <button className="btn prime-btn ripple" type="submit">
                  Submit details
                  <span className="reffect"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailForm;
