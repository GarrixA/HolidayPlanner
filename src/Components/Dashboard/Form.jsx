import React from 'react';
import { useState } from 'react';
import './Form.css'

function Form() {
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () =>{
        setOpenModal(!openModal);
    }
    return (
        <>
        
           <button className='open-modal' onClick={toggleModal}>
                    Add Tour
                </button>
            {openModal && (
                <div className="modal">
                <div className="modal-contents">
                <button onClick={toggleModal} className='close-modal'>X</button>
                    <h1>Boook your future tour</h1>
                   <form>
                    <label>Tour Image</label>
                    <input type="File" />
                    <label>Destination</label>
                    <input type="text" placeholder='eg: Kigali'/>
                    <label>Duration</label>
                    <input type="text" placeholder='eg: 12 weeks'/>
                    <label>Group size</label>
                    <input type="number" placeholder='eg: 25'/>
                    <label>Price</label>
                    <input type="number"  placeholder='price is in $ '/>
                    <input type="submit" className='submit-button'/>
                   </form>
                </div>
                
            </div>
            )}
            
        </>
    )
}

export default Form
