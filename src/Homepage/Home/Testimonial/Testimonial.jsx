import React from 'react'
import './Testimonial.css'

import img1 from './Images/testimonial-1.jpg'
import img2 from './Images/testimonial-2.jpg'
import img3 from './Images/testimonial-3.jpg'
import img4 from './Images/testimonial-4.jpg'

import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { useState ,useRef } from 'react';

const testimonials = [
  { name: 'Hemanth Chintala', profession: 'Google Reviewer', image: img1, text: 'I have brought my brand new Tata Punch for a scratch removal work. I am impressed with the owner and staff in explaining the work to be done and pros/cons. As promised, their work speaks' },
  { name: 'Mohan R V', profession: 'Google Reviewer', image: img2, text: 'They are known for passionate, genuinity, trust, best advice, customer friendly, they love their work. They know kind of looting the customer money. I am really happy with their service Thank you! Prasad & Krishna garu.'  },
  { name: 'Emily Rose', profession: 'Manager', image: img3, text: 'Clita erat ipsum et lorem et sit kj,nskbdjsd kjnsjk akhila akhila akhila akhila sdishdukj osdljlk soidjsofl skd. ' },
  { name: 'Sundeep Sunadi', profession: 'Google Reviewer', image: img4, text: 'Excellent service for cars.....highly professional.....Good services for car washing, painting & ceramic coating.' },
];

const Testimonial = () => {


  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef();

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };


  return (
    // <div>Testimonial

    <div>
    {/* <!-- Testimonial Start --> */}
    {/* <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="text-center">
                <h6 class="text-primary text-uppercase">// Testimonial //</h6>
                <h1 class="mb-5">Our Clients Say!</h1>
            </div>
            <div class="owl-carousel testimonial-carousel position-relative">
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src={img1} style={{width :"80px", height: "80px"}}/>
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src={img2} style={{width: "80px", height: "80px"}}/>
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src={img3} style={{width: "80px", height: "80px"}}/>
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <img class="bg-light rounded-circle p-2 mx-auto mb-3" src={img4} style={{width: "80px", height: "80px"}}/>
                    <h5 class="mb-0">Client Name</h5>
                    <p>Profession</p>
                    <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Testimonial End --> */}

    <div
     className="d-flex align-items-center"
 
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        paddingTop: '5.5rem', paddingBottom: '5.5rem' 
      }}
    >
      <div className="container text-center">
        <h6 className="text-danger text-uppercase">// Testimonial //</h6>
        <h1 className="mb-5 fw-bold text-primary">Our Clients Say!</h1>

        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-circle border border-3 border-light shadow mb-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <h5 className="mb-0 fw-semibold">{item.name}</h5>
                <small className="text-muted">{item.profession}</small>
                <div className={`p-3 mt-3 rounded w-100 ${activeIndex === index ? 'bg-danger text-white' : 'bg-light text-dark'}`}>
                  <p className="mb-0">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Square nav buttons */}
        <div className="d-flex justify-content-center mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => sliderRef.current.slickGoTo(i)}
              className={`btn rounded-2 mx-1 border ${i === activeIndex ? 'bg-danger' : 'bg-white'}`}
              style={{ width: '5px', height: '5px' , boxShadow: '0 0 4px rgba(14, 14, 14, 0.2)'}}
            />
          ))}
        </div>

        <div className="mt-4">
          <a href="https://www.google.com/maps/place/SN+AUTO+ENTERPRISES/@16.5081113,80.6699006,17z/data=!4m8!3m7!1s0x3a35fb9b8e442b9b:0xa9c8b28b5b69cb0e!8m2!3d16.5081113!4d80.6724755!9m1!1b1!16s%2Fg%2F11j01htl2d?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" className=" btn-danger px-4 py-2 fw-semibold" target='_blank' rel="noreferrer">
          See More Comments
          </a>
        </div>

      </div>
    </div>


    </div>

    // </div>
  )
}

export default Testimonial