import React from 'react'
import image from './Images/about.jpg'

const AboutSection = () => {
  return (
    <div>
        {/* AboutSection */}

{/* <!-- About Start --> */}
    {/* <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 pt-4" style={{minHeight: "450px"}}>
                    <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                        <img className="position-absolute img-fluid w-100 h-100" src={image} style={{objectFit: "cover"}} alt=""/>
                        <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{background: "rgba(0, 0, 0, .08)"}}>
                            <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Years</span></h1>
                            <h4 className="text-white">Experience</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h6 className="text-primary text-uppercase">// About Us //</h6>
                    <h1 className="mb-4"><span className="text-primary">CarServ</span> Is The Best Place For Your Auto Care</h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row g-4 mb-3 pb-3">
                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                                    <span className="fw-bold text-secondary">01</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Professional & Expert</h6>
                                    <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                                    <span className="fw-bold text-secondary">02</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Quality Servicing Center</h6>
                                    <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                                    <span className="fw-bold text-secondary">03</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Awards Winning Workers</h6>
                                    <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" className="btn btn-primary py-3 px-5">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- About End --> */}

    <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5 align-items-center">
            {/* Image Section */}
            <div className="col-lg-6" style={{ position: "relative" }}>
                <div className="position-relative">
                    <img
                        src={image}
                        alt=""
                        className="img-fluid w-100 shadow"
                        style={{
                            objectFit: "cover",
                            height: "100%",
                            // display: "block"
                        }}
                    />

                    {/* Experience Box */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-30px",
                            right: "-30px",
                            backgroundColor: "rgba(0, 0, 0, .08)",
                            padding: "35px 50px",
                            borderRadius: "4px",
                            // boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
                            color: "#fff",
                            textAlign: "center",
                            zIndex: 2,
                         
                            
                        }}
                    >
                        <h1 className="display-4 mb-0 fw-bold " style={{fontSize:"3.5rem"}}>
                            15 <span className="fs-5 fw-bold fs-4">Years</span>
                        </h1>
                        <h5 className="mb-0 fw-bold fs-3">Experience</h5>
                    </div>
                </div>
            </div>

            {/* Text Section */}
            <div className="col-lg-6 text-start">
                <h6 className="text-primary text-uppercase">// About Us //</h6>
                <h1 className="mb-4">
                    <span className="text-primary">CarServ</span> Is The Best Place For Your Auto Care
                </h1>
                <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos...
                </p>

                <div className="row g-4 mb-3 pb-3">
                    {[
                        { num: "01", title: "Professional & Expert" },
                        { num: "02", title: "Quality Servicing Center" },
                        { num: "03", title: "Awards Winning Workers" }
                    ].map((item, index) => (
                        <div className="col-12" key={index}>
                            <div className="d-flex text-start">
                                <div
                                    className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                                    style={{ width: "45px", height: "45px" }}
                                >
                                    <span className="fw-bold text-secondary">{item.num}</span>
                                </div>
                                <div className="ps-3">
                                    <h6 className="mb-1">{item.title}</h6>
                                    <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-start">
                    <a href="#" className="btn btn-primary py-3 px-5">
                        Read More<i className="fa fa-arrow-right ms-3"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default AboutSection