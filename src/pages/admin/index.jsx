import Header from "components/header/Header"
import Footer from "components/Footer"
import styles from './Admin.module.css'
import Head from "next/head"
import Image from "next/image"
import spiderman from '../../assets/img/spiderman.png'
import ibv from '../../assets/img/ebv.id.png'
import hiflix from '../../assets/img/hiflix.png'
import cineone from '../../assets/img/cineone.png'
import biPlus from '../../assets/img/bi_plus.png'

const Admin = () => {
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
                    <Image src={spiderman} alt="movie_img"/>
                  </div>
                  <div className={styles.cardInput}>
                    <label htmlFor="">Movie Name</label>
                    <input type="text" placeholder="Spiderman"/>
                    <label htmlFor="">Category</label>
                    <input type="text" placeholder="Action, Adventure, Sci-Fi" />
                    <label htmlFor="">Release Date</label>
                    <input type="text" placeholder="release-date" />
                    <div className={styles.duration}>
                      <label htmlFor="">Duration (Hour/Minute)</label>
                      <div className={styles.inputHour}>
                      <input type="text" placeholder="2" />
                      <input type="text" placeholder="12"/>
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
              </div>
            </div>
            <div className={styles.premiere}>
              <span>Premiere Location</span>
              <div className={styles.premiereCard}>
                <select name="" id="">
                  <option value="">Semarang</option>
                  <option value="">Purwokerto</option>
                  <option value="">Yogyakarta</option>
                </select>
                <div className={styles.premiereImg}>
                  <Image src={ibv} alt="IBV"/>
                  <Image src={hiflix} alt="hiflix"/>
                  <Image src={cineone} alt="cineone"/>
                </div>
                <div className={styles.premiereImg}>
                  <Image src={ibv} alt="IBV"/>
                  <Image src={hiflix} alt="hiflix"/>
                  <Image src={cineone} alt="cineone"/>
                </div>
                <div className={styles.premiereImg}>
                  <Image src={ibv} alt="IBV"/>
                  <Image src={hiflix} alt="hiflix"/>
                  <Image src={cineone} alt="cineone"/>
                </div>
              </div>
              <div className={styles.showtime}>
                <span>Showtimes</span>
                <div className={styles.showtimeCard}>
                  <div className="inputDate">
                    <input type="date" />
                  </div>
                  <div className={styles.setTime}>
                    <Image src={biPlus}/>
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
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Admin