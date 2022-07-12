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
import {
  GetSalesLocation,
  GetSalesMovie,
  GetSalesMovieNew,
} from "modules/axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ChartMovie from "components/Chart/ChartMovie";

const Admin = () => {
  const [filter, setFilter] = useState("weekly");
  const [movieSales, setMovieSales] = useState([]);
  const [movie, setMovie] = useState(true);
  const [location, setLocation] = useState(false);

  // const[location_id, setLocationId] = useState(27)
  const { token } = useSelector((state) => state.auth);
  const {
    locationSales: Jakarta,
    // isLoading: loadingLocationSales,
    // isError: errorLocationSales
  } = GetSalesLocation(filter, 26, token);
  const {
    locationSales: Bandung,
    // isLoading: loadingLocationSales,
    // isError: errorLocationSales
  } = GetSalesLocation(filter, 27, token);
  const {
    locationSales: Semarang,
    // isLoading: loadingLocationSales,
    // isError: errorLocationSales,
  } = GetSalesLocation(filter, 28, token);
  const {
    locationSales: Surabaya,
    // isLoading: loadingLocationSales,
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
  const getAllRevenueMovie = () => {};

  return (
    <>
      <Head>
        <title>Admin Page</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.movieDescription}>
            <span>Sales Charts</span>
            {/* <div className={styles.cardDesc}>
              <div className={styles.topCard}>
                <div className={styles.cardImage}>
                  <Image src={spiderman} alt="movie_img" />
                </div>
                <div className={styles.cardInput}>
                  <label htmlFor="">Movie Name</label>
                  <input type="text" placeholder="Spiderman" />
                  <label htmlFor="">Category</label>
                  <input type="text" placeholder="Action, Adventure, Sci-Fi" />
                  <label htmlFor="">Release Date</label>
                  <input type="text" placeholder="release-date" />
                  <div className={styles.duration}>
                    <label htmlFor="">Duration (Hour/Minute)</label>
                    <div className={styles.inputHour}>
                      <input type="text" placeholder="2" />
                      <input type="text" placeholder="12" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottomCard}>
                <div className={styles.director}>
                  <label htmlFor="">Director</label>
                  <input type="text" />
                </div>
                <div className={styles.director}>
                  <label htmlFor="">Cast</label>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.bottomCard}>
                <div className={styles.synopsis}>
                  <span>Synopsis</span>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className={styles.premiere}>
            <span>Premiere Location</span>
            <div className={styles.premiereCard}>
              <select name="" id="">
                <option value="">Semarang</option>
                <option value="">Purwokerto</option>
                <option value="">Yogyakarta</option>
              </select>
              <div className={styles.premiereImg}>
                <Image src={ibv} alt="IBV" />
                <Image src={hiflix} alt="hiflix" />
                <Image src={cineone} alt="cineone" />
              </div>
              <div className={styles.premiereImg}>
                <Image src={ibv} alt="IBV" />
                <Image src={hiflix} alt="hiflix" />
                <Image src={cineone} alt="cineone" />
              </div>
              <div className={styles.premiereImg}>
                <Image src={ibv} alt="IBV" />
                <Image src={hiflix} alt="hiflix" />
                <Image src={cineone} alt="cineone" />
              </div>
            </div>
            <div className={styles.showtime}>
              <span>Showtimes</span>
              <div className={styles.showtimeCard}>
                <div className="inputDate">
                  <input type="date" />
                </div>
                <div className={styles.setTime}>
                  <Image src={biPlus} alt="plus" />
                  <span>08:30</span>
                  <span>08:30</span>
                  <span>08:30</span>
                </div>
                <div className={styles.setTime}>
                  <span>09:30</span>
                  <span>08:30</span>
                  <span>08:30</span>
                  <span>08:30</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
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
              className={styles.pembungkus}
              
            >
              {allMovieSales ? (
                Array.isArray(allMovieSales) &&
                allMovieSales.map((result, i) => (
                  <ChartMovie
                    key={result.title}
                    movies={result}
                    filter={filter}
                  />
                ))
              ) : (
                <></>
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
