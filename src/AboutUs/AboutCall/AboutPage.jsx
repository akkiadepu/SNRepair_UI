import React from 'react'
import AboutHeader from '../About/AboutHeader/AboutHeader'
import AboutSection from '../About/AboutSection/AboutSection'
import AboutFact from '../About/AboutFact/AboutFact'
import AboutTeam from '../About/AboutTeam/AboutTeam'
import Footer from '../../Homepage/Home/Footer/Footer'
import Header from '../../Homepage/Home/Header/Header'

const AboutPage = () => {
  return (
    <div>
      {/* AboutPage */}
      <div>
        <Header />
      </div>

      <div>
        <AboutHeader />
      </div>
      <div>
        <AboutSection />
      </div>

      <div>
        <AboutFact />
      </div>
      <div>
        <AboutTeam />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default AboutPage