import React from 'react'
import { FaLaptop, FaNetworkWired, FaPhoneAlt } from 'react-icons/fa'
import { CiRouter } from 'react-icons/ci'
import { Pie, PolarArea, Radar } from 'react-chartjs-2';
import 'chart.js/auto';
import Card from './Card.js'

const index = () => {
  const data = {
    labels: ['Phisical', 'Technique', 'Policies', 'Software', 'Training'],
    datasets: [
      {
        label: '%',
        data: [80, 80, 80, 70, 80],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataPie = {
    labels: ['Hight', 'Medium', 'Low'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>

      <div className='Dashboard-cards-container'>
        <Card color="#10A19D" number={3} icon={<FaNetworkWired size={50} color="lightgrey" />} text="Network" />
        <Card color="#F94A29" number={4} icon={<CiRouter size={50} color="lightgrey" />} text="Switches" />
        <Card color="#0081C9" number={25} icon={<FaLaptop size={50} color="lightgrey" />} text="Computers" />
        <Card color="#F49D1A" number={20} icon={<FaPhoneAlt size={50} color="lightgrey" />} text="Phones" />
      </div>
      <div className='dashboard-charts'>

        <div className='dashboard-charts-chart'>
          <h3>Maturity</h3>
          <Radar data={data} options={{
            scale: {
              min: 0,
              max: 100,
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }} />
        </div>
        <div className='dashboard-charts-chart'>
          <h3>Risk</h3>
          <Pie data={dataPie} />
        </div>
      </div>
    </>
  )
}

export default index