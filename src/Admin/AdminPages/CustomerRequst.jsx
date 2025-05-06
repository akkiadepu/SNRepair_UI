
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav'
import './CustomerRequestStyle.css'

const CustomerRequst = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/request`)
        .then(response => {
            setRequests(response.data);
        })
        .catch(error => {
            console.error('Error fetching the customer requests:', error);
        });
}, []); 

return (
    <div>
        
        <AdminNav />
        <div  className="table-container1">
        <h2>Customer Requests</h2>
        <div className="table-responsive2">
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse'}}>
            <thead>
                <tr>
                <th>Submitted At</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Vehicle Model</th>
                    <th>Address</th>
                    <th>Message</th>
                   
                </tr>
            </thead>
            <tbody>
                {requests.length > 0 ? (
                    requests.map((request) => (
                        <tr key={request.id}>
                           <td>{new Date(request.submittedAt).toLocaleString()}</td>
                            <td>{request.name}</td>
                            <td>{request.email}</td>
                            <td>{request.number}</td>
                            <td>{request.vehicleModel}</td>
                            <td>{request.address}</td>
                            <td>{request.yourMessage}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="7">No customer requests found.</td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
        </div>
    </div>
  )
}

export default CustomerRequst