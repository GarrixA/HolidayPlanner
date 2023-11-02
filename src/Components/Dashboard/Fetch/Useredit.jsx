import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function EditUser() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [passWord, setPassword] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams()
    const userId = params.id
    const fetchUserDash = () => {
      const token = localStorage.getItem('token');
      axios({
        method: "GET",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/getOne/?fieldName=_id&value=${userId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log (response, "response");
        setEmail    (response?.data?.email);
        setFirstName(response?.data?.firstName);
        setLastName (response?.data?.lastName);
        setPassword (response?.data?.passWord);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    useEffect(() => {
      console.log(passWord)
      fetchUserDash();
    },[])
    const handleSubmit = async (e) => {
      let token=localStorage.getItem("token")
      e.preventDefault();
const data={
  "firstName":firstName,
  "lastName":lastName,
  "email":email,
}
      axios({
        method:"PUT",
        url:`https://holiday-planner-4lnj.onrender.com/api/auth/users/update/${email}`,
        data: data,
        headers:{
            "content-type":"application/json",
            Authorization:`Bearer ${token}`
        }
    }
    ).then((response)=>{
        console.log(response);
            toast.success("User-updated successfully");
            setTimeout(()=>
            navigate("/Dashboard/UserDash")
            ,3000);
    }).catch((error)=>{
        console.log(error);
        toast.error(error.message);
    });
};
return (
    <div>
      <div >
        <form
          id="form">
          <h2 >edit user</h2>
          <div >
            <div >
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                id="name1"
                 placeholder="Enter your email"
              />
            </div>
            <div >
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                id="name1"
                 placeholder="Enter your first name"
              />
            </div>
            <div >
              <label >
              </label>
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                id="name1"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label >
              </label>
            </div>
            <button
              onClick={(e)=> handleSubmit(e)}
              type="submit"
               >
              {setIsLoading? "edit user in...":"edit"}
            </button>
            <ToastContainer/>
          </div>
        </form>
      </div>
    </div>
  );
};


export default EditUser
