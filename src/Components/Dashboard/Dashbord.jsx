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
import Left from './Left';

function Dashbord() {
    return (
        <>
        <div className='dashboard'>
        <Left/>
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

        </>
    )
}

export default Dashbord
