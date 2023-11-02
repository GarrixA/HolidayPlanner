import React from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './Components/Reusable/Layout';
import ContactUs from './Components/Elements/ContactUs';
import TourList from './Components/Elements/TourList';
import AmezingTours from './Components/Elements/AmezingTours';
import About from './Components/Elements/About';
import Error from './Components/Elements/Error';
import Home from './Components/Elements/Home';
import SingleTour from './Components/Elements/SingleTour';
import Dashbord from './Components/Dashboard/Dashbord';
import Tours from './Components/Dashboard/Tours';
import Login from './Components/Elements/Users/Login';
import Signup from './Components/Elements/Users/Signup';
import Edit from './Components/Dashboard/Functionalities/Edit';
import Chart from './Components/Dashboard/Chart';
import Bookings from './Components/Dashboard/Fetch/Bookings';
import Users from './Components/Dashboard/Fetch/Users';
import Cards from './Components/Dashboard/Components/Cards';
import Useredit from './Components/Dashboard/Fetch/Useredit';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='ContactUs' element={<ContactUs/>}/>
            <Route path='TourList' element={<TourList/>}/>
            <Route path='SingleTour/:id' element={<SingleTour/>}/>
            <Route path='AmazingTours' element={<AmezingTours/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Signup' element={<Signup/>}/>
            <Route path='*' element={<Error/>}/>
          </Route>

          <Route path='Dashboard' element={<Dashbord/>}>
            <Route index element={<Chart/>}/>
            <Route path='Tours' element={<Tours/>}/>
            <Route path='Tours/Edit/:id' element={<Edit/>}/>
            <Route path='Chart' element={<Chart/>}/>
            <Route path='Bookings' element={<Bookings/>}/>
            <Route path='Users' element={<Users/>}/>
            <Route path='Cards' element={<Cards/>}/>
            <Route path='Users/Useredit/:id' element={<Useredit/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
