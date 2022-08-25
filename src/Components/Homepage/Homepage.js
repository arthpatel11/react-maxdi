import React from 'react';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Experience from './Experience';
import CountUp from 'react-countup';
import Serviceshome from './Serviceshome';
import FAQhome from './FAQhome';

const Homepage = () => {
  return (
    <>
      <section className="hero__area hero__height fix p-relative d-flex align-items-center">
        <div className="hero__shape">
          <img className="hero-shape-1 wow zoomIn" data-wow-delay=".8s" src="assets/images/shape/hero/hero-shape-1.png" alt="" />
          <img className="hero-shape-2 d-none d-md-block" src="assets/images/shape/hero/hero-shape-2.png" alt="" />
          <img className="hero-shape-3" src="assets/images/shape/hero/hero-shape-3.png" alt="" />
          <img className="hero-shape-4 d-none d-sm-block" src="assets/images/shape/hero/hero-shape-4.png" alt="" />
          <img className="hero-shape-5 d-none d-sm-block" src="assets/images/shape/hero/hero-shape-5.png" alt="" />
          <img className="hero-shape-6 d-none d-xl-block" src="assets/images/shape/hero/hero-shape-6.png" alt="" />
          <img className="hero-shape-7 d-none d-sm-block" src="assets/images/shape/hero/hero-shape-7.png" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-7 col-sm-10">
              <div className="hero__content-shape">
                <img className="hero-c-shape-1 wow zoomIn" data-wow-delay="1.5s" src="assets/images/shape/hero/hero-c-shape-1.png" alt="" />
              </div>
              <div className="hero__content">
                <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                  Creative Digital Agency
                </h4>
                <h2 className="hero__title wow fadeInUp" data-wow-delay=".3s">
                  <span>We build creative</span>
                  websites & apps
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">The carbon in our apple pies extraordinary claims require extraord evidence permanence of the stars energy.</p>
                <a href="javascript:void(0)" className="m-btn mt-35 wow fadeInUp" data-wow-delay=".6s">Get Started</a>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-5 col-md-5 col-sm-7">
              <div className="hero__thumb text-end">
                <div className="hero__thumb-shape">
                  <img className="hero-t-shape-1 d-none d-xl-block" src="assets/images/shape/hero/hero-t-shape-1.png" alt="" />
                  <img className="hero-t-shape-2" src="assets/images/shape/hero/hero-t-shape-2.png" alt="" />
                  <img className="hero-t-shape-3 wow fadeInRight" data-wow-delay="2s" src="assets/images/shape/hero/hero-t-shape-3.png" alt="" />
                </div>
                <div className="hero__thumb-image">
                  <img src="assets/images/hero/hero-img.jpg" alt="" />
                </div>
              </div>
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
                  About Us
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

      <Serviceshome />


      <section className="facts__area fix p-relative pt-120 pb-120 facts__pb">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-5 col-md-8 col-sm-10">
              <div className="facts__thumb">
                <div className="facts__thumb-shape">
                  <img className="facts-s-1 wow zoomIn" data-wow-delay=".6s" src="../../assets/images/shape/facts/facts-s-1.png" alt="" />
                  <img className="facts-s-2 wow zoomIn" data-wow-delay="1s" src="../../assets/images/shape/facts/facts-s-2.png" alt="" />
                  <img className="facts-s-3" src="../../assets/images/shape/facts/facts-s-3.png" alt="" />
                  <img className="facts-s-4 d-none d-md-block" src="../../assets/images/shape/facts/facts-s-4.png" alt="" />
                </div>
                <div className="facts__thumb-image">
                  <img src="../../assets/images/facts/facts-img.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-9">
              <div className="facts__content">
                <div className="facts__content-text">
                  <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                    Facts To Know
                  </h4>
                  <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                    <span>Our project will help</span>
                    you standout
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".3s">The carbon in our apple pies extraordinary claims require extraord evidence permanence of the stars kindling the energy hidden in matter from which we spring emerged.</p>
                </div>
                <div className="facts__counter-content d-flex">
                  <div className="facts__counter-text">
                    <h2 className="counter"><CountUp start={0} end={2} duration={1} suffix="K" enableScrollSpy={true} /></h2>
                    <h5>Project Delivered</h5>
                    <p>Preserve and cherish that pale blue dot star stuff.</p>
                  </div>
                  <div className="facts__counter-text">
                    <h2 className="counter"><CountUp start={0} end={5} duration={1} suffix="M" enableScrollSpy={true} /></h2>
                    <h5>Total Revinue</h5>
                    <p>The carbon in our appies event not nosunrise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="portfolio__area fix p-relative pb-90">
        <div className="portfolio__shape">
          <img className="portfolio-s-1" src="assets/images/shape/portfolio/portfolio-s-1.png" alt="" />
          <img className="portfolio-s-2" src="assets/images/shape/portfolio/portfolio-s-2.png" alt="" />
          <img className="portfolio-s-3 d-none d-sm-block" src="assets/images/shape/portfolio/portfolio-s-3.png" alt="" />
          <img className="portfolio-s-4" src="assets/images/shape/portfolio/portfolio-s-4.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="portfolio__wrapper">
                <div className="portfolio__content">
                  <div className="portfolio__title">
                    <h4 className="section__sub-title wow fadeInUp" data-wow-delay=".2s">
                      Portfolio
                    </h4>
                    <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
                      <span>Some of our amazing works</span>
                    </h2>
                  </div>
                  <div className="portfolio__menu">
                    <button className="active" data-filter="*">Show All</button>
                    <button data-filter=".cat1">UI/UX Design</button>
                    <button data-filter=".cat2">Marketing</button>
                    <button data-filter=".cat3">Development</button>
                    <button data-filter=".cat4">Content Writing</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row grid mt-150">
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat4 cat3">
              <div className="portfolio__item mb-30 wow fadeIn" data-wow-delay=".3s">
                <div className="portfolio__image">
                  <img src="assets/images/portfolio/portfolio-1.jpg" alt="portfolio" />
                  <div className="portfolio__text">
                    <p>Web Design</p>
                    <h3><a href="javascript:void(0)">Digital Agency</a></h3>
                    <div className="portfolio__link">
                      <a href="javascript:void(0)"><i className="fas fa-plus"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat6 cat3">
              <div className="portfolio__item mb-30 wow fadeIn" data-wow-delay=".3s">
                <div className="portfolio__image">
                  <img src="assets/images/portfolio/portfolio-2.jpg" alt="portfolio" />
                  <div className="portfolio__text">
                    <p>Web Design</p>
                    <h3><a href="javascript:void(0)">Digital Agency</a></h3>
                    <div className="portfolio__link">
                      <a href="javascript:void(0)"><i className="fas fa-plus"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat5 cat1 cat4">
              <div className="portfolio__item mb-30 wow fadeIn" data-wow-delay=".3s">
                <div className="portfolio__image">
                  <img src="assets/images/portfolio/portfolio-3.jpg" alt="portfolio" />
                  <div className="portfolio__text">
                    <p>Web Design</p>
                    <h3><a href="javascript:void(0)">Digital Agency</a></h3>
                    <div className="portfolio__link">
                      <a href="javascript:void(0)"><i className="fas fa-plus"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat4 cat5">
              <div className="portfolio__item mb-30 wow fadeIn" data-wow-delay=".3s">
                <div className="portfolio__image">
                  <img src="assets/images/portfolio/portfolio-4.jpg" alt="portfolio" />
                  <div className="portfolio__text">
                    <p>Web Design</p>
                    <h3><a href="javascript:void(0)">Digital Agency</a></h3>
                    <div className="portfolio__link">
                      <a href="javascript:void(0)"><i className="fas fa-plus"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat6 cat1 cat4">
              <div className="portfolio__item mb-30 wow fadeIn" data-wow-delay=".3s">
                <div className="portfolio__image">
                  <img src="assets/images/portfolio/portfolio-6.jpg" alt="portfolio" />
                  <div className="portfolio__text">
                    <p>Web Design</p>
                    <h3><a href="javascript:void(0)">Digital Agency</a></h3>
                    <div className="portfolio__link">
                      <a href="javascript:void(0)"><i className="fas fa-plus"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat6 cat3">
              <div className="portfolio__item mb-30 wow fadeIn" data-wow-delay=".3s">
                <div className="portfolio__image">
                  <img src="assets/images/portfolio/portfolio-5.jpg" alt="portfolio" />
                  <div className="portfolio__text">
                    <p>Web Design</p>
                    <h3><a href="javascript:void(0)">Digital Agency</a></h3>
                    <div className="portfolio__link">
                      <a href="javascript:void(0)"><i className="fas fa-plus"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Testimonials />
      <FAQhome />
      <Blog />

    </>

  )
}

export default Homepage;