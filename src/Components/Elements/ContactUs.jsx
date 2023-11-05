import React from 'react';
import './styles/Contacts.css';
import {IoIosArrowForward} from 'react-icons/io';
import {BsTelephoneFill} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import {MdLocationOn} from 'react-icons/md';
import {MdAlternateEmail} from 'react-icons/md';
import {IoPinOutline} from 'react-icons/io5';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {FaBook} from 'react-icons/fa';
import {IoPerson} from 'react-icons/io5';
import {AiTwotonePhone} from 'react-icons/ai';
import address from '../Arrays/Address';

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
                    <div className="fullname">
                        <IoPerson className='fname'/>
                    <input type="text" placeholder='Fullname*'/>
                    </div>

                    <div className="fullname">
                        <MdEmail className='fname'/>
                    <input type="text" placeholder='Email*'/>
                    </div>

                    <div className="fullname">
                        <AiTwotonePhone className='fname'/>
                    <input type="text" placeholder='Phone*'/>
                    </div>

                    <div className="fullname">
                        <FaBook className='fname'/>
                    <input type="text" placeholder='Services*'/>
                    </div>

                    <textarea type="text" placeholder='Message'></textarea>

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
            <div className="add-map">
                <div className="address">
                {
                    address.map(addr =>(
                    <div key={addr.id} className='adr-wr'>
                        <div className="address-wrap">
                            <h2 className='wr' style={{color: 'black'}}><IoPinOutline className='titt'/> {addr.tittle}</h2>
                            <h4 className='wr'><MdLocationOn className='adr'/>{addr.address}</h4>
                            <h4 className='wr'><BsFillTelephoneFill className='phn'/>{addr.phone}</h4>
                            <p className='wr'><MdAlternateEmail className='mail'/>{addr.email}</p>
                        </div>
                    </div>
                    ))
                }
                </div>
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.754738963382!2d30.045424035609884!3d-1.9789639680499311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5e63098d97f%3A0xdaa7651b956b2af4!2sMumena%2C%20Kigali!5e0!3m2!1sen!2srw!4v1697532718538!5m2!1sen!2srw" width="600" height="450" style={{border:'0', width: '100%', height:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
