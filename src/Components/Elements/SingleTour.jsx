import React, { useEffect, useState } from 'react';
import './styles/Singletour.css';
import {FaInfoCircle} from 'react-icons/fa';
import {FaBookOpen} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import {FaCameraRetro} from 'react-icons/fa';
import {HiUserGroup} from 'react-icons/hi';
import {BsFillClockFill} from 'react-icons/bs';
import {FaUserGroup} from 'react-icons/fa6';
import {BsFillPersonPlusFill} from 'react-icons/bs';
import {FaSun} from 'react-icons/fa6';
import video from '../../images/video.mp4';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function SingleTour() {

  const params = useParams();
    let tourId = params.id;
    const [backdropImage, setBackdropImage] = useState();
    const [destinationImage, setDestinationImage] = useState();
    const [destination, setDestination] = useState();
    const [Title, setTitle] = useState();
    const [Description, setDescription] = useState();
    const [Duration, setDuration] = useState();
    const [GroupSize, setGroupSize] = useState();
    const [Price, setPrice] = useState();
    const fetchTour = () => {
      let token = localStorage.getItem("token");
      axios({
        method: "GET",
        url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          setDestinationImage(response?.data?.backdropImage);
          setDestination(response?.data?.destination);
          setTitle(response?.data?.Title);
          setDescription(response?.data?.Description);
          setDuration(response?.data?.Duration);
          setGroupSize(response?.data?.GroupSize);
          setPrice(response?.data?.Price);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    useEffect(() => {
      fetchTour();
    }, []);

  return (
    <div className='main'>
          <div className="top-part"
            style={{backgroundImage: `url(${destinationImage})`}}
          >
            <h1 style={{fontSize: '6rem', color: "#fff"}}>{Title}</h1>
          </div>
              <div className="left">
                <div className="inform">
                  <p className='sides' style={{borderTopLeftRadius: '4px', borderBottomLeftRadius: '4px', backgroundColor: '#c29d59', border: '1px solid #c29d59'}}><FaInfoCircle color='#000' fontSize="1.5rem"/>information</p>
                  <p className='middles'><FaBookOpen color='#c29d59' fontSize="1.5rem"/>Tour Plan</p>
                  <p className='sides'><MdLocationOn color='#c29d59' fontSize="1.5rem"/>Location</p>
                  <p className='middles'><FaCameraRetro color='#c29d59' fontSize="1.2rem"/>Gallery </p>
                  <p className='sides' style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}}><HiUserGroup color='#c29d59' fontSize="1.5rem"/>Reviews</p>
                </div>
              </div>
              <div className='holder'>
              <div className="page-details">
                <div className="top-wrap">
                  <h1>A wonderful serenity has taken possession of my entire soul</h1>
                  <div className="shades">
                    <div className="circle">
                      <h1>$ {Price}</h1>
                      <hr />
                      <h5>Per Person</h5>
                    </div>
                    <div className="rect">
                      <p>22%</p>
                      <h2>Off</h2>
                    </div>
                  </div>
                </div>
                <div className="profiles">
                    <p className='sub-prof'><BsFillClockFill color='white' size='1.4rem'/>2 days</p>
                    <p className='sub-prof'><FaUserGroup color='white' size='1.4rem'/>6 people</p>
                    <p className='sub-prof'><BsFillPersonPlusFill color='white' size='1.7rem'/>18</p>
                    <p className='sub-prof'><MdLocationOn color='white' size='1.7rem'/>Greece</p>
                    <p className='sub-prof' ><FaSun color='white' size='1.5rem'/>Discovery</p>
                </div>
                  <p className='text-s'>I should be incapable of drawing a single stroke at the present moment; 
                    and yet I feel that I never was a greater artist than now. 
                    When, while the lovely valley teems with vapour around me, 
                    and the meridian sun strikes the upper surface of the impenetrable 
                    foliage of my trees, and but a few stray gleams.
                  </p>

                  <p className='text-s'>
                    I should be incapable of drawing a single stroke at the present moment; 
                    and yet I feel that I never was a greater artist than now.
                    When, while the lovely valley teems with vapour around me, 
                    and the meridian sun strikes the upper surface of the impenetrable 
                    foliage of my trees, and but a few stray gleams steal into the inner sanctuary, 
                    I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, 
                    a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, 
                    and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence 
                    of the Almighty, who formed us in his own image, and the breath
                  </p>
                  <div className="video">
                    <video src={video} autoPlay loop muted width="100%"/>
                  </div>
              </div>
            
              <div className="rights">
              <h1 style={{color: 'black'}}>BOOK THIS TOUR</h1>
                <div className="inputs">
                
                <input type="text" placeholder='fullname' required/>
                <input type="text" placeholder='email' required/>
                <input type="text" placeholder='confirm email' required/>
                <input type="text" placeholder='phone'/>
                <input type="date" />
                <input type="number" placeholder='number of tickets'/>
                <textarea type="text" placeholder='message' style={{width: '84%', height: '6rem'}}></textarea>
                <div className="box" style={{display: 'flex'}}>
                  <input type="checkbox" style={{width: '70px', marginLeft: '1.5rem'}}/>
                  <label >Check Availability</label>
                </div>
                <button className='booknow'>BOOK NOW</button>
                </div>
              </div>
            </div>
    </div>
  )
}

export default SingleTour