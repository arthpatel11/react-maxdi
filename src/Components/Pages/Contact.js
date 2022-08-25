import React from 'react'

const Contact = () => {
   return (
      <>

         <section className="page__title-area page__title-height fix d-flex align-items-center p-relative">
            <div className="page__title-shape">
               <img className="page-title-s-1 d-none d-md-block" src="assets/images/shape/page-title/page-title-s-1.png" alt="" />
               <img className="page-title-s-2" src="assets/images/shape/page-title/page-title-s-2.png" alt="" />
               <img className="page-title-s-3" src="assets/images/shape/page-title/page-title-s-3.png" alt="" />
               <img className="page-title-s-4" src="assets/images/shape/page-title/page-title-s-4.png" alt="" />
               <img className="page-title-s-5 wow fadeInDown" data-wow-delay="1s" src="assets/images/shape/page-title/page-title-s-5.png" alt="" />
               <img className="page-title-s-6 wow fadeInUp" data-wow-delay=".6s" src="assets/images/shape/page-title/page-title-s-6.png" alt="" />
               <img className="page-title-s-7 d-none d-md-block" src="assets/images/shape/page-title/page-title-s-7.png" alt="" />
            </div>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
                     <div className="page__title-wrapper">
                        <h2 className="page__title-heading">
                           Contact us
                        </h2>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                           <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </section>


         <section className="contact__area fix p-relative pt-120 pb-190">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-7 col-md-8">
                     <div className="contact__info">
                        <div className="contact__info-content d-flex mb-30">
                           <div className="contact__info-icon">
                              <i className="fa-solid fa-location-dot"></i>
                           </div>
                           <div className="contact__info-title">
                              <h5>Office Address</h5>
                              <p>66 Broklyn Street, New York
                                 United States of America</p>
                           </div>
                        </div>
                        <div className="contact__info-content d-flex mb-30">
                           <div className="contact__info-icon">
                              <i className="fa-solid fa-phone green"></i>
                           </div>
                           <div className="contact__info-title">
                              <h5>Phone</h5>
                              <p><a href="tel:+0066442211">+00 66 44 22 11</a></p>
                              <p><a href="tel:+0066442211">+00 66 44 22 11</a></p>
                           </div>
                        </div>
                        <div className="contact__info-content d-flex">
                           <div className="contact__info-icon">
                              <i className="fa-solid fa-paper-plane blue"></i>
                           </div>
                           <div className="contact__info-title">
                              <h5>Email us</h5>
                              <p><a href="mailto:info@example.com">info@example.com</a></p>
                              <p><a href="mailto:info@example.com">info@example.com</a></p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5 offset-xl-1 col-lg-5 col-md-4">
                     <div className="contact__title">
                        <h2 className="section__title">
                           <span>Ready to get our</span>
                           marketing services
                        </h2>
                        <div className="contact__title-icon">
                           <a href="#contact"><i className="fa-solid fa-arrow-down-long"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         <section id="contact" className="project__area project__area-2 p-relative pt-130 mb-260">
            <div className="project__shape contact__shape">
               <img className="project-s-1 c-s-1" src="assets/images/shape/project/p-s-1.png" alt="" />
               <img className="project-s-2 c-s-2" src="assets/images/shape/project/p-s-2.png" alt="" />
               <img className="project-s-3 c-s-3" src="assets/images/shape/project/p-s-3.png" alt="" />
               <img className="project-s-4 c-s-4 d-none d-lg-block" src="assets/images/shape/project/p-s-4.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-9 col-lg-10">
                     <div className="project__thumb d-sm-flex">
                        <div className="project__thumb-1">
                           <img src="assets/images/project/project-img-1.jpg" alt="" />
                        </div>
                        <div className="project__thumb-2 project__thumb-3 d-none d-sm-block">
                           <img src="assets/images/project/project-img-2.jpg" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-7 offset-xl-5 col-lg-8 offset-lg-4 col-md-10 offset-md-2">
                     <div className="contact__form contact__form-2">
                        <div className="contact__form-title mb-40">
                           <h4>Send us a message</h4>
                        </div>
                        <div className="contact__form-content">
                           <form action="https://alimasha.net/template/maxdi/mail.php" id="contact-form" method="POST">
                              <div className="field-format d-sm-flex justify-content-between mb-40">
                                 <div className="form-group pr-10 form-group-2">
                                    <input type="text" className="form-control" name="name" placeholder="Your Name" />
                                 </div>
                                 <div className="form-group pl-10">
                                    <input type="email" className="form-control" name="email" placeholder="Email Address" />
                                 </div>
                              </div>
                              <div className="form-group mb-40">
                                 <input type="text" className="form-control" name="subject" placeholder="Subject Here" />
                              </div>
                              <div className="form-group mb-50">
                                 <textarea className="form-control" name="message" placeholder="Your Message"></textarea>
                              </div>
                              <button type="submit" className="m-btn">Send to us</button>
                           </form>
                           <p className="ajax-response"></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


      </>
   )
}

export default Contact