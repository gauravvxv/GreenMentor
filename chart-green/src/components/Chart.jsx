import React from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar,Line} from "react-chartjs-2"
const Chart = () => {

    const years = ["2023","2022"];

    const emissionsData = {
        2023:  [2205,2251,4522,8522,1124,4524,7858,2558,4525,2344,5643,4768],
        2022:  [1456,1800,2100,4000,7500,980,3800,6200,4500,3800,2144,1455]
    }

  

    const erData = {
        label: 'E/R',
        data: [99.8, 113.2, 194.6, 54.5, 488.1, 114.2, 71.9, 107.6, 120,83.1,124,54.3],
        borderColor: "red",
        type: 'line',
        yAxisID: 'er-axis',
    
    }

    const erData2022 = {
        label: 'E/R',
        data: [69.8, 101.2, 155.6, 30.5, 378.1, 100.2, 50.9, 97.6, 101.8,54,78,101],
        borderColor: "gold",
        type: 'line',
        yAxisID: 'mutli     -axis',
    }

    const barDatasets = years.map((e,index)=>({
        label: `Emissions ${e}`,
        data: emissionsData[e],
        backgroundColor: index===0 ? 'blue' : 'green',
            }));


    const dataSets = [erData,erData2022,...barDatasets];

    const chartData = {
       labels: ["Jan","Feb" , "Mar" , "Apr" , "May" , "Aug" , "Oct" , "Sep" , "Aug" , "Nov", "Dec" ],
       datasets: dataSets
    }


    const options = {
        scales: {
          y: {
            position: 'left', // or 'right' to position on the right side
            suggestedMin: 0, // Set the minimum value for the y-axis
          },
          er: {
            position: 'right',
          },
        },
      };

  
   
    
  return (
    <div>
      <div className='chart'>
<Bar data={chartData} options={options} width={100} height={50}/>

      </div>
    </div>
  )
}

export default Chart
