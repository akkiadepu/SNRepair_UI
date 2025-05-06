// import React, { useEffect, useRef, useState } from 'react'

import { version } from "react"

// import './ActivitsCarousel.css'
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ActivitsCarousel.css';
// import axios from 'axios';

// const ActivitsCar = () => {

//     const [activities, setActivities] = useState([]);
//     const [selectedActivity, setSelectedActivity] = useState(null);
//     const [hoveredCardId, setHoveredCardId] = useState(null);
//     const scrollRef = useRef(null);
//     const delayTimeout = useRef(null);

//     const CARD_WIDTH_REM = 22;
//     const CARD_GAP_PX = 16;
//     const SCROLL_AMOUNT = CARD_WIDTH_REM * 16 + CARD_GAP_PX;

//     useEffect(() => {
//       axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/project-activities`)
//         .then(response => {
//           setActivities(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching project activities:', error);
//         });
//     }, []);

//     const openPopup = (activity) => {
//       setSelectedActivity(activity);
//     };

//     const closePopup = () => {
//       setSelectedActivity(null);
//     };

//     useEffect(() => {
//       const observerOptions = {
//         root: scrollRef.current,
//         threshold: 0.6,
//       };

//       const observer = new IntersectionObserver((entries) => {
//         let maxRatio = 0;
//         let mostVisibleId = null;

//         entries.forEach((entry) => {
//           if (entry.intersectionRatio > maxRatio) {
//             maxRatio = entry.intersectionRatio;
//             mostVisibleId = entry.target.dataset.id;
//           }
//         });

//         if (mostVisibleId) {
//           clearTimeout(delayTimeout.current);
//           delayTimeout.current = setTimeout(() => {
//             setHoveredCardId(mostVisibleId);
//           }, 1000);
//         }
//       }, observerOptions);

//       const cards = scrollRef.current?.querySelectorAll('.activity-card');
//       cards?.forEach((card) => observer.observe(card));

//       return () => {
//         cards?.forEach((card) => observer.unobserve(card));
//         clearTimeout(delayTimeout.current);
//       };
//     }, [activities]);

//     return (
//       <div className="container-fluid py-3 position-relative">
//         {/* Left Button */}
//         <button
//           className="btn position-absolute top-50 start-0 translate-middle-y"
//           style={{
//             zIndex: 5,
//             fontSize: '2rem',
//             color: 'black',
//             border: 'none',
//             borderRadius: '50%',
//             padding: '0.5rem 0.75rem',
//           }}
//           onClick={() => scrollRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })}
//         >
//           <i className="bi bi-chevron-left"></i>
//         </button>

//         {/* Right Button */}
//         <button
//           className="btn position-absolute top-50 end-0 translate-middle-y"
//           style={{
//             zIndex: 5,
//             fontSize: '2rem',
//             color: 'black',
//             border: 'none',
//             borderRadius: '50%',
//             padding: '0.5rem 0.75rem',
//           }}
//           onClick={() => scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })}
//         >
//           <i className="bi bi-chevron-right"></i>
//         </button>

