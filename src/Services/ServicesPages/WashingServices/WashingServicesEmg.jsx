import React from 'react'

const WashingServicesEmg = () => {
    return (
        <div>
            {/* ServicesEmg */}

            <section
                className="text-center text-white d-flex align-items-center justify-content-center"
                style={{
                    padding: "60px 20px",
                    backgroundImage: `linear-gradient(rgba(33, 32, 32, 0.7), rgba(41, 40, 40, 0.7)), url('https://img.freepik.com/free-photo/man-try-fix-car-engine-problem-local-road_1150-10667.jpg?w=996&t=st=1729165368~exp=1729165968~hmac=379e34e8c4925a10b4aef1ce3480587e0d5b33e01ce9af54c31957ae5e86d16e')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "150px", // optional for vertical space
                }}
            >
                <div className="container">
                    <h1 className="display-5 fw-bold mb-3">24/7 Emergency Service</h1>
                    <p className="fs-5 mx-auto" style={{ maxWidth: "800px" }}>
                        We provide emergency services round the clock.  Call us anytime for immediate assistance and support.
                    </p>
                </div>
            </section>

        </div>
    )
}

export default WashingServicesEmg;