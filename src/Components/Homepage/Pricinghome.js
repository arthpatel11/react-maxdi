import React from 'react'

const Pricinghome = () => {
   return (
      <section className="pricing__area fix p-relative mt-105 pt-120 pb-90">
         <div className="pricing__shape">
            <img className="p-shape-1" src="assets/images/shape/pricing/p-s-1.png" alt="" />
            <img className="p-shape-2 d-none d-sm-block" src="assets/images/shape/pricing/p-s-2.png" alt="" />
            <img className="p-shape-3 wow zoomIn" data-wow-delay=".8s" src="assets/images/shape/pricing/p-s-3.png" alt="" />
            <img className="p-shape-4 d-none d-sm-block" src="assets/images/shape/pricing/p-s-4.png" alt="" />
            <img className="p-shape-5" src="assets/images/shape/pricing/p-s-5.png" alt="" />
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xl-6 offset-xl-3 col-md-8 offset-md-2 col-sm-12">
                  <div className="pricing__title text-center">
                     <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                        Pricing Plan
                     </h4>
                     <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                        <span>Find the Right Plan</span>
                     </h2>
                     <p className="wow fadeInUp" data-wow-delay=".5s">Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
                  </div>
               </div>
            </div>
            <div className="pricing__tab">
               <div className="pricing__button text-center">
                  <ul className="nav pricing__nav mb-40" id="myTab" role="tablist">
                     <li className="nav-item">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home1" role="tab" aria-controls="home1" aria-selected="true">Monthly</button>
                     </li>
                     <li className="nav-item">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="false">Yearly</button>
                     </li>
                  </ul>
               </div>
               <div className="tab-content" id="myTabContent">
                  <div className="tab-pane active" id="home1" role="tabpanel" aria-labelledby="home-tab">
                     <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="pricing__box mb-30">
                              <div className="pricing__header">
                                 <h3>Professional</h3>
                                 <p>A beautiful, simple website</p>
                              </div>
                              <div className="pricing__amount">
                                 <h2>$25.00<span>/monthly</span></h2>
                              </div>
                              <div className="pricing__item">
                                 <ul>
                                    <li>10 Pages Responsive Website</li>
                                    <li>5 PPC Campaigns</li>
                                    <li>10 SEO Keywords</li>
                                    <li>5 Facebook Campaigns</li>
                                    <li>2 Video Campaigns</li>
                                 </ul>
                              </div>
                              <div className="pricing__link">
                                 <a className="m-btn" href="javascript:void(0)">Purchase Now</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="pricing__box active mb-30">
                              <div className="pricing__header">
                                 <h3>Standard</h3>
                                 <p>Creative design, premium website </p>
                              </div>
                              <div className="pricing__amount">
                                 <h2>$35.00<span>/monthly</span></h2>
                              </div>
                              <div className="pricing__item">
                                 <ul>
                                    <li>20 Pages Responsive Website</li>
                                    <li>10 PPC Campaigns</li>
                                    <li>20 SEO Keywords</li>
                                    <li>10 Facebook Campaigns</li>
                                    <li>5 Video Campaigns</li>
                                 </ul>
                              </div>
                              <div className="pricing__link">
                                 <a className="m-btn" href="javascript:void(0)">Purchase Now</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="pricing__box">
                              <div className="pricing__header">
                                 <h3>Ultimate</h3>
                                 <p>Dynamic website exclusive design</p>
                              </div>
                              <div className="pricing__amount">
                                 <h2>$60.00<span>/monthly</span></h2>
                              </div>
                              <div className="pricing__item">
                                 <ul>
                                    <li>50 Pages Responsive Website</li>
                                    <li>Unlimited Campaigns</li>
                                    <li>50 SEO Keywords</li>
                                    <li>100 Facebook Campaigns</li>
                                    <li>20 Video Campaigns</li>
                                 </ul>
                              </div>
                              <div className="pricing__link">
                                 <a className="m-btn" href="javascript:void(0)">Purchase Now</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                     <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="pricing__box mb-30">
                              <div className="pricing__header">
                                 <h3>Professional</h3>
                                 <p>A beautiful, simple website</p>
                              </div>
                              <div className="pricing__amount">
                                 <h2>$125.00<span>/monthly</span></h2>
                              </div>
                              <div className="pricing__item">
                                 <ul>
                                    <li>10 Pages Responsive Website</li>
                                    <li>5 PPC Campaigns</li>
                                    <li>10 SEO Keywords</li>
                                    <li>5 Facebook Campaigns</li>
                                    <li>2 Video Campaigns</li>
                                 </ul>
                              </div>
                              <div className="pricing__link">
                                 <a className="m-btn" href="javascript:void(0)">Purchase Now</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="pricing__box active mb-30">
                              <div className="pricing__header">
                                 <h3>Standard</h3>
                                 <p>Creative design, premium website </p>
                              </div>
                              <div className="pricing__amount">
                                 <h2>$135.00<span>/monthly</span></h2>
                              </div>
                              <div className="pricing__item">
                                 <ul>
                                    <li>20 Pages Responsive Website</li>
                                    <li>10 PPC Campaigns</li>
                                    <li>20 SEO Keywords</li>
                                    <li>10 Facebook Campaigns</li>
                                    <li>5 Video Campaigns</li>
                                 </ul>
                              </div>
                              <div className="pricing__link">
                                 <a className="m-btn" href="javascript:void(0)">Purchase Now</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="pricing__box">
                              <div className="pricing__header">
                                 <h3>Ultimate</h3>
                                 <p>Dynamic website exclusive design</p>
                              </div>
                              <div className="pricing__amount">
                                 <h2>$499.00<span>/monthly</span></h2>
                              </div>
                              <div className="pricing__item">
                                 <ul>
                                    <li>50 Pages Responsive Website</li>
                                    <li>Unlimited Campaigns</li>
                                    <li>50 SEO Keywords</li>
                                    <li>100 Facebook Campaigns</li>
                                    <li>20 Video Campaigns</li>
                                 </ul>
                              </div>
                              <div className="pricing__link">
                                 <a className="m-btn" href="javascript:void(0)">Purchase Now</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Pricinghome