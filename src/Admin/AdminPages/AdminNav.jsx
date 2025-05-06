
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './AdminNavStyle.css';

const AdminNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

   const handleLogout = () => {
    sessionStorage.removeItem('token');
 
       navigate('/');
   };

   return (
     
       <nav className="navbar navbar-expand-lg navbar1">
       <div className="container-fluid">
         <NavLink className="navbar-brand" to="/">SN <span style={{ color: "rgb(0, 0, 255)" }}>Enterprises</span></NavLink>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <NavLink className="nav-link active" aria-current="page" to="/admin/AdminDashboard" style={{ color: '#edf2f4' }}>Home</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link" to="/admin/AddActivities">AddActivities</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link" to="/admin/CustomerRequst">CustomerRequst</NavLink>
             </li>

           </ul>
           <div className="d-flex ms-auto">
            <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
              Logout
            </button>
          </div>
         </div>
       </div>
     </nav>

  )
}

export default AdminNav