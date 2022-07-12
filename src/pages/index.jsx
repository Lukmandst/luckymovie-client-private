import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//assets
import spiderman from "../assets/images/hero/spiderman.png";
import lion from "../assets/images/hero/lion.png";
import pience from "../assets/images/hero/peince.png";

//components
import NowShowing from "../components/NowShowing";
import UpComing from "../components/UpComing";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

//axios
import { getMoviesHome, getUpdateMovies } from "../modules/axios";

export async function getStaticProps() {
  const getMovies = await getMoviesHome();
  const getUpdate = await getUpdateMovies();
  return {
    props: {
      movies: await getMovies.json(),
      updateMovies: await getUpdate.json(),
    },
    revalidate: 30,
  };
}

export default function Home({ movies, updateMovies }) {
  // const { movies } = props;
  // console.log(movies);
  // console.log(updateMovies);
  // const [movies, setMovies] = useState([]);
  // const [errMsg, setErrMsg] = useState("");

  // useEffect(() => {
  //   getMoviesHome()
  //     .then((res) => {
  //       console.log(res);
  //       setMovies(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const months = [
  //   { id: 1, month: "Januari" },
  //   { id: 2, month: "February" },
  //   { id: 3, month: "Maret" },
  //   { id: 4, month: "April" },
  //   { id: 5, month: "May" },
  //   { id: 6, month: "June" },
  //   { id: 7, month: "July" },
  //   { id: 8, month: "August" },
  //   { id: 9, month: "September" },
  //   { id: 10, month: "October" },
  //   { id: 11, month: "November" },
  //   { id: 12, month: "December" },
  // ];

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Tickitz</title>
        <meta name="description" content="Tickitz ticketing website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="banner pb-5 mx-auto">
        <div className="mt-5">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-6 my-5">
              <div className="card-body m-5 justify-content-center">
                <h5 className="text-muted">Nearest Cinema, Newest Movie,</h5>
                <h1 className="text-purple fw-bold">Find out now!</h1>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 row justify-content-center my-0">
              <div className=" col-3 mt-5">
                <Image src={spiderman} alt="alt" />
              </div>
              <div className="col-3 mt-3">
                <Image src={lion} alt="alt" />
              </div>
              <div className="col-3 mt-0">
                <Image src={pience} alt="alt" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className={`${styles.horizontalList} row bg-grey`}>
        <div className="d-flex justify-content-around">
          <p className="p-5 fw-bold " style={{ fontSize: "24px" }}>
            Now Showing
          </p>
          {/* <a href="/movie">
            <p className="p-5">view all</p>
          </a> */}
        </div>
        <div
          className="d-flex  mt-3 mb-5"
          style={{ overflow: "scroll", padding: " 0 5rem", width: "100vw" }}
        >
          {movies.data.map((item) => (
            <NowShowing
              image={item.image}
              id={item.movies_id}
              key={item.movies_id}
            />
          ))}
        </div>
      </main>
      <section>
        <div className="d-flex justify-content-between">
          <p className="p-5 fw-bold" style={{ fontSize: "24px" }}>
            Upcoming Movies
          </p>
          {/* <a href="/movie">
            <p className="p-5">view all</p>
          </a> */}
        </div>
        {/* <div className="d-flex flex-wrap justify-content-center py-5 px-3 ">
          {months.map((item) => (
            <button
              className={`${styles.btnOutline} mx-3 btn btn-month`}
              key={item.id}
            >
              {item.month}
            </button>
          ))}
        </div> */}
        <div className="py-5 px-3 mb-5">
          <div
            className="d-flex justify-content-around mb-3"
            style={{ overflow: "scroll", padding: " 0 5rem", width: "100vw" }}
          >
            {updateMovies.data.map((item) => (
              <UpComing
                title={item.title}
                genre={item.genre}
                image={item.image}
                id={item.movies_id}
                key={item.movies_id}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container shadow-lg mb-5">
        <div className={"card-body"}>
          <div className="text-center my-5">
            <h5>Be the vanguard of the</h5>
            <h1 className={`${styles.textPurple} fw-bold`}>Moviegoers</h1>
          </div>
          <div className="d-flex justify-content-center">
            <form>
              <div className="row mb-3">
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your email"
                    aria-label="First name"
                  />
                </div>
                <div className="col-4">
                  <button className={`${styles.btnOutline} btn`}>
                    {" "}
                    Join Now{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="text-center my-5 text-muted">
            <span>By joining you as a Tickitz member,</span>
            <span>we will always send you the latest updates via email .</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
