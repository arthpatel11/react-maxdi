import React from 'react';
import CountUp from 'react-countup';

const Teamdetails = () => {
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
                           Team Details
                        </h2>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                           <li className="breadcrumb-item active" aria-current="page">Team Details</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </section>


         <section className="team__details fix p-relative pt-120 pb-260">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-5">
                     <div className="team__details-thumb">
                        <img src="assets/images/team/member-1.jpg" alt="" />
                     </div>
                     <div className="team__details-thumb-content">
                        <span>Web Developer</span>
                        <div className="team__details-thumb-social">
                           <a href="javascript:void(0)"><i className="fa-brands fa-facebook-f"></i></a>
                           <a href="javascript:void(0)"><i className="fa-brands fa-twitter"></i></a>
                           <a href="javascript:void(0)"><i className="fa-brands fa-instagram"></i></a>
                           <a href="javascript:void(0)"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7">
                     <div className="team__details-content">
                        <h2>John Smith</h2>
                        <p>Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.  We've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
                        <p>Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root. Matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
                        <div className="team__details-counter d-sm-flex">
                           <div className="team__details-counter-item">
                              <h2 className="counter"><CountUp start={0} end={350} duration={2.5} suffix="+" enableScrollSpy={true} /></h2>
                              <p>Project Complete</p>
                           </div>
                           <div className="team__details-counter-item">
                           <h2 className="counter"><CountUp start={0} end={150} duration={2.5} suffix="+" enableScrollSpy={true} /></h2>
                              <p>Happy Clients</p>
                           </div>
                           <div className="team__details-counter-item">
                           <h2 className="counter"><CountUp start={0} end={15} duration={2.5} suffix="+" enableScrollSpy={true} /></h2>
                              <p>Years of Experience</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


      </>
   )
}

export default Teamdetails