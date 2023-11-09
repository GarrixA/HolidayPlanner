import React, { useEffect, useState } from 'react';
import './Chart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PuffLoader }  from 'react-spinners';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import Cards from './Components/Cards';
import axios from 'axios';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Chart() {

  const [load, setLoad] = useState(false);

  const [charts, setCharts] = useState([]);
    const fetchChart = () =>{
      setLoad(true)
    axios({
      method: "GET",
      url:"https://holiday-planner-4lnj.onrender.com/api/v1/count?year=2023",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then((response) =>{
      console.log(response)
      console.log(charts,"charts");
      setTimeout(()=>{
        setCharts(response.data)
        setLoad(false)
      }, 5000)
    })
    console.log(
    charts.map((item) => item.count),"charts")
  };

  useEffect(() =>{
    fetchChart();
  }, []);
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Holiday planners',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
      
    const data = {
        labels,
        datasets: [
          {
            label: 'Tours',
            data: charts.map((item) => item.count),
            backgroundColor: '#c29d59',
          },
          {
            label: 'Bookings',
            data: [],
            backgroundColor: 'skyblue',
          },
          {
            label: 'Users',
            data: [],
            backgroundColor: 'orange',
          }
        ],
      };

     
        
  return (
  <>
  <div className="conts">
  
      <ToastContainer/>
      <div className='main-chart'>
        {load? <PuffLoader
  color="#36d7b7"
  size={150}
  className='barspiner'
/> :
        <div className="divc">
          <div className="cards">
            <Cards/>
          </div>
          <div className="chart">
        
            <Bar options={options} data={data}
              className='chart'
            />
            </div>
        </div>
        }
      </div>
      
      </div>
    </>
  )
}

export default Chart
