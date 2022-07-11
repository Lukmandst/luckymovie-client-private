import { useSelector } from "react-redux"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import styles from './Chart.module.css'


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const ChartMovie = ({movies = []}) => {
    console.log(movies.map(day=>day.day_name));
    const labels = movies.map(day=>day.day_name)
    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            // data: Object.entries(group).map(item => item[1].map(day=> Number(day.total))),
            data : movies.map(revenue=> revenue.total),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: movies[0].title,
          },
        },
    };
    return <Line data={data} options={options}/>
}

export default ChartMovie