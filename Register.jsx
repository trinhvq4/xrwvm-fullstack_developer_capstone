/*
 * Project: xrwvm-fullstack_developer_capstone
 * File: Register.jsx
 * Description: Component for user registration with 5 required fields.
 */

import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        // Integration logic with /djangoapp/register endpoint
        const res = await fetch("/djangoapp/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userName,
                firstName,
                lastName,
                email,
                password
            }),
        });
        const data = await res.json();
        if (data.status === "Authenticated") {
            window.location.href = "/";
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    {/* Username Input */}
                    <input type="text" placeholder="Username" value={userName} 
                        onChange={(e) => setUserName(e.target.value)} required />
                    
                    {/* First Name Input */}
                    <input type="text" placeholder="First Name" value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} required />
                    
                    {/* Last Name Input */}
                    <input type="text" placeholder="Last Name" value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} required />
                    
                    {/* Email Input */}
                    <input type="email" placeholder="Email" value={email} 
                        onChange={(e) => setEmail(e.target.value)} required />
                    
                    {/* Password Input */}
                    <input type="password" placeholder="Password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit" className="register-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
