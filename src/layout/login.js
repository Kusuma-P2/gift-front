import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { dispatchLogin } from "../Redux/actions/authActions";

const validationSchema = Yup.object({
  email: Yup.string().email("Enter valid email").required("Requried"),
  password: Yup.string()
    .min(8, "Should be minimum 8 and 15 characters")
    .max(15, "Should be between 8 and 15 characters")
    .required("Requried"),
});

export default function LogIn() {
  const [error, setError] = useState("");
  const dispatch = useDispatch()
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, props) => {
      const { email, password } = values;
      axios
        .post("http://localhost:8000/signin", { email, password })
        .then((res) => {
          console.log(res);
          if (res.data.error) {
            setError(res.data.error);
          } else if (res.data.id) {
            dispatch(dispatchLogin(res,true))
            localStorage.setItem('user',JSON.stringify(res.data))
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <div className="d-flex justify-content-center w-100 h-100">
      <div className="card" style={{ marginTop: "15%", width: "380px" }}>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="title-box text-center ">SIGN IN</h2>
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
                autocomplete="off"
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
            <div className="form-group text-center">
              <button
                type="submit"
                className="button button-a button-big button-rouded py-1"
              >
                Sign In
              </button>
            </div>
            <p className="text-center">
              New User? <a href="/signup">sign Up</a>
            </p>
            {/* <p className="text-center"> <a href="password">Forgot Password?</a></p> */}
          </form>
        </div>
      </div>
    </div>
  );
}
