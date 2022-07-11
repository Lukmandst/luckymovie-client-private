import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartMovie = ({ movies, filter }) => {
  console.log(movies.detail);
  const labels =
    filter === "weekly"
      ? movies && movies.detail.map((item) => item.day_name)
      : movies.detail.map((item) => item.month_name);
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        // data: Object.entries(group).map(item => item[1].map(day=> Number(day.total))),
        data: movies && movies.detail.map((item) => item.total),
        //  movies.map((revenue) => revenue.total),
        borderColor: "#5F2EEA",
        backgroundColor: "#9570FE",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: movies && movies.title,
      },
    },
  };
  return (
    <>
      
        <div className={styles.space2}>
          <div className={`${styles.singleChart}`}>
            <Line options={options} data={data} />
          </div>
        
      </div>
    </>
  );
};

export default ChartMovie;
