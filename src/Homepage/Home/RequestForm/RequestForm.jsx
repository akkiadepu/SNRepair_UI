// import React, { useState } from 'react'
// import './RequestForm.css'
// import axios from 'axios';

// const RequestForm = () => {


//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         number: '',
//         vehicleModel: '',
//         address: '',
//         yourMessage: ''
//     });
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'number') {
//             if (value.length <= 10 && /^\d*$/.test(value)) {
//                 setFormData({
//                     ...formData,
//                     [name]: value
//                 });
//             }
//         } else {
//             setFormData({
//                 ...formData,
//                 [name]: value
//             });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const numberPattern = /^[0-9]{10}$/;

//         // Check if the phone number is exactly 10 digits
//         if (!numberPattern.test(formData.number)) {
//             setErrorMessage("Number must be exactly 10 digits.");
//             return; // Stop form submission
//         } else {
//             setErrorMessage(''); // Clear the error message if the number is valid
//         }

//         axios.post(`${process.env.REACT_APP_BACKEND_URL}/request`, formData)
//             .then(response => {
//                 console.log('Request saved successfully:', response.data);
//                 alert("Thank you for reponse");
//                 setFormData({
//                     name: '',
//                     email: '',
//                     number: '',
//                     vehicleModel: '',
//                     address: '',
//                     yourMessage: ''
//                 });
//             })
//             .catch(error => {
//                 console.error('There was an error saving the request:', error);
//             });
//     };


//     return (
//         <div>RequestForm

//             <div>
//                 {/* <!-- Booking Start --> */}
//                 <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
//                     <div className="container">
//                         <div className="row gx-5">
//                             <div className="col-lg-6 py-5">
//                                 <div className="py-5 text-start">
//                                     <h1 className="text-white mb-4">Request Info</h1>
//                                     <p className="text-white mb-0">If you require additional information about our services or have specific inquiries, our team is here to assist you. Please fill out the form below, and we will respond promptly with the details you need.</p>
//                                     <ul className='text-white mb-0 mt-4'>
//                                         <li className='mt-2'>Get personalized information tailored to your needs</li>
//                                         <li className='mt-2'>Consult with our expert team</li>
//                                         <li className='mt-2'>Get quick responses to your inquiries</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6">
//                                 <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
//                                     <h1 className="text-white mb-4">Book For A Service</h1>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="row g-3">
//                                             <div className="col-12 col-md-6">
//                                                 <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: "55px" }} name="name" value={formData.name} onChange={handleChange} required />
//                                             </div>
//                                             <div className="col-12 col-md-6">
//                                                 <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: "55px" }} name="email" value={formData.email} onChange={handleChange} required />
//                                             </div>
//                                             <div className="col-12 col-md-6">
//                                                 <input type="number" className="form-control border-0" placeholder="Your number" style={{ height: "55px" }} name="number" value={formData.number} onChange={handleChange} pattern="[0-9]{10}" required />
//                                             </div>
//                                             <div className="col-12 col-md-6">
//                                                 <input type="text" className="form-control border-0" placeholder="Your Vehicle Model" style={{ height: "55px" }} name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required />
//                                             </div>
//                                             <div className="col-12">
//                                                 {/* <select className="form-select border-0" style={{"height: 55px;"}}>
//                                         <option selected>Select A Service</option>
//                                         <option value="1">Service 1</option>
//                                         <option value="2">Service 2</option>
//                                         <option value="3">Service 3</option>
//                                     </select> */}
//                                                 {/* <input type="text" className="form-control border-0" placeholder="Your Address" style={{ height: "55px" }} required/> */}
//                                             </div>
//                                             <div className="col-12">

//                                                 <input type="text"
//                                                     className="form-control border-0 datetimepicker-input"
//                                                     placeholder="Address" style={{ height: "55px" }} name="address" value={formData.address} onChange={handleChange} required />

//                                             </div>
//                                             <div className="col-12">
//                                                 <textarea className="form-control border-0" placeholder="Your Message" name="yourMessage" rows="4" value={formData.yourMessage} onChange={handleChange} required></textarea>
//                                             </div>
//                                             <div className="col-12">
//                                                 <button className="btn btn-success w-100 py-3" type="submit">Book Now</button>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <!-- Booking End --> */}


//             </div>
//         </div>
//     )
// }

// export default RequestForm


//this is complete form
// services id service_o8x7rau  pblic key sg5xpOVjbNjbThDqD templeid template_w5z2p7g

import React, { useState ,useRef } from 'react';
import axios from 'axios';
import './RequestForm.css'
import emailjs from '@emailjs/browser';


function RequestForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        vehicleModel: '',
        address: '',
        yourMessage: ''
    });

    const formRef = useRef();
    const [formErrors, setFormErrors] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setFormErrors(prev => ({ ...prev, [name]: '' })); // Clear error when user types
    };

    const validate = () => {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const numberPattern = /^\d{10}$/;

        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) errors.email = 'Email is required';
        else if (!emailPattern.test(formData.email)) errors.email = 'Invalid email format';

        if (!formData.number.trim()) errors.number = 'Phone number is required';
        else if (!numberPattern.test(formData.number)) errors.number = 'Phone number must be 10 digits';

        if (!formData.vehicleModel.trim()) errors.vehicleModel = 'Vehicle model is required';
        if (!formData.address.trim()) errors.address = 'Address is required';
        if (!formData.yourMessage.trim()) errors.yourMessage = 'Message is required';

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length > 0) {
            setSubmitSuccess(false);
            return; // stop form submission
        }
        setLoading(true); 

        try {
            await Promise.all([
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/request`, formData),

            emailjs.sendForm(
                'service_o8x7rau',      // replace with your actual service ID
                'template_w5z2p7g',     // replace with your actual template ID
                formRef.current,
                {
                    publicKey: 'sg5xpOVjbNjbThDqD', // replace with your actual public key
                }
            )

        ]);

            alert("Thank you for your request!");
            setFormData({
                name: '',
                email: '',
                number: '',
                vehicleModel: '',
                address: '',
                yourMessage: ''
            });
            setFormErrors({});
            setSubmitSuccess(true);
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Something went wrong while submitting. Try again.");
        }
        finally {
            setLoading(false); // Always reset loading
        }
    };

    return (
        // <div className="contact-form">
        //     <form onSubmit={handleSubmit} noValidate>
        //         <label>Name *</label>
        //         <input type="text" name="name" value={formData.name} onChange={handleChange} />
        //         {formErrors.name && <p style={{ color: 'red' }}>{formErrors.name}</p>}

        //         <label>Email *</label>
        //         <input type="email" name="email" value={formData.email} onChange={handleChange} />
        //         {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}

        //         <label>Phone Number *</label>
        //         <input type="text" name="number" value={formData.number} maxLength={10} onChange={handleChange} />
        //         {formErrors.number && <p style={{ color: 'red' }}>{formErrors.number}</p>}

        //         <label>Vehicle Model *</label>
        //         <input type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} />
        //         {formErrors.vehicleModel && <p style={{ color: 'red' }}>{formErrors.vehicleModel}</p>}

        //         <label>Address *</label>
        //         <input type="text" name="address" value={formData.address} onChange={handleChange} />
        //         {formErrors.address && <p style={{ color: 'red' }}>{formErrors.address}</p>}

        //         <label>Message *</label>
        //         <textarea name="yourMessage" value={formData.yourMessage} onChange={handleChange} rows={4}></textarea>
        //         {formErrors.yourMessage && <p style={{ color: 'red' }}>{formErrors.yourMessage}</p>}

        //         <button type="submit">Send Request</button>
        //     </form>

        //     {submitSuccess && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
        // </div>


        <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 py-5">
                    <div className="py-5 text-start">
                        <h1 className="text-white mb-4">Request Info</h1>
                        <p className="text-white mb-0">
                            If you require additional information about our services or have specific inquiries,
                            our team is here to assist you. Please fill out the form below, and we will respond
                            promptly with the details you need.
                        </p>
                        <ul className="text-white mb-0 mt-4">
                            <li className="mt-2">Get personalized information tailored to your needs</li>
                            <li className="mt-2">Consult with our expert team</li>
                            <li className="mt-2">Get quick responses to your inquiries</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                {/* bg-primary */}
                    <div className=" h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s" style={{backgroundColor:'#1e3a8a'}}>
                        <h1 className="text-white mb-4">Book For A Service</h1>
                        <form ref={formRef}  onSubmit={handleSubmit} noValidate>
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: "55px" }} name="name" value={formData.name} onChange={handleChange} />
                                    {formErrors.name && <div className=" text-start mt-1" style={{color:	'#ffeb3b'}}>{formErrors.name}</div>}
                                </div>
                                <div className="col-12 col-md-6">
                                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: "55px" }} name="email" value={formData.email} onChange={handleChange} />
                                    {formErrors.email && <div className=" text-start mt-1" style={{color:	'#ffeb3b'}}>{formErrors.email}</div>}
                                </div>
                                <div className="col-12 col-md-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Number" style={{ height: "55px" }} name="number" value={formData.number} maxLength={10} onChange={handleChange} />
                                    {formErrors.number && <div className=" text-start mt-1" style={{color:	'#ffeb3b'}}>{formErrors.number}</div>}
                                </div>
                                <div className="col-12 col-md-6">
                                    <input type="text" className="form-control border-0" placeholder="Vehicle Model" style={{ height: "55px" }} name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} />
                                    {formErrors.vehicleModel && <div className="text-start mt-1" style={{color:	'#ffeb3b'}}>{formErrors.vehicleModel}</div>}
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control border-0" placeholder="Address" style={{ height: "55px" }} name="address" value={formData.address} onChange={handleChange} />
                                    {formErrors.address && <div className=" text-start mt-1" style={{color:	'#ffeb3b'}}>{formErrors.address}</div>}
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0" placeholder="Your Message" name="yourMessage" rows="4" value={formData.yourMessage} onChange={handleChange}></textarea>
                                    {formErrors.yourMessage && <div className="text-start mt-1" style={{color:	'#ffeb3b'}}>{formErrors.yourMessage}</div>}
                                </div>
                                {/* style={{color:	'#ffeb3b'}} */}
                                <div className="col-12">
                                    {/* <button className="btn btn-success w-100 py-3" type="submit">Book Now</button> */}
                                    <button className="btn btn-success w-100 py-3" type="submit">
                                        {loading ? "Sending...." : "Send Request"}
                                    </button>

                                </div>
                            </div>
                        </form>
                        {submitSuccess && <div className="text-white mt-3"> Thank you for Your Request </div>}
                        {/* Your request has been submitted successfully! */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default RequestForm;








