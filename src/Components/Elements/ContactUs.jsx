import React from 'react';
import './styles/Contacts.css';
import {IoIosArrowForward} from 'react-icons/io';
import {BsTelephoneFill} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function ContactUs() {
    return (
        <div className='contacts-container'>
            <div className="contacts-image">
                <div className="contacts-overlay">
                <h1>Contact Us</h1>
                </div>
            </div>
            <div className="contacts-body">

                <form>
                    <input type="text" placeholder='Fullname*'/>
                    <input type="text" placeholder='Email*'/>
                    <input type="text" placeholder='Phone*'/>
                    <input type="text" placeholder='Services*'/>
                    <textarea placeholder='Message*'></textarea>
                    <div className='form-btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                <div className="contacts-questions">
                    <div className="why">
                        <span><div className='line'></div> <h1>WHY BOOK WITH US?</h1></span>
                        <p className='ask'><IoIosArrowForward/>Best Price Guarantee</p>
                        <p className='ask'><IoIosArrowForward/>Customer care available 24/7</p>
                        <p className='ask'><IoIosArrowForward/>Free Travel Insureance</p>
                        <p className='ask'><IoIosArrowForward/>Hand-picked Tours & Activities</p>
                    </div>
                        <div className="question">
                            <span><div className='line'></div> <h1>GOT A QUESTION?</h1></span>
                            <p className='quest'>Do not hesitage to give us a call. <br/> We are an expert team and we are happy to talk to you.</p>
                            <p className='quest'><MdEmail/>holidayplanners@gmail.com</p>
                            <p className='quest'><BsTelephoneFill/>+250789438437</p>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactUs
