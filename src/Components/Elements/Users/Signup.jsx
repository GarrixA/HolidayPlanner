import React from 'react';
import './Signup.css';
import image1 from '../../../images/login.png';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function SidgnUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState({});
    console.log(email, fullName, password);

    const handleSignup = (e) => {
            e.preventDefault();
            setIsLoading(true)
        

        axios({
            url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",            
            method: "POST",
            data: {
                email: email,
                fullName: firstName + lastName,
                password: password,
            }
        })
        .then((response) =>{
            console.log(response, "response");
            localStorage.setItem("token", response.data.access_token);
            // Navigate("/")
            alert("User successfully registered");
            setIsLoading(false);
            toast.success("well done")
        })

        .catch((error) =>{
            console.log(error);
            alert("Error happenning");
            toast.error("error");
            // setIsLoading(false);
        });

        // setEmail('');
        // setFirstName('');
        // setLastName('');
        // setPassword('');
        // setConfirmPassword('');
    }

  return (
    
    <div className='signup-container'>
        <ToastContainer/>
        <div className="signup-background">
            <div className="signup-wrapper">
                <div className="signup-tittle">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-inputs">
                    <label>First name</label>
                    <input type="text" placeholder='Firstname'
                        onChange={(e) =>{
                            e.preventDefault();
                            setFirstName(e.target.value);
                        }}
                    />
                    <label>Last name</label>
                    <input type="text" placeholder='Lastname'
                        onChange={(e) =>{
                            e.preventDefault();
                            setLastName(e.target.value);
                        }}
                    />
                    <label>Email</label>
                    <input type="text" placeholder='email'
                        onChange={(e) =>{
                            e.preventDefault();
                            setEmail(e.target.value);
                        }}
                    />
                    <label>Password</label>
                    <input type="password" placeholder='password'
                        onChange={(e) =>{
                            e.preventDefault();
                            setPassword(e.target.value);
                        }}
                    />
                    <label>Confirm Password</label>
                    <input type="password" placeholder='confirm password'
                        onChange={(e) =>{
                            e.preventDefault(e);
                            setConfirmPassword(e.target.value);
                        }}
                    />

                </div>
                <div className="signup-button">
                     <button type='submit' 
                    onClick={handleSignup} 
                    >
                        Sign Up
                    </button>
                    
                </div>
                <div className="signup-account">
                    <h5>Do you have an account?</h5>
                    <h5><a href="Login" style={{
                        textDecoration: 'none',
                        color: '#c29d59'
                    }}> Sign in</a></h5>
                </div>
            </div>
            <div className="signup-image">
                <img src={image1} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default SidgnUp