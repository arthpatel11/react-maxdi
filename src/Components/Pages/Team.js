import React from 'react'

const Team = () => {
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
                  Team Members
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Team Members</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>


      <section className="team__area-2 fix p-relative pt-110 pb-120 mb-105">
        <div className="team__shape team__shape-2">
          <img className="t-shape-1" src="assets/images/shape/testimonials/t-shape-1.png" alt="" />
          <img className="t-shape-2" src="assets/images/shape/testimonials/t-shape-2.png" alt="" />
          <img className="t-shape-3" src="assets/images/shape/testimonials/t-shape-3.png" alt="" />
          <img className="t-shape-4" src="assets/images/shape/testimonials/t-shape-4.png" alt="" />
        </div>
        <div className="container">
          <div className="row mb-65">
            <div className="col-xl-12">
              <div className="team__heading text-center">
                <h2 className="section__title wow fadeInUp" data-wow-delay=".2s">
                  <span>Our beloved creative team</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".3s">Draw a line in the sand quick win. My capacity is full. Keep it lean gain alignment we need to future-proof this plan.</p>
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



    </>
  )
}

export default Team;