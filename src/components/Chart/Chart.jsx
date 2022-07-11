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
  
  
  
const ChartSales = ({jakarta = [], bandung = [], semarang= [], filter, setFilter}) => {
    // console.log(Object.entries(group));
    // const labels = Object.entries(group).map(item => item[1].map(day=>day.day_name));
    // const labels = ["Tuesday  ", "Wednesday", "Thursday ", "Friday   ", "Saturday ", "Sunday   ", "Monday   "]
    // if(typeof(chartdata)!== )
    
    const labels = filter==='weekly' ? jakarta.map(day=>day.day_name) : jakarta.map(day=>day.month_name)
    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            // data: Object.entries(group).map(item => item[1].map(day=> Number(day.total))),
            data : jakarta.map(revenue=> revenue.total),
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
            text: "Mal Artha Gading",
          },
        },
    };

    const dataBandung = {
        labels : filter === 'weekly' ? bandung && bandung.map(day=>day.day_name) : bandung && bandung.map(day=>day.month_name),
        datasets: [
          {
            label: 'Income',
            // data: Object.entries(group).map(item => item[1].map(day=> Number(day.total))),
            data : bandung.map(revenue=> revenue.total),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
    };
    const optionsBandung = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: "Mal Artha Gading Bandung",
          },
        },
    };
    const dataSemarang = {
        labels : filter === 'weekly' ? semarang && semarang.map(day=>day.day_name) : semarang && semarang.map(day=>day.month_name),
        datasets: [
          {
            label: 'Income',
            // data: Object.entries(group).map(item => item[1].map(day=> Number(day.total))),
            data : semarang.map(revenue=> revenue.total),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
    };
    const optionsSemarang = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: "Mal Artha Gading Semarang",
          },
        },
    };

  return (
    <>
    <div className={`row ${styles.container}`}>
        <div className={styles.topChart}>
            <div className={styles.basedon}>
                <span>Based on Movie</span>
                <span>Based on Location</span>
            </div>
            <div className={styles.filter}>
                <span onClick={()=>{
                    setFilter('monthly')
                }}>Monthly</span>
                <span onClick={()=>{
                    setFilter('weekly')
                }}>Weekly</span>
            </div>
        </div>
        <div className={`row col-lg-4 ${styles.space}`}>
            <div className={`${styles.singleChart}`}>
                <Line options={options} data={data}/>
            </div>
        </div>
        <div className={`row col-lg-4 ${styles.space}`}>
            <div className={`${styles.singleChart}`}>
                <Line options={optionsBandung} data={dataBandung}/>
            </div>
        </div>
        <div className={`row col-lg-4 ${styles.space}`}>
            <div className={`${styles.singleChart}`}>
                <Line options={optionsSemarang} data={dataSemarang}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ChartSales