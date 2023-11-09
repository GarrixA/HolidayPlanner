import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../Tours.css'
import { useEffect } from 'react';
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './Bookings.css';

function Bookings() {
    const [bookings, setBookings] = useState([]);

    const [bookPageNumber, setBookPageNumber] = useState(0);
    const booksPerPage = 8;
    const bookVisited = bookPageNumber * booksPerPage;
    const pageCount = Math.ceil(bookings.length) / booksPerPage;
    console.log(booksPerPage);
    const bookingDisplay = bookings
    .slice(bookVisited, bookVisited + booksPerPage)
    .map((item, idx) =>{
      return (<tr key={idx}>
          <td>{item.fullname}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td>{item.date}</td>
          <td >
          <span className='actions'>
              <BsFillTrashFill onClick={() => handleDelete(item._id)} className='delete-btn'/>
              <Link to={`Editbookings/${item._id}`}><BsFillPencilFill /></Link>
          </span>
      </td>
      </tr>
      )
  })


    const handlePageChange = (selected) =>{
      setBookPageNumber(selected?.selected)
      console.log(selected, "selected")
      console.log(booksPerPage, "bPP")
    }
    
    console.log(bookPageNumber, "bpn")

    const fetchBookings = () =>{
    let token = localStorage.getItem("token");
    console.log(token);
    axios({
      url: "https://holiday-planner-4lnj.onrender.com/api/v1/booking/view/",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
        console.log(response.data);
        setBookings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    useEffect(() =>{
        fetchBookings();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          let token = localStorage.getItem("token");
          axios({
            url: `https://holiday-planner-4lnj.onrender.com/api/v1/booking/delete/${id}`,
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              setTimeout(() => {
                window.location.reload
            }, 3000);
              toast.success("Booking deleted successfully");
              console.log(response, "response");
            })
            .catch((error) => {
              toast.error(error.response.data.message);
              console.log(error, "error");
            });
        }
      };

  return (
    <div className="table-wrapper">
                <h1>Bookings</h1>
            <div className="table">
                <ToastContainer/>
                <table>
                    <thead>
                        <tr>
                            <th>Full name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{bookingDisplay}</tbody>
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
  )
}

export default Bookings
