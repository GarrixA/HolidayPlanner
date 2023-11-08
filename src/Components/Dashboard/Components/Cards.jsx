import React, { useEffect, useState } from 'react';
import './Cards.css';
import image from '../../../images/Zebraz.jpg';
import axios from 'axios';


function Cards() {

    const [cards, setCards] = useState([]);

    useEffect(()=>{
        const fetctCards = ()=>{
            axios({
                method: 'GET',
                url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour",
                headers: {
                    "Content-Type": "Application/json",
                }
            })
            .then((response) =>{
                console.log(response);
                setCards(response.data);

            })
            .catch((error) =>{
                console.log(error);
                toast.error(error.response.data.message);
                toast.error('Fetch failed')
              })
        }
        fetctCards();
    }, []);

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
                setUsers(response.data);
                setTimeout(() => {
                    window.location.reload
                }, 3000);
            })
            .catch((error) =>{
                console.log(error);
                toast.error(error.response.data.message);
                toast.error('Fetch  user failed')
              })
        }
        fettchUsers();
    }, []);

  return (
    <div className='main-cards'>
        
        <div className="cards-wrapp">
            <div className="cards-image">
                <img src={image} alt="img" />
            </div>
            <div className="cards-details">
                <h1>{'Tours'}</h1>
                <p>{cards.length}</p>
            </div>
        </div>

        <div className="cards-wrapp">
            <div className="cards-image">
                <img src={image} alt="img" />
            </div>
            <div className="cards-details">
                <h1>{'Bookings'}</h1>
                <p>{bookings.length}</p>
            </div>
        </div>

        <div className="cards-wrapp">
            <div className="cards-image">
                <img src={image} alt="img" />
            </div>
            <div className="cards-details">
                <h1>{'Users'}</h1>
                <p>{users.length}</p>
            </div>
        </div>

                         
      
    </div>
  )
}

export default Cards
