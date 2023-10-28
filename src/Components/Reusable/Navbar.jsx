import React from 'react';
import './navbar.css';
import {ImPhone} from 'react-icons/im';
import {MdOutlineEmail} from 'react-icons/md';
import {FaFacebookF, FaSearch} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {BsTwitter} from 'react-icons/bs';
import {TbMenuDeep} from 'react-icons/tb';
import image1 from '../../images/logo.png';

function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="black-nav">
                <div className="left">
                    <div className='email'>
                        <MdOutlineEmail className='nav-icon'/>
                        <h3>aphrogarrix10@gmail.com</h3>
                    </div>
                    <div className='phone'>
                        <ImPhone className='nav-icon'/>
                        <h3>+250789438437</h3>
                    </div>
                </div>
                <div className="right">
                    <span><FaFacebookF/></span>
                    <span className='has-line2'><GrInstagram/></span>
                    <span><BsTwitter/></span>
                </div>
            </div>
            <div className="white-nav">
                <div className="logos">
                    <img src={image1} alt="img" />
                </div>
                <div className="reserve">
                    <button>Reseve</button>
                    <FaSearch className='search'/>
                    <TbMenuDeep className='menu'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
