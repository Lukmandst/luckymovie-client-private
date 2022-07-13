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
import { editMovie, GetCinemas } from "modules/axios";
import { currencyFormatter } from "helper/formatter";
import styles from "pages/admin/Admin.module.css";
import spiderman from "../../assets/img/spiderman.png";
import ibv from "../../assets/img/ebv.id.png";
// import hiflix from '../../assets/img/hiflix.png'
// import cineone from '../../assets/img/cineone.png'
import biPlus from "../../assets/img/bi_plus.png";
import camera from "../../assets/img/camera-blank.png";
import { useSelector } from "react-redux";
import { postNewCinema } from "modules/axios";
import dynamic from "next/dynamic";

export const getServerSideProps = async ({ params }) => {
  const movieDetail = await axios({
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_API_HOST}/movies/${params.id}`,
  });

  return {
    props: {
      movie: await movieDetail.data,
    },
  };
};

function MovieDetail({ movie }) {
  // console.log(movie);
  // console.log(cinema);
  const [loadingCinema, setLoadingCinema] = useState(false);
  const [loadingMovie, setLoadingMovie] = useState(false);
  const [msg, setMsg] = useState(false);
  const [errmsg, seterrMsg] = useState(false);
  const [msgCinema, setMsgCinema] = useState(false);
  const [errmsgCinema, seterrMsgCinema] = useState(false);

  const [reset, setReset] = useState(false);
  const release_date = new Date(movie.data.release_date);
  const dateFilter = new Date();
  const day = dateFilter.getDate();
  const month = dateFilter.getMonth();
  const year = dateFilter.getFullYear();
  const todayTime = dateFilter.getHours();
  // console.log(movie.data.release_date.split("T")[0]);
  const {
    query: { id, location: paramLocation, date: paramDate },
  } = useRouter();
  const router = useRouter();
  const { role, token } = useSelector((state) => state.auth);

  const [date, setDate] = useState(`${month + 1}/${day}/${year}`);
  const [location, setLocation] = useState("Jakarta");
  const { cinema, isError: errorCinema } = GetCinemas(
    paramLocation,
    paramDate,
    id
  );
  const [time, setTime] = useState("");
  const [cinemasId, setCinemasId] = useState("");
  const [price, setPrice] = useState("");
  const [disabled, setDisable] = useState(false);

  const [detailMovie, setDetailMovie] = useState({
    title: "",
    genre: "",
    casts: "",
    synopsis: "",
    director: "",
    release_date: "",
    photo: "",
  });
  const [movie_id, setMovie_Id] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [times, setTimes] = useState([]);
  const [previewImg, setPreviewImg] = useState(null);
  const [detailCinema, setDetailCinema] = useState({
    cinema_price: "",
    cinema_name: "",
    location_id: "26",
    date: "",
  });
  // console.log(times);

  let arr = [];
  for (let index = day; index < day + 3; index++) {
    arr.push(index);
  }

  const addCinema = async () => {
    setLoadingCinema(false);
    setMsgCinema(false);
    seterrMsgCinema(false);
    try {
      if (!detailCinema.date || !detailCinema.time) {
        setLoadingCinema(false);
        seterrMsgCinema("Date and times must be filled");
        setTimeout(() => {
          seterrMsgCinema(false);
        }, 1000);
      } else {
        setLoadingCinema(true);

        const body = { ...detailCinema, movie_id, times };
        // console.log(body);
        const res = await postNewCinema(body, token);
        setLoadingCinema(false);

        // console.log(res);
        setMsgCinema(res.data.message);
        setTimeout(() => {
          setMsgCinema(false);
        }, 1000);
      }
    } catch (error) {
      setLoadingCinema(false);
      // console.log(error);
      seterrMsgCinema(error.response.data.msg);
      setTimeout(() => {
        seterrMsgCinema(false);
      }, 1000);
    }
  };
  // console.log(previewImg);
  const updateMovie = async () => {
    setLoadingMovie(false);
    setMsg(false);
    seterrMsg(false);
    try {
      setLoadingMovie(true);
      const formData = new FormData();
      const body = {
        ...detailMovie,
        duration: `${hour} Hour ${minute} Minutes`,
      };
      for (const key in body) {
        formData.append(key, body[key]);
      }
      const updateResult = await editMovie(id, body, token);
      // console.log(updateResult);
      setLoadingMovie(false);
      setMsg("Update Movie Success!");
      setTimeout(() => {
        setMsg(false);
      }, 1000);
    } catch (error) {
      setLoadingCinema(false);
      // console.log(error);
      seterrMsg(error.response.data.msg);
      setTimeout(() => {
        seterrMsg(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (role !== 1) {
      router.push(`/movie/${id}?date=${date}&location=${location}`, undefined, {
        shallow: true,
      });
      setDetailMovie({ ...detailMovie, title: movie.data.title });
      setDetailMovie({ ...detailMovie, genre: movie.data.genre });
      setDetailMovie({ ...detailMovie, release_date: movie.data.release_date });
      setHour(movie.data.duration.toLowerCase().split("hour")[0]);
      setMinute(
        movie.data.duration.toLowerCase().split("minutes")[0].split("hour")[1]
      );
      setDetailMovie({ ...detailMovie, director: movie.data.director });
      setDetailMovie({ ...detailMovie, casts: movie.data.casts });
      setDetailMovie({ ...detailMovie, synopsis: movie.data.synopsis });
    } else {
      router.push(
        `/movie/${id}?cinema_name=${detailCinema.cinema_name}&cinema_price=${detailCinema.cinema_price}&location_id=${detailCinema.location_id}&cinema_price${detailCinema.cinema_price}&date=${detailCinema.date}&times=${times}`,
        undefined,
        {
          shallow: true,
        }
      );
      setMovie_Id(id);
    }
    // if(day +1 || day +2){
    //   setDisable(false)
    // }
    // if(todayTime > data && data.time.split(":")[0] ){
    //   setDisable(true)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    date,
    detailCinema.cinema_name,
    detailCinema.cinema_price,
    detailCinema.location_id,
    detailCinema.date,
    todayTime,
    disabled,
    times,
    id,
    location,
    movie,
    role,
  ]);
  // console.log(movie_id);
  // console.log(cinema);
  // console.log(time, cinemasId);
  // console.log(cinema);
  return (
    <div>
      <Head>
        <title>{movie.data.title}</title>
      </Head>
      <Header />
      {role !== 1 ? (
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
                    <div className={style.infoValue}>
                      {movie.data.duration}{" "}
                    </div>
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
                        value={`${month + 1}/${i}/${year}`}
                      >{`${i}/${month + 1}/${year}`}</option>
                    ))}
                  </select>
                </div>
                <div className={style.filterValue}>
                  <div style={{ position: "relative" }}>
                    <MdLocationPin
                      style={{
                        position: "absolute",
                        left: "1rem",
                        top: "1rem",
                      }}
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
                            result.name === "CineOne21" || result.name ==='cineOne21'
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
                              // disabled={todayTime > data.time.split(":")[0]?true:day +1 || day+2? false:true}
                              // disabled={todayTime > data.time.split(":")[0]&& !day+1&&!day+2}
                              // disabled={todayTime > data.time.split(":")[0]?true: data.time.split(":")[0]>todayTime && false}
                              disabled={
                                data.date.split("T")[0].split("-")[2] > day
                                  ? false
                                  : todayTime > data.time.split(":")[0] && true
                              }
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
                        }}
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
      ) : (
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.movieDescription}>
              <span>Movie Description</span>
              <div className={styles.cardDesc}>
                <div className={styles.topCard}>
                  <div className={styles.cardImage}>
                    <Image
                      src={previewImg ? previewImg : movie.data.image}
                      alt="movie_img"
                      height={500}
                      width={400}
                      objectFit="cover"
                    />
                    <input
                      style={{
                        cursor: "pointer",
                        width: "50%",
                        height: "161px",
                        top: "2.2rem",
                        left: "2.3rem",
                      }}
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onload = () => {
                            setPreviewImg(reader.result);
                            setDetailMovie({
                              ...detailMovie,
                              photo: e.target.files[0],
                            });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </div>
                  <div className={styles.cardInput}>
                    <label htmlFor="">Movie Name</label>
                    <input
                      type="text"
                      defaultValue={movie.data.title}
                      placeholder="Input Movie Name"
                      onChange={(e) => {
                        setDetailMovie({
                          ...detailMovie,
                          title: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="">Category</label>
                    <input
                      type="text"
                      defaultValue={movie.data.genre}
                      placeholder="Input Category Movie"
                      onChange={(e) => {
                        setDetailMovie({
                          ...detailMovie,
                          genre: e.target.value,
                        });
                      }}
                    />
                    <label htmlFor="">Release Date</label>
                    <input
                      type="date"
                      defaultValue={movie.data.release_date.split("T")[0]}
                      placeholder="Input release-date"
                      onChange={(e) => {
                        setDetailMovie({
                          ...detailMovie,
                          release_date: e.target.value,
                        });
                      }}
                    />
                    <div className={styles.duration}>
                      <label htmlFor="">Duration (Hour/Minute)</label>
                      <div className={styles.inputHour}>
                        <input
                          type="text"
                          placeholder="2"
                          defaultValue={
                            movie.data.duration.toLowerCase().split("hour")[0]
                          }
                          onChange={(e) => {
                            setHour(e.target.value);
                          }}
                        />
                        <input
                          type="text"
                          defaultValue={
                            movie.data.duration
                              .toLowerCase()
                              .split("minutes")[0]
                              .split("hour")[1]
                          }
                          placeholder="12"
                          onChange={(e) => {
                            setMinute(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottomCard}>
                  <div className={styles.director}>
                    <label htmlFor="">Director</label>
                    <input
                      type="text"
                      defaultValue={movie.data.director}
                      onChange={(e) => {
                        setDetailMovie({
                          ...detailMovie,
                          director: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className={styles.director}>
                    <label htmlFor="">Cast</label>
                    <input
                      type="text"
                      defaultValue={movie.data.casts}
                      onChange={(e) => {
                        setDetailMovie({
                          ...detailMovie,
                          casts: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className={styles.bottomCard}>
                  <div className={styles.synopsis}>
                    <span>Synopsis</span>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      defaultValue={movie.data.synopsis}
                      rows="10"
                      onChange={(e) => {
                        setDetailMovie({
                          ...detailMovie,
                          synopsis: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center w-100">
                {msg ? (
                  <div style={{ textAlign: "center", color: "#1EC15F" }}>
                    {msg}
                  </div>
                ) : Array.isArray(errmsg) ? (
                  errmsg.map((result, i) => (
                    <div
                      key={i}
                      style={{ textAlign: "center", color: "#FF5B37" }}
                    >
                      {result.msg}
                    </div>
                  ))
                ) : (
                  <div style={{ textAlign: "center", color: "#FF5B37" }}>
                    {errmsg}
                  </div>
                )}
              </div>
              <div className={styles.button}>
                <div className={styles.addMovie} onClick={updateMovie}>
                  {loadingMovie ? (
                    <>
                      <div
                        className="spinner-border text-light"
                        role="status"
                      />
                    </>
                  ) : (
                    "Update Movie"
                  )}
                </div>
              </div>
            </div>
            <div className={styles.premiere}>
              <span>Premiere Location</span>
              <div className={styles.premiereCard}>
                <select
                  className={styles.filterValue}
                  onChange={(e) => {
                    if (e.target.value === "Jakarta") {
                      setDetailCinema({ ...detailCinema, location_id: "26" });
                    }
                    if (e.target.value === "Bandung") {
                      setDetailCinema({ ...detailCinema, location_id: "27" });
                    }
                    if (e.target.value === "Semarang") {
                      setDetailCinema({ ...detailCinema, location_id: "28" });
                    }
                    if (e.target.value === "Surabaya") {
                      setDetailCinema({ ...detailCinema, location_id: "29" });
                    }
                  }}
                >
                  <option value="Jakarta">Jakarta</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Semarang">Semarang</option>
                  <option value="Surabaya">Surabaya</option>
                </select>
                <div className={styles.premiereImg}>
                  <div
                   style={{cursor: 'pointer'}}
                    className={
                      detailCinema.cinema_name === "ebv.id"
                        ? styles.cinemaNameAct
                        : ""
                    }
                  >
                    <Image
                      src={ibv}
                      alt="IBV"
                      className={styles.cinemaNameAct}
                      onClick={() => {
                        setDetailCinema({
                          ...detailCinema,
                          cinema_name: "ebv.id",
                          cinema_price: 40000,
                        });
                      }}
                    />
                  </div>
                  <div
                  style={{cursor: 'pointer'}}
                    className={
                      detailCinema.cinema_name === "hiflix"
                        ? styles.cinemaNameAct
                        : ""
                    }
                  >
                    <Image
                      src={hiflix}
                      alt="hiflix"
                      onClick={() => {
                        setDetailCinema({
                          ...detailCinema,
                          cinema_name: "hiflix",
                          cinema_price: 35000,
                        });
                      }}
                    />
                  </div>
                  <div
                   style={{cursor: 'pointer'}}
                    className={
                      detailCinema.cinema_name === "cineOne21"
                        ? styles.cinemaNameAct
                        : ""
                    }
                  >
                    <Image
                      src={cineone}
                      alt="cineone"
                      onClick={() => {
                        setDetailCinema({
                          ...detailCinema,
                          cinema_name: "cineOne21",
                          cinema_price: 50000,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className={styles.price}>
                  {detailCinema.cinema_name === "ebv.id"
                    ? "PRICE = IDR 40.000"
                    : ""}
                  {detailCinema.cinema_name === "hiflix"
                    ? "PRICE = IDR 35.000"
                    : ""}
                  {detailCinema.cinema_name === "cineOne21"
                    ? "PRICE = IDR 50.000"
                    : ""}
                </div>
              </div>
              <div className={styles.showtime}>
                <span>Showtimes</span>
                <div className={styles.showtimeCard}>
                  <div style={{ position: "relative" }}>
                    <input
                      type="date"
                      className={styles.filterValue}
                      onChange={(e) => {
                        setDetailCinema({
                          ...detailCinema,
                          date: e.target.value,
                        });
                      }}
                    />

                    {/* <select className={styles.filterValue} onChange={(e)=>{
                    setDetailCinema({...detailCinema, date : e.target.value})
                }}>
                  <option value="21/07/20">21/07/20</option>
                  <option value="22/07/20">22/07/20</option>
                  <option value="23/07/20">23/07/20</option>
                </select> */}
                  </div>
                  <span
                    style={{
                      cursor: "pointer",
                      color: "#5F2EEA",
                      fontWeight: "600",
                    }}
                    onClick={() => {
                      setReset(!reset);
                      setTimes("");
                      setTimeout(() => {
                        setReset(false);
                      }, 50);
                    }}
                  >
                    Reset Time
                  </span>
                  <div className={styles.setTime}>
                    <input
                      className={style.timeinput}
                      type="checkbox"
                      name="time"
                      id={10}
                      value="18"
                      onChange={(e) => {
                        if (!times.includes(e.target.value)) {
                          setReset(false);
                          setTimes([...times, e.target.value]);
                        }
                        [...times, e.target.value];
                      }}
                    />
                    <label htmlFor={10} className={style.timelabel}>
                      09:45:00
                    </label>
                    <input
                      className={style.timeinput}
                      type="checkbox"
                      name="time"
                      id={12}
                      value="14"
                      onChange={(e) => {
                        if (!times.includes(e.target.value)) {
                          setTimes([...times, e.target.value]);
                        }
                        [...times, e.target.value];
                      }}
                    />
                    <label htmlFor={12} className={style.timelabel}>
                      12:00:00
                    </label>
                    <input
                      className={style.timeinput}
                      type="checkbox"
                      name="time"
                      id={14}
                      value={"15"}
                      onChange={(e) => {
                        if (!times.includes(e.target.value)) {
                          setTimes([...times, e.target.value]);
                        }
                      }}
                    />
                    <label htmlFor={14} className={style.timelabel}>
                      14:00:00
                    </label>
                    <input
                      className={style.timeinput}
                      type="checkbox"
                      name="time"
                      id={16}
                      value={"16"}
                      onChange={(e) => {
                        if (!times.includes(e.target.value)) {
                          setTimes([...times, e.target.value]);
                        }
                      }}
                    />
                    <label htmlFor={16} className={style.timelabel}>
                      16:00:00
                    </label>
                    <input
                      className={style.timeinput}
                      type="checkbox"
                      name="time"
                      id={18}
                      value={"17"}
                      onChange={(e) => {
                        if (!times.includes(e.target.value)) {
                          setTimes([...times, e.target.value]);
                        }
                      }}
                    />
                    <label htmlFor={18} className={style.timelabel}>
                      18:00:00
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center w-100">
                {msgCinema ? (
                  <div style={{ textAlign: "center", color: "#1EC15F" }}>
                    {msgCinema}
                  </div>
                ) : Array.isArray(errmsgCinema) ? (
                  errmsgCinema.map((result, i) => (
                    <div
                      key={i}
                      style={{ textAlign: "center", color: "#FF5B37" }}
                    >
                      {result.msg}
                    </div>
                  ))
                ) : (
                  <div style={{ textAlign: "center", color: "#FF5B37" }}>
                    {errmsgCinema}
                  </div>
                )}
              </div>
              <div className={styles.button}>
                <div className={styles.addMovie} onClick={addCinema}>
                  {loadingCinema ? (
                    <>
                      <div
                        className="spinner-border text-light"
                        role="status"
                      />
                    </>
                  ) : (
                    "Add Cinema"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

// export default MovieDetail;
export default dynamic(() => Promise.resolve(MovieDetail), { ssr: false });
