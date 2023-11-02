import React from 'react';
import { useState } from 'react';
import './Form.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
    const [openModal, setOpenModal] = useState(false);
    const [price, setPrice] = useState("");
    const [destination, setDestination] = useState("");
    const [Duration, setDuration] = useState("");
    const [image, setImage] = useState("");
    const [GroupSize, setGroupsize] = useState("");
    const handleImage = (e) => {
        e.preventDefault();
        console.log(e.target.files, "file");
        setImage(e.target.files[0]);
    };
    const formData = new FormData();
    formData.append("backdropImage", image);
    formData.append("Duration", Duration);
    formData.append("destination", destination);
    formData.append("GroupSize", GroupSize);
    formData.append("Price", price);
    const handleForm = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour/create",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setTimeout(() => {
          toggleModal();
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

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
                    <input name='image' type="File" 
                        onChange={(e) => handleImage(e)}
                    />
                    <label>Destination</label>
                    <input type="text" placeholder='eg: Kigali'
                        value={destination} 
                        onChange={(e) => {
                          setDestination(e.target.value);
                        }}
                    />
                    <label>Duration</label>
                    <input type="text" placeholder='eg: 12 weeks'
                        value={Duration} 
                        onChange={(e) => {
                          setDuration(e.target.value);
                        }}
                    />
                    <label>Group size</label>
                    <input type="number" placeholder='eg: 25'
                        value={GroupSize} 
                        onChange={(e) => {
                          setGroupsize(e.target.value);
                        }}
                    />
                    <label>Price</label>
                    <input type="number"  placeholder='price is in $ '
                        value={price} 
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                    />
                    <input type="submit" className='submit-button' onClick={handleForm}/>
                   </form>
                </div>
                <ToastContainer/>
            </div>
            )}
            
        </>
    )
}

export default Form
