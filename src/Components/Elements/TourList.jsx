import React, { useEffect } from 'react';
import './styles/Tourlist.css';
import {BiSolidDownArrow} from 'react-icons/bi';
import {BsFillClockFill} from 'react-icons/bs';
import { MdGroup } from 'react-icons/md';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import tour from '../Arrays/Tour';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function TourList() {

    // const Navigate = useNavigate();

    const [tours, setTours] = useState([]);
    
    console.log(tours)
    useEffect(()=>{
        const fetctTour = ()=>{
            axios({
                method: 'GET',
                url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((response) =>{
                console.log(response);
                setTours(response.data)
                toast.success("well done")
            })
            .catch((error) =>{
                console.log(error);
                toast.error(error.response.data.message);
                toast.error('Fetch failed')
              })
        }
        fetctTour();
    }, []);

    return (
        <div className='main-tourlist'>
            <div className="tourlist-image">
                <h1>Tour List</h1>
            </div>
            <div className="showlist">
                <span className='left-list'>Sort by:</span>
                <span className='middle-list'>Realese date <BiSolidDownArrow/></span>
                <span className='right-list'>Descending <BiSolidDownArrow/></span>
            </div>
            <div className="tours">
                <div className='tourlist-container'>
                
                        <div className='tourlist'>
                        {
                                    tours.map((item, idx) =>{
                                        return <div className="tour-cards" key={idx}>
                                
                                        <div className='tour-image'>
                                            <img src={item.backdropImage} alt="img" />
                                        </div>
                                        <h4 className='tour-italy'>{item.Title}</h4>
                                        <h2 className='holiday'>Holiday Planners is a World Leading Online Tour Booking Platform</h2>
                                        <p className='holiday-description'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
                                            <div className='tour-duration'>
                                                <div className='tour-wrapper'>
                                                    <div className="tour-partone">
                                                    <h3 ><BsFillClockFill />{item.Duration}</h3>
                                                    <p>{item.Seats}</p>
                                                    </div>
                                                    <div className="tour-partone">
                                                    <h3 ><MdGroup />{item.GroupSize}</h3>
                                                    <p></p>
                                                    </div>
                                                </div>
        
                                                <div className='tour-book'>
                                                    <h3>{item.Price}</h3>
                                                    <Link to={`Tourlist/SingleTour/${item._id}`}> <button
                                                     
                                                        >Book Now</button></Link>
                                                </div>
                                            </div>
                                    </div>
                                    })
                                }
                            
                        </div>
                   
                </div>

                <div className="find">
                    <div className="text">
                        <div className="lin"></div>
                        <h1>Find your tour</h1>
                    </div>

                    <div className="inputs">
                        <input type="text"  placeholder='Search a tour'/>
                        <input type="text" placeholder='where to?'/>
                        <p className='side' >Month <BiSolidDownArrow/></p>
                        <h1 >Duration</h1>
                        <p className='side'>Any <BiSolidDownArrow/></p>
                    </div>
                    
                    <div className="mins">
                        <div className="min">
                            <h1>Min Price</h1>
                            <input type="number" placeholder='1'/>
                        </div>
                        <div className="max">
                            <h1>Max Price</h1>
                            <input type="number" placeholder='100'/>
                        </div>
                    </div>
                    <div className="box">
                        <input type="checkbox" className='check'/>
                        <label >Cultural</label>
                    </div>
                    <div className="box" >
                        <input type="checkbox" className='check'/>
                        <label >Adventure</label>
                    </div>
                    <div className="box" >
                        <input type="checkbox" className='check'/>
                        <label >Historical</label>
                    </div>
                    <div className="box" >
                        <input type="checkbox" className='check'/>
                        <label >Seaside</label>
                    </div>
                    <div className="box" >
                        <input type="checkbox" className='check'/>
                        <label >Discovery</label>
                    </div>

                    <button >Find Now</button>
                </div>
            </div>
        </div>
    )
}

export default TourList