import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../Tours.css'
import { useEffect } from 'react';
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);
    
    console.log(users)
    useEffect(()=>{
        const fettchUsers = ()=>{
            axios({
                method: 'GET',
                url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
                headers: {
                    "Content-Type": "Application/json",
                }
            })
            .then((response) =>{
                console.log(response);
                setUsers(response.data)
                toast.success("User Added")
            })
            .catch((error) =>{
                console.log(error);
                toast.error(error.response.data.message);
                toast.error('Fetch  user failed')
              })
        }
        fettchUsers();
    }, []);

    // Delete
    // const handleDelete = (id) => {
    //     if (window.confirm("Are you sure you want to delete?")) {
    //       let token = localStorage.getItem("token")
    //       axios({
    //         url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/deleteAll?fieldName=_id&value=${id}`,
    //         method: "DELETE",
    //         headers: {
    //           Authorization: `Bearer ${token}`
    //         },
    //       }).then((response) => {
    //         toast.success("Item deleted successfully")
    //         console.log(response, "Response")
    //       }).catch((error) => {
    //         toast.error(error.response.data.message)
    //         console.log(error, "Error")
    //       })
    //     }
    //   }
  return (
    <div className="table-wrapper">
                <h1>Users</h1>
            <div className="table">
                <ToastContainer/>
                <table>
                    <thead>
                        <tr>
                            <th>User email</th>
                            <th>User name</th>
                            <th>User Phone</th>
                            <th>User Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, idx) =>{
                                return <tr key={idx}>
                                    <td>{item.email}</td>
                                    <td>{item.fullName}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.location}</td>
                                    <td >{item.role}</td>
                                    <td >
                                    <span className='actions'>
                                        <BsFillTrashFill onClick={() => handleDelete(item._id)} className='delete-btn'/>
                                        <Link to={`Edit/${item._id}`}><BsFillPencilFill /></Link>
                                    </span>
                                </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                
            </div>
            </div>
  )
}

export default Users
