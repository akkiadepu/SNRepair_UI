import React from 'react'
import ServicesSection from './ServicesSection'
import ServicesHeader from './ServicesHeader'
import ServicesEmg from './ServicesEmg'
import RequestForm from '../../../Homepage/Home/RequestForm/RequestForm';
import Testimonial from '../../../Homepage/Home/Testimonial/Testimonial';
import Footer from '../../../Homepage/Home/Footer/Footer';
import Header from '../../../Homepage/Home/Header/Header';

const PrintingServices = () => {
  return (
    <div>
      {/* PrintingServices */}
{/* <div><Header/></div> */}
      
      <div>
        <ServicesHeader/>
      </div>
      <div>
        <ServicesSection/>
      </div>
      <div>
        <ServicesEmg/>
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

export default PrintingServices