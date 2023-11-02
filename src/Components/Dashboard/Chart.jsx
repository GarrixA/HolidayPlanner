import React from 'react';
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
            label: 'Users',
            data: labels.map(() => ({ min: 0, max: 1000 })),
            backgroundColor: 'grey',
          },
        ],
      };
  return (
  <>
      <div className='main- chart'>
        <div className="cards">
          <Cards/>
        </div>
        <div className="chart">
          <Bar options={options} data={data}
          />
          </div>
      </div>
    </>
  )
}

export default Chart
