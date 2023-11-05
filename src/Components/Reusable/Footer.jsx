import React from 'react';
import './Footer.css';
import imageX from '../../images/logo-s.png';
import image13 from '../../images/payment-companies-logo.png'
import { Link } from 'react-router-dom';
import {BsTwitter} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import {BsFacebook} from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer'>
        <div className="main-holiday">
            <div className="footer-holiday">
                <img src={imageX} alt="img" />
                <div className="parag">
                    <p>Far far away, behind the word mountains, 
                        far from the countries Vokalia and Consonantia, 
                        there live the blind texts. Separated they live in 
                        Bookmarksgrove right at the coast of the Semantics, 
                        a large language ocean. A small river named Duden flows 
                        by their place and supplies it with the necessary regelialia. 
                    </p>
                </div>
                <div className="submit">
                    <input type="text"  placeholder='Enter Your Email'/>
                    <button>Submit</button>
                </div>
                <div className="payments">
                    <img src={image13} alt="img" />
                </div>
            </div>


            <div className="navigation">
                <h1>Navigation</h1>
                <hr style={{width: '', height: '0'}}/>
                <div className="navs">
                    <Link to={'./Home'}><span>Home</span></Link> 
                    <Link to={'./About'}> <span>About</span></Link>
                    <Link><span>Destination</span></Link>
                    <Link to={'./TourList'}><span>Tour</span></Link>
                    <Link><span>Blog</span></Link>
                    <Link to={'./Contacts'}><span>Contact us</span></Link>
                </div>
            </div>
            <div className="help">
                <h1>Need Help?</h1>
                <hr style={{height: '0'}}/>
                <div className="helping">
                    <div className="wrap">
                        <div className="line">
                        </div>
                        <div className="contents">
                            <p>Call Us</p>
                            <h3> +123 456 7890</h3>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="line">
                        </div>
                        <div className="contents">
                            <p>Email for us</p>
                            <h3> holidayplanners@gmail.com</h3>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="line">
                        </div>
                        <div className="contents">
                            <p>Location</p>
                            <h3> Main street victoria zoom</h3>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="line">
                        </div>
                        <div className="contents" >
                            <p>Follow us</p>
                            <span><BsFacebook/></span>
                            <span><GrInstagram /></span>
                            <span><BsTwitter/></span>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
        <hr style={{
            height: '0px',
            width: '100%',
            marginTop: '20px',
        }}/>
    </div>
  )
}

export default Footer
