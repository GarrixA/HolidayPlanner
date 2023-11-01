import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../Tours.css'
import { useEffect } from 'react';
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Bookings() {
    const [bookings, setBookings] = useState([]);
    
    console.log(bookings)
    useEffect(()=>{
        const fetchBookings = ()=>{
            axios({
                method: 'POST',
                url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/create",
                headers: {
                    "Content-Type": "Application/json",
                }
            })
            .then((response) =>{
                console.log(response);
                setBookings(response.data)
                toast.success("well done")
            })
            .catch((error) =>{
                console.log(error);
                toast.error(error.response.data.message);
                toast.error('Fetch booking failed')
              })
        }
        fetchBookings();
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
                <h1>Bookings</h1>
            <div className="table">
                <ToastContainer/>
                <table>
                    <thead>
                        <tr>
                            <th>Full name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Date</th>
                            <th>Number of tickets</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((item, idx) =>{
                                return <tr key={idx}>
                                    <td>{item.fullName}</td>
                                    <td>{item.destination}</td>
                                    <td>{item.Duration}</td>
                                    <td>{item.GroupSize}</td>
                                    <td>{item.Ticket}</td>
                                    <td >
                                    <span className='actions'>
                                        <BsFillTrashFill onClick={() => handleDelete(t._id)} className='delete-btn'/>
                                        <Link to={`Edit/${t._id}`}><BsFillPencilFill /></Link>
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

export default Bookings
