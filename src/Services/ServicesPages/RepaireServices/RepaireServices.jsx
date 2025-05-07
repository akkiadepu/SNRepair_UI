import React from 'react'
import RepaireServicesHeader from './RepaireServicesHeader'
import RepaireServicesSection from './RepaireServicesSection'
import RepaireServicesEmg from './RepaireServicesEmg'
import RequestForm from '../../../Homepage/Home/RequestForm/RequestForm';
import Testimonial from '../../../Homepage/Home/Testimonial/Testimonial';
import Footer from '../../../Homepage/Home/Footer/Footer';
import Header from '../../../Homepage/Home/Header/Header';

const RepaireServices = () => {
  return (
    <div>
      {/* RepaireServices */}

      {/* <div>
        <Header/>
      </div> */}
      <div>
        <RepaireServicesHeader/>
      </div>
      <div>
        <RepaireServicesSection/>
      </div>
      <div>
          <RepaireServicesEmg/>
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

export default RepaireServices