import styles from "./Admin.module.css";
import style from "../../styles/Detail.module.css";
import Image from "next/image";
import Head from "next/head";
import Header from "components/header/Header";
import Footer from "components/Footer";
import spiderman from "../../assets/img/spiderman.png";
import ibv from "../../assets/img/ebv.id.png";
import hiflix from "../../assets/img/hiflix.png";
import cineone from "../../assets/img/cineone.png";
import biPlus from "../../assets/img/bi_plus.png";
import camera from "../../assets/img/camera-blank.png";
import { MdCalendarToday } from "react-icons/md";
import { useEffect, useState } from "react";
import { postNewMovie, postNewCinema } from "modules/axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const AddMovie = () => {
  const [reset, setReset] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCinema, setIsLoadingCinema] = useState(false);
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
  const { token, role } = useSelector((state) => state.auth);
  const router = useRouter();
  const addNewMovie = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      const body = {
        ...detailMovie,
        duration: `${hour} Hour ${minute} Minutes`,
      };
      for (const key in body) {
        formData.append(key, body[key]);
      }
      const res = await postNewMovie(formData, token);
      setIsLoading(false);
      setMovie_Id(res.data.data.id);
      alert("Succes add movie");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  console.log(detailCinema);
  const addCinema = async () => {
    setIsLoadingCinema(true);
    try {
      if (!movie_id) {
        throw alert("movie_id must be filled");
      }
      const body = { ...detailCinema, movie_id, times };
      console.log(body);
      const res = await postNewCinema(body, token);
      console.log(res);
      setIsLoadingCinema(false);
      alert(res.data.message);
    } catch (error) {
      console.log(error);
      setIsLoadingCinema(false);
      alert(error.response.data.msg);
    }
  };
  // console.log(previewImg);

  useEffect(() => {
    if (role !== 1) {
      router.push("/");
    }
    router.push(
      `/admin/add-movie?movie_id=${movie_id}&cinema_name=${detailCinema.cinema_name}&cinema_price=${detailCinema.cinema_price}&location_id=${detailCinema.location_id}&cinema_price${detailCinema.cinema_price}&date=${detailCinema.date}&times=${times}`,
      undefined,
      {
        shallow: true,
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    detailCinema.cinema_name,
    detailCinema.cinema_price,
    detailCinema.date,
    detailCinema.location_id,
    movie_id,
    role,
    times,
  ]);

  return (
    <>
      <Head>
        <title>Admin Page</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.movieDescription}>
            <span>Movie Description</span>
            <div className={styles.cardDesc}>
              <div className={styles.topCard}>
                <div className={styles.cardImage}>
                  <Image
                    src={previewImg === null ? camera : previewImg}
                    alt="movie_img"
                    height={200}
                    width={200}
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
                    placeholder="Input Movie Name"
                    onChange={(e) => {
                      setDetailMovie({ ...detailMovie, title: e.target.value });
                    }}
                  />
                  <label htmlFor="">Category</label>
                  <input
                    type="text"
                    placeholder="Input Category Movie"
                    onChange={(e) => {
                      setDetailMovie({ ...detailMovie, genre: e.target.value });
                    }}
                  />
                  <label htmlFor="">Release Date</label>
                  <input
                    type="date"
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
                        onChange={(e) => {
                          setHour(e.target.value);
                        }}
                      />
                      <input
                        type="text"
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
                    onChange={(e) => {
                      setDetailMovie({ ...detailMovie, casts: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className={styles.bottomCard}>
                <div className={styles.synopsis}>
                  <span>Synopsis</span>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.addMovie} onClick={addNewMovie}>
                {isLoading ? (
                  <>
                    <div className="spinner-border text-light" role="status" />
                  </>
                ) : (
                  "Add Movie"
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
              <div className={styles.button}>
                <div className={styles.addMovie} onClick={addCinema}>
                  {isLoadingCinema ? (
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
      </div>
      <Footer />
    </>
  );
};

export default AddMovie;
