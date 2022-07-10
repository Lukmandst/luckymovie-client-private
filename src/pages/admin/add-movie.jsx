import styles from './Admin.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Header from 'components/header/Header'
import Footer from 'components/Footer'
import spiderman from '../../assets/img/spiderman.png'
import ibv from '../../assets/img/ebv.id.png'
import hiflix from '../../assets/img/hiflix.png'
import cineone from '../../assets/img/cineone.png'
import biPlus from '../../assets/img/bi_plus.png'
import camera from '../../assets/img/camera-blank.png'
import { MdCalendarToday } from 'react-icons/md'
import { useState } from 'react'
import { postNewMovie, postNewCinema } from 'modules/axios'
import { useSelector } from 'react-redux'

const AddMovie = () => {
  const [detailMovie, setDetailMovie] = useState({
    title : "", 
    genre : "",
    casts : "", 
    synopsis : "",
    director : "", 
    release_date : "",
    photo : ""
  })
  const [movie_id, setMovie_Id] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [times, setTimes] = useState([])
  const [detailCinema, setDetailCinema] = useState({
    cinema_price : "",
    cinema_name : "",
    location_id : "",
    date : ""
  })
  const token = useSelector(state=>state.auth.token)
  const addMovie = async ()=>{
    try {
      const formData = new FormData()
      const body = {...detailMovie, duration : `${hour} Hour ${minute} Minutes`}
      for (const key in body) {
        formData.append(key, body[key])
      }
      const res = await postNewMovie(formData, token)
      setMovie_Id(res.data.data.id)
      alert("Succes add movie")
    } catch (error) {
      console.log(error);
    }
  }

  const addCinema = async ()=>{
    try {
      const body = {...detailCinema, movie_id, times}
      const res = await postNewCinema(body, token)
      alert(res.data.message)
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg)
    }
  }
  return (
    <>
    <Head>
      <title>Admin Page</title>
    </Head>
    <Header/>
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.movieDescription}>
              <span>Movie Description</span>
              <div className={styles.cardDesc}>
                <div className={styles.topCard}>
                  <div className={styles.cardImage}>
                    <Image src={camera} alt="movie_img" height={200} width={200}/>
                    <input type="file" onChange={(e)=>{
                      setDetailMovie({...detailMovie, photo : e.target.files[0]})
                    }}/>
                  </div>
                  <div className={styles.cardInput}>
                    <label htmlFor="">Movie Name</label>
                    <input type="text" placeholder="Input Movie Name" onChange={(e)=>{
                      setDetailMovie({...detailMovie, title : e.target.value})
                    }}
                    />
                    <label htmlFor="">Category</label>
                    <input type="text" placeholder="Input Category Movie" onChange={(e)=>{
                      setDetailMovie({...detailMovie, genre : e.target.value})
                    }}/>
                    <label htmlFor="">Release Date</label>
                    <input type="date" placeholder="Input release-date"  onChange={(e)=>{
                      setDetailMovie({...detailMovie, release_date : e.target.value})
                    }}/>
                    <div className={styles.duration}>
                      <label htmlFor="">Duration (Hour/Minute)</label>
                      <div className={styles.inputHour}>
                      <input type="text" placeholder="2" onChange={(e)=>{
                        setHour(e.target.value)
                      }}/>
                      <input type="text" placeholder="12" onChange={e=>{
                        setMinute(e.target.value)
                      }}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottomCard}>
                  <div className={styles.director}>
                    <label htmlFor="">Director</label>
                    <input type="text" onChange={(e)=>{
                      setDetailMovie({...detailMovie, director : e.target.value})
                    }}/>
                  </div>
                  <div className={styles.director}>
                    <label htmlFor="">Cast</label>
                    <input type="text" onChange={(e)=>{
                      setDetailMovie({...detailMovie, casts : e.target.value})
                    }}/>
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
                  <div className={styles.addMovie} onClick={addMovie}>Add Movie</div>
              </div>
            </div>
            <div className={styles.premiere}>
              <span>Premiere Location</span>
              <div className={styles.premiereCard}>
              <select className={styles.filterValue} onChange={(e)=>{
                if(e.target.value === "Jakarta"){
                  setDetailCinema({...detailCinema, location_id : "26"})
                }
                if(e.target.value === "Bandung"){
                  setDetailCinema({...detailCinema, location_id : "27"})
                }
                if(e.target.value === "Semarang"){
                  setDetailCinema({...detailCinema, location_id : "28"})
                }
                if(e.target.value === "Surabaya"){
                  setDetailCinema({...detailCinema, location_id : "29"})
                }
              }}>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Semarang">Semarang</option>
                    <option value="Surabaya">Surabaya</option>
                  </select>
                <div className={styles.premiereImg}>
                  <Image src={ibv} alt="IBV" onClick={()=>{
                    setDetailCinema({...detailCinema, cinema_name : "ibv.id"})
                  }}/>
                  <Image src={hiflix} alt="hiflix" onClick={()=>{
                    setDetailCinema({...detailCinema, cinema_name : "hiflix"})
                  }}/>
                  <Image src={cineone} alt="cineone" onClick={()=>{
                    setDetailCinema({...detailCinema, cinema_name : "cineOne21"})
                  }}/>
                </div>
                <div className={styles.inputPrice}>
                  <input type="number" onChange={(e)=>{
                    setDetailCinema({...detailCinema, cinema_price : e.target.value})
                  }} />
                </div>
              </div>
              <div className={styles.showtime}>
                <span>Showtimes</span>
                <div className={styles.showtimeCard}>
                <div style={{ position: "relative" }}>
                <MdCalendarToday
                  style={{ position: "absolute", left: "1rem", top: "1rem" }}
                />
                <select className={styles.filterValue} onChange={(e)=>{
                    setDetailCinema({...detailCinema, date : e.target.value})
                }}>
                  <option value="21/07/20">21/07/20</option>
                  <option value="22/07/20">22/07/20</option>
                  <option value="23/07/20">23/07/20</option>
                </select>
              </div>
                  <div className={styles.setTime}>
                    <span onClick={()=>{
                      setTimes([...times, '14'])
                    }}>12:00</span>
                    <span onClick={()=>{
                      setTimes([...times, '15'])
                    }}>14:00am</span>
                    <span onClick={()=>{
                      setTimes([...times, '16'])
                    }}>16:00am</span>
                    <span onClick={()=>{
                      setTimes([...times, '17'])
                    }}>18:00pm</span>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.addMovie} onClick={addCinema}>Add Cinema</div>
            </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default AddMovie