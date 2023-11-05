import React, { useState } from 'react';
import './Dashboard.css';
import {GiMoon} from 'react-icons/gi';
import image2 from '../../images/logo-s.png';
import {MdOutlineArrowBackIosNew} from 'react-icons/md';
import {FaUsers} from'react-icons/fa';
import { FaCalendarCheck } from 'react-icons/fa6';
import { FaPlaneDeparture } from 'react-icons/fa';
import {RxDashboard} from 'react-icons/rx';
import {LuLogOut} from 'react-icons/lu';
import { Link } from 'react-router-dom';
import imag1 from '../../images/prof.png';
import { Outlet } from 'react-router-dom';
import {FiMenu} from 'react-icons/fi';
import Left from './Left';

function Dashbord() {
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () =>{
        setOpenModal(!openModal);
    }
    return (
        <>
        <div className='dashboard'>
        <Left/>
            <div className="right-dash">
                <div className="top-body">
                     <FiMenu onClick={toggleModal} className='dash-menu'/> 
                    <h1>Hi Aphrodis !</h1>
                    <div className="dash-profile">
                        <GiMoon className='dash-icon'/>
                        <img src={imag1} alt="img" />
                    </div>
                </div>
                <Outlet/>
                
            </div>
            {openModal && (
                <div className="m-overlay">
                     <div className="left-dash">
                        <div className="backs">
                        <span className='back' onClick={toggleModal}><MdOutlineArrowBackIosNew/><Link to={' '}></Link></span>
                        <Link className='go-home' to={'/'}><p>Go back home</p></Link>  
                        </div>
                        <div className="dash-image">
                            <img src={image2} alt="img" />
                        </div>
                        <div className="main-menu">
                            <h1>MAIN MENU</h1>
                        </div>
                        <div className="components">
                            <h2 className='board-icons' onClick={toggleModal}><RxDashboard className='icon1'/> <Link to={'Chart'}>Dashboard</Link></h2>    
                            <h2 className='board-icons' onClick={toggleModal}><FaPlaneDeparture className='icon1'/> <Link to={'./Tours'}>Tours</Link></h2>    
                            <h2 className='board-icons' onClick={toggleModal}><FaCalendarCheck className='icon1'/> <Link to={'Bookings'}>Bookings</Link></h2>    
                            <h2 className='board-icons' onClick={toggleModal}><FaUsers className='icon1'/> <Link to={'Users'}>Users</Link></h2>    
                        </div> 
                        <div className="logout">
                            <h2 className='logout'><LuLogOut style={{color: '#c29d59'}}/> Log out</h2>
                        </div>
                    </div>
               
            </div>
            )}
            
        </div>

        </>
    )
}

export default Dashbord
