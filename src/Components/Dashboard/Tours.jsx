import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import './Tours.css'
import { useEffect } from 'react';
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Tours() {
    const [tours, setTours] = useState([]);
    
    console.log(tours)
    useEffect(()=>{
        const fetctTour = ()=>{
            axios({
                method: 'GET',
                url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour",
                headers: {
                    "Content-Type": "Application/json",
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
        <> 
            <Form/> 
            <div className="table-wrapper">
                <h1>Tours</h1>
            <div className="table">
                <ToastContainer/>
                <table>
                    <thead>
                        <tr>
                            <th>Tour Image</th>
                            <th>Destination</th>
                            <th>Duration</th>
                            <th>Group size</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tours.map((t, idx) =>{
                                return <tr key={idx}>
                                    <td><img src={t.backdropImage} alt="img" 
                                        className='backdrop'
                                    /></td>
                                    <td>{t.destination}</td>
                                    <td>{t.Duration}</td>
                                    <td>{t.GroupSize}</td>
                                    <td style={{opacity: '.6'}}>$ {t.Price}</td>
                                    <td >
                                    <span className='actions'>
                                        <BsFillTrashFill className='delete-btn' />
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
        
        </>
    )
}

export default Tours