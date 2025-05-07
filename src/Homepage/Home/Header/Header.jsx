import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavLinkClick = () => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsNavCollapsed(true);
  };

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <div>
      {/* Header */}
        {/* <div>
            
    {/* <!-- Navbar Start --> 
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>CarServ</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Services</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu fade-up m-0">
                        <a href="booking.html" className="dropdown-item">Booking</a>
                        <a href="team.html" className="dropdown-item">Technicians</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    {/* <!-- Navbar End -->

        </div> */}



   

    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow fixed-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5" onClick={handleNavLinkClick}>
          <h2 className="m-0 text-primary">
            <i className="fa fa-car me-3"></i>CarServ
          </h2>
        </Link>

        <button
          type="button"
          className="navbar-toggler me-4"
          onClick={toggleNavbar}
          aria-controls="navbarCollapse"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link" onClick={handleNavLinkClick}>Home</Link>
            <Link to="/about" className="nav-item nav-link" onClick={handleNavLinkClick}>About</Link>
            <Link to="/activities" className="nav-item nav-link" onClick={handleNavLinkClick}>Activities</Link>

            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/Services/ServicesPages/RepaireServices" className="dropdown-item" onClick={handleNavLinkClick}>Body Repair</Link>
                <Link to="/Services/ServicesPages/PrintingServices" className="dropdown-item" onClick={handleNavLinkClick}>Painting</Link>
                <Link to="/Services/ServicesPages/WashingServices" className="dropdown-item" onClick={handleNavLinkClick}>Washing</Link>
              </div>
            </div>

            <Link to="/contact" className="nav-item nav-link" onClick={handleNavLinkClick}>Contact Us</Link>
          </div>

          <a href="https://wa.me/+918501015055" target="_blank" rel="noopener noreferrer" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
            Send A Message<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
      {/* Navbar End */}
    </div>

  


    </div>
  )
}

export default Header