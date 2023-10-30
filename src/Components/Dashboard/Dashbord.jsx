import React from 'react';
import './Dashboard.css';
import {GiMoon} from 'react-icons/gi';
import imag1 from '../../images/prof.png';
import image2 from '../../images/logo-s.png';
import {MdOutlineArrowBackIosNew} from 'react-icons/md';
import {FaUsers} from'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';
import { FaPlaneDeparture } from 'react-icons/fa';
import {RxDashboard} from 'react-icons/rx';
import {LuLogOut} from 'react-icons/lu';
import { Link, Outlet } from 'react-router-dom';

function Dashbord() {
    return (
        <div className='dashboard'>
            <div className="left-dash">
                <span className='back'><MdOutlineArrowBackIosNew/><Link to={'/'}> Back </Link></span>  
                <div className="dash-image">
                    <img src={image2} alt="img" />
                </div>
                <div className="main-menu">
                    <h1>MAIN MENU</h1>
                </div>
                <div className="components">
                    <h2 className='board-icons'><RxDashboard className='icon1'/> <Link to={''}>Dashboard</Link></h2>    
                    <h2 className='board-icons'><FaPlaneDeparture className='icon1'/> <Link to={'./Tours'}>Tours</Link></h2>    
                    <h2 className='board-icons'><FaCalendarCheck className='icon1'/> <Link>Bookings</Link></h2>    
                    <h2 className='board-icons'><FaUsers className='icon1'/> <Link>Users</Link></h2>    
                </div> 
                <div className="logout">
                    <h2 className='logout'><LuLogOut style={{color: '#c29d59'}}/> Log out</h2>
                </div>
            </div>
            <div className="right-dash">
                <div className="top-body">
                    <h1>Hi Aphrodis !</h1>
                    <div className="dash-profile">
                        <GiMoon className='dash-icon'/>
                        <img src={imag1} alt="img" />
                    </div>
                </div>
                <Outlet/>
                
            </div>
            
        </div>
    )
}

export default Dashbord
