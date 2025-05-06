import React,{ useState } from 'react'
import './AddActivitiesStyle.css'

import axios from "axios";
import AdminNav from "./AdminNav";

const AddActivities = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();

    
      const formData = new FormData();
      formData.append('projectTitle', projectTitle); 
      formData.append('description', description);   
      formData.append('beforeImage', beforeImage);   
      formData.append('afterImage', afterImage);     

      try {
        
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/image/fileSystem`, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'  
              }
          });

          alert(response.data);  
          console.log(response.data);

          
          setProjectTitle('');
          setBeforeImage(null);
          setAfterImage(null);
          setDescription('');
          document.getElementById('beforeImage').value = '';
          document.getElementById('afterImage').value = '';

      } catch (error) {
          console.error("There was an error submitting the form!", error);
          alert(`Error: ${error.response ? error.response.data : error.message}`);
      }
  };

  return (
      <div>
          <AdminNav />
          <div className="form-container1">
          <form className="form" onSubmit={handleSubmit}>
              <p className="title">Add Project Activity</p>

              <div className="flex">
                  <label>
                      <input className="input" type="text"  value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} required />
                      <span>Project Title</span>
                  </label>
              </div>

              <div className="container17">
                  <label htmlFor="beforeImage">Choose Before Image:</label>
                  <input accept=".jpg, .jpeg, .png" className="inpdddut" name="beforeImage" id="beforeImage" type="file" onChange={(e) => setBeforeImage(e.target.files[0])} required />
                  
                  <label htmlFor="afterImage">Choose After Image:</label>
                  <input accept=".jpg, .jpeg, .png" className="inpdddut" name="afterImage" id="afterImage" type="file" onChange={(e) => setAfterImage(e.target.files[0])} required />
              </div>

              <label>
                  <input className="input" type="text"  value={description} onChange={(e) => setDescription(e.target.value)} required />
                  <span>Description</span>
              </label>

              <button className="submit" type="submit">Submit</button>
              <button className="submit" type="reset">Reset</button>
          </form>
          </div>
      </div>
  )
}

export default AddActivities