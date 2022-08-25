import React from 'react'

const Blog = () => {
   return (
      <section className="blog__area fix p-relative pt-60 pb-225">
         <div className="blog__shape">
            <img className="blog-shape-1" src="assets/images/shape/blog/blog-s-1.png" alt="" />
            <img className="blog-shape-2" src="assets/images/shape/blog/blog-s-2.png" alt="" />
            <img className="blog-shape-3 d-none d-sm-block" src="assets/images/shape/blog/blog-s-3.png" alt="" />
            <img className="blog-shape-4" src="assets/images/shape/blog/blog-s-4.png" alt="" />
            <img className="blog-shape-5 d-none d-sm-block" src="assets/images/shape/blog/blog-s-5.png" alt="" />
         </div>
         <div className="container">
            <div className="row mb-65">
               <div className="col-xl-12">
                  <div className="blog__title text-center">
                     <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                        Our Blog
                     </h4>
                     <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                        <span>Our latest updates</span>
                     </h2>
                     <p className="wow fadeInUp" data-wow-delay=".6s">High turnaround rate and loop back vec but we want to empower the team with the right tools and guidance.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="blog__item mb-40">
                     <div className="blog__thumb">
                        <a href="javascript:void(0)"><img src="assets/images/blog/blog-img-1.jpg" alt="blog" /></a>
                     </div>
                     <div className="blog__content">
                        <div className="blog__date d-flex align-items-center justify content-between">
                           <i className="fa-solid fa-clock d-none d-xl-block"></i><p>22 March, 2022</p>
                           <a href="blog.html" className="m-btn blog-btn">
                              Marketing
                           </a>
                        </div>
                        <h3>
                           <a href="javascript:void(0)">
                              Post launch shower
                              initiative forward
                           </a>
                        </h3>
                        <div className="blog__link">
                           <a href="javascript:void(0)" className="arrow-btn">Continue Reading<i className="fas fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="blog__item mb-40">
                     <div className="blog__thumb">
                        <a href="javascript:void(0)"><img src="assets/images/blog/blog-img-2.jpg" alt="blog" /></a>
                     </div>
                     <div className="blog__content">
                        <div className="blog__date d-flex align-items-center">
                           <i className="fa-solid fa-clock d-none d-xl-block"></i><p>22 March, 2022</p>
                           <a href="blog.html" className="m-btn blog-btn">
                              Marketing
                           </a>
                        </div>
                        <h3>
                           <a href="javascript:void(0)">
                              Delivering the best
                              digital marketing
                           </a>
                        </h3>
                        <div className="blog__link">
                           <a href="javascript:void(0)" className="arrow-btn">Continue Reading<i className="fas fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="blog__item mb-40">
                     <div className="blog__thumb">
                        <a href="javascript:void(0)"><img src="assets/images/blog/blog-img-3.jpg" alt="blog" /></a>
                     </div>
                     <div className="blog__content">
                        <div className="blog__date d-flex align-items-center justify content-between">
                           <i className="fa-solid fa-clock d-none d-xl-block"></i><p>22 March, 2022</p>
                           <a href="blog.html" className="m-btn blog-btn">
                              Marketing
                           </a>
                        </div>
                        <h3>
                           <a href="javascript:void(0)">
                              This is our north star
                              design baseline
                           </a>
                        </h3>
                        <div className="blog__link">
                           <a href="javascript:void(0)" className="arrow-btn">Continue Reading<i className="fas fa-arrow-right"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Blog