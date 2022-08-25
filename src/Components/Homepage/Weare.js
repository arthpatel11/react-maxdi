import React from 'react';
import CountUp from 'react-countup';

const Weare = () => {
   return (
      <section className="maxdi__area fix p-relative pt-115 pb-145">
         <div className="maxdi__shape">
            <img className="m-shape-1 d-none d-sm-block" src="assets/images/shape/testimonials/t-shape-1.png" alt="" />
            <img className="m-shape-2" src="assets/images/shape/testimonials/t-shape-2.png" alt="" />
            <img className="m-shape-3" src="assets/images/shape/testimonials/t-shape-3.png" alt="" />
            <img className="m-shape-4" src="assets/images/shape/testimonials/t-shape-4.png" alt="" />
         </div>
         <div className="container">
            <div className="row mb-110">
               <div className="col-xl-12">
                  <div className="maxdi__title text-center">
                     <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                        We Are Maxdi
                     </h4>
                     <h2 className="section__title wow fadeInUp" data-wow-delay=".4s">
                        <span>We work to help your brand success</span>
                     </h2>
                     <p className="wow fadeInUp" data-wow-delay=".6s">Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-12">
                  <div className="maxdi__counter">
                     <div className="maxdi__counter-content text-center">
                        <h2 className="counter"><CountUp start={0} end={500} duration={2.5} suffix="+" enableScrollSpy={true} /></h2>
                        <p>Happy Clients</p>
                     </div>
                  </div>
                  <div className="maxdi__counter maxdi__counter-2">
                     <div className="maxdi__counter-content maxdi__counter-content-2 text-center">
                     <h2 className="counter"><CountUp start={0} end={280} duration={2.5} suffix="+" enableScrollSpy={true} /></h2>
                        <p>Project Delivered</p>
                     </div>
                  </div>
                  <div className="maxdi__content d-flex">
                     <div className="maxdi__thumb-1">
                        <img src="assets/images/maxdi/maxdi-img-1.jpg" alt="" />
                     </div>
                     <div className="maxdi__thumb-2">
                        <img src="assets/images/maxdi/maxdi-img-2.jpg" alt="" />
                     </div>
                     <div className="maxdi__thumb-3">
                        <img src="assets/images/maxdi/maxdi-img-3.jpg" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Weare