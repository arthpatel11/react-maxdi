import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = {
   loop: true,
   margin: 0,
   nav: false,
   dots: true,
   autoplay: true,
   autoplayTimeout: 5000,
   autoplaySpeed: 1000,
   smartSpeed: 1000,
   responsive: {
      0: {
         items: 1
      },
      600: {
         items: 1
      },
      768: {
         items: 2
      },
      1024: {
         items: 3
      },
      1100: {
         items: 3
      }
   }
};

const Testimonials = () => {
   return (
      <section className="testimonials__area fix p-relative pt-120">
         <div className="testimonials__shape">
            <img className="t-shape-1 d-none d-sm-block" src="assets/images/shape/testimonials/t-shape-1.png" alt="" />
            <img className="t-shape-2" src="assets/images/shape/testimonials/t-shape-2.png" alt="" />
            <img className="t-shape-3" src="assets/images/shape/testimonials/t-shape-3.png" alt="" />
            <img className="t-shape-4" src="assets/images/shape/testimonials/t-shape-4.png" alt="" />
            <img className="t-shape-5 d-none d-lg-block" src="assets/images/shape/testimonials/t-shape-5.png" alt="" />
         </div>
         <div className="container">
            <div className="row mb-65">
               <div className="col-xl-12">
                  <div className="testimonials__title text-center">
                     <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                        Testimonials
                     </h4>
                     <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                        <span>What people say</span>
                     </h2>
                     <p className="wow fadeInUp" data-wow-delay=".5s">Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-12">
                  <OwlCarousel id="testimonials" {...testimonials}>
                     <div className="item">
                        <div className="testimonials__item swiper-slide">
                           <div className="testimonials__item-content">
                              <div className="testimonials__logo">
                                 <img src="assets/images/testimonials/client-logo/google.png" alt="" />
                              </div>
                              <div className="testimonials__text">
                                 <p>Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.</p>
                              </div>
                              <div className="testimonials__client d-flex align-items-center">
                                 <div className="testimonials__client-thumb">
                                    <img src="assets/images/testimonials/t-client-1.png" alt="" />
                                 </div>
                                 <div className="testimonials__client-text">
                                    <h4>Alima Alisha</h4>
                                    <span>CEO</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="testimonials__item swiper-slide">
                           <div className="testimonials__item-content">
                              <div className="testimonials__logo">
                                 <img src="assets/images/testimonials/client-logo/payoneer.png" alt="" />
                              </div>
                              <div className="testimonials__text">
                                 <p>Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.</p>
                              </div>
                              <div className="testimonials__client d-flex align-items-center">
                                 <div className="testimonials__client-thumb">
                                    <img src="assets/images/testimonials/t-client-2.png" alt="" />
                                 </div>
                                 <div className="testimonials__client-text">
                                    <h4>David Clark</h4>
                                    <span>Marketing Manager</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="testimonials__item swiper-slide">
                           <div className="testimonials__item-content">
                              <div className="testimonials__logo">
                                 <img src="assets/images/testimonials/client-logo/instagram.png" alt="" />
                              </div>
                              <div className="testimonials__text">
                                 <p>Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.</p>
                              </div>
                              <div className="testimonials__client d-flex align-items-center">
                                 <div className="testimonials__client-thumb">
                                    <img src="assets/images/testimonials/t-client-3.png" alt="" />
                                 </div>
                                 <div className="testimonials__client-text">
                                    <h4>Moran Sham</h4>
                                    <span>Team Leader</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="testimonials__item swiper-slide">
                           <div className="testimonials__item-content">
                              <div className="testimonials__logo">
                                 <img src="assets/images/testimonials/client-logo/google.png" alt="" />
                              </div>
                              <div className="testimonials__text">
                                 <p>Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.</p>
                              </div>
                              <div className="testimonials__client d-flex align-items-center">
                                 <div className="testimonials__client-thumb">
                                    <img src="assets/images/testimonials/t-client-1.png" alt="" />
                                 </div>
                                 <div className="testimonials__client-text">
                                    <h4>Alima Alisha</h4>
                                    <span>CEO</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="testimonials__item swiper-slide">
                           <div className="testimonials__item-content">
                              <div className="testimonials__logo">
                                 <img src="assets/images/testimonials/client-logo/payoneer.png" alt="" />
                              </div>
                              <div className="testimonials__text">
                                 <p>Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.</p>
                              </div>
                              <div className="testimonials__client d-flex align-items-center">
                                 <div className="testimonials__client-thumb">
                                    <img src="assets/images/testimonials/t-client-2.png" alt="" />
                                 </div>
                                 <div className="testimonials__client-text">
                                    <h4>David Clark</h4>
                                    <span>Marketing Manager</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="testimonials__item swiper-slide">
                           <div className="testimonials__item-content">
                              <div className="testimonials__logo">
                                 <img src="assets/images/testimonials/client-logo/instagram.png" alt="" />
                              </div>
                              <div className="testimonials__text">
                                 <p>Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.</p>
                              </div>
                              <div className="testimonials__client d-flex align-items-center">
                                 <div className="testimonials__client-thumb">
                                    <img src="assets/images/testimonials/t-client-3.png" alt="" />
                                 </div>
                                 <div className="testimonials__client-text">
                                    <h4>Moran Sham</h4>
                                    <span>Team Leader</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="testimonials__item swiper-slide">
                           <div className="testimonials__item-content">
                              <div className="testimonials__logo">
                                 <img src="assets/images/testimonials/client-logo/google.png" alt="" />
                              </div>
                              <div className="testimonials__text">
                                 <p>Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.</p>
                              </div>
                              <div className="testimonials__client d-flex align-items-center">
                                 <div className="testimonials__client-thumb">
                                    <img src="assets/images/testimonials/t-client-1.png" alt="" />
                                 </div>
                                 <div className="testimonials__client-text">
                                    <h4>Alima Alisha</h4>
                                    <span>CEO</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="testimonials__item swiper-slide">
                           <div className="testimonials__item-content">
                              <div className="testimonials__logo">
                                 <img src="assets/images/testimonials/client-logo/payoneer.png" alt="" />
                              </div>
                              <div className="testimonials__text">
                                 <p>Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.</p>
                              </div>
                              <div className="testimonials__client d-flex align-items-center">
                                 <div className="testimonials__client-thumb">
                                    <img src="assets/images/testimonials/t-client-2.png" alt="" />
                                 </div>
                                 <div className="testimonials__client-text">
                                    <h4>David Clark</h4>
                                    <span>Marketing Manager</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="testimonials__item swiper-slide">
                           <div className="testimonials__item-content">
                              <div className="testimonials__logo">
                                 <img src="assets/images/testimonials/client-logo/instagram.png" alt="" />
                              </div>
                              <div className="testimonials__text">
                                 <p>Big data run it up the flag pole core competencies bench mark. Three martini lunch we need to dialog around your choice of work attire data-point. Show pony after I ran into realized two projects crank this out.</p>
                              </div>
                              <div className="testimonials__client d-flex align-items-center">
                                 <div className="testimonials__client-thumb">
                                    <img src="assets/images/testimonials/t-client-3.png" alt="" />
                                 </div>
                                 <div className="testimonials__client-text">
                                    <h4>Moran Sham</h4>
                                    <span>Team Leader</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </OwlCarousel>

               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonials