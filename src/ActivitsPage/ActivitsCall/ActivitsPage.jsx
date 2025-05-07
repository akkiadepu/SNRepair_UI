import React from 'react'
import ActivitsHeader from '../Activts/ActivitsHeader'
import ActivitsCarousel from '../Activts/ActivitsCarousel/ActivitsCarousel'
import Footer from '../../Homepage/Home/Footer/Footer'
import Header from '../../Homepage/Home/Header/Header'
import ActivitsCar from '../Activts/ActivitsCarousel/ActivitsCar'

const ActivitsPage = () => {
  return (
    <div>
      {/* ActivitsPage */}
      {/* <div>
        <Header />
      </div> */}
      <div>
        <ActivitsHeader />
      </div>
      <div>
        {/* <ActivitsCarousel/> */}
        <ActivitsCar />
      </div>
      <div>
        <Footer />
      </div>


    </div>

  )
}

export default ActivitsPage