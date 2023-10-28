import React from 'react';
import './styles/About.css';
import {MdLocationPin} from 'react-icons/md';
import { FaCalendarDays } from 'react-icons/fa6';
import {FaFlag} from 'react-icons/fa6';
import {BiSolidDownArrow} from 'react-icons/bi';


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
        </div>
    )
}

export default About
