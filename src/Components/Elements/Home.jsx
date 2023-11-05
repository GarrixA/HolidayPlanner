import React from 'react';
import SlideShow from '../junction/SlideShow';
import image10 from '../../images/banner-slide-1.jpg';
import image11 from '../../images/banner-slide-2.jpg';
import image12 from '../../images/banner-slide-3.jpg';
import About from './About';
import ContactUs from './ContactUs';
import TourList from './TourList';
import './styles/Home.css';

function Home() {
    const slides = [
        {
            title: 'Enjoy the travel with',
            description: 'Holiday planners',
            comment: 'A jurney of a 100 miles starts with one single step, Important of the full demo content with one click and create a head-turning website for your travel',
            image: image10,
        },
        {
            title: 'Get Ready to travel',
            description: 'The World',
            comment: 'A jurney of a 100 miles starts with one single step, Important of the full demo content with one click and create a head-turning website for your travel',
            image: image11,
        },
        {
            title: 'Life Is Short and Also',
            description: 'The world is Wide',
            comment: 'A jurney of a 100 miles starts with one single step, Important of the full demo content with one click and create a head-turning website for your travel',
            image: image12,
        },
      ];
    return (
        <>
        <div className="container">
            <div className="main">
                <SlideShow slides={slides} />
            </div>
            <About/>
            <ContactUs/>
            <TourList/>
        </div>
        </>
    )
}

export default Home
