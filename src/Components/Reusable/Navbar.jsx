import React from 'react';
import './navbar.css';
import {ImPhone} from 'react-icons/im';
import {MdOutlineEmail} from 'react-icons/md';
import {FaFacebookF, FaSearch} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {BsTwitter} from 'react-icons/bs';
import {TbMenuDeep} from 'react-icons/tb';
import image1 from '../../images/logo.png';
import image2 from '../../images/10002.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import image3 from '../../images/plann.png'

function Navbar( ) {

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () =>{
        setOpenModal(!openModal);
    }

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
                    <TbMenuDeep className='menu' onClick={toggleModal}/>

                {openModal && (
                    
                    <div className="overlay">
                        
                    <div className="modal-content">
                    <img src={image3} alt="img" className='image'/>
                        <div className="top-menu">
                            <img src={image2} alt="img" />
                            <button className='closeModal' onClick={toggleModal}>
                                X
                            </button>
                        </div>

                        <div className="bottom-menu">
                            <div className="menu-links">
                                <span><Link>Home</Link></span>
                                <span><Link>About</Link></span>
                                <span><Link>Contact us</Link></span>
                                <span><Link>Amazing tours</Link></span>
                                <span><Link>Dashboard</Link></span>
                            </div>
                            <div className="menu-socials">
                                <span><FaFacebookF/></span>
                                <span ><GrInstagram/></span>
                                <span><BsTwitter/></span>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                )}
            </div>
                </div>
            </div>
        
    )
}

export default Navbar
