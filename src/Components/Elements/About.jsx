import React from 'react';
import './styles/About.css';
import {MdLocationPin} from 'react-icons/md';
import { FaCalendarDays } from 'react-icons/fa6';
import {FaFlag} from 'react-icons/fa6';
import {BiSolidDownArrow} from 'react-icons/bi';
import image20 from '../../images/about-big-image.jpg';
import image21 from '../../images/about-small-image.jpg';
import image22 from '../../images/plann.png';


function About() {
    return (
        <div className='main-about'>
            <div className="about-top">
                <span>
                    <div className='about-go'>
                    <MdLocationPin className='about-icon'/> When to go?        
                    </div>
                </span>
                <span>
                    <div className='about-go'>
                    <FaCalendarDays className='about-icon'/>When?
                    </div> <BiSolidDownArrow className='about-arrow'/></span>
                <span>
                    <div className='about-go'>
                    <FaFlag className='about-icon'/>Travel type
                    </div>
                    <BiSolidDownArrow className='about-arrow'/></span>
                <button>Find more</button>
            </div>
            <div className="about-contents">
                <div className="about-images">
                    <img src={image22} alt="imag" className='hiden'/>
                    <img src={image20} alt="ima" className='back-image'/>
                    <img src={image21} alt="img" className='front-image'/>
                </div>
                <div className="about-read">
                    <span><div className='about-line'></div> <h1>About us</h1></span>
                    <h2>Plan Your Trip with Us</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline</p>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default About
