import React from 'react';
import {Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend);



const Graph = ({color,graphdata}) => {
  console.log('graphdata',graphdata);
  return (
    <div>
       <Line data={
        {
            labels: graphdata.map(i=>i[0]+1),
            datasets:[
                {
                   data:graphdata.map(i=>i[1]),
                   label:'Word per minute',
                   borderColor:color
                }
             
        ]
        }
       }></Line>

    </div>
  )
}

export default Graph
