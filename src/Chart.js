import React from 'react';
import { HorizontalBar } from  'react-chartjs-2';

const data =  {

    datasets: [
      {
        label: 'Number of Vehicles',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        barThickness: 40,
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  
  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

class Chart extends React.Component {
 constructor(props) {
   super(props);

  data.labels = props.titles;
  data.datasets[0].data = props.vehicles;
 }


 render() {
     return (
      <div className="chart-container" style={{width: "80%", margin: "60px auto", position: "relative"}}>
        <HorizontalBar 
          data={data} 
          options={options}
          height={500}
          />
      </div>
        
      
     )
 }
  
    

}

export default Chart;