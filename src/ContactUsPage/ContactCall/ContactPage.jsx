import React from 'react'
import ContactHeader from '../Contact/ContactHeader/ContactHeader'
import ContactSection from '../Contact/ContactSection/ContactSection'
import Footer from '../../Homepage/Home/Footer/Footer'
import Header from '../../Homepage/Home/Header/Header'

const ContactPage = () => {
  return (
    <div>
      {/* ContactPage */}
{/* 
      <div>
        <Header/>
      </div> */}
      <div>
        <ContactHeader/>
      </div>
      <div>
        <ContactSection/>
      </div>
      <div>
        <Footer/>
      </div>


    </div>
  )
}

export default ContactPage