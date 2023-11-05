import React from 'react';
import './Chart.css';
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
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Chart() {
    const options = {
      maintainAspectRatio: false,
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
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
    const data = {
        labels,
        datasets: [
          {
            label: 'Tours',
            data: ['40', '20', '39', '60', '10', '5', '15'],
            backgroundColor: '#c29d59',
          },
          {
            label: 'Bookings',
            data: ['70', '40', '59', '10', '28', '35', '19'],
            backgroundColor: 'skyblue',
          },
          {
            label: 'Users',
            data: ['120', '60', '39', '40', '30', '55', '15'],
            backgroundColor: 'orange',
          }
        ],
      };
  return (
  <>
      <div className='main-chart'>
        <div className="cards">
          <Cards/>
        </div>
        <div className="chart">
          <Bar options={options} data={data}
            className='chart'
          />
          </div>
      </div>
    </>
  )
}

export default Chart
