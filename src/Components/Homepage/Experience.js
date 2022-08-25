import React from 'react'

const Experience = () => {
   return (
      <section className="experience__area fix p-relative pt-120 pb-120">
         <div className="experience__shape">
            <img className="experience-s-1" src="assets/images/shape/experience/experience-s-1.png" alt="" />
            <img className="experience-s-2" src="assets/images/shape/experience/experience-s-2.png" alt="" />
            <img className="experience-s-3 d-none d-lg-block" src="assets/images/shape/experience/experience-s-3.png" alt="" />
            <img className="experience-s-4" src="assets/images/shape/experience/experience-s-4.png" alt="" />
         </div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10">
                  <div className="experience__content">
                     <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                        25 Years Of Experience
                     </h4>
                     <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                        <span>Ready to get our</span>
                        digital services?
                     </h2>
                     <p className="wow fadeInUp" data-wow-delay=".4s">That's not on the roadmap losing these latest prospects is like putting socks on an octopus to give you a heads-up.</p>
                     <a href="contact.html" className="m-btn mt-35 wow fadeInUp" data-wow-delay=".6s">Start a Project</a>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-6 col-md-9">
                  <div className="experience__video-btn">
                     <a href="https://www.youtube.com/watch?v=yJg-Y5byMMw" className="popup-video"><i className="fas fa-play"></i></a>
                  </div>
                  <div className="experience__thumb text-end">
                     <img src="assets/images/experience/experience-img.png" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Experience