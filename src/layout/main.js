import React from 'react'

export default function Main() {
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
                        <img src="assets/img/464052.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                </div>
                <div className="col-md-8">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        About Us
                      </h5>
                    </div>
                    <p className="lead text-justify">
                      Glaring Cosmos was started in October 9th 2020. We make handmade gifts based on the customer requirements like 
                      they can specify the color combination they want.Our popular product is Explosion Box. Explosion Box can be customized 
                      by including your images or chocolate's and you can Place the gift inside the explosion box of your choice. In addition to
                      this we also make windchime explosion box, Name Album, Pop-Up Box, Magic Photo Cube, Chocolate Bouquet and Bottle Art. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section id="service" className="services-mf pt-5 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">
                Videos
              </h3>
              <p className="subtitle-a">
              
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        
       <div className="row">
          <div className="col-md-4">
            <div className="service-box embed-responsive embed-responsive-1by1">
              <video className="embed-responsive-item" src="/assets/img/VID-20210313-WA0000.mp4" autoPlay loop muted></video>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box embed-responsive embed-responsive-1by1">
              <video className="embed-responsive-item" src="/assets/img/VID-20210319-WA0003.mp4" autoPlay loop muted></video>
              
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box embed-responsive embed-responsive-1by1">
              <video className="embed-responsive-item" src="/assets/img/VID-20210313-WA0001.mp4" autoPlay loop muted></video>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>


    <div className="testimonials paralax-mf bg-image" style={{backgroundImage: "url(/assets/img/cover.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="testimonial-mf" className="owl-carousel owl-theme">
              <div className="testimonial-box">
                
                <div className="content-test">
                  <p className="font-weight-bold h3">
                    Happiness dosen't result from what we get, but from what we give
                  </p>
                  
                </div>
              </div>
              <div className="testimonial-box">
               
                <div className="content-test">
                  <p className="font-weight-bold h3">
                    Giving to others will not take away from what you have but will in fact add to your life.
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
              <h3 className="title-a">
                Our Products
              </h3>
              <p className="subtitle-a">
                
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-4">
            <div className="work-box">
              <a href="/img/image4.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="/img/image4.jpg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="d-flex justify-content-between">
                  <div >
                    <h2 className="w-title">Explosion Box </h2>
                    <div className="w-more">
                      <span className="w-ctegory"></span>  <span className="h6">Rs.600</span>
                    </div>
                  </div>
                  <a href="" className="icons-btn nav-link"><i className="fa fa-heart-o fa-2x"></i></a>
                  <a href="#"> <span className="button button-a">Order Now</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="/img/image6.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="/img/image6.jpg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="d-flex justify-content-between">
                  <div >
                    <h2 className="w-title">Explosion Box with Chocolate</h2>
                    <div className="w-more">
                      <span className="w-ctegory"></span>  <span className="h6">Rs.800</span>
                    </div>
                  </div>
                  <a href="#"> <span className="button button-a">Order Now</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="assets/img/image11.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/image11.jpg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="d-flex justify-content-between">
                  <div >
                    <h2 className="w-title">Wind Chime explosion Box</h2>
                    <div className="w-more">
                      <span className="w-ctegory"></span> <span className="h6">Rs.600</span>
                    </div>
                  </div>
                  <a href="login.html"> <span className="button button-a">Order Now</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="/img/image18.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="/img/image18.jpg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="d-flex justify-content-between">
                  <div >
                    <h2 className="w-title">Pop Up Card</h2>
                    <div className="w-more">
                      <span className="w-ctegory"></span><span className="h6">Rs. 150</span>
                    </div>
                  </div>
                  <a href="login.html"> <span className="button button-a">Order Now</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="/img/botle.png"  className="venobox">
                <div className="work-img">
                  <img src="/img/botle.png" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="d-flex justify-content-between">
                  <div >
                    <h2 className="w-title">Bottle Art</h2>
                    <div className="w-more">
                      <span className="w-ctegory"></span> <span className="h6">Rs. 400</span>
                    </div>
                  </div>
                  <a href="login.html"> <span className="button button-a">Order Now</span></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href="/img/image3.png" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="/img/image3.png" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="d-flex justify-content-between">
                  <div>
                    <h2 className="w-title">Chocolate Bouquet</h2>
                    <div className="w-more">
                      <span className="w-ctegory"></span>  <span className="h6">Rs. 500</span>
                    </div>
                  </div>
                  <div>
                  <a href="login.html"> <span className=" button button-a">Order Now</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center w-100 mb-4">
              <a href="/login" className=""><span className="px-4 py-2 button button-a h1 button-rouded">More</span> </a>
            
          </div>
          
        </div>
      </div>
    </section>

    

    
    <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url(/img/bgimage.jpg)"}}>
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        Send Message To 
                        Us
                      </h5>
                    </div>
                    <div>
                      <form action="contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                              <div className="validate"></div>
                            </div>
                          </div>
                          <div className="col-md-12 text-center mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        
                      </p>
                      <ul className="list-ico">
                        
                        <li><span className="ion-ios-telephone"></span> 9880450488</li>
                        <li><span className="ion-email"></span> tejeswini0488@gmail.com</li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>Follow Us On</li>
                        <li> </li>
                        <li style={{padding: "10px"}}><a href="https://www.instagram.com/glaring_cosmos_gift/"><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                        <li style={{padding: "10px"}}><a href="https://youtube.com/channel/UCSZxP9MAx8RxpYlr0upzwWQ"><span className="ico-circle"><i className="ion-social-youtube"></i></span></a></li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

 
  

  <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
  {/* <div id="preloader"></div> */}
  </div>

    )
}
