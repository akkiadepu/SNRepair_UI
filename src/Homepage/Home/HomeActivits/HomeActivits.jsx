import React, { useEffect, useRef, useState } from 'react'
import './HomeActivits.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

// const activities = [
//     {
//       id: 1,
//       title: 'Luxury Sports Car',
//       description: 'Experience unmatched speed and comfort. kj kldsvnrdsl ilakkj jkdnf Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, error eum temporibus aspernatur possimus quod aliquid asperiores, id exercitationem nam repudiandae adipisci laborum culpa qui harum. Architecto necessitatibus error eum?',
//       afterImage: 'https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_1280.png',
//     },
//     {
//       id: 2,
//       title: 'Electric SUV',
//       description: 'Eco-friendly power for every journey. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, error eum temporibus aspernatur possimus quod aliquid asperiores, id exercitationem nam repudiandae adipisci laborum culpa qui harum. Architecto necessitatibus error eum?',
//       afterImage: 'https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_1280.png',
//     },
//     {
//       id: 3,
//       title: 'Classic Vintage',
//       description: 'Timeless design and engineering. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, error eum temporibus aspernatur possimus quod aliquid asperiores, id exercitationem nam repudiandae adipisci laborum culpa qui harum. Architecto necessitatibus error eum?',
//       afterImage: 'https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_1280.png',
//     },
//     {
//         id: 4,
//         title: 'Classic Vintage',
//         description: 'Timeless design and engineering. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, error eum temporibus aspernatur possimus quod aliquid asperiores, id exercitationem nam repudiandae adipisci laborum culpa qui harum. Architecto necessitatibus error eum?',
//         afterImage: 'https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_1280.png',
//       },
//   ];




