import Header from "components/header/Header";
import Footer from "components/Footer";
import styles from "./Admin.module.css";
import Head from "next/head";
import Image from "next/image";
import spiderman from "../../assets/img/spiderman.png";
import ibv from "../../assets/img/ebv.id.png";
import hiflix from "../../assets/img/hiflix.png";
import cineone from "../../assets/img/cineone.png";
import biPlus from "../../assets/img/bi_plus.png";
import ChartSales from "components/Chart/Chart";
import axios from "axios";
import {
  GetSalesLocation,
  GetSalesMovie,
  GetSalesMovieNew,
} from "modules/axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ChartMovie from "components/Chart/ChartMovie";
import { useRouter } from "next/router";



const Admin = () => {
  const [filter, setFilter] = useState("weekly");
  const [movieSales, setMovieSales] = useState([]);
  const [movie, setMovie] = useState(true);
  const [location, setLocation] = useState(false);
  const [detailMovie, setDetailMovie] = useState([])

  // const[location_id, setLocationId] = useState(27)
  const { token } = useSelector((state) => state.auth);
  let {
    locationSales: Jakarta,
    isLoading: loadingJakarta,
    // isError: errorLocationSales
  } = GetSalesLocation(filter, 26, token);
  let {
    locationSales: Bandung,
    isLoading: loadingBandung,
    // isError: errorLocationSales
  } = GetSalesLocation(filter, 27, token);
  const {
    locationSales: Semarang,
    isLoading: loadingSemarang,
    // isError: errorLocationSales,
  } = GetSalesLocation(filter, 28, token);
  const {
    locationSales: Surabaya,
    isLoading: loadingSurabaya,
    // isError: errorLocationSales,
  } = GetSalesLocation(filter, 29, token);
  const {
    allMovieSales,
    isLoading: loadingMovieSalesNew,
    isError,
  } = GetSalesMovieNew(filter);

  // const getId = ()=>{

  // }

  // let array = [4,5,15]
  // let movies = []
  // for (let index = 0; index < array.length; index++) {
  //   const {movieSales, isLoading: loadingMovieSales, isError: errorMovieSales} = GetSalesMovie(filter,array[index],token)
  //   movies.push(movieSales)
  // }
  // console.log(movies, 'ini ori')
  // console.log(movies.map((result,i)=>result[i]));
  // useEffect(()=>{

  // }, [filter, token])

  // console.log(allMovieSales.map(result=> result.title));
  // const {id } = useRouter()
  useEffect(()=>{
    const getDetailMovie = async ()=>{
      try {
        const result = await axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/movies/15`)
        console.log(result);
        setDetailMovie(result.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    getDetailMovie()
  }, [])

  return (
    <>
      <Head>
        <title>Admin Page</title>
      </Head>
      <Header />
      <div className={styles.container}>
        {!movie ? (
          <ChartSales
            jakarta={Jakarta}
            bandung={Bandung}
            semarang={Semarang}
            surabaya={Surabaya}
            filter={filter}
            setFilter={setFilter}
            setMovie={setMovie}
            movie={movie}
          />
        ) : (
          <div className={`row ${styles.container2}`}>
            <div className={styles.topChart}>
              <div className={styles.basedon}>
                <span className={styles.active} onClick={() => setMovie(true)}>Based on Movie</span>
                <span onClick={() => setMovie(false)}>Based on Location</span>
              </div>
              <div className={styles.filter}>
              <span
                className={filter=== 'weekly'&& styles.active}
                  onClick={() => {
                    setFilter("weekly");
                  }}
                >
                  Weekly
                </span>
                <span
                className={filter=== 'monthly'&& styles.active}
                  onClick={() => {
                    setFilter("monthly");
                  }}
                >
                  Monthly
                </span>
                
              </div>
            </div>
            <div
              className={`${styles.pembungkus}`}
            >
              {allMovieSales && !loadingMovieSalesNew && !loadingBandung && !loadingJakarta && !loadingSemarang && !loadingSurabaya ? (
                Array.isArray(allMovieSales) &&
                allMovieSales.map((result, i) => (
                  <ChartMovie
                    key={result.title}
                    movies={result}
                    filter={filter}
                  />
                ))
              ) : (
                <><br/><br/>
                  <div className="spinner-border text-secondary" role="status"/>
                </>
              )}
            </div>
          </div>
        )}
        {/* <ChartMovie movies={movies[1]}/>
        <ChartMovie movies={movies[2]}/> */}
        {/* <ChartMovie data={{
          labels : movies.map(movie=>movie.day_name) ,
          datasets: [
            {
              label: 'Income',
              // data: Object.entries(group).map(item => item[1].map(day=> Number(day.total))),
              data : movies.map(revenue=> revenue.total),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ]
        }}/> */}
      </div>
      <Footer />
    </>
  );
};

export default Admin;
