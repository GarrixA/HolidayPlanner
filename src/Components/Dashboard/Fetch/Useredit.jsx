import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Useredit.css';

function EditUser() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userRole, setUserRole] = useState('');
    const Navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams()
    const tourId = params.id
    const fetchUser = () => {
      const token = localStorage.getItem('token');
      axios({
        method: "GET",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/getOne/?fieldName=_id&value=${tourId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log (response, "response");
        setUserEmail(response?.data?.email);
        setUserName(response?.data?.fullName);
        setUserRole(response?.data?.role);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    useEffect(() => {
      fetchUser();
    },[]);

    const handleSubmit = (e) => {
      let token=localStorage.getItem("token");
      setIsLoading(true)
      e.preventDefault();
    const data={
      "fullName": userName,
      "email":userEmail,
      "role":userRole,
    }
      axios({
        method:"PUT",
        url:`https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/update/${tourId}`  ,
        data: data,
        headers:{
            "content-type":"application/json",
            Authorization:`Bearer ${token}`
        }
    }
    ).then((response)=>{
        console.log(response);
            toast.success("User-updated successfully");
            setIsLoading(false)
            setTimeout(()=>{
            Navigate("/Dashboard/Users");
          },3000);
    }).catch((error)=>{
        console.log(error);
        toast.error(error.message);
        setIsLoading(false)
    });
};
return (
    <div className='useredit'>
        <form
          id="form">
          <h2 >Edit User</h2>
              <label>User's Email</label>
              <input
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                type="text"
                 placeholder="Enter user's email"
              />

              <label> User's Name</label>
              <input
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                type="text"
                 placeholder="Enter your user's name"
              />
              <label>User's Role</label>
              <input
                value={userRole}
                onChange={(e) => {
                  setUserRole(e.target.value);
                }}
                type="text"
                id="name1"
                placeholder="Enter your user role"
              />
            <button
              onClick={handleSubmit}
              type="submit"
               >
              {isLoading? "Editing..":"edit"}
            </button>
            <ToastContainer/>
        </form>
    </div>
  );
};


export default EditUser
