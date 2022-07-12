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

const ChartSales = ({
  jakarta = [],
  bandung = [],
  semarang = [],
  surabaya = [],
  filter,
  setFilter,
  setMovie,
  movie,
}) => {
  // console.log(jakarta && jakarta[0] && jakarta[0].address);
  // const labels = Object.entries(group).map(item => item[1].map(day=>day.day_name));
  // const labels = ["Tuesday  ", "Wednesday", "Thursday ", "Friday   ", "Saturday ", "Sunday   ", "Monday   "]
  // if(typeof(chartdata)!== )

  const labels =
    filter === "weekly"
      ? jakarta.map((day) => day.day_name)
      : filter === "monthly"
      ? jakarta.map((day) => day.month_name)
      : jakarta.map((day) => day.year);
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        // data: Object.entries(group).map(item => item[1].map(day=> Number(day.total))),
        data: jakarta.map((revenue) => revenue.total),
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
        text: `${
          jakarta && jakarta[0] ? jakarta[0].address : "Mal Artha Gading"
        } ${jakarta && jakarta[0] ? jakarta[0].city : "Jakarta"}`,
      },
    },
  };

  const dataBandung = {
    labels:
      filter === "weekly"
        ? bandung.map((day) => day.day_name)
        : filter === "monthly"
        ? bandung.map((day) => day.month_name)
        : bandung.map((day) => day.year),
    datasets: [
      {
        label: "Income",
        // data: Object.entries(group).map(item => item[1].map(day=> Number(day.total))),
        data: bandung.map((revenue) => revenue.total),
        borderColor: "#5F2EEA",
        backgroundColor: "#9570FE",
      },
    ],
  };
  const optionsBandung = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${
          bandung && bandung[0] ? bandung[0].address : "Paris Van Java"
        } ${bandung && bandung[0] ? bandung[0].city : "Bandung"}`,
      },
    },
  };
  const dataSemarang = {
    labels:
      filter === "weekly"
        ? semarang.map((day) => day.day_name)
        : filter === "monthly"
        ? semarang.map((day) => day.month_name)
        : semarang.map((day) => day.year),
    datasets: [
      {
        label: "Income",
        // data: Object.entries(group).map(item => item[1].map(day=> Number(day.total))),
        data: semarang.map((revenue) => revenue.total),
        borderColor: "#5F2EEA",
        backgroundColor: "#9570FE",
      },
    ],
  };
  const optionsSemarang = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${semarang && semarang[0] ? semarang[0].address : "Paragon"} ${
          semarang && semarang[0] ? semarang[0].city : "Semarang"
        }`,
      },
    },
  };
  const dataSurabaya = {
    labels:
      filter === "weekly"
        ? surabaya.map((day) => day.day_name)
        : filter === "monthly"
        ? surabaya.map((day) => day.month_name)
        : surabaya.map((day) => day.year),
    datasets: [
      {
        label: "Income",
        // data: Object.entries(group).map(item => item[1].map(day=> Number(day.total))),
        data: surabaya.map((revenue) => revenue.total),
        borderColor: "#5F2EEA",
        backgroundColor: "#9570FE",
      },
    ],
  };
  const optionSurabaya = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${
          surabaya && surabaya[0] ? surabaya[0].address : "Ciputra World"
        } ${surabaya && surabaya[0] ? surabaya[0].city : "Surabaya"}`,
      },
    },
  };

  return (
    <>
      <div className={`row ${styles.container}`}>
        <div className={styles.topChart}>
          <div className={styles.basedon}>
            <span
              onClick={() => {
                setMovie(true);
                setFilter("weekly");
              }}
            >
              Based on Movie
            </span>
            <span className={styles.active} onClick={() => setMovie(false)}>
              Based on Location
            </span>
          </div>
          <div className={styles.filter}>
            <span
              className={filter === "weekly" && styles.active}
              onClick={() => {
                setFilter("weekly");
              }}
            >
              Weekly
            </span>
            <span
              className={filter === "monthly" && styles.active}
              onClick={() => {
                setFilter("monthly");
              }}
            >
              Monthly
            </span>
            <span
              className={filter === "yearly" && styles.active}
              onClick={() => {
                setFilter("yearly");
              }}
            >
              Yearly
            </span>
          </div>
        </div>
        <div className={`${styles.space}`}>
          <div className={`${styles.singleChart}`}>
            <Line options={options} data={data} />
          </div>
        </div>
        <div className={`${styles.space}`}>
          <div className={`${styles.singleChart}`}>
            <Line options={optionsBandung} data={dataBandung} />
          </div>
        </div>
        <div className={`${styles.space}`}>
          <div className={`${styles.singleChart}`}>
            <Line options={optionsSemarang} data={dataSemarang} />
          </div>
        </div>
        <div className={`${styles.space}`}>
          <div className={`${styles.singleChart}`}>
            <Line options={optionSurabaya} data={dataSurabaya} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartSales;
