import React from "react";

function Footer() {
  return (
    <footer>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-4">
          <h2 style={{ color: "#cf9786" }}>Quick Links</h2>
            <a style={{color: "#cf9786",display: "block",textDecoration: "none"}} href="/">Home</a>
            <a style={{color: "#cf9786",display: "block",textDecoration: "none"}} href="/">About Us</a>
            <a style={{color: "#cf9786",display: "block",textDecoration: "none"}} href="/">Products</a>
            <a style={{color: "#cf9786",display: "block",textDecoration: "none"}} href="/">Contact Us</a>
          </div>
          <div className="col-md-4">
            <h2 style={{ color: "#cf9786" }}>Conatct info</h2>
            <ul className="list-ico">
              <li>
                <span className="ion-ios-telephone"></span> 9880450488
              </li>
              <li>
                <span className="ion-email"></span> tejeswini0488@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-4">
          <h2 style={{ color: "#cf9786" }}>Follow Us</h2>
          <a style={{color: "#cf9786",display: "block",textDecoration: "none"}} href="https://youtube.com/channel/UCSZxP9MAx8RxpYlr0upzwWQ"><i className="ion-social-youtube"></i></a>
          <a style={{color: "#cf9786",display: "block",textDecoration: "none"}} href="https://www.instagram.com/glaring_cosmos_gift/"><i className="ion-social-instagram"></i>  glaring_cosmos_gift</a>
          </div>
        </div>
      </div>

      <div className="container py-2" style={{borderTop: "2px solid #cf9786", margin: "1rem auto"}}>
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">
                &copy; Copyright <strong>DevFolio</strong>. All Rights Reserved
              </p>
              <div className="credits">
                Designed by{" "}
                <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
