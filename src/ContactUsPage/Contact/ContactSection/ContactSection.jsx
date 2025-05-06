import React, { useState ,useRef } from 'react';
import axios from 'axios';

import emailjs from '@emailjs/browser';

const ContactSection = () => {
    
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

     const handleNumberChange = (e) => {
        if (e.target.value.length <= 10) {
            handleChange(e);
        }
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
        <div>
            {/* ContactSection */}

            <div>
                {/* <!-- Contact Start --> */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="text-primary text-uppercase">// Contact Us //</h6>
                            <h1 className="mb-5">Contact For Any Query</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="row gy-4">
                                    <div className="col-md-4">
                                        <div className="bg-light d-flex flex-column justify-content-center p-4">
                                            <h5 className="text-uppercase">// Booking //</h5>
                                            <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="bg-light d-flex flex-column justify-content-center p-4">
                                            <h5 className="text-uppercase">// General //</h5>
                                            <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="bg-light d-flex flex-column justify-content-center p-4">
                                            <h5 className="text-uppercase">// Technical //</h5>
                                            <p className="m-0"><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                             
                                 <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15230.844414022554!2d80.6724834!3d16.5081136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb9b8e442b9b%3A0xa9c8b28b5b69cb0e!2sSN%20AUTO%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1629141300038!5m2!1sen!2sin" 
                                 style={{minHeight: "350px", border:"0"}} allowFullScreen="" loading="lazy" frameBorder="0" aria-hidden="false" tabIndex="0"></iframe>

                            </div>
                            <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.2s">
                                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>


                                    <form ref={formRef}  onSubmit={handleSubmit} noValidate>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="name" placeholder="Your Name"  name="name" value={formData.name} onChange={handleChange}/>
                                                    <label for="name">Your Name</label>
                                                    {formErrors.name && <div className=" text-start mt-1" style={{color:'#ffeb3b'}}>{formErrors.name}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} />
                                                    <label for="email">Your Email</label>
                                                    {formErrors.email && <div className="text-danger text-start mt-1">{formErrors.email}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="number" className="form-control" id="number" placeholder="Your Number" name="number" value={formData.number} maxLength={10} onChange={handleNumberChange}  />
                                                    <label>Your number</label>
                                                    <label for="number"></label>
                                                    {formErrors.number && <div className="text-danger text-start mt-1" >{formErrors.number}</div>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="vehicleModel" placeholder="Your vehicleModel" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} />
                                                    <label for="vehicleModel">Your vechicle model</label>
                                                    {formErrors.vehicleModel && <div className="text-danger text-start mt-1" >{formErrors.vehicleModel}</div>}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="address" placeholder="your address" name="address" value={formData.address} onChange={handleChange}  />
                                                    <label for="address">Address</label>
                                                    {formErrors.address && <div className="text-danger text-start mt-1" >{formErrors.address}</div>}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control" placeholder="Your Message" id="yourMessage" style={{ height: "100px" }} name="yourMessage" rows="4" value={formData.yourMessage} onChange={handleChange}></textarea>
                                                    <label for="message">Message</label>
                                                    {formErrors.yourMessage && <div className="text-danger text-start mt-1">{formErrors.yourMessage}</div>}
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                {/* <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button> */}
                                                <button className="btn btn-primary w-100 py-3" type="submit">
                                                     {loading ? "Sending...." : "Send Message"}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    {submitSuccess && <div className="text-success mt-3">Thank you for Your Request </div>}
                                    {/* Successfully Sent! */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Contact End --> */}

            </div>
        </div>
    )
}

export default ContactSection