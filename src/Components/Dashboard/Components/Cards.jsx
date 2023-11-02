import React from 'react';
import './Cards.css';
import image from '../../../images/zebra.png';
const cards = [
    {
        image: image,
        title: 'Tours',
        quant: '123',
    },{
        image: image,
        title: 'Bookings',
        quant: '123',
    },{
        image: image,
        title: 'Users',
        quant: '123',
    }
]

function Cards() {
  return (
    <div className='main-cards'>
        {
            cards.map((item, idx) =>{
                return <div className="cards-wrapp">
                    <div className="cards-image">
                        <img src={item.image} alt="img" />
                    </div>
                    <div className="cards-details">
                        <h1>{item.title}</h1>
                        <p>{item.quant}</p>
                    </div>
                </div>
            })
        }
      
    </div>
  )
}

export default Cards
