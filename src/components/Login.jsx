import React, { useState } from 'react';
import '../styles/Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const users = {
        admin: 'johndoe@123',
        user: 'Nick@123',
        guest: 'guest@123'
    };

    const handleLogin = () => {
        if (users[username] === password) {
            alert(`Welcome ${username}`);
            
            
        } else {
            setError('Invalid username or password');
        }
    };
    return (
        <div className="login-container">
            <h1>Login</h1>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}><Link to={"/pincode"}>Login</Link></button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
