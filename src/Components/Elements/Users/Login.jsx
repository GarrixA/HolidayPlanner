import React, { useState } from 'react';
import './Login.css';
import image1 from '../../../images/login.png';
import { Link, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {TfiFacebook} from 'react-icons/tfi';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PuffLoader }  from 'react-spinners';

function Login() {

    const [load, setLoad] = useState(false);
    
    const Navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) =>{
        setLoad(true)
        e.preventDefault();
        setIsLoading(true);
        axios({
            method: 'POST',
            url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/login",
            data:{
                    email: email,
                    password: password,
            },
        })
        .then((Response) =>{
            console.log(Response)
            setIsLoading(false)
            localStorage.setItem("user", JSON.stringify(Response.data.user));
            const user = localStorage.getItem("user");
            localStorage.setItem("token", Response.data.access_token);
            const token = localStorage.getItem("token");

            setTimeout(() =>{
                if(Response.data.user.role == "admin"){
                    setLoad(false)
                    console.log(token);
                    alert("Welcome back admin :)")
                    Navigate("/Dashboard");
                    setLoad(false)
                    
                 } else {
                    toast.success(Response.data.message)
                    alert('Login successfully')
                    toast.success("you can now book a tour :)")
                    Navigate("/")
                    setLoad(false)
                 }
            }, 3000);
        })
        .catch((error) =>{
            console.log(error);
            toast.error('login failed!!!')
            setIsLoading(false);
            setLoad(false)
        })
    }
  return (
    <div className='signin-container'>
        <ToastContainer/>
        <div className="signin-background">
            {load ? <PuffLoader color="#36d7b7" size={210} /> : 
            <div className="signin-wrapper">
                <div className="dvx">
                <div className="signin-tittle">
                    <h1>Login</h1>
                    <p></p>
                </div>
                <div className="signin-account">
                    <h5>Doesn't have an account yet?</h5>
                     <h5><Link to={'/SignUp'} style={{color: '#c29d59', textDecoration: 'none'}}>Sin Up</Link></h5>
                </div>
                <div className="signup-inputs">
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

                </div>

                <div className="remember">
                    <input type="checkbox" />
                    <label>remeber me</label>
                </div>
                
                <div className="orlo">
                    <div className="line"></div>
                    <p>or login with</p>
                    <div className="line"></div>
                </div>
                </div>
                <div className="signin-button">
                    <button onClick={handleLogin}>{isLoading? "Loging in..." : "Login"}</button>
                </div>
                <div className="google">
                    <button className='chrome'><FcGoogle/> Google</button>
                    <button className='facebook'><TfiFacebook/> Facebook</button>
                </div>
            </div>
            }
            <div className="signin-image">
                <img src={image1} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Login
