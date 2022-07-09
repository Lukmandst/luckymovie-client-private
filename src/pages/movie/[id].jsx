import style from "../../styles/Detail.module.css";
import Image from "next/image";
import { MdCalendarToday, MdLocationPin } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import cineone from "assets/images/cinemas/cineOne21.png";
import ebv from "assets/images/cinemas/ebv.id.png";
import hiflix from "assets/images/cinemas/hiflix.png";
import Footer from "components/Footer";
import Header from "components/header/Header";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetCinemas } from "modules/axios";
import { currencyFormatter } from "helper/formatter";

export const getServerSideProps = async ({ params }) => {
  const movieDetail = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_HOST}/movies/${params.id}`,
  });

  return {
    props: {
      movie: movieDetail.data,
    },
  };
};

function MovieDetail({ movie }) {
  // console.log(movie);
  // console.log(cinema);
  const release_date = new Date(movie.data.release_date);
  const dateFilter = new Date();
  const day = dateFilter.getDate();
  const month = dateFilter.getMonth();
  const year = dateFilter.getFullYear();
  const todayTime = dateFilter.getHours();
  console.log(todayTime);
  const {
    query: { id, location: paramLocation, date: paramDate },
  } = useRouter();
  const router = useRouter();
  const [date, setDate] = useState(`${day}/${month + 1}/${year}`);
  const [location, setLocation] = useState("Jakarta");
  const { cinema, isError: errorCinema } = GetCinemas(
    paramLocation,
    paramDate,
    id
  );
  const [time, setTime] = useState("");
  const [cinemasId, setCinemasId] = useState("");
  const [price, setPrice] = useState("");

  let arr = [];
  for (let index = day; index < day + 3; index++) {
    arr.push(index);
  }
  useEffect(() => {
    router.push(`/movie/${id}?date=${date}&location=${location}`, undefined, {
      shallow: true,
    });
  }, [date, location]);
  // console.log(id);
  console.log(cinema);
  console.log(time, cinemasId);
  // console.log(paramLocation);
  return (
    <>
      <Head>
        <title>{movie.data.title}</title>
      </Head>
      <Header />
      <div className={style.container}>
        <main className={style.mainSection}>
          <div className={style.imageWrapper}>
            <Image
              src={movie ? movie.data.image : "/"}
              // width={100}
              // height={100}
              objectFit="contain"
              // objectPosition='cover'
              layout="fill"
              alt="image"
              style={{ borderRadius: "20px", minWidth: "30vw" }}
            />
          </div>
          <div className={style.info}>
            <header className={style.infoHeader}>
              <div className={style.title}>{movie.data.title}</div>
              <div className={style.genre}>{movie.data.genre}</div>
            </header>
            <div className={style.infosectionWrapper}>
              <div className={style.info1}>
                <div className={style.infoSection}>
                  <div className={style.infoName}>Release Date</div>
                  <div className={style.infoValue}>
                    {release_date.toLocaleDateString("en-US", {
                      dateStyle: "medium",
                    })}
                  </div>
                </div>
                <div className={style.infoSection}>
                  <div className={style.infoName}>Duration</div>
                  <div className={style.infoValue}>{movie.data.duration} </div>
                </div>
              </div>
              <div className={style.info2}>
                <div className={style.infoSection}>
                  <div className={style.infoName}>Directed by</div>
                  <div className={style.infoValue}>{movie.data.director}</div>
                </div>
                <div className={style.infoSection}>
                  <div className={style.infoName}>Casts</div>
                  <div className={style.infoValue}>{movie.data.casts}</div>
                </div>
              </div>
            </div>
            <div className={style.synopsis}>
              <div className={style.syHeader}>Synopsis</div>
              <div className={style.syDetail}>{movie.data.synopsis}</div>
            </div>
          </div>
        </main>
        <section className={style.sectionCinemaSection}>
          <header className={style.headerSection}>
            <div className={style.showtime}>Showtimes and Tickets</div>
            <div className={style.filter}>
              <div style={{ position: "relative" }}>
                <MdCalendarToday
                  style={{ position: "absolute", left: "1rem", top: "1rem" }}
                />
                <select
                  className={style.filterValue}
                  onChange={(e) => setDate(e.target.value)}
                >
                  {arr.map((i) => (
                    <option
                      key={i}
                      value={`${i}/${month + 1}/${year}`}
                    >{`${i}/${month + 1}/${year}`}</option>
                  ))}
                </select>
              </div>
              <div className={style.filterValue}>
                <div style={{ position: "relative" }}>
                  <MdLocationPin
                    style={{ position: "absolute", left: "1rem", top: "1rem" }}
                  />
                  <select
                    className={style.filterValue}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="Jakarta">Jakarta</option>
                    <option value="Semarang">Semarang</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Surabaya">Surabaya</option>
                  </select>
                </div>
              </div>
            </div>
          </header>
          <main className={style.cinemaSection}>
            {cinema && Array.isArray(cinema) ? (
              cinema.map((result) => (
                <div key={result.name} className={style.cinemaCard}>
                  <header className={style.cinemaHeader}>
                    <div className={style.cinemaLogo}>
                      <Image
                        src={
                          result.name === "CineOne21"
                            ? cineone
                            : result.name === "hiflix"
                            ? hiflix
                            : ebv
                        }
                        layout="fill"
                        alt="cinema"
                      />
                    </div>

                    <div className={style.cinemaInfo}>
                      <div className={style.cinemaName}>{result.name}</div>
                      <div className={style.cinemaAddress}>
                        {
                          result.detail.find((id) => (id.name = result.name))
                            .address
                        }
                      </div>
                    </div>
                  </header>
                  <main className={style.timewrapper}>
                    {result && Array.isArray(result.detail) ? (
                      result.detail.map((data) => (
                        <div key={data.time} className={style.timewrapper}>
                          <input
                            disabled={todayTime > data.time.split(":")[0]}
                            key={data.time}
                            className={style.timeinput}
                            type="radio"
                            name="time"
                            id={data.time + data.name}
                            value={data.time}
                            onClick={(e) => {
                              setTime(e.target.value);
                              setCinemasId(data.id);
                              setPrice(data.price);
                            }}
                          />
                          <label
                            htmlFor={data.time + data.name}
                            className={style.timelabel}
                          >
                            {data.time}
                          </label>
                        </div>
                      ))
                    ) : (
                      <></>
                    )}
                  </main>

                  <footer>
                    <div className={style.priceWrapper}>
                      <div className={style.price}>Price</div>
                      <div className={style.priceValue}>
                        {currencyFormatter.format(
                          result.detail.find((id) => (id.name = result.name))
                            .price
                        )}
                      </div>
                    </div>
                    <input
                      type="button"
                      value="Book Now"
                      disabled={!time}
                      className={style.bookBtn}
                      onClick={() => {
                        
                          router.push({
                            pathname: "/order",
                            query: {
                              title: `${movie.data.title}`,
                              price: price,
                              movie_id: `${id}`,
                              cinema_id: cinemasId,
                              cinema_name: result.name,
                              time: time,
                              date: date,
                            },
                          });
                        }
                      }
                    />
                  </footer>
                </div>
              ))
            ) : (
              // eslint-disable-next-line react/no-unescaped-entities
              <>Sorry it seems we can't found any cinema's for you:( </>
            )}
          </main>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default MovieDetail;
