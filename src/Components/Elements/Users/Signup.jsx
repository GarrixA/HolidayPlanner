import React from 'react';
import './Signup.css';
import image1 from '../../../images/login.png';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SidgnUp() {
    const Navigate = useNavigate();
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
            alert("Thanks for signing up! :)");
            setIsLoading(false);
            setTimeout(() =>{
                toast.success('Register seccessfully');
                Navigate("/Login")
            }, 3000);
        })

        .catch((error) =>{
            console.log(error);
            toast.error("Failed try again later");
            setIsLoading(false);
        });
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
                    >{isLoading ? "Signing up...": "Sign up"}
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