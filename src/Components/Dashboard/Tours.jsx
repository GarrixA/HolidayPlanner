import React, { useState } from 'react';
import Form from './Form';
import axios from 'axios';
import './Tours.css'
import { useEffect } from 'react';
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { PuffLoader }  from 'react-spinners';

function Tours() {
    const [tours, setTours] = useState([]);

    const [load, setLoad] = useState(false);

    const [bookPageNumber, setBookPageNumber] = useState(0);
    const booksPerPage = 5;
    const bookVisited = bookPageNumber * booksPerPage;
    console.log(booksPerPage);
    const bookingDisplay = tours
    .slice(bookVisited, bookVisited + booksPerPage)
    .map((t, idx) =>{
        return <tr key={idx}>
            <td><img className='backdrop' src={t.backdropImage} alt=""/></td>
            <td>{t.destination}</td>
            <td>{t.Duration}</td>
            <td>{t.GroupSize}</td>
            <td style={{color: 'grey'}}>$ {t.Price}</td>
            <td>
            <span className='actions'>
                <BsFillTrashFill onClick={() => handleDelete(t._id)} className='delete-btn'/>
                <Link to={`Edit/${t._id}`}><BsFillPencilFill /></Link>
            </span>
        </td>
        </tr>
    })

    const handlePageChange = (selected) =>{
        setBookPageNumber(selected?.selected)
        console.log(selected, "selected")
        console.log(booksPerPage, "bPP")
      }
    
    console.log(tours)
    useEffect(()=>{
        const fetctTour = ()=>{
            setLoad(true)
            axios({
                method: 'GET',
                url: "https://holiday-planner-4lnj.onrender.com/api/v1/tour",
                headers: {
                    "Content-Type": "Application/json",
                }
            })
            .then((response) =>{
                console.log(response);
                setTours(response.data);
                setTimeout(()=>{
                    setLoad(false)
                    setTours(response.data);
                }, 3000)
            })
            .catch((error) =>{
                console.log(error);
                toast.error(error.response.data.message);
                toast.error('Fetch failed')
              })
        }
        fetctTour();
    }, []);

    // Delete
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          let token = localStorage.getItem("token")
          axios({
            url: `https://holiday-planner-4lnj.onrender.com/api/v1/tour/deleteAll?fieldName=_id&value=${id}`,
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`
            },
          }).then((response) => {
            toast.success("Item deleted successfully")
            setTimeout(() => {
                window.location.reload
            }, 3000);
            console.log(response, "Response")
          }).catch((error) => {
            toast.error(error.response.data.message)
            console.log(error, "Error")
          })
        }
      }
    return (
        <> 
            <Form/> 
            <div className="table-wrapper">
                {load ? <PuffLoader
  color="#36d7b7"
  size={150}
  className='barspiner'
/> :
            <div className="dvx">
                <h1>Tours</h1>
            <div className="table">
                <ToastContainer/>
                <table>
                    <thead>
                        <tr>
                            <th>Tour Image</th>
                            <th>Destination</th>
                            <th>Duration</th>
                            <th>Group size</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingDisplay
                        }
                    </tbody>
                </table>
                
            </div>
            <ReactPaginate
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                pageCount={12}
                pageRangeDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={"paginationButtons"}
                previousLinkClassName={'buttonLinks'}
                nextLinkClassName={'buttonLinks'}
                activeLinkClassName={'activeLink'}
                pageLinkClassName={'pageClass'}
                activeClassName={'activeClass'}
              />
              </div>
              }
            </div>
        
        </>
    )
}

export default Tours