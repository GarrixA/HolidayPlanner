import React from 'react'
import './Dashboard.css';
import image2 from '../../images/logo-s.png';
import {MdOutlineArrowBackIosNew} from 'react-icons/md';
import {FaUsers} from'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';
import { FaPlaneDeparture } from 'react-icons/fa';
import {RxDashboard} from 'react-icons/rx';
import {LuLogOut} from 'react-icons/lu';
import { Link } from 'react-router-dom';

function Left() {
  return (
    <>
        <div className="left-dash">
                <span className='back'><MdOutlineArrowBackIosNew/><Link to={'/'}> Back </Link></span>  
                <div className="dash-image">
                    <img src={image2} alt="img" />
                </div>
                <div className="main-menu">
                    <h1>MAIN MENU</h1>
                </div>
                <div className="components">
                    <h2 className='board-icons'><RxDashboard className='icon1'/> <Link to={'Chart'}>Dashboard</Link></h2>    
                    <h2 className='board-icons'><FaPlaneDeparture className='icon1'/> <Link to={'./Tours'}>Tours</Link></h2>    
                    <h2 className='board-icons'><FaCalendarCheck className='icon1'/> <Link to={'Bookings'}>Bookings</Link></h2>    
                    <h2 className='board-icons'><FaUsers className='icon1'/> <Link to={'Users'}>Users</Link></h2>    
                </div> 
                <div className="logout">
                    <h2 className='logout'><LuLogOut style={{color: '#c29d59'}}/> Log out</h2>
                </div>
        </div>
    </>
  )
}

export default Left
