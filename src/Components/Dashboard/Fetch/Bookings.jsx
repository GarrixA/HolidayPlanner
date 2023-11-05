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

    const fetchBookings = () =>{
    let token = localStorage.getItem("token");
    console.log(token);
    axios({
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view/",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
        console.log(response.data);
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    useEffect(() =>{
        fetchBookings();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          let token = localStorage.getItem("token");
          axios({
            url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/delete/${id}`,
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              setTimeout(() => {
                window.location.reload
            }, 3000);
              toast.success("Booking deleted successfully");
              console.log(response, "response");
            })
            .catch((error) => {
              toast.error(error.response.data.message);
              console.log(error, "error");
            });
        }
      };

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
                                    <td>{item.fullname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.date}</td>
                                    <td>{item.Ticket}</td>
                                    <td >
                                    <span className='actions'>
                                        <BsFillTrashFill onClick={() => handleDelete(item._id)} className='delete-btn'/>
                                        <Link to={`Editbookings/${item._id}`}><BsFillPencilFill /></Link>
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
