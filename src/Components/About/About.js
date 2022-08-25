import React from 'react'
import Blog from '../Homepage/Blog'
import Experience from '../Homepage/Experience'
import Experience2 from '../Homepage/Experience2'
import CountUp from 'react-countup';

const About = () => {
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
                           About us
                        </h2>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                           <li className="breadcrumb-item active" aria-current="page">About us</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </section>

         <section className="about__area fix p-relative pt-120 pb-120 about__pb">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-7 col-xl-8 col-lg-10 col-md-10">
                     <div className="about__title mb-80">
                        <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                           We are Maxdi
                        </h4>
                        <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                           <span>We are here to make your</span>
                           product look more elegant
                           and stylish
                        </h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-6 col-lg-6">
                     <div className="about__thumb">
                        <div className="about__thumb-shape">
                           <img className="about-s-1 d-none d-lg-block" src="assets/images/shape/about/about-s-1.png" alt="" />
                           <img className="about-s-2 d-none d-md-block wow zoomIn" data-wow-delay=".8s" src="assets/images/shape/about/about-s-2.png" alt="" />
                        </div>
                        <div className="about__thumb-image">
                           <img src="assets/images/about/about-img.jpg" alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-5 offset-xl-1 col-lg-6">
                     <div className="about__content wow fadeInUp" data-wow-delay=".2s">
                        <p>Kindling the energy hidden in matter the only home we've ever known radio telescope decipherment descended from astronomers rogue. Prime number network of wormholes take root.</p>
                        <ul>
                           <li>Sea of Tranquility dispassionate observer dream.</li>
                           <li>Muse about as a patch of light brain is the seed of intelligence.</li>
                           <li>The only home we've ever known dream of the mind's eye.</li>
                        </ul>
                     </div>
                     <div className="about__counter-bg d-none d-sm-block">
                        <div className="about__counter-content d-flex">
                           <div className="about__counter-text text-center">
                              <h2 className="counter"><CountUp start={0} end={280} duration={2.5} suffix="+" enableScrollSpy={true} /></h2>
                              <p>Project Delivered</p>
                           </div>
                           <div className="about__counter-text text-center">
                              <h2 className="counter"><CountUp start={0} end={500} duration={2.5} suffix="+" enableScrollSpy={true} /></h2>
                              <p>Happy Clients</p>
                           </div>
                           <div className="about__counter-text text-center">
                              <h2 className="counter"><CountUp start={0} end={3500} duration={2.5} suffix="+" enableScrollSpy={true} /></h2>
                              <p>Total Coffees</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Experience />


         <section className="team__area fix p-relative pt-115 pb-80 mb-150">
            <div className="team__shape">
               <img className="t-shape-1" src="assets/images/shape/testimonials/t-shape-1.png" alt="" />
               <img className="t-shape-2" src="assets/images/shape/testimonials/t-shape-2.png" alt="" />
               <img className="t-shape-3" src="assets/images/shape/testimonials/t-shape-3.png" alt="" />
               <img className="t-shape-4" src="assets/images/shape/testimonials/t-shape-4.png" alt="" />
            </div>
            <div className="container">
               <div className="row mb-65">
                  <div className="col-xl-12">
                     <div className="team__heading text-center">
                        <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                           Team Members
                        </h4>
                        <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                           <span>Our beloved creative team</span>
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay=".4s">Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 mb-40">
                     <div className="team__thumb">
                        <img src="assets/images/team/member-1.jpg" alt="" />
                     </div>
                     <div className="team__content text-center">
                        <a href="#"><h3 className="team__title">John Smith</h3></a>
                        <span className="team__position">Web Developer</span>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 mb-40">
                     <div className="team__thumb">
                        <img src="assets/images/team/member-2.jpg" alt="" />
                     </div>
                     <div className="team__content text-center">
                        <a href="#"><h3 className="team__title">Alisha Alima</h3></a>
                        <span className="team__position">Product Designer</span>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 mb-40">
                     <div className="team__thumb">
                        <img src="assets/images/team/member-3.jpg" alt="" />
                     </div>
                     <div className="team__content text-center">
                        <a href="#"><h3 className="team__title">David Park</h3></a>
                        <span className="team__position">UI/UX Designer</span>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 mb-40">
                     <div className="team__thumb">
                        <img src="assets/images/team/member-4.jpg" alt="" />
                     </div>
                     <div className="team__content text-center">
                        <a href="#"><h3 className="team__title">Tailor Milan</h3></a>
                        <span className="team__position">Marketing Manager</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Experience2 />
         <Blog />


      </>
   )
}

export default About