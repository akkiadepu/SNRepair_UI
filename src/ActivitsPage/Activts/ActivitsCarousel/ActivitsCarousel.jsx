import React, { useEffect, useRef, useState } from 'react'
import './ActivitsCarousel.css'
// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ActivitsCarousel.css';
import axios from 'axios';



// const activitiesData = [
//     {
//       id: 1,
//       title: "Full Body Dent Repair",
//       subtitle: "BMW 5 Series",
//       // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//       beforeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//       afterImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//       description: "Full body dent removal and refinishing for BMW 5 Series. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo totam animi minima exercitationem mollitia illo hic odit cupiditate ducimus! Voluptatibus facilis cupiditate laborum repudiandae at, quidem quas explicabo eius?",
//     },
//     {
//       id: 2,
//       title: "Complete Car Wash",
//       subtitle: "Mercedes-Benz",
//       // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//       beforeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//       afterImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//       description: "Exterior and interior deep cleaning for Mercedes-Benz. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo totam animi minima exercitationem mollitia illo hic odit cupiditate ducimus! Voluptatibus facilis cupiditate laborum repudiandae at, quidem quas explicabo eius?",
//     },
//     {
//         id: 3,
//         title: "Complete Car Wash",
//         subtitle: "Mercedes-Benz",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         beforeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         afterImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         description: "Exterior and interior deep cleaning for Mercedes-Benz. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo totam animi minima exercitationem mollitia illo hic odit cupiditate ducimus! Voluptatibus facilis cupiditate laborum repudiandae at, quidem quas explicabo eius?",
//       },
//       {
//         id: 4,
//         title: "Complete Car Wash",
//         subtitle: "M thre ",
//         // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         beforeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         afterImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         description: "Exterior and interior deep cleaning for Mercedes-Benz. dlsihk Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo totam animi minima exercitationem mollitia illo hic odit cupiditate ducimus! Voluptatibus facilis cupiditate laborum repudiandae at, quidem quas explicabo eius?",
//       },
//       {
//         id: 5,
//         title: "Complete Car Wash",
//         subtitle: "Mac ",
//         // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         beforeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         afterImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         description: "Exterior and interior deep cleaning for Mercedes-Benz. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo totam animi minima exercitationem mollitia illo hic odit cupiditate ducimus! Voluptatibus facilis cupiditate laborum repudiandae at, quidem quas explicabo eius?",
//       },
//       {
//         id: 6,
//         title: "Complete Car",
//         subtitle: "Mercede",
//         // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         beforeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         afterImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s",
//         description: "Exterior and interior deep cleaning for Mercedes-Benz. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, quo totam animi minima exercitationem mollitia illo hic odit cupiditate ducimus! Voluptatibus facilis cupiditate laborum repudiandae at, quidem quas explicabo eius?",
//       },
//     // ... Add rest similarly
//   ];



