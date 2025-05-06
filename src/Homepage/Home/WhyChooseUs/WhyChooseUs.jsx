import React from 'react'
import bgImage from './carousel-bg-1.jpg'
import './WhyChoose.css'

const WhyChooseUs = () => {
    return (
        <div>
            {/* WhyChooseUs */}

            <div>
          
            
                <div className="container-fluid fact bg-dark my-5 py-5 d-flex align-items-center" style={{ minHeight: '350px' }}>
                
                    <div className="container">
                    <h1 className='text-center text-white mb-5'>Why Choose Us</h1>
                        <div className="row g-4 justify-content-center">
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                                {/* <i className="fa fa-check fa-2x text-white mb-3"></i> */}
                                <i className="fas fa-tools fa-2x text-white mb-3"></i>
                                <h3 className="text-white mb-2" data-toggle="counter-up">Expert Engineer</h3>
                                <p className="text-white mb-0">Our team of certified engineers brings years of expertise and technical knowledge to ensure your vehicle receives top-quality</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                                {/* <i className="fa fa-users-cog fa-2x text-white mb-3"></i> */}
                                <i className="fas fa-award fa-2x text-white mb-3"></i>
                                <h3 className="text-white mb-2" data-toggle="counter-up">Expensive Skills</h3>
                                <p className="text-white mb-0">We specialize in a wide range of repair and maintenance services, providing solutions tailored to your car's specific needs.</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                                {/* <i className="fa fa-users fa-2x text-white mb-3"></i> */}
                                <i className="fas fa-shield-alt fa-2x text-white mb-3"></i>
                                <h3 className="text-white mb-2" data-toggle="counter-up">Guarantee Services</h3>
                                <p className="text-white mb-0">We stand by the quality of our work with service guarantees, giving you peace of mind with every repair or upgrade.</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                                {/* <i className="fa fa-car fa-2x text-white mb-3"></i> */}
                                <i className="fas fa-thumbs-up fa-2x text-white mb-3"></i>
                                <h3 className="text-white mb-2" data-toggle="counter-up">Trusted Work</h3>
                                <p className="text-white mb-0">Our reputation for reliable and trustworthy service has made us the preferred choice for countless customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Fact End --> */}



            </div>

        </div>
    )
}

export default WhyChooseUs