import React from 'react';
import { useState } from 'react';
import './Form.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
    const [isLoading, setIsLoading] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [price, setPrice] = useState("");
    const [destination, setDestination] = useState("");
    const [Duration, setDuration] = useState("");
    const [image, setImage] = useState("");
    const [GroupSize, setGroupsize] = useState("");
    const [tourID, setTourID] = useState("");
    const [TourType, setTourType] = useState("");
    const [Departure, setDeparture] = useState("");
    const [Seats, setSeats] = useState("");
    const [fromMonth, setFromMonth] = useState("");
    const [toMonth, setToMonth] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [ReturnTime, setReturnTime] = useState("");
    const [Discount, setDiscount] = useState("");

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
    formData.append("tourID", tourID);
    formData.append("TourType", TourType);
    formData.append("Departure", Departure);
    formData.append("Seats", Seats);
    formData.append("fromMonth", fromMonth);
    formData.append("toMonth", toMonth);
    formData.append("departureTime", departureTime);
    formData.append("ReturnTime", ReturnTime);
    formData.append("Discount", Discount);

    const handleForm = (e) => {
      setIsLoading(true);
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
        toast.success("Tour added successfully")
        setIsLoading(false);
        setTimeout(() => {
          toggleModal();
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error("please fill the empty fields")
        setIsLoading(false);
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
                    
                   <form>
                   <h1>Create a future tour</h1>
                      <div className="wraping">
                          <label className='labels'>Tour Image</label>
                          <input name='image' type="File" 
                              onChange={(e) => handleImage(e)}
                          />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Destination</label>
                        <input type="text" placeholder='eg: Kigali'
                            value={destination} 
                            onChange={(e) => {
                              setDestination(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Duration</label>
                        <input type="text" placeholder='eg: 12 weeks'
                            value={Duration} 
                            onChange={(e) => {
                              setDuration(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Group size</label>
                        <input type="number" placeholder='eg: 25'
                            value={GroupSize} 
                            onChange={(e) => {
                              setGroupsize(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Price</label>
                        <input type="number"  placeholder='price is in $ '
                            value={price} 
                            onChange={(e) => {
                              setPrice(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Descount</label>
                        <input type="text"  placeholder='Descount '
                            value={Discount} 
                            onChange={(e) => {
                              setDiscount(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Tour type</label>
                        <input type="text"  placeholder='Your tour type '
                            value={TourType} 
                            onChange={(e) => {
                              setTourType(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Departure</label>
                        <input type="text"  placeholder='Your departure '
                            value={Departure} 
                            onChange={(e) => {
                              setDeparture(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Seats</label>
                        <input type="number"  placeholder='Number of seats'
                            value={Seats} 
                            onChange={(e) => {
                              setSeats(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>For month</label>
                        <input type="text"  placeholder='For month'
                            value={fromMonth} 
                            onChange={(e) => {
                              setFromMonth(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>To Month</label>
                        <input type="number"  placeholder='To which month'
                            value={toMonth} 
                            onChange={(e) => {
                              setToMonth(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Departure time</label>
                        <input type="text"  placeholder='When is your departure '
                            value={departureTime} 
                            onChange={(e) => {
                              setDepartureTime(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Return time</label>
                        <input type="text"  placeholder='When are you gong to return '
                            value={ReturnTime} 
                            onChange={(e) => {
                              setReturnTime(e.target.value);
                            }}
                        />
                      </div>

                      <div className="wraping">
                        <label className='labels'>Tour Id</label>
                        <input type="text"  placeholder='Your tour Id '
                            value={tourID} 
                            onChange={(e) => {
                              setTourID(e.target.value);
                            }}
                        />
                      </div>

                    <div className="wraping"></div>
                      <button className='submit-button' onClick={handleForm}>{isLoading? "Adding..." : "Add"}</button>
                   </form>
                </div>
                <ToastContainer/>
            </div>
            )}
            
        </>
    )
}

export default Form