const ActivitsCarousel = () => {

  // const scrollRef = useRef(null);

  // const scroll = (scrollOffset) => {
  //   scrollRef.current.scrollBy({ 
  //     left: scrollOffset, 
  //     behavior: 'smooth' 
  //   });
  // };



  //   return (
  //     <div className="container-fluid py-3 position-relative">
  //       {/* Left Arrow */}
  //       <button 
  //       className="btn btn-link position-absolute top-50 start-0 translate-middle-y d-none d-md-block"
  //       style={{ zIndex: 2, fontSize: '2rem' }}
  //       onClick={() => scroll(-300)}
  //     >
  //       <i className="bi bi-chevron-left"></i>
  //     </button>

  //     {/* Right Arrow */}
  //     <button 
  //       className="btn btn-link position-absolute top-50 end-0 translate-middle-y d-none d-md-block"
  //       style={{ zIndex: 2, fontSize: '2rem' }}
  //       onClick={() => scroll(300)}
  //     >
  //       <i className="bi bi-chevron-right"></i>
  //     </button>

  //       {/* Scrollable Cards */}
  //       <div 
  //         className="d-flex overflow-auto gap-3"
  //         style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
  //         ref={scrollRef}
  //       >
  //         {activitiesData.map((activity) => (
  //           <div 
  //             key={activity.id}
  //             className="card text-white border-0 shadow-sm flex-shrink-0"
  //             style={{ 
  //               width: '22rem', 
  //               backgroundImage: `url(${activity.image})`,
  //               backgroundSize: 'cover',
  //               backgroundPosition: 'center',
  //               height: '200px',
  //               borderRadius: '1rem',
  //               minWidth: '22rem'
  //             }}
  //           >
  //             <div className="card-img-overlay d-flex flex-column justify-content-end p-3" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '1rem' }}>
  //               <small className="text-white-50">{activity.subtitle}</small>
  //               <h5 className="card-title">{activity.title}</h5>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>

  //   )


  // const scrollRef = useRef(null);
  // const [selectedActivity, setSelectedActivity] = useState(null);

  // const scroll = (scrollOffset) => {
  //   scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  // };

  // const openPopup = (activity) => {
  //   setSelectedActivity(activity);
  // };

  // const closePopup = () => {
  //   setSelectedActivity(null);
  // };

  //   return (
  //     <div className="container-fluid py-3 position-relative">
  //       {/* Left Arrow */}
  //       <button 
  //         className="btn btn-link position-absolute top-50 start-0 translate-middle-y d-none d-md-block"
  //         style={{ zIndex: 2, fontSize: '2rem' }}
  //         onClick={() => scroll(-300)}
  //       >
  //         <i className="bi bi-chevron-left"></i>
  //       </button>

  //       {/* Right Arrow */}
  //       <button 
  //         className="btn btn-link position-absolute top-50 end-0 translate-middle-y d-none d-md-block"
  //         style={{ zIndex: 2, fontSize: '2rem' }}
  //         onClick={() => scroll(300)}
  //       >
  //         <i className="bi bi-chevron-right"></i>
  //       </button>

  //       {/* Scrollable Cards */}
  //       <div 
  //         className="d-flex overflow-auto gap-3"
  //         style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
  //         ref={scrollRef}
  //       >
  //         {activitiesData.map((activity) => (
  //           <div 
  //             key={activity.id}
  //             className="card activity-card text-white border-0 shadow-sm flex-shrink-0 position-relative"
  //             style={{ 
  //               width: '22rem', 
  //               height: '200px',
  //               borderRadius: '1rem',
  //               minWidth: '22rem',
  //               backgroundImage: `url(${activity.afterImage})`,
  //               backgroundSize: 'cover',
  //               backgroundPosition: 'center',
  //               cursor: 'pointer'
  //             }}
  //             onClick={() => openPopup(activity)}
  //           >
  //             <div className="overlay d-flex align-items-center justify-content-center">
  //               <button 
  //                 className="btn btn-primary"
  //                 onClick={(e) => {
  //                   e.stopPropagation(); // To prevent card click event
  //                   openPopup(activity);
  //                 }}
  //               >
  //                 View Details 
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Popup Modal */}
  //       {selectedActivity && (
  //         <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
  //           <div className="modal-dialog modal-xl modal-dialog-centered" role="document">

  //             <div className="modal-content p-0" style={{ borderRadius: '1rem' , background: 'rgba(0, 0, 0, 0.9)',  backdropFilter: 'blur(8px)',color: '#fff', border:'1px solid rgba(255, 255, 255, 0.1)'}}>

  //               <div className="modal-header pt-3">
  //                 <h3 className="modal-title">{selectedActivity.title}</h3>
  //                 <button type="button" className="btn-close btn-close-white" onClick={closePopup}></button>
  //               </div>
  //               <div className="modal-body p-0">
  //                 <div className="row g-0">
  //                   <div className="col-md-6 mb-3 mt-3 px-0">
  //                     <img src={selectedActivity.beforeImage} alt="Before" className="img-fluid w-75 rounded" style={{ maxHeight: '400px', objectFit: 'cover' }} />
  //                     <p className="text-center">Before</p>
  //                   </div>
  //                   <div className="col-md-6 mb-3  mt-2 px-0">
  //                     <img src={selectedActivity.afterImage} alt="After" className="img-fluid w-75 rounded" style={{ maxHeight: '400px', objectFit: 'cover' }}/>
  //                     <p className="text-center ">After</p>
  //                   </div>
  //                 </div>
  //                 <div className="p-3 ">
  //                 <p className="mb-0 px-3">{selectedActivity.description}</p>
  //                 </div>
  //               </div>
  //               <div className="modal-footer px-3">
  //                 <button type="button" className="btn btn-secondary" onClick={closePopup}>Close</button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       )}

  //       {/* Extra styles */}
  //       <style>{`
  //         .activity-card {
  //           overflow: hidden;
  //           position: relative;
  //         }
  //         .activity-card .overlay {
  //           position: absolute;
  //           top: 0; 
  //           left: 0;
  //           right: 0;
  //           bottom: 0;
  //           background: rgba(0,0,0,0.5);
  //           opacity: 0;
  //           transition: opacity 0.3s;
  //           border-radius: 1rem;
  //         }
  //         .activity-card:hover .overlay {
  //           opacity: 1;
  //         }
  //         .modal-content {
  //           max-height: 90vh;
  //           overflow-y: auto;
  //         }
  //       `}</style>
  //     </div>

  // const [activitiesData, setActivitiesData] = useState([]);

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/project-activities`)
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error('Error fetching project activities:', error);
      });
  }, []);


  // const fetchImage = async (fileName) => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${fileName}`, {
  //       responseType: 'blob',
  //     });
  //     const imageURL = URL.createObjectURL(response.data);
  //     return imageURL;
  //   } catch (error) {
  //     console.error('Error fetching image:', error);
  //     return 'path/to/fallback/image.jpg'; 
  //   }
  // };


  const scrollRef = useRef(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const delayTimeout = useRef(null);

  // const openPopup = (activity) => setSelectedActivity(activity);
  // const closePopup = () => setSelectedActivity(null);

  const CARD_WIDTH_REM = 22;
  const CARD_GAP_PX = 16;
  const SCROLL_AMOUNT = CARD_WIDTH_REM * 16 + CARD_GAP_PX; // 352 + 16 = 368

  const openPopup = (activity) => {
    setSelectedActivity(activity);
  };

  const closePopup = () => {
    setSelectedActivity(null);
  };

  useEffect(() => {
    const observerOptions = {
      root: scrollRef.current,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let mostVisibleId = null;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleId = entry.target.dataset.id;
        }
      });

      if (mostVisibleId) {
        clearTimeout(delayTimeout.current);
        delayTimeout.current = setTimeout(() => {
          setHoveredCardId(mostVisibleId);
        }, 1000); // Delay of 400ms before setting hover
      }
    }, observerOptions);

    const cards = scrollRef.current?.querySelectorAll('.activity-card');
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
      clearTimeout(delayTimeout.current);
    };
  }, []);

  return (
    <div className="container-fluid py-3 position-relative">
      {/* Arrows (desktop only) */}
      {/* <button
      className="btn btn-link position-absolute top-50 start-0 translate-middle-y "
      style={{   zIndex: 2,
        fontSize: '2rem',
      
        color: 'black',
        border: 'none',
        borderRadius: '50%',
        padding: '0.5rem 0.75rem', }}
      onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
    <button
      className="btn btn-link position-absolute top-50 end-0 translate-middle-y "
      style={{ zIndex: 2,
        fontSize: '2rem',
      
        color: 'black',
        border: 'none',
        borderRadius: '50%',
        padding: '0.5rem 0.75rem', }}
      onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
    >
      <i className="bi bi-chevron-right"></i>
    </button> */}

      {/* <button
  className="btn position-absolute top-50 start-0 translate-middle-y"
  style={{
    zIndex: 5,
    fontSize: '2rem',
 
    color: 'black',
    border: 'none',
    borderRadius: '50%',
    padding: '0.5rem 0.75rem',
  }}
  onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
>
  <i className="bi bi-chevron-left"></i>
</button>

<button
  className="btn position-absolute top-50 end-0 translate-middle-y"
  style={{
    zIndex: 5,
    fontSize: '2rem',
 
    color: 'black',
    border: 'none',
    borderRadius: '50%',
    padding: '0.5rem 0.75rem',
  }}
  onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
>
  <i className="bi bi-chevron-right"></i>
</button> */}


      <button
        className="btn position-absolute top-50 start-0 translate-middle-y"
        style={{
          zIndex: 5,
          fontSize: '2rem',
          color: 'black',
          border: 'none',
          borderRadius: '50%',
          padding: '0.5rem 0.75rem',
        }}
        onClick={() => scrollRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' })}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <button
        className="btn position-absolute top-50 end-0 translate-middle-y"
        style={{
          zIndex: 5,
          fontSize: '2rem',
          color: 'black',

          border: 'none',
          borderRadius: '50%',
          padding: '0.5rem 0.75rem',
        }}
        onClick={() => scrollRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' })}
      >
        <i className="bi bi-chevron-right"></i>
      </button>

      {/* Scrollable Cards */}
      <div
        className="d-flex overflow-auto gap-3"
        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
        ref={scrollRef}
      >
        {activities.map((activity) => (
          <div
            key={activity.id}
            data-id={activity.id}
            className={`card activity-card text-white border-0 shadow-sm flex-shrink-0 position-relative ${hoveredCardId === String(activity.id) ? 'hovered' : ''
              }`}
            style={{
              width: '22rem',
              height: '200px',
              borderRadius: '1rem',
              minWidth: '22rem',
              backgroundImage: `url(${activity.afterImageName})`,
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


      {/* Popup Modal */}
      {selectedActivity && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        >
          <div className="modal-dialog modal-xl modal-dialog-centered" role="document">
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
                <button type="button" className="btn-close btn-close-white" onClick={closePopup}></button>
              </div>
              <div className="modal-body p-0">
                <div className="row g-0">
                  <div className="col-md-6 mb-3 mt-3 d-flex flex-column align-items-center">
                    <AsyncImage src={selectedActivity.beforeImageName} className="img-fluid w-75 rounded" alt="Before" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                    <p className="text-center">Before</p>
                  </div>
                  <div className="col-md-6 mb-3 mt-2 d-flex flex-column align-items-center">
                    <AsyncImage src={selectedActivity.afterImageName} className="img-fluid w-75 rounded" alt="After" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                    <p className="text-center">After</p>
                  </div>
                </div>
                <div className="p-3">
                  <p className="mb-0 px-3">{selectedActivity.description}</p>
                </div>
              </div>
              <div className="modal-footer px-3">
                <button className="btn btn-secondary" onClick={closePopup}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
      .activity-card {
        overflow: hidden;
        position: relative;
        transition: transform 0.3s ease;
        background-color: #333;
      }
      .activity-card .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.3s;
        border-radius: 1rem;
      }
      .activity-card.hovered {
        transform: scale(1.05);
        z-index: 3;
      }
      .activity-card.hovered .overlay {
        opacity: 1;
      }
    `}</style>

      {/* <style>{`
  .activity-card {
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease;
    background-color: #333;
  }

  .activity-card .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 1rem;
  }

  @media (min-width: 768px) {
    .activity-card.hovered {
      transform: scale(1.05);
      z-index: 3;
    }

    .activity-card.hovered .overlay {
      opacity: 1;
    }
  }
`}</style> */}

    </div>

  );
};

function AsyncImage({ fileName, fetchImage }) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const imageURL = await fetchImage(fileName);
      setImageSrc(imageURL);
    };

    loadImage();
  }, [fileName, fetchImage]);

  return imageSrc ? <img src={imageSrc} alt="Project Image" /> : <p>Loading...</p>;
}



export default ActivitsCarousel;