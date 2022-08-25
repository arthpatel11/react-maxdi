import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <>
         <section className="lets-work__area p-relative pt-165 pb-160">
            <div className="lets-work__shape">
               <img className="lets-work-shape-1" src="assets/images/shape/lets-work/lets-work-s-1.png" alt="" />
               <img className="lets-work-shape-2" src="assets/images/shape/lets-work/lets-work-s-2.png" alt="" />
               <img className="lets-work-shape-3 d-none d-sm-block" src="assets/images/shape/lets-work/lets-work-s-3.png" alt="" />
               <img className="lets-work-shape-4 d-none d-sm-block" src="assets/images/shape/lets-work/lets-work-s-4.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="lets-work__title text-center">
                        <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                           Let’s Work Together
                        </h4>
                        <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                           <span>Need a successful</span>
                           project?
                        </h2>
                        <a className="m-btn mt-35 wow fadeInUp" data-wow-delay=".6s" href="contact.html">Estimate Project</a>
                     </div>
                  </div>
               </div>
            </div>
         </section>



         <footer>
            <div className="footer__area fix p-relative pt-200 pb-60">
               <div className="footer__shape">
                  <img className="footer-shape-1 wow fadeInDown" data-wow-delay="1s" src="../../assets/images/shape/footer/footer-s-1.png" alt="" />
                  <img className="footer-shape-2 wow fadeInUp" data-wow-delay="1.6s" src="../../assets/images/shape/footer/footer-s-2.png" alt="" />
               </div>
               <div className="container">
                  <div className="row mb-145">
                     <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
                        <div className="footer__newsletter">
                           <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                              Join Our Community
                           </h4>
                           <h2 className="section__title wow fadeInUp" data-wow-delay=".4s">
                              <span>Subscribe for newsletter</span>
                           </h2>
                        </div>
                     </div>
                     <div className="col-xxl-5 offset-xxl-1 col-xl-5 col-lg-4 col-md-4">
                        <div className="footer__subscribe">
                           <form action="javascript:void(0)">
                              <div className="footer__subscribe-input">
                                 <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email address" />
                                 </div>
                                 <button type="submit">Subscribe</button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="row mb-50">
                     <div className="col-xl-4 col-lg-4 col-md-10 col-sm-10">
                        <div className="footer__widget wow fadeIn" data-wow-delay=".5s">
                           <div className="footer__widget-logo">
                              <img src="../../assets/images/logo/Logo-footer.svg" alt="logo" />
                              <p>Core object made kolor adipisci elit sed diam nonummy nibh euismod tincidunt laoreet dolore magna grinjon.</p>
                           </div>
                           <div className="footer__widget-social">
                              <a href="javascript:void(0)"><i className="fa-brands fa-facebook-f"></i></a>
                              <a href="javascript:void(0)"><i className="fa-brands fa-twitter"></i></a>
                              <a href="javascript:void(0)"><i className="fa-brands fa-instagram"></i></a>
                              <a href="javascript:void(0)"><i className="fa-brands fa-youtube"></i></a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div className="footer__widget wow fadeIn" data-wow-delay=".7s">
                           <div className="footer__widget-title">
                              <h5>Our Services</h5>
                           </div>
                           <div className="footer__widget-link">
                              <ul>
                                 <li><a href="javascript:void(0)">Development</a></li>
                                 <li><a href="javascript:void(0)">marketing</a></li>
                                 <li><a href="javascript:void(0)">UI/UX Design</a></li>
                                 <li><a href="javascript:void(0)">E-commerce</a></li>
                                 <li><a href="javascript:void(0)">Content Writing</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div className="footer__widget footer__widget-mt-2 wow fadeIn" data-wow-delay=".9s">
                           <div className="footer__widget-title">
                              <h5>Company</h5>
                           </div>
                           <div className="footer__widget-link">
                              <ul>
                                 <li><a href="javascript:void(0)">About us</a></li>
                                 <li><a href="javascript:void(0)">Portfolio</a></li>
                                 <li><a href="javascript:void(0)">Our Team</a></li>
                                 <li><a href="javascript:void(0)">Contact</a></li>
                                 <li><a href="javascript:void(0)">Faqs</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10">
                        <div className="footer__widget footer__widget-mt wow fadeIn" data-wow-delay="1.2s">
                           <div className="footer__widget-title">
                              <h5>Stay Connected</h5>
                           </div>
                           <div className="footer__widget-info">
                              <div className="footer__widget-address">
                                 <p>66 Broklyn Street, New York
                                    United States of America</p>
                              </div>
                              <div className="footer__widget-phone d-flex align-items-center">
                                 <i className="fa-solid fa-phone"></i>
                                 <p><a href="tel:+1166442200">+11 66 44 22 00</a></p>
                              </div>
                              <div className="footer__widget-email d-flex align-items-center">
                                 <i className="fa-solid fa-paper-plane"></i>
                                 <p><a href="mailto:info@example.com">info@example.com</a></p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="footer__copyright">
                           <p>Copyright © 2022<Link to="/">Maxdi</Link></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>

   )
}

export default Footer