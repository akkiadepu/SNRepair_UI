import React from 'react'
import WashingServicesHeader from './WashingServicesHeader'
import WashingServicesSection from './WashingServicesSection'
import WashingServicesEmg from './WashingServicesEmg'
import Testimonial from '../../../Homepage/Home/Testimonial/Testimonial'
import RequestForm from '../../../Homepage/Home/RequestForm/RequestForm'
import Footer from '../../../Homepage/Home/Footer/Footer'
import Header from '../../../Homepage/Home/Header/Header'

const WashingServices = () => {
  return (
    <div>
      {/* WashingServices */}
      {/* <div>
        <Header/>
      </div> */}
      <div>
        <WashingServicesHeader/>
      </div>
      <div>
        <WashingServicesSection/>
      </div>
      <div>
        <WashingServicesEmg/>
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

export default WashingServices