import React, { useEffect, useState }from 'react'
import AdminNav from './AdminNav'

import axios from 'axios';
 import './AdminDashboardStyle.css';
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
    const [activities, setActivities] = useState([]);
    const [editActivityId, setEditActivityId] = useState(null); 
    const [selectedActivity, setSelectedActivity] = useState(null); // State for storing changes
  
    useEffect(() => {
      fetchActivities();
    }, []);
  
    const fetchActivities = () => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/project-activities`)
        .then(response => {
          setActivities(response.data);
        })
        .catch(error => {
          console.error('Error fetching project activities:', error);
        });
    };
  
    const fetchImage = async (fileName) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem/${fileName}`, {
          responseType: 'blob',
        });
        const imageURL = URL.createObjectURL(response.data);
        return imageURL;
      } catch (error) {
        console.error('Error fetching image:', error);
        return 'path/to/fallback/image.jpg';
      }
    };
  
    const handleDelete = (id) => {
      axios.delete(`${process.env.REACT_APP_BACKEND_URL}/image/${id}`)
        .then(() => {
          fetchActivities();
        })
        .catch(error => {
          console.error('Error deleting activity:', error);
        });
    };
  
    const handleUpdateClick = (activity) => {
      setEditActivityId(activity.id); // Set the activity being edited
      setSelectedActivity({ ...activity }); // Copy activity data for editing
    };
  
    const handleSave = (id) => {
      const formData = new FormData();
      formData.append('projectTitle', selectedActivity.projectTitle);
      formData.append('description', selectedActivity.description);
  
      if (selectedActivity.beforeImage) {
        formData.append('beforeImage', selectedActivity.beforeImage);
      }
      if (selectedActivity.afterImage) {
        formData.append('afterImage', selectedActivity.afterImage);
      }
  
      axios.put(`${process.env.REACT_APP_BACKEND_URL}/image/${id}`, formData)
        .then(() => {
          fetchActivities();
          setEditActivityId(null); // Exit edit mode
        })
        .catch(error => {
          console.error('Error updating activity:', error);
        });
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSelectedActivity({ ...selectedActivity, [name]: value });
    };
  
    const handleFileChange = (e) => {
      const { name, files } = e.target;
      setSelectedActivity({ ...selectedActivity, [name]: files[0] });
    };
  
    return (
      <>
      <AdminNav/>
      <div className="container20 py-4">
       <div className="table-container">
  
     
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>Project Title</th>
                <th>Description</th>
                <th>Before Image</th>
                <th>After Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index}>
                  {editActivityId === activity.id ? (
                    <>
                      <td>
                      
                          <input
                            type="text"
                            className="form-control"
                            name="projectTitle"
                            value={selectedActivity.projectTitle}
                            onChange={handleInputChange}
                            required
                            autoComplete="off"
                          />
                      
                      </td>
                      <td>
                        
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            value={selectedActivity.description}
                            onChange={handleInputChange}
                            required
                            autoComplete="off"
                          />
                      
                      </td>
                      <td>
                        <div className="input-group image-edit-group">
                          <div className="image-wrapper">
                            <AsyncImage
                              fileName={activity.beforeImageName}
                              fetchImage={fetchImage}
                              className="img-fluid"
                            />
                          </div>
                          <input
                            type="file"
                            className="form-control mt-2"
                            name="beforeImage"
                            onChange={handleFileChange}
                            required
                          />
                        </div>
                      </td>
                      <td>
                        <div className="input-group image-edit-group">
                          <div className="image-wrapper">
                            <AsyncImage
                              fileName={activity.afterImageName}
                              fetchImage={fetchImage}
                              className="img-fluid"
                            />
  
                          </div>
                          <input
                            type="file"
                            className="form-control mt-2"
                            name="afterImage"
                            onChange={handleFileChange}
                            required
                          />
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-primary me-2" onClick={() => handleSave(activity.id)}>Save</button>
                        <button className="btn btn-secondary" onClick={() => setEditActivityId(null)}>Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td data-label="Project Title">{activity.projectTitle}</td>
                      <td data-label="Description">{activity.description}</td>
                      <td data-label="Before Image">
                        <div className="image-wrapper">
                          <AsyncImage
                            fileName={activity.beforeImageName}
                            fetchImage={fetchImage}
                            className="img-fluid"
                          />
                        </div>
                      </td>
                      <td data-label="After Image">
                        <div className="image-wrapper">
                          <AsyncImage
                            fileName={activity.afterImageName}
                            fetchImage={fetchImage}
                             className="img-fluid"
                          />
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-warning me-2" onClick={() => handleUpdateClick(activity)}>Update</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(activity.id)}>Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
      </>
    );
  }
  
  function AsyncImage({ fileName, fetchImage }) {
    const [imageSrc, setImageSrc] = useState(null);
  
    useEffect(() => {
      const loadImage = async () => {
        const imageURL = await fetchImage(fileName);
        setImageSrc(imageURL);
      };
  
      loadImage();
    }, [fileName, fetchImage]);
  
    return imageSrc ? <img src={imageSrc} alt="Project Image"  className="one" /> : <p>Loading...</p>;
  }


export default AdminDashboard