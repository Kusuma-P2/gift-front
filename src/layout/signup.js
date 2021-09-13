import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Requried"),
  email: Yup.string().email("Enter valid email").required("Requried"),
  password: Yup.string()
    .min(8, "Should be minimum 8 and 15 characters")
    .max(15, "Should be between 8 and 15 characters")
    .required("Requried"),
  confirmPassword: Yup.string()
    .required("Requried")
    .oneOf([Yup.ref("password")], "Password does not match"),
  phoneNumber: Yup.string()
    .required("Requried")
    .matches(`^([6-9])([0-9]{9})`, "Enter valid number")
    .min(10)
    .max(10, "Should be 10 digit"),
});

function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, props) => {
      const { name, email, phoneNumber, password } = values;
      axios
        .post("http://localhost:8000/signup", {
          name,
          email,
          phoneNumber,
          password,
        })
        .then((res) => {
          if (res.status === 200) {
            props.resetForm();
          } else {
          }
        });
    },
  });

  return (
    <div className="d-flex justify-content-center w-100 h-100">
      <div className="card" style={{ marginTop: "15%", width: "380px" }}>
        <div className="card-body">
          <h2 className="title-box text-center">SIGN UP</h2>

          <form autoComplete={false} onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className={`form-control ${
                  formik.touched.name && formik.errors.name && "is-invalid"
                }`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div className="validate text-danger">
                {formik.touched.name && formik.errors.name}
              </div>
            </div>

            <div className="form-group">
              <input
              name="phoneNumber"
              placeholder="Phone Number"
                className={`form-control ${
                    formik.touched.phoneNumber && formik.errors.phoneNumber && "is-invalid"
                  }`}
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              <div className="validate text-danger">
                {formik.touched.phoneNumber && formik.errors.phoneNumber}
              </div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={`form-control ${
                    formik.touched.email && formik.errors.email && "is-invalid"
                  }`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              <div className="validate text-danger">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className={`form-control ${
                    formik.touched.password && formik.errors.password && "is-invalid"
                  }`}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              <div className="validate text-danger">
                {formik.touched.password && formik.errors.password}
              </div>
            </div>

            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                id="password"
                placeholder="Confirm Password"
                className={`form-control ${
                    formik.touched.confirmPassword && formik.errors.confirmPassword && "is-invalid"
                  }`}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
              />
              <div className="validate text-danger">
                {formik.touched.confirmPassword && formik.errors.confirmPassword}
              </div>
            </div>

            <div className="form-group text-center">
              <input
                type="submit"
                className="button button-a button-big button-rouded  py-1"
                name="submit"
                value="submit"
              />
            </div>
          </form>
          <p>Already have an account? <a href="/login">click here</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
