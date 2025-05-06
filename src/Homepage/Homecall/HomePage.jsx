import React from 'react'
import Header from '../Home/Header/Header'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper
import Carousel from '../Home/Carousel/Carousel';
import OurServices from '../Home/OurServices/OurServices';
import WhyChooseUs from '../Home/WhyChooseUs/WhyChooseUs';
import Testimonial from '../Home/Testimonial/Testimonial';
import RequestForm from '../Home/RequestForm/RequestForm';
import Footer from '../Home/Footer/Footer';
import HomeActivits from '../Home/HomeActivits/HomeActivits';


const HomePage = () => {
  return (
    <div>
      {/* HomePage */}

    <div>
        <Header/>
    </div>
    <div>
        <Carousel/>
    </div>
    <div>
      <OurServices/>
    </div>
    <div>
      {/* Home activistes */}
      <HomeActivits/>
    </div>
    <div>
      <WhyChooseUs/>
    </div>
    <div>
      <Testimonial/>
    </div>

    <div>
      <RequestForm/>
    </div>

    <div>
      <Footer/>
    </div>
    </div>
  )
}

export default HomePage