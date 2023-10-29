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
            <Route path='SingleTour' element={<SingleTour/>}/>
            <Route path='AmazingTours' element={<AmezingTours/>}/>
            <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
