import React from 'react'

const Portfoliodetails = () => {
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
                           Portfolio Details
                        </h2>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                           <li className="breadcrumb-item active" aria-current="page">Portfolio Details</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </section>


         <section className="portfolio__details p-relative pt-120 pb-250">
            <div className="portfolio__details-shape">
               <img className="p-details-1" src="assets/images/shape/portfolio/p-s-2.png" alt="" />
               <img className="p-details-2 d-none d-sm-block" src="assets/images/shape/portfolio/p-s-5.png" alt="" />
            </div>
            <div className="container">
               <div className="row mb-40">
                  <div className="col-xl-8 col-lg-8 col-md-8">
                     <div className="portfolio__details-thumb">
                        <img src="assets/images/portfolio/p-d-1.jpg" alt="" />
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 d-none d-md-block">
                     <div className="portfolio__details-thumb-2">
                        <img src="assets/images/portfolio/p-d-2.jpg" alt="" />
                        <img src="assets/images/portfolio/p-d-3.jpg" alt="" />
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-5 order-last order-md-first">
                     <div className="sidebar__content">
                        <div className="sidebar__content-heading">
                           <h3>Project Info</h3>
                        </div>
                        <div className="sidebar__info">
                           <h4>Client</h4>
                           <span>Nosimon Agency</span>
                        </div>
                        <div className="sidebar__info">
                           <h4>Project Type</h4>
                           <span>Website Design</span>
                        </div>
                        <div className="sidebar__info">
                           <h4>Location</h4>
                           <span>61 R New Street, NYC</span>
                        </div>
                        <div className="sidebar__info">
                           <h4>Project Date</h4>
                           <span>22 March 2022</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-7 offset-xl-1 col-lg-7 col-md-7">
                     <div className="portfolio__details-content">
                        <h2>Creative website design</h2>
                        <p>Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.  We've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
                        <p>Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.  Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
                        <div className="values">
                           <div className="values__content d-flex align-items-center">
                              <div className="values__content-icon">
                                 <i className="fa-solid fa-screwdriver-wrench"></i>
                              </div>
                              <div className="values__content-text">
                                 <h3>Best Solutions Provider</h3>
                                 <p>Energy only home we've ever known radio telescope decipherment descended from rogue.</p>
                              </div>
                           </div>
                           <div className="values__content d-flex align-items-center">
                              <div className="values__content-icon">
                                 <i className="fa-solid fa-screwdriver-wrench blue"></i>
                              </div>
                              <div className="values__content-text">
                                 <h3>Creative UI/UX Design</h3>
                                 <p>Energy only home we've ever known radio telescope decipherment descended from rogue.</p>
                              </div>
                           </div>
                           <div className="values__content d-flex align-items-center">
                              <div className="values__content-icon">
                                 <i className="fa-solid fa-screwdriver-wrench green"></i>
                              </div>
                              <div className="values__content-text">
                                 <h3>Professional Services</h3>
                                 <p>Energy only home we've ever known radio telescope decipherment descended from rogue.</p>
                              </div>
                           </div>
                        </div>
                        <p>Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment desc.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>



      </>
   )
}

export default Portfoliodetails