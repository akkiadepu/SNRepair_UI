import React from 'react'
import img from './carousel-bg-1.jpg'

const ContactHeader = () => {
  return (
    <div>
      {/* ContactHeader */}
         <div>
                {/* <!-- Page Header Start --> */}
                <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center',marginTop: '77px' }}>
                    <div className="container-fluid page-header-inner py-5">
                        <div className="container text-center">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
                            {/* <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                    </ol>
                </nav> */}
                          <p className="text-white fs-5 mb-0 animated fadeInUp">We believe in quality car services with a personal touch.</p>


                        </div>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}
            </div>

    </div>
  )
}

export default ContactHeader