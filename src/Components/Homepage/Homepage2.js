import React from 'react'
import Blog from './Blog';
import Experience2 from './Experience2';
import Testimonials from './Testimonials';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Weare from './Weare';
import Pricinghome from './Pricinghome';

const brand = {
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: false,
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
      items: 3
    },
    1024: {
      items: 4
    },
    1100: {
      items: 5
    }
  }
};

const Homepage2 = () => {
  return (
    <>

      <section className="hero__area-2 fix p-relative">
        <div className="hero__shape-2">
          <img className="hero2-s-1" src="assets/images/shape/hero2/hero2-s-1.png" alt="" />
          <img className="hero2-s-2" src="assets/images/shape/hero2/hero2-s-2.png" alt="" />
          <img className="hero2-s-3 d-none d-xl-block" src="assets/images/shape/hero2/hero2-s-3.png" alt="" />
          <img className="hero2-s-4 d-none d-lg-block" src="assets/images/shape/hero2/hero2-s-4.png" alt="" />
          <img className="hero2-s-5 wow zoomIn" data-wow-delay=".8s" src="assets/images/shape/hero2/hero2-s-5.png" alt="" />
          <img className="hero2-s-6 wow zoomIn" data-wow-delay="1.7s" src="assets/images/shape/hero2/hero2-s-6.png" alt="" />
        </div>
        <div className="hero__height hero__pt d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
                <div className="hero__content-2">
                  <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                    Let’s Create Great Things
                  </h4>
                  <h2 className="hero__title hero__title-2 wow fadeInUp" data-wow-delay=".3s">
                    <span>Digital product</span>
                    design agency
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">The carbon in our apple pies extraordinary claims require extra evidence permanence of the stars energy.</p>
                  <a href="javascript:void(0)" className="m-btn mt-35 wow fadeInUp" data-wow-delay=".6s">Get Started</a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-10">
                <div className="hero__thumb-2 text-end">
                  <div className="hero__thumb-2-image">
                    <img src="assets/images/hero/hero-img-2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__services">
          <div className="container">
            <div className="row mb-55">
              <div className="col-xl-6">
                <div className="services__title">
                  <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                    Services
                  </h4>
                  <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                    <span>What we do</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single__bg single__bg-pink">
                  <div className="single__service single__service-2">
                    <div className="single__service-icon single__service-icon-pink">
                      <img src="assets/images/icon/s2-icon-1.png" alt="icon" />
                    </div>
                    <div className="single__service-content single__service-content-2">
                      <h3>UI/UX Design</h3>
                      <p>Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.</p>
                    </div>
                    <div className="single__service-link">
                      <a href="javascript:void(0)" className="s-btn s-btn-pink">Find out more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single__bg single__bg-yellow">
                  <div className="single__service single__service-2">
                    <div className="single__service-icon single__service-icon-yellow">
                      <img src="assets/images/icon/s2-icon-2.png" alt="icon" />
                    </div>
                    <div className="single__service-content single__service-content-2">
                      <h3>Web Development</h3>
                      <p>Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.</p>
                    </div>
                    <div className="single__service-link">
                      <a href="javascript:void(0)" className="s-btn s-btn-yellow">Find out more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single__bg single__bg-green">
                  <div className="single__service single__service-2">
                    <div className="single__service-icon single__service-icon-green">
                      <img src="assets/images/icon/s2-icon-3.png" alt="icon" />
                    </div>
                    <div className="single__service-content single__service-content-2">
                      <h3>App Development</h3>
                      <p>Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.</p>
                    </div>
                    <div className="single__service-link">
                      <a href="javascript:void(0)" className="s-btn s-btn-green">Find out more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Weare />


      <section className="portfolio__area fix p-relative pt-115 pb-120">
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
              <div className="portfolio__item-2">
                <div className="portfolio__image-2">
                  <img src="assets/images/portfolio/p-4.jpg" alt="portfolio" />
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

      <Experience2 />
      <Testimonials />
      <Pricinghome />

      


      <section className="customers__area fix p-relative pt-120 pb-60">
        <div className="customers__shape">
          <img className="c-s-1" src="assets/images/shape/customers/c-s-1.png" alt="" />
          <img className="c-s-2" src="assets/images/shape/customers/c-s-2.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="customers__title text-center">
                <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                  Creative Customers
                </h4>
                <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                  <span>Our beloved partners</span>
                </h2>
              </div>
              <div className="customers__container">
                <OwlCarousel {...brand}>
                  <div className="item">
                    <div className="brand__item swiper-slide text-center">
                      <img src="assets/images/brand/logo-1.png" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="brand__item swiper-slide text-center">
                      <img src="assets/images/brand/logo-2.png" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="brand__item swiper-slide text-center">
                      <img src="assets/images/brand/logo-3.png" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="brand__item swiper-slide text-center">
                      <img src="assets/images/brand/logo-4.png" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="brand__item swiper-slide text-center">
                      <img src="assets/images/brand/logo-5.png" alt="" />
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blog />

    </>
  )
}

export default Homepage2;