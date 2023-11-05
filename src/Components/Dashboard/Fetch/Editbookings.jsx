import React, { useEffect, useState } from "react"; // Import React and useEffect from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import './Editbookings.css'
const Editbooking = () => {
  const navigate = useNavigate();
  const params = useParams();
  let tourId = params.id;
  const [fullName, setFullName] = useState("");
  const [bookEmail, setBookEmail] = useState("");
  const [bookPhone, setBookPhone] = useState("");
  const [bookTicket, setBookTicket] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [isLoading, setIsLoading] = useState();
  

  const fetchBook = () => {
    console.log(tourId);

    let token = localStorage.getItem("token");
    axios({
      method: "GET",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/${tourId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setFullName(response?.data?.fullname);
        setBookEmail(response?.data?.email);
        setBookPhone(response?.data?.phone);
        setBookTicket(response?.data?.ticket);
        setBookDate(response?.data?.date);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchBook();
  }, []);
  
  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data ={
      tourId: tourId,
      fullname: fullName,
      email: bookEmail,
      phone: bookPhone,
      date: bookDate,
      numberOfTickets: bookTicket,
    }
    let token = localStorage.getItem("token");
    axios({
      method: "PUT",
      url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/update/${tourId}`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setIsLoading(false)
        toast.success("Booking updated")
        setTimeout(() => {
          navigate(`/Dashboard/Bookings`);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        setIsLoading(false)
      });
  };
  return (
      <div className="edit-book">
        <ToastContainer />
        <form>
          <h1>Edit Booking</h1>
          <label >Fullname</label>
          <input
            type="text"
            placeholder="fullname"
            value={fullName}
            onChange={(e) => 
              setFullName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={bookEmail}
            onChange={(e) => 
              setBookEmail(e.target.value)}
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            placeholder="phone"
            value={bookPhone}
            onChange={(e) => 
              setBookPhone(e.target.value)}
          />
          <label htmlFor="ticket">Number of tickets</label>
          <input
            type="text"
            placeholder="ticket"
            value={bookTicket}
            onChange={(e) => 
              setBookTicket(e.target.value)}
          />
           <label htmlFor="ticket">Date</label>
          <input
            type="date"
            placeholder="date"
            value={bookDate}
            onChange={(e) => 
              setBookDate(e.target.value)}
          />
          <button onClick={handleForm}>{isLoading? "updating..." : "update"}</button>
        </form>
      </div>
  );
};
export default Editbooking;