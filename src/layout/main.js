import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is requried"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is requried"),
  subject: Yup.string("Enter the subject").required("Subject is requried"),
  message: Yup.string("Enter your message").required("Message is requried"),
});

export default function Main() {
  const user = useSelector(state => state.user)
  const isLogged = useSelector(state => state.isLogged)
  const [products, setProducts] = useState([]);
  const history = useHistory()
  const {id} = user

  const addCart = async (product) =>{
    await axios.post('http://localhost:8000/add_cart',{
      uid: id,
      products: product
    },(err,data) => {
      if (data.length) {
        history.push('/cart')
      }
    })
  }


  const formik = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema: validationSchema,
    onSubmit: (values, props) => {
      const { name, email, subject, message } = values;
      axios
        .post("http://localhost:8000/contact", {
          name,
          email,
          subject,
          message,
        })
        .then((res) => {
          console.log(res);
        });
      props.resetForm();
    },
  });

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:8000/product");
      setProducts(res.data);
      console.log(res.data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <main id="main">
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="about-img">
                        <img
                          src="img/contact.jpg"
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">Our Story</h5>
                        </div>
                        <p className="lead text-justify">
                          Glaring Cosmos was started in October 9th 2020. We
                          make handmade gifts based on the customer requirements
                          like they can specify the color combination they
                          want.Our popular product is Explosion Box. Explosion
                          Box can be customized by including your images or
                          chocolate's and you can Place the gift inside the
                          explosion box of your choice. In addition to this we
                          also make windchime explosion box, Name Album, Pop-Up
                          Box, Magic Photo Cube, Chocolate Bouquet and Bottle
                          Art.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        <div
          className="testimonials paralax-mf bg-image"
          style={{ backgroundImage: "url(/assets/img/cover.jpg)" }}
        >
          
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="testimonial-mf" className="owl-carousel owl-theme">
                  <div className="testimonial-box">
                    <div className="content-test">
                      <p className="font-weight-bold h3">
                        Happiness dosen't result from what we get, but from what
                        we give
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-box">
                    <div className="content-test">
                      <p className="font-weight-bold h3">
                        Giving to others will not take away from what you have
                        but will in fact add to your life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Our Products</h3>
                  <p className="subtitle-a"></p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              {products.map((product) => (
                <div className="col-md-4">
                  <div className="work-box">
                    <a
                      href="/img/image4.jpg"
                      data-gall="portfolioGallery"
                      className="venobox"
                    >
                      <div className="work-img">
                        <img
                          src={`/img/${product.image}`}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h2 className="w-title">{product.name} </h2>
                          <div className="w-more">
                            <span className="w-ctegory"></span>{" "}
                            <span className="h6">Rs.{product.cost}</span>
                          </div>
                        </div>
                        <a href={!isLogged&& '/login'} onClick={() => isLogged && addCart(product)}>
                          {" "}
                          <span className="button button-a" >Order Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{ backgroundImage: "url(/img/bgimage.jpg)" }}
        >
          <div className=""></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div id="contact" className="box-shadow-full">
                    <div className="title-box-2">
                      <h5 className="title-left">Send Message To Us</h5>
                    </div>
                    <form
                      autoComplete={false}
                      noValidate
                      onSubmit={formik.handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div>
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    className={
                                      formik.touched.name &&
                                      Boolean(formik.errors.name)
                                        ? "form-control is-invalid"
                                        : "form-control"
                                    }
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  <div className="validate text-danger">
                                    {formik.touched.name && formik.errors.name}
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className={
                                      formik.touched.email &&
                                      Boolean(formik.errors.email)
                                        ? "form-control is-invalid"
                                        : "form-control"
                                    }
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  <div className="validate text-danger">
                                    {formik.touched.email &&
                                      formik.errors.email}
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    className={
                                      formik.touched.subject &&
                                      Boolean(formik.errors.subject)
                                        ? "form-control is-invalid"
                                        : "form-control"
                                    }
                                    value={formik.values.subject}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  <div className="validate text-danger">
                                    {formik.touched.subject &&
                                      formik.errors.subject}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <textarea
                              name="message"
                              rows="7"
                              className={
                                formik.touched.message &&
                                Boolean(formik.errors.message)
                                  ? "form-control is-invalid"
                                  : "form-control"
                              }
                              value={formik.values.message}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              placeholder="Message"
                            ></textarea>
                            <div className="validate text-danger">
                              {formik.touched.message && formik.errors.message}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 text-center">
                          <button
                            type="submit"
                            className="button button-a button-big button-rouded"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
      {/* <div id="preloader"></div> */}
    </div>
  );
}
