import React from 'react'
import './AboutFact.css'

const AboutFact = () => {
  return (
    <div>
        {/* AboutFact */}

        <div>
        {/* <!-- Fact Start --> */}
    <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <i className="fa fa-check fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">15</h2>
                    <p className="text-white mb-0">Years Experience</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                    <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">100</h2>
                    <p className="text-white mb-0">Expert Technicians</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-users fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">200 +</h2>
                    <p className="text-white mb-0">Satisfied Clients</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    <i className="fa fa-car fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">500+</h2>
                    <p className="text-white mb-0">Compleate Projects</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Fact End --> */}
        </div>

    </div>
  )
}

export default AboutFact