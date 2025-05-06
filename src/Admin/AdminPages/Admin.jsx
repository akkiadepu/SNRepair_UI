import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AdminForm.css'

const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const url = `${process.env.REACT_APP_BACKEND_URL}/login`;
            const response = await axios.post(url, { email, password }, { withCredentials: true });
            console.log(response)
            if (response.status === 201) {
                const { jwt  } = response.data;
                const expiresIn = Number(response.data.expiresIn) || 3600;
                // localStorage.setItem('token', jwt);  
                sessionStorage.setItem('token', jwt);
                sessionStorage.setItem('tokenExpiration', Date.now() + expiresIn * 1000);
                console.log('Token saved:', jwt);
                console.log(Date.now() + expiresIn * 1000)
                console.log(response);
                // console.log(email,password);
                navigate('/admin/AdminDashboard');    // Redirect after login
            } else {
                setError('Invalid login credentials');
            }
        } catch (error) {
            console.error('There was an error!', error);
            setError('Invalid login credentials');
        }
    };
    return (
        <div className='Admincontainer1'>
            <form className="form" onSubmit={handleSubmit}>
                {error && <p className="error-message">{error}</p>}
                <p className="form-title">Sign in to your account</p>
                <div className="input-container1">
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container1">
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit">Sign in</button>
            </form>
        </div>
  )
}

export default Admin