//         {/* Scrollable Cards */}
//         <div
//           className="d-flex overflow-auto gap-3"
//           style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
//           ref={scrollRef}
//         >
//           {activities.map((activity) => (
//             <div
//               key={activity.id}
//               data-id={activity.id}
//               className={`card activity-card text-white border-0 shadow-sm flex-shrink-0 position-relative ${hoveredCardId === String(activity.id) ? 'hovered' : ''}`}
//               style={{
//                 width: '22rem',
//                 height: '200px',
//                 borderRadius: '1rem',
//                 minWidth: '22rem',
//                 backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${activity.afterImageName})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 cursor: 'pointer',
//               }}
//               onClick={() => openPopup(activity)}
//             >
//               <div className="overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center p-3">
//                 <button
//                   className="btn btn-primary"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     openPopup(activity);
//                   }}
//                 >
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Popup Modal */}
//         {selectedActivity && (
//           <div
//             className="modal fade show d-block"
//             tabIndex="-1"
//             role="dialog"
//             style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
//           >
//             <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
//               <div
//                 className="modal-content p-0"
//                 style={{
//                   borderRadius: '1rem',
//                   background: 'rgba(0, 0, 0, 0.9)',
//                   backdropFilter: 'blur(8px)',
//                   color: '#fff',
//                   border: '1px solid rgba(255, 255, 255, 0.1)',
//                 }}
//               >
//                 <div className="modal-header pt-3">
//                   <h3 className="modal-title">{selectedActivity.projectTitle}</h3>
//                   <button type="button" className="btn-close btn-close-white" onClick={closePopup}></button>
//                 </div>
//                 <div className="modal-body p-0">
//                   <div className="row g-0">
//                     <div className="col-md-6 mb-3 mt-3 d-flex flex-column align-items-center">
//                       <AsyncImage
//                         src={selectedActivity.beforeImageName}
//                         alt="Before"
//                         className="img-fluid w-75 rounded"
//                         style={{ maxHeight: '400px', objectFit: 'cover' }}
//                       />
//                       <p className="text-center">Before</p>
//                     </div>
//                     <div className="col-md-6 mb-3 mt-3 d-flex flex-column align-items-center">
//                       <AsyncImage
//                         src={selectedActivity.afterImageName}
//                         alt="After"
//                         className="img-fluid w-75 rounded"
//                         style={{ maxHeight: '400px', objectFit: 'cover' }}
//                       />
//                       <p className="text-center">After</p>
//                     </div>
//                   </div>
//                   <div className="p-3">
//                     <p className="mb-0 px-3">{selectedActivity.description}</p>
//                   </div>
//                 </div>
//                 <div className="modal-footer px-3">
//                   <button className="btn btn-secondary" onClick={closePopup}>Close</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Inline Styles */}
//         <style>{`
//           .activity-card {
//             overflow: hidden;
//             position: relative;
//             transition: transform 0.3s ease;
//             background-color: #333;
//           }
//           .activity-card .overlay {
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: rgba(0,0,0,0.4);
//             opacity: 0;
//             transition: opacity 0.3s;
//             border-radius: 1rem;
//           }
//           .activity-card.hovered {
//             transform: scale(1.05);
//             z-index: 3;
//           }
//           .activity-card.hovered .overlay {
//             opacity: 1;
//           }
//         `}</style>
//       </div>
//     );
//   };

//   // ✅ AsyncImage component that fetches image by file name
//   function AsyncImage({ src, alt, className, style }) {
//     const [imageSrc, setImageSrc] = useState(null);

//     useEffect(() => {
//       const loadImage = async () => {
//         try {
//           const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${src}`, {
//             responseType: 'blob',
//           });
//           const imageURL = URL.createObjectURL(response.data);
//           setImageSrc(imageURL);
//         } catch (error) {
//           console.error('Error loading image:', error);
//         }
//       };

//       if (src) loadImage();
//     }, [src]);

//     return imageSrc ? (
//       <img src={imageSrc} alt={alt} className={className} style={style} />
//     ) : (
//       <div className="text-white">Loading...</div>
//     );

// }

// export default ActivitsCar




// const ActivitsCar = () => {
//   const [activities, setActivities] = useState([]);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [hoveredCardId, setHoveredCardId] = useState(null);
//   const scrollRefs = useRef([]);
//   const delayTimeout = useRef(null);
//   const CARD_WIDTH_REM = 22;
//   const CARD_GAP_PX = 16;
//   const SCROLL_AMOUNT = CARD_WIDTH_REM * 16 + CARD_GAP_PX;

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/project-activities`)
//       .then(response => {
//         const sortedActivities = [...response.data].reverse(); // ✅ Show latest first
//         setActivities(sortedActivities);
//       })
//       .catch(error => {
//         console.error('Error fetching project activities:', error);
//       });
//   }, []);

//   const openPopup = (activity) => setSelectedActivity(activity);
//   const closePopup = () => setSelectedActivity(null);

//   const chunkArray = (array, size) => {
//     const result = [];
//     for (let i = 0; i < array.length; i += size) {
//       result.push(array.slice(i, i + size));
//     }
//     return result;
//   };

//   const groupedActivities = chunkArray(activities, 6);

//   useEffect(() => {
//     scrollRefs.current.forEach((ref, index) => {
//       if (!ref) return;

//       const observerOptions = {
//         root: ref,
//         threshold: 0.6,
//       };

//       const observer = new IntersectionObserver((entries) => {
//         let maxRatio = 0;
//         let mostVisibleId = null;

//         entries.forEach((entry) => {
//           if (entry.intersectionRatio > maxRatio) {
//             maxRatio = entry.intersectionRatio;
//             mostVisibleId = entry.target.dataset.id;
//           }
//         });

//         if (mostVisibleId) {
//           clearTimeout(delayTimeout.current);
//           delayTimeout.current = setTimeout(() => {
//             // optional highlight logic here
//             setHoveredCardId(mostVisibleId);
//           }, 500);
//         }
//       }, observerOptions);

//       const cards = ref.querySelectorAll('.activity-card');
//       cards.forEach((card) => observer.observe(card));

//       return () => {
//         cards.forEach((card) => observer.unobserve(card));
//         clearTimeout(delayTimeout.current);
//       };
//     });
//   }, [activities]);

//   return (
//     <div className="container-fluid py-3">
//       {groupedActivities.map((group, groupIndex) => (
//         <div className="mb-5 position-relative" key={groupIndex}>
//           {/* Left Scroll Button */}
//           <button
//             className="btn position-absolute top-50 start-0 translate-middle-y"
//             style={{ zIndex: 5, fontSize: '2rem', color: 'black', border: 'none', borderRadius: '50%', padding: '0.5rem 0.75rem' }}
//             onClick={() => scrollRefs.current[groupIndex].scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })}
//           >
//             <i className="bi bi-chevron-left"></i>
//           </button>

//           {/* Right Scroll Button */}
//           <button
//             className="btn position-absolute top-50 end-0 translate-middle-y"
//             style={{ zIndex: 5, fontSize: '2rem', color: 'black', border: 'none', borderRadius: '50%', padding: '0.5rem 0.75rem' }}
//             onClick={() => scrollRefs.current[groupIndex].scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })}
//           >
//             <i className="bi bi-chevron-right"></i>
//           </button>

//           {/* Scrollable Card Row */}
//           <div
//             className="d-flex overflow-auto gap-3"
//             ref={(el) => (scrollRefs.current[groupIndex] = el)}
//             style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
//           >
//             {group.map((activity) => (
//               <div
//                 key={activity.id}
//                 data-id={activity.id}
//                 className={`card activity-card text-white border-0 shadow-sm flex-shrink-0 position-relative`}
//                 style={{
//                   width: '22rem',
//                   height: '200px',
//                   borderRadius: '1rem',
//                   minWidth: '22rem',
//                   backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${activity.afterImageName})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   cursor: 'pointer',
//                 }}
//                 onClick={() => openPopup(activity)}
//               >
//                 <div className="overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center p-3">
//                   <button
//                     className="btn btn-primary"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       openPopup(activity);
//                     }}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}

//       {/* Modal */}
//       {selectedActivity && (
//         <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
//           <div className="modal-dialog modal-xl modal-dialog-centered">
//             <div className="modal-content p-0" style={{ borderRadius: '1rem', background: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(8px)', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
//               <div className="modal-header pt-3">
//                 <h3 className="modal-title">{selectedActivity.projectTitle}</h3>
//                 <button type="button" className="btn-close btn-close-white" onClick={closePopup}></button>
//               </div>
//               <div className="modal-body p-0">
//                 <div className="row g-0">
//                   <div className="col-md-6 mb-3 mt-3 d-flex flex-column align-items-center">
//                     <AsyncImage
//                       src={selectedActivity.beforeImageName}
//                       alt="Before"
//                       className="img-fluid w-75 rounded"
//                       style={{ maxHeight: '400px', objectFit: 'cover' }}
//                     />
//                     <p className="text-center">Before</p>
//                   </div>
//                   <div className="col-md-6 mb-3 mt-3 d-flex flex-column align-items-center">
//                     <AsyncImage
//                       src={selectedActivity.afterImageName}
//                       alt="After"
//                       className="img-fluid w-75 rounded"
//                       style={{ maxHeight: '400px', objectFit: 'cover' }}
//                     />
//                     <p className="text-center">After</p>
//                   </div>
//                 </div>
//                 <div className="p-3">
//                   <p className="mb-0 px-3">{selectedActivity.description}</p>
//                 </div>
//               </div>
//               <div className="modal-footer px-3">
//                 <button className="btn btn-secondary" onClick={closePopup}>Close</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Inline Styles */}
//       <style>{`
//         .activity-card {
//           overflow: hidden;
//           position: relative;
//           transition: transform 0.3s ease;
//           background-color: #333;
//         }
//         .activity-card .overlay {
//           background: rgba(0,0,0,0.4);
//           opacity: 0;
//           transition: opacity 0.3s;
//           border-radius: 1rem;
//         }
//         .activity-card:hover {
//           transform: scale(1.05);
//           z-index: 3;
//         }
//         .activity-card:hover .overlay {
//           opacity: 1;
//         }
//       `}</style>
//     </div>
//   );
// };

// function AsyncImage({ src, alt, className, style }) {
//   const [imageSrc, setImageSrc] = useState(null);

//   useEffect(() => {
//     const loadImage = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${src}`, {
//           responseType: 'blob',
//         });
//         const imageURL = URL.createObjectURL(response.data);
//         setImageSrc(imageURL);
//       } catch (error) {
//         console.error('Error loading image:', error);
//       }
//     };

//     if (src) loadImage();
//   }, [src]);

//   return imageSrc ? (
//     <img src={imageSrc} alt={alt} className={className} style={style} />
//   ) : (
//     <div className="text-white">Loading...</div>
//   );
// }

// export default ActivitsCar;



// this is the working version

// // import React, { useEffect, useRef, useState } from 'react';
// // import axios from 'axios';
// // import './ActivitsCarousel.css';

// // const ActivitsCar = () => {
// //   const [activities, setActivities] = useState([]);
// //   const [selectedActivity, setSelectedActivity] = useState(null);
// //   const [hoveredCardId, setHoveredCardId] = useState(null);
// //   const scrollRefs = useRef([]);
// //   const observersRef = useRef([]);
// //   const delayTimeout = useRef(null);

// //   const CARD_WIDTH_REM = 22;
// //   const CARD_GAP_PX = 16;
// //   const SCROLL_AMOUNT = CARD_WIDTH_REM * 16 + CARD_GAP_PX;

// //   useEffect(() => {
// //     axios
// //       .get(`${process.env.REACT_APP_BACKEND_URL}/image/project-activities`)
// //       .then((response) => {
// //         const sortedActivities = [...response.data].reverse();
// //         setActivities(sortedActivities);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching project activities:', error);
// //       });
// //   }, []);

// //   const openPopup = (activity) => setSelectedActivity(activity);
// //   const closePopup = () => setSelectedActivity(null);

// //   const chunkArray = (array, size) => {
// //     const result = [];
// //     for (let i = 0; i < array.length; i += size) {
// //       result.push(array.slice(i + 0, i + size));
// //     }
// //     return result;
// //   };

// //   const groupedActivities = chunkArray(activities, 6);

// //   useEffect(() => {
// //     observersRef.current.forEach((observer) => observer.disconnect());
// //     observersRef.current = [];

// //     scrollRefs.current.forEach((ref, index) => {
// //       if (!ref) return;

// //       const observer = new IntersectionObserver(
// //         (entries) => {
// //           let maxRatio = 0;
// //           let mostVisibleId = null;

// //           entries.forEach((entry) => {
// //             if (entry.intersectionRatio > maxRatio) {
// //               maxRatio = entry.intersectionRatio;
// //               mostVisibleId = entry.target.dataset.id;
// //             }
// //           });

// //           if (mostVisibleId && window.innerWidth < 992) {
// //             clearTimeout(delayTimeout.current);
// //             delayTimeout.current = setTimeout(() => {
// //               setHoveredCardId(mostVisibleId);
// //             }, 200);
// //           }
// //         },
// //         {
// //           root: ref,
// //           threshold: 0.6,
// //         }
// //       );

// //       const cards = ref.querySelectorAll('.activity-card');
// //       cards.forEach((card) => observer.observe(card));
// //       observersRef.current.push(observer);
// //     });

// //     return () => {
// //       observersRef.current.forEach((observer) => observer.disconnect());
// //       clearTimeout(delayTimeout.current);
// //     };
// //   }, [activities]);

// //   return (
// //     <div className="container-fluid py-3">
// //       {groupedActivities.map((group, groupIndex) => (
// //         <div className="mb-5 position-relative" key={groupIndex}>
// //           <button
// //             className="btn position-absolute top-50 start-0 translate-middle-y"
// //             style={{
// //               zIndex: 1000,
// //               fontSize: '2rem',
// //               color: 'black',
// //               border: 'none',
// //               borderRadius: '50%',
// //               padding: '0.5rem 0.75rem',
// //             }}
// //             onClick={() =>
// //               scrollRefs.current[groupIndex].scrollBy({
// //                 left: -SCROLL_AMOUNT,
// //                 behavior: 'smooth',
// //               })
// //             }
// //           >
// //             <i className="bi bi-chevron-left"></i>
// //           </button>

// //           <button
// //             className="btn position-absolute top-50 end-0 translate-middle-y"
// //             style={{
// //               zIndex: 1000,
// //               fontSize: '2rem',
// //               color: 'black',
// //               border: 'none',
// //               borderRadius: '50%',
// //               padding: '0.5rem 0.75rem',
// //             }}
// //             onClick={() =>
// //               scrollRefs.current[groupIndex].scrollBy({
// //                 left: SCROLL_AMOUNT,
// //                 behavior: 'smooth',
// //               })
// //             }
// //           >
// //             <i className="bi bi-chevron-right"></i>
// //           </button>

// //           <div
// //             className="d-flex overflow-auto gap-3 activities-carousel"
// //             ref={(el) => (scrollRefs.current[groupIndex] = el)}
// //           >
// //             {group.map((activity) => (
// //               <div
// //                 key={activity.id}
// //                 data-id={activity.id}
// //                 className={`card activity-card text-white border-0 shadow-sm flex-shrink-0 position-relative ${
// //                   hoveredCardId === String(activity.id) ? 'hovered' : ''
// //                 }`}
// //                 style={{
// //                   width: '22rem',
// //                   height: '200px',
// //                   borderRadius: '1rem',
// //                   minWidth: '22rem',
// //                   backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${activity.afterImageName})`,
// //                   backgroundSize: 'cover',
// //                   backgroundPosition: 'center',
// //                   cursor: 'pointer',
// //                 }}
// //                 onClick={() => openPopup(activity)}
// //               >
// //                 <div className="overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center p-3">
// //                   <button
// //                     className="btn btn-primary"
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       openPopup(activity);
// //                     }}
// //                   >
// //                     View Details
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       ))}

// //       {selectedActivity && (
// //         <div
// //           className="modal fade show d-block"
// //           tabIndex="-1"
// //           style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
// //         >
// //           <div className="modal-dialog modal-xl modal-dialog-centered">
// //             <div
// //               className="modal-content p-0"
// //               style={{
// //                 borderRadius: '1rem',
// //                 background: 'rgba(0, 0, 0, 0.9)',
// //                 backdropFilter: 'blur(8px)',
// //                 color: '#fff',
// //                 border: '1px solid rgba(255, 255, 255, 0.1)',
// //               }}
// //             >
// //               <div className="modal-header pt-3">
// //                 <h3 className="modal-title">{selectedActivity.projectTitle}</h3>
// //                 <button
// //                   type="button"
// //                   className="btn-close btn-close-white"
// //                   onClick={closePopup}
// //                 ></button>
// //               </div>
// //               <div className="modal-body p-0">
// //                 <div className="row g-0">
// //                   <div className="col-md-6 mb-3 mt-3 d-flex flex-column align-items-center">
// //                     <AsyncImage
// //                       src={selectedActivity.beforeImageName}
// //                       alt="Before"
// //                       className="img-fluid w-75 rounded"
// //                       style={{ maxHeight: '400px', objectFit: 'cover' }}
// //                     />
// //                     <p className="text-center">Before</p>
// //                   </div>
// //                   <div className="col-md-6 mb-3 mt-3 d-flex flex-column align-items-center">
// //                     <AsyncImage
// //                       src={selectedActivity.afterImageName}
// //                       alt="After"
// //                       className="img-fluid w-75 rounded"
// //                       style={{ maxHeight: '400px', objectFit: 'cover' }}
// //                     />
// //                     <p className="text-center">After</p>
// //                   </div>
// //                 </div>
// //                 <div className="p-3">
// //                   <p className="mb-0 px-3">{selectedActivity.description}</p>
// //                 </div>
// //               </div>
// //               <div className="modal-footer px-3">
// //                 <button className="btn btn-secondary" onClick={closePopup}>
// //                   Close
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// function AsyncImage({ src, alt, className, style }) {
//   const [imageSrc, setImageSrc] = useState(null);

//   useEffect(() => {
//     const loadImage = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${src}`,
//           { responseType: 'blob' }
//         );
//         const imageURL = URL.createObjectURL(response.data);
//         setImageSrc(imageURL);
//       } catch (error) {
//         console.error('Error loading image:', error);
//       }
//     };

//     if (src) loadImage();
//   }, [src]);

//   return imageSrc ? (
//     <img src={imageSrc} alt={alt} className={className} style={style} />
//   ) : (
//     <div className="text-white">Loading...</div>
//   );
// }

// export default ActivitsCar;







import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './ActivitsCarousel.css';

const ActivitsCar = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const scrollRefs = useRef([]);
  const observersRef = useRef([]);
  const delayTimeout = useRef(null);

  const CARD_WIDTH_REM = 22;
  const CARD_GAP_PX = 16;
  const SCROLL_AMOUNT = CARD_WIDTH_REM * 16 + CARD_GAP_PX;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/image/project-activities`)
      .then((response) => {
        const sortedActivities = [...response.data].reverse();
        setActivities(sortedActivities);
      })
      .catch((error) => {
        console.error('Error fetching project activities:', error);
      });
  }, []);

  const openPopup = (activity) => setSelectedActivity(activity);
  const closePopup = () => setSelectedActivity(null);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const groupedActivities = chunkArray(activities, 6);

  // useEffect(() => {
  //   observersRef.current.forEach((observer) => observer.disconnect());
  //   observersRef.current = [];

  //   const windowWidth = window.innerWidth;

  //   scrollRefs.current.forEach((ref, index) => {
  //     if (!ref) return;

  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         // ✅ UPDATED LOGIC: Filter for cards at least 60% visible
  //         const visibleEntries = entries.filter(
  //           (entry) => entry.intersectionRatio >= 0.6
  //         );

  //         if (visibleEntries.length > 0 && windowWidth <= 1024) {
  //           const mostVisibleEntry = visibleEntries.reduce((prev, current) =>
  //             prev.intersectionRatio > current.intersectionRatio ? prev : current
  //           );
  //           const mostVisibleId = mostVisibleEntry.target.dataset.id;

  //           clearTimeout(delayTimeout.current);
  //           delayTimeout.current = setTimeout(() => {
  //             setHoveredCardId(mostVisibleId);
  //           }, 200);
  //         }
  //       },
  //       {
  //         root: ref,
  //         // ✅ UPDATED THRESHOLD: Smooth detection from 0 to 1 in steps of 0.1
  //         threshold: Array.from({ length: 11 }, (_, i) => i * 0.1),
  //       }
  //     );

  //     const cards = ref.querySelectorAll('.activity-card');
  //     cards.forEach((card) => observer.observe(card));
  //     observersRef.current.push(observer);
  //   });

  //   return () => {
  //     observersRef.current.forEach((observer) => observer.disconnect());
  //     clearTimeout(delayTimeout.current);
  //   };
  // }, [activities]);


  // useEffect(() => {
  //   observersRef.current.forEach((observer) => observer.disconnect());
  //   observersRef.current = [];
  
  //   const windowWidth = window.innerWidth;
  
  //   if (windowWidth <= 1024) {
  //     scrollRefs.current.forEach((ref) => {
  //       if (!ref) return;
  
  //       const observer = new IntersectionObserver(
  //         () => {
  //           const cards = Array.from(ref.querySelectorAll('.activity-card'));
  
  //           const containerRect = ref.getBoundingClientRect();
  //           const containerCenter = containerRect.left + containerRect.width / 2;
  
  //           // Find card whose center is closest to container center
  //           let closestCard = null;
  //           let minDistance = Infinity;
  
  //           cards.forEach((card) => {
  //             const rect = card.getBoundingClientRect();
  //             const cardCenter = rect.left + rect.width / 2;
  //             const distance = Math.abs(cardCenter - containerCenter);
  
  //             if (distance < minDistance) {
  //               minDistance = distance;
  //               closestCard = card;
  //             }
  //           });
  
  //           if (closestCard) {
  //             const closestCardId = closestCard.dataset.id;
  
  //             clearTimeout(delayTimeout.current);
  //             delayTimeout.current = setTimeout(() => {
  //               setHoveredCardId(closestCardId);
  //             }, 200);
  //           }
  //         },
  //         {
  //           root: ref,
  //           threshold: [0.1], // Trigger on small visibility change
  //         }
  //       );
  
  //       const cards = ref.querySelectorAll('.activity-card');
  //       cards.forEach((card) => observer.observe(card));
  //       observersRef.current.push(observer);
  //     });
  //   }
  
  //   return () => {
  //     observersRef.current.forEach((observer) => observer.disconnect());
  //     clearTimeout(delayTimeout.current);
  //   };
  // }, [activities]);
  

  useEffect(() => {
    observersRef.current.forEach((observer) => observer.disconnect());
    observersRef.current = [];
  
    const windowWidth = window.innerWidth;
  
    if (windowWidth <= 1024) {
      scrollRefs.current.forEach((ref) => {
        if (!ref) return;
  
        const observer = new IntersectionObserver(() => {
          const cards = Array.from(ref.querySelectorAll('.activity-card'));
  
          const containerRect = ref.getBoundingClientRect();
          const containerCenter = containerRect.left + containerRect.width / 2;
  
          let visibleCards = cards.filter((card) => {
            const rect = card.getBoundingClientRect();
            const visibleWidth = Math.min(rect.right, containerRect.right) - Math.max(rect.left, containerRect.left);
            const visibilityRatio = visibleWidth / rect.width;
            return visibilityRatio >= 0.6; // Only consider mostly visible cards
          });
  
          let closestCard = null;
          let minDistance = Infinity;
  
          visibleCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
            const distance = Math.abs(cardCenter - containerCenter);
            if (distance < minDistance) {
              minDistance = distance;
              closestCard = card;
            }
          });
  
          if (closestCard) {
            const closestCardId = closestCard.dataset.id;
            clearTimeout(delayTimeout.current);
            delayTimeout.current = setTimeout(() => {
              setHoveredCardId(closestCardId);
            }, 200);
          }
        }, {
          root: ref,
          threshold: [0.1],
        });
  
        const cards = ref.querySelectorAll('.activity-card');
        cards.forEach((card) => observer.observe(card));
        observersRef.current.push(observer);
      });
    }
  
    return () => {
      observersRef.current.forEach((observer) => observer.disconnect());
      clearTimeout(delayTimeout.current);
    };
  }, [activities]);
  
  return (
    <div className="container-fluid py-3">
      {groupedActivities.map((group, groupIndex) => (
        <div className="mb-5 position-relative" key={groupIndex}>
          <button
            className="btn position-absolute top-50 start-0 translate-middle-y"
            style={{
              zIndex: 1000,
              fontSize: '2rem',
              color: 'black',
              border: 'none',
              borderRadius: '50%',
              padding: '0.5rem 0.75rem',
            }}
            onClick={() =>
              scrollRefs.current[groupIndex].scrollBy({
                left: -SCROLL_AMOUNT,
                behavior: 'smooth',
              })
            }
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <button
            className="btn position-absolute top-50 end-0 translate-middle-y"
            style={{
              zIndex: 1000,
              fontSize: '2rem',
              color: 'black',
              border: 'none',
              borderRadius: '50%',
              padding: '0.5rem 0.75rem',
            }}
            onClick={() =>
              scrollRefs.current[groupIndex].scrollBy({
                left: SCROLL_AMOUNT,
                behavior: 'smooth',
              })
            }
          >
            <i className="bi bi-chevron-right"></i>
          </button>

          <div
            className="d-flex overflow-auto gap-3 activities-carousel"
            ref={(el) => (scrollRefs.current[groupIndex] = el)}
          >
            {group.map((activity) => (
              <div
                key={activity.id}
                data-id={activity.id}
                className={`card activity-card text-white border-0 shadow-sm flex-shrink-0 position-relative ${
                  hoveredCardId === String(activity.id) ? 'hovered' : ''
                }`}
                style={{
                  width: '22rem',
                  height: '200px',
                  borderRadius: '1rem',
                  minWidth: '22rem',
                  backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${activity.afterImageName})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => openPopup(activity)}
              >
                <div className="overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center p-3">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      openPopup(activity);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedActivity && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        >
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div
              className="modal-content p-0"
              style={{
                borderRadius: '1rem',
                background: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="modal-header pt-3">
                <h3 className="modal-title">{selectedActivity.projectTitle}</h3>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closePopup}
                ></button>
              </div>
              <div className="modal-body p-0">
                <div className="row g-0">
                  <div className="col-md-6 mb-3 mt-3 d-flex flex-column align-items-center">
                    <AsyncImage
                      src={selectedActivity.beforeImageName}
                      alt="Before"
                      className="img-fluid w-75 rounded"
                      style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <p className="text-center">Before</p>
                  </div>
                  <div className="col-md-6 mb-3 mt-3 d-flex flex-column align-items-center">
                    <AsyncImage
                      src={selectedActivity.afterImageName}
                      alt="After"
                      className="img-fluid w-75 rounded"
                      style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <p className="text-center">After</p>
                  </div>
                </div>
                <div className="p-3">
                  <p className="mb-0 px-3">{selectedActivity.description}</p>
                </div>
              </div>
              <div className="modal-footer px-3">
                <button className="btn btn-secondary" onClick={closePopup}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function AsyncImage({ src, alt, className, style }) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${src}`,
          { responseType: 'blob' }
        );
        const imageURL = URL.createObjectURL(response.data);
        setImageSrc(imageURL);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    if (src) loadImage();
  }, [src]);

  return imageSrc ? (
    <img src={imageSrc} alt={alt} className={className} style={style} />
  ) : (
    <div className="text-white">Loading...</div>
  );
}

export default ActivitsCar;