const HomeActivits = () => {

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 800,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     autoplay: true,
    //     autoplaySpeed: 2500,
    //     responsive: [
    //       {
    //         breakpoint: 992,
    //         settings: { slidesToShow: 2 },
    //       },
    //       {
    //         breakpoint: 768,
    //         settings: { slidesToShow: 1 },
    //       },
    //     ],
    //   };
    
    //   return (
    //     <div className="container my-5">
    //       <h2 className="text-center mb-4">Our Cars</h2>
    //       <Slider {...settings}>
    //         {activities.map((activity) => (
    //           <div key={activity.id} className="p-3">
    //             <div className="activity-card-wrapper">
    //               <div className="card activity-card h-100 border-0 shadow-sm">
    //                 <img
    //                   src={activity.afterImage}
    //                   className="card-img-top activity-img"
    //                   alt={activity.title}
    //                 />
    //                 <div className="card-body activity-body text-center">
    //                   <h5 className="card-title">{activity.title}</h5>
    //                   <p className="card-text small">{activity.description}</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </Slider>
    //     </div>
    

  //   const [selectedActivity, setSelectedActivity] = useState(null);
  // const navigate = useNavigate();

  // const openPopup = (activity) => {
  //   setSelectedActivity(activity);
  // };

  // const closePopup = () => {
  //   setSelectedActivity(null);
  // };

  // const handleMoreActivities = () => {
  //   navigate('/activities');
  // };
  // const [hoveredCardId, setHoveredCardId] = useState(null);

  // return (
  //   <div>
  //     <div className="container-fluid my-5 px-5"  >

  //       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
  //               <h6 className="text-primary text-uppercase">// Our Activits //</h6>
  //               <h1 className="mb-5">Explore Our Activits</h1>
  //           </div>
  //       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-1">
  //         {activities.map((activity) => (
  //           <div key={activity.id} className="col d-flex justify-content-center" onMouseEnter={() => setHoveredCardId(activity.id)}
  //           onMouseLeave={() => setHoveredCardId(null)}
  //           onTouchStart={() => setHoveredCardId(activity.id)}>
  //             <div className="activity-card-wrapper">
  //               <div className={`card activity-card border-0 h-100 ${hoveredCardId === activity.id ? 'hovered' : ''}`}>
  //                 <img
  //                   src={activity.afterImage}
  //                   className="card-img-top activity-img"
  //                   alt={activity.title}
  //                 />
  //                 <div className="card-body activity-body text-center">
  //                   <h5 className="card-title ">{activity.title}</h5>
  //                   <p className="card-text small pt-2">{activity.description}</p>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       <div className="text-center ">
  //         <button className="btn btn-primary py-3 px-5 mt-3" onClick={handleMoreActivities}>
  //           More Activities <i className="fa fa-arrow-right ms-3"></i>
  //         </button>
  //       </div>
  //     </div>
  //   </div>   const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     const fetchActivities = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/latest-activities`);
//         // setActivities(response.data.slice(0, 4)); // Display only the latest 4 activities
//         setActivities(
//           response.data
//             .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//             .slice(0, 4)
//         );
//       } catch (error) {
//         console.error('Error fetching project activities:', error);
//       }
//     };

//     fetchActivities();

//     // Set interval to refetch data every 10 seconds
//     const interval = setInterval(() => {
//       fetchActivities();
//     }, 10000);

//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   // const fetchImage = async (fileName) => {
//   //   try {
//   //     const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${fileName}`, {
//   //       responseType: 'blob',
//   //     });
//   //     const imageURL = URL.createObjectURL(response.data);
//   //     return imageURL;
//   //   } catch (error) {
//   //     console.error('Error fetching image:', error);
//   //     return 'path/to/fallback/image.jpg'; 
//   //   }
//   // };


//   const imageCache = useRef({});

// const fetchImage = async (fileName) => {
//   if (imageCache.current[fileName]) {
//     return imageCache.current[fileName];
//   }

//   try {
//     const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${fileName}`, {
//       responseType: 'blob',
//     });
//     const imageURL = URL.createObjectURL(response.data);
//     imageCache.current[fileName] = imageURL;
//     return imageURL;
//   } catch (error) {
//     console.error('Error fetching image:', error);
//     return 'path/to/fallback/image.jpg';
//   }
// };




//   const [hoveredCardId, setHoveredCardId] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const navigate = useNavigate();

//   // ✅ Detect screen size
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // mobile breakpoint
//     };

//     handleResize(); // set initially
//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleCardInteraction = (activityId) => {
//     if (isMobile) {
//       if (hoveredCardId === activityId) {
//         setHoveredCardId(null); // Second tap closes
//       } else {
//         setHoveredCardId(activityId); // First tap opens
//       }
//     } else {
//       // Desktop hover behavior
//       setHoveredCardId(activityId);
//     }
//   };

//   const handleCardLeave = () => {
//     if (!isMobile) {
//       setHoveredCardId(null);
//     }
//   };

//   const handleMoreActivities = () => {
//     navigate('/activities');
//   };

//   return (
//     <div>
//       <div className="container-fluid my-5 px-5">
//         <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
//           <h6 className="text-primary text-uppercase">// Our Activities //</h6>
//           <h1 className="mb-5">Explore Our Activities</h1>
//         </div>

//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-1">
//           {activities.map((activity) => (
//             <div 
//               key={activity.id} 
//               className="col d-flex justify-content-center"
//               onMouseEnter={() => handleCardInteraction(activity.id)}
//               onMouseLeave={handleCardLeave}
//               onClick={() => handleCardInteraction(activity.id)}
//             >
//               <div className="activity-card-wrapper">
//                 <div className={`card activity-card border-0 h-100 ${hoveredCardId === activity.id ? 'hovered' : ''}`}>
//                   {/* <img
//                     src={activity.afterImage}
//                     className="card-img-top activity-img"
//                     alt={activity.title}
//                   /> */}
//                    <AsyncImage 
//                                 fileName={activity.afterImageName} 
//                                 fetchImage={fetchImage} 
//                                 className="card-img-top " 
//                                 // style={{ height: '10rem', objectFit: 'cover' }} 
//                             />
//                   <div className="card-body activity-body text-center">
//                     <h5 className="card-title">{activity.projectTitle}</h5>
//                     <p className="card-text small pt-2">{activity.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <button className="btn btn-primary py-3 px-5 mt-3" onClick={handleMoreActivities}>
//             More Activities <i className="fa fa-arrow-right ms-3"></i>
//           </button>
//         </div>
//       </div>
//     </div>


//   )

  //function AsyncImage({ fileName, fetchImage }) {
  //   const [imageSrc, setImageSrc] = useState(null);

  //   useEffect(() => {
  //     const loadImage = async () => {
  //       const imageURL = await fetchImage(fileName);
  //       setImageSrc(imageURL);
  //     };

  //     loadImage();
  //   }, [fileName, fetchImage]);

  //   return imageSrc ? <img src={imageSrc} className='activity-img' alt="Project After Image" /> : <p>Loading...</p>;
  // }




  const [activities, setActivities] = useState([]);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const imageCache = useRef({});

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // mobile breakpoint
    };

    handleResize(); // set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch activities and preload images
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/image/latest-activities`
        );

        const sortedActivities = response.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // latest first
          .slice(0, 4); // only 4 activities

        const activitiesWithImages = await Promise.all(
          sortedActivities.map(async (activity) => {
            const fileName = activity.afterImageName;

            if (!imageCache.current[fileName]) {
              const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${fileName}`,
                { responseType: 'blob' }
              );
              imageCache.current[fileName] = URL.createObjectURL(res.data);
            }

            return {
              ...activity,
              afterImageUrl: imageCache.current[fileName],
            };
          })
        );

        setActivities(activitiesWithImages);
      } catch (error) {
        console.error('Error fetching project activities:', error);
      }
    };

    fetchActivities();

    const interval = setInterval(fetchActivities, 10000); // refresh every 10 sec
    return () => clearInterval(interval);
  }, []);

  const handleCardInteraction = (activityId) => {
    if (isMobile) {
      setHoveredCardId((prev) => (prev === activityId ? null : activityId));
    } else {
      setHoveredCardId(activityId);
    }
  };

  const handleCardLeave = () => {
    if (!isMobile) {
      setHoveredCardId(null);
    }
  };

  const handleMoreActivities = () => {
    navigate('/activities');
  };

  return (
    <div className="container-fluid my-5 px-5">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-primary text-uppercase">// Our Activities //</h6>
        <h1 className="mb-5">Explore Our Activities</h1>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-1">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="col d-flex justify-content-center"
            onMouseEnter={() => handleCardInteraction(activity.id)}
            onMouseLeave={handleCardLeave}
            onClick={() => handleCardInteraction(activity.id)}
          >
            <div className="activity-card-wrapper">
              <div
                className={`card activity-card border-0 h-100 ${
                  hoveredCardId === activity.id ? 'hovered' : ''
                }`}
              >
                <img
                  src={activity.afterImageUrl}
                  className="card-img-top activity-img"
                  alt={activity.projectTitle}
                />
                <div className="card-body activity-body text-center">
                  <h5 className="card-title">{activity.projectTitle}</h5>
                  <p className="card-text small pt-2">{activity.description}....</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="btn btn-primary py-3 px-5 mt-3" onClick={handleMoreActivities}>
          More Activities <i className="fa fa-arrow-right ms-3"></i>
        </button>
      </div>
    </div>
  );

}

export default HomeActivits