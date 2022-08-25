import React from 'react'

const Experience2 = () => {
   return (
      <section className="project__area p-relative pt-130">
         <div className="project__shape">
            <img className="project-s-1" src="assets/images/shape/project/p-s-1.png" alt="" />
            <img className="project-s-2" src="assets/images/shape/project/p-s-2.png" alt="" />
            <img className="project-s-3" src="assets/images/shape/project/p-s-3.png" alt="" />
            <img className="project-s-4 d-none d-lg-block wow zoomIn" data-wow-delay=".8s" src="assets/images/shape/project/p-s-4.png" alt="" />
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xl-9 col-lg-10">
                  <div className="project__thumb d-sm-flex">
                     <div className="project__thumb-1">
                        <img src="assets/images/project/project-img-1.jpg" alt="" />
                     </div>
                     <div className="project__thumb-2">
                        <img src="assets/images/project/project-img-2.jpg" alt="" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-7 offset-xl-5 col-lg-9 offset-lg-3 col-md-10 offset-md-2 col-sm-11">
                  <div className="project__wrapper">
                     <div className="project__content">
                        <div className="project__title">
                           <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                              25 Years Of Experience
                           </h4>
                           <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                              <span>Like what you see with</span>
                              our online products?
                           </h2>
                           <p className="wow fadeInUp" data-wow-delay=".4s">That's not on the roadmap losing these latest prospects is like putting socks on an octopus to give you a heads-up.</p>
                           <a className="m-btn mt-35" href="javascript:void(0)">Start a Project</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Experience2