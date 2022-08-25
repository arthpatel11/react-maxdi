import React, { useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import loadjs from 'loadjs';


const Header = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    loadjs('../../assets/js/main.js', () => { });
  }, [pathname]);



  return (
    <>

      {/* Preloader Start Here */}
      <div id="pre-loader">
        <div className="pre-loader">
          <span></span>
          <span></span>
        </div>
      </div>
      {/* Preloader End Here */}

      {/* Back To Top Start Here */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* Back To Top End Here */}


      <header>
        {(pathname !== "/Homepage2" && pathname !== "/About" && pathname !== "/Contact" && pathname !== "/Blogdetails" && pathname !== "/Blogs" && pathname !== "/Team" && pathname !== "/Teamdetails" && pathname !== "/Services" && pathname !== "/Servicesdetails" && pathname !== "/Portfolio" && pathname !== "/Portfoliodetails") &&
          <div id="header-sticky" className="header__area header__transparent">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <Link to="/" className="navbar-brand" ><img src="../../assets/images/logo/logo.svg" style={{ width: "185px" }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse main-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">Home</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/" >Digital Agency</Link></li>
                        <li><Link to="/Homepage2">Creative Agency</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Blogs">Blog</Link></li>
                        <li><Link to="/Blogdetails">Blog Details</Link></li>
                        <li><Link to="/Team">Team</Link></li>
                        <li><Link to="/Teamdetails">Team Details</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/Servicesdetails">Services Details</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/Portfolio" href="#">Portfolio</Link></li>
                        <li><Link to="/Portfoliodetails" href="#">Portfolio Details</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="header__right d-flex align-items-center">
                    <div className="d-none d-lg-block">
                      <a className="m-btn" href="contact.html">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        }


        {(pathname !== "/" && pathname !== "/About" && pathname !== "/Contact" && pathname !== "/Blogdetails" && pathname !== "/Blogs" && pathname !== "/Team" && pathname !== "/Teamdetails" && pathname !== "/Services" && pathname !== "/Servicesdetails" && pathname !== "/Portfolio" && pathname !== "/Portfoliodetails") &&
          <div id="header-sticky" className="header__area header__area-2 header__transparent">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <Link to="/" className="navbar-brand" ><img src="../../assets/images/logo/Logo-white.svg" style={{ width: "185px" }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse main-menu main-menu-2" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">Home</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/" >Digital Agency</Link></li>
                        <li><Link to="/Homepage2">Creative Agency</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Blogs">Blog</Link></li>
                        <li><Link to="/Blogdetails">Blog Details</Link></li>
                        <li><Link to="/Team">Team</Link></li>
                        <li><Link to="/Teamdetails">Team Details</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/Servicesdetails">Services Details</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/Portfolio" href="#">Portfolio</Link></li>
                        <li><Link to="/Portfoliodetails" href="#">Portfolio Details</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="header__right d-flex align-items-center">
                    <div className="d-none d-lg-block">
                      <a className="m-btn" href="contact.html">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        }

        {(pathname !== "/" && pathname !== "/Homepage2") &&
          <div id="header-sticky" className="header__area header__transparent header__white">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <Link to="/" className="navbar-brand" ><img src="../../assets/images/logo/logo.svg" style={{ width: "185px" }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse main-menu main-menu-3" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">Home</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/" >Digital Agency</Link></li>
                        <li><Link to="/Homepage2">Creative Agency</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Blogs">Blog</Link></li>
                        <li><Link to="/Blogdetails">Blog Details</Link></li>
                        <li><Link to="/Team">Team</Link></li>
                        <li><Link to="/Teamdetails">Team Details</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/Servicesdetails">Services Details</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                      <ul className="submenu" aria-labelledby="navbarDropdown">
                        <li><Link to="/Portfolio" href="#">Portfolio</Link></li>
                        <li><Link to="/Portfoliodetails" href="#">Portfolio Details</Link></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="header__right d-flex align-items-center">
                    <div className="d-none d-lg-block">
                      <a className="m-btn" href="contact.html">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        }
        <Outlet />
      </header>
    </>
  )
}

export default Header;