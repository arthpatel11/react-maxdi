import React from 'react'

const Portfolio = () => {
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
                           Portfolio
                        </h2>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                           <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </section>


         <section className="portfolio__area portfolio__area-2 fix p-relative pt-115 pb-230">
            <div className="portfolio__shape-2">
               <img className="p-s-1  d-none d-sm-block" src="assets/images/shape/portfolio/p-s-1.png" alt="" />
               <img className="p-s-2" src="assets/images/shape/portfolio/p-s-2.png" alt="" />
               <img className="p-s-3 d-none d-sm-block" src="assets/images/shape/portfolio/p-s-3.png" alt="" />
               <img className="p-s-4" src="assets/images/shape/portfolio/p-s-4.png" alt="" />
               <img className="p-s-5 d-none d-xxl-block" src="assets/images/shape/portfolio/p-s-5.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="portfolio__title-2 text-center">
                        <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                           Portfolio
                        </h4>
                        <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                           <span>Some of our amazing works</span>
                        </h2>
                     </div>
                     <div className="portfolio__menu portfolio__menu-2 text-center wow fadeInUp" data-wow-delay=".5s">
                        <button className="active" data-filter="*">Show All</button>
                        <button data-filter=".cat2">UI/UX Design</button>
                        <button data-filter=".cat1">Marketing</button>
                        <button data-filter=".cat4">Development</button>
                     </div>
                  </div>
               </div>
               <div className="row grid mt-70">
                  <div className="col-xl-6 col-lg-6 grid-item cat1 cat4 cat3">
                     <div className="portfolio__item-2 mb-30">
                        <div className="portfolio__image-2">
                           <img src="assets/images/portfolio/p-1.jpg" alt="portfolio" />
                        </div>
                        <div className="portfolio__text-2">
                           <h3><a href="javascript:void(0)">UI & UX Design</a></h3>
                           <p>Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 grid-item cat3 cat2 cat1">
                     <div className="portfolio__item-2 mb-30">
                        <div className="portfolio__image-2">
                           <img src="assets/images/portfolio/p-2.jpg" alt="portfolio" />
                        </div>
                        <div className="portfolio__text-2">
                           <h3><a href="javascript:void(0)">Web Development</a></h3>
                           <p>Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 grid-item cat4 cat3 cat2">
                     <div className="portfolio__item-2 mb-30">
                        <div className="portfolio__image-2">
                           <img src="assets/images/portfolio/p-3.jpg" alt="portfolio" />
                        </div>
                        <div className="portfolio__text-2">
                           <h3><a href="javascript:void(0)">Branding Special</a></h3>
                           <p>Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 grid-item cat3 cat1 cat4">
                     <div className="portfolio__item-2 mb-30">
                        <div className="portfolio__image-2">
                           <img src="assets/images/portfolio/p-4.jpg" alt="portfolio" />
                        </div>
                        <div className="portfolio__text-2">
                           <h3><a href="javascript:void(0)">Digital Marketing</a></h3>
                           <p>Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 grid-item cat4 cat3 cat2">
                     <div className="portfolio__item-2 mb-30">
                        <div className="portfolio__image-2">
                           <img src="assets/images/portfolio/p-5.jpg" alt="portfolio" />
                        </div>
                        <div className="portfolio__text-2">
                           <h3><a href="javascript:void(0)">Branding Special</a></h3>
                           <p>Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 grid-item cat3 cat1 cat4">
                     <div className="portfolio__item-2 mb-30">
                        <div className="portfolio__image-2">
                           <img src="assets/images/portfolio/p-6.jpg" alt="portfolio" />
                        </div>
                        <div className="portfolio__text-2">
                           <h3><a href="javascript:void(0)">Digital Marketing</a></h3>
                           <p>Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   )
}

export default Portfolio