import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Edit.css';
import { useNavigate, useParams, Link } from 'react-router-dom';


function Edit() {
    const Navigate = useNavigate();
    const params = useParams();
    const [isLoading, setIsLoading] = useState();

    let tourId = params.id;

    const [destination, setDestination] = useState('');
    const [Duration, setDuration] = useState('');
    const [GroupSize, setGroupsize] = useState('')
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    const fetchTour = () => {
        let token = localStorage.getItem("token");
        axios({
          method: "GET",
          url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/getElement?fieldName=_id&value=${tourId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setDestination(response?.data?.destination);
            setDuration(response?.duration);
            setGroupsize(response?.data?.GroupSize);
            setPrice(response?.data?.Price);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      useEffect(() => {
        fetchTour();
      }, []);

      const handleImage = (e) => {
        e.preventDefault();
        console.log(e.target.files, "file");
        setImage(e.target.files[0]);
      };
      const handleEdit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        let token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("backdropImage", image);
        formData.append("destination", destination);
        formData.append("duration", Duration);
        formData.append("GroupSize", GroupSize);
        formData.append("Price", price);

        axios({
          method: "PUT",
          url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/update/${tourId}`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setIsLoading(false)
            console.log(response);
            toast.success(response.data.message);
            setTimeout(() => {
              Navigate("/Dashboard/Tours");
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
            setIsLoading(false)
          });
      };

    return (
        <>
        <ToastContainer/>
                <div className="edit-tour">

                   <form>
                   <h1>Let's update some</h1>
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
                    <button className='sub-button' onClick={handleEdit}>
                      {isLoading? "Updating...": "Update"}
                    </button>
                   </form>
                </div>
        </>
    )
}

export default Edit
