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
import { PuffLoader }  from 'react-spinners';

function Users() {

    const [users, setUsers] = useState([]);

    const [load, setLoad] = useState(false);

    const [bookPageNumber, setBookPageNumber] = useState(0);
    const booksPerPage = 8;
    const bookVisited = bookPageNumber * booksPerPage;
    console.log(booksPerPage);
    const bookingDisplay = users
    .slice(bookVisited, bookVisited + booksPerPage)
    .map((item, idx) =>{
        return <tr key={idx}>
            <td>{item.email}</td>
            <td>{item.fullName}</td>
            <td>{item.phone}</td>
            <td>{item.location}</td>
            <td >{item.role}</td>
            <td >
            <span className='actions'>
                <BsFillTrashFill onClick={() => handleDelete(item._id)} className='delete-btn'/>
                <Link to={`Useredit/${item._id}`}> <BsFillPencilFill /></Link>
            </span>
        </td>
        </tr>
    })

    const handlePageChange = (selected) =>{
        setBookPageNumber(selected?.selected)
        console.log(selected, "selected")
        console.log(booksPerPage, "bPP")
      }

    
    console.log(users)
    useEffect(()=>{
        const fettchUsers = ()=>{
            setLoad(true)
            axios({
                method: 'GET',
                url: "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users",
                headers: {
                    "Content-Type": "Application/json",
                }
            })
            .then((response) =>{
                console.log(response);
                setUsers(response.data);
                setTimeout(() => {
                    window.location.reload
                    setLoad(false)
                }, 3000);
            })
            .catch((error) =>{
                console.log(error);
                toast.error(error.response.data.message);
                toast.error('Fetch  user failed')
              })
        }
        fettchUsers();
    }, []);

    // Delete
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          let token = localStorage.getItem("token")
          axios({
            url: `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${id}`,
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`
            },
          }).then((response) => {
            toast.success("Umu user mubishanga")
            console.log(response, "Response")
          }).catch((error) => {
            toast.error(error.response.data.message)
            // console.log(error, "Error")
            toast.error('Delete failed')
          })
        }
      }
  return (
    <div className="table-wrapper">
        {load ? <PuffLoader
  color="#36d7b7"
  size={150}
  className='barspiner'
/> : 
        <div className="dvx">
                <h1>Users</h1>
            <div className="table">

                <table>
                    <thead>
                        <tr>
                            <th>User email</th>
                            <th>User name</th>
                            <th>User Phone</th>
                            <th>User Location</th>
                            <th>Role</th>
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
            <ToastContainer/>
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
  )
}

export default Users
