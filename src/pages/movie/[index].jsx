import style from "../../styles/Detail.module.css";
import Image from "next/image";
import { MdCalendarToday, MdLocationPin } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import cineone from "assets/images/cinemas/cineOne21.png";
import ebv from "assets/images/cinemas/ebv.id.png";
import hiflix from "assets/images/cinemas/hiflix.png";
import Footer from "components/Footer";
function MovieDetail() {
  return (
    <>
      <div className={style.container}>
        <main className={style.mainSection}>
          <div className={style.imageWrapper}>
            <Image
              src="https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
              // width={100}
              // height={100}
              objectFit="contain"
              // objectPosition='cover'
              layout="fill"
              alt="image"
              style={{ borderRadius: "12px", minWidth: "30vw" }}
            />
          </div>
          <div className={style.info}>
            <header className={style.infoHeader}>
              <div className={style.title}>
                Doctor Strange in the Multiverse of Madness
              </div>
              <div className={style.genre}>Adventure, Action, Sci-Fi</div>
            </header>
            <div className={style.infosectionWrapper}>
              <div className={style.info1}>
                <div className={style.infoSection}>
                  <div className={style.infoName}>Release Date</div>
                  <div className={style.infoValue}>June 28, 2017</div>
                </div>
                <div className={style.infoSection}>
                  <div className={style.infoName}>Duration</div>
                  <div className={style.infoValue}>2 hours 13 minutes </div>
                </div>
              </div>
              <div className={style.info2}>
                <div className={style.infoSection}>
                  <div className={style.infoName}>Directed by</div>
                  <div className={style.infoValue}>Jon Watss</div>
                </div>
                <div className={style.infoSection}>
                  <div className={style.infoName}>Casts</div>
                  <div className={style.infoValue}>
                    Tom Holland, Michael Keaton, Robert Downey Jr., ...
                  </div>
                </div>
              </div>
            </div>
            <div className={style.synopsis}>
              <div className={style.syHeader}>Synopsis</div>
              <div className={style.syDetail}>
                Doctor Strange, with the help of mystical allies both old and
                new, traverses the mind-bending and dangerous alternate
                realities of the Multiverse to confront a mysterious new
                adversary. Doctor Strange, with the help of mystical allies both
                old and new, traverses the mind-bending and dangerous alternate
                realities of the Multiverse to confront a mysterious new
                adversary. Doctor Strange, with the help of mystical allies both
                old and new, traverses the mind-bending and dangerous alternate
                realities of the Multiverse to confront a mysterious new
                adversary. adversary. Doctor Strange, with the help of mystical
                allies both old and new, traverses the mind-bending and
                dangerous alternate realities of the Multiverse to confront a
                mysterious new adversary. adversary. Doctor Strange, with the
              </div>
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
                <select className={style.filterValue}>
                  <option value="">21/07/20</option>
                  <option value="">22/07/20</option>
                  <option value="">23/07/20</option>
                </select>
              </div>
              <div className={style.filterValue}>
                <div style={{ position: "relative" }}>
                  <MdLocationPin
                    style={{ position: "absolute", left: "1rem", top: "1rem" }}
                  />
                  <select className={style.filterValue}>
                    <option value="">Purwokerto</option>
                    <option value="">Semarang</option>
                    <option value="">Jogja</option>
                  </select>
                </div>
              </div>
            </div>
          </header>
          <main className={style.cinemaSection}>
            <div className={style.cinemaCard}>
              <header className={style.cinemaHeader}>
                <div className={style.cinemaLogo}>
                  <Image src={cineone} layout="fill" alt="cinema" />
                </div>
                <div className={style.cinemaInfo}>
                  <div className={style.cinemaName}>CineOne21</div>
                  <div className={style.cinemaAddress}>
                    Whatever street No.12, South Purwokerto
                  </div>
                </div>
              </header>
              <main className={style.timewrapper}>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="08:30am"
                />
                <label htmlFor="08:30am" className={style.timelabel}>
                  08:30am
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="10:00am"
                />
                <label htmlFor="10:00am" className={style.timelabel}>
                  10:00am
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="12:00pm"
                />
                <label htmlFor="12:00pm" className={style.timelabel}>
                  12:00pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="02:00pm"
                />
                <label htmlFor="02:00pm" className={style.timelabel}>
                  02:00pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="04:30pm"
                />
                <label htmlFor="04:30pm" className={style.timelabel}>
                  04:30pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="03.0pm"
                />
                <label htmlFor="03.0pm" className={style.timelabel}>
                  03.0pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="08.30pm"
                />
                <label htmlFor="08.30pm" className={style.timelabel}>
                  08.30pm
                </label>
              </main>
              <footer>
                <div className={style.priceWrapper}>
                  <div className={style.price}>Price</div>
                  <div className={style.priceValue}>$10,00</div>
                </div>
                <div className={style.bookBtn}>
                  <div className="d">Book Now</div>
                </div>
              </footer>
            </div>
            <div className={style.cinemaCard}>
              <header className={style.cinemaHeader}>
                <div className={style.cinemaLogo}>
                  <Image src={ebv} layout="fill" alt="cinema" />
                </div>
                <div className={style.cinemaInfo}>
                  <div className={style.cinemaName}>ebv.id</div>
                  <div className={style.cinemaAddress}>
                    Whatever street No.12, South Purwokerto
                  </div>
                </div>
              </header>
              <main className={style.timewrapper}>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="08:30am_studio2"
                />
                <label htmlFor="08:30am_studio2" className={style.timelabel}>
                  08:30am
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="10:00am_studio2"
                />
                <label htmlFor="10:00am_studio2" className={style.timelabel}>
                  10:00am
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="12:00pm_studio2"
                />
                <label htmlFor="12:00pm_studio2" className={style.timelabel}>
                  12:00pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="02:00pm_studio2"
                />
                <label htmlFor="02:00pm_studio2" className={style.timelabel}>
                  02:00pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="04:30pm_studio2"
                />
                <label htmlFor="04:30pm_studio2" className={style.timelabel}>
                  04:30pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="03.0pm_studio2"
                />
                <label htmlFor="03.0pm_studio2" className={style.timelabel}>
                  03.0pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="08.30pm_studio2"
                />
                <label htmlFor="08.30pm_studio2" className={style.timelabel}>
                  08.30pm
                </label>
              </main>
              <footer>
                <div className={style.priceWrapper}>
                  <div className={style.price}>Price</div>
                  <div className={style.priceValue}>$10,00</div>
                </div>
                <div className={style.bookBtn}>
                  <div className="d">Book Now</div>
                </div>
              </footer>
            </div>
            <div className={style.cinemaCard}>
              <header className={style.cinemaHeader}>
                <div className={style.cinemaLogo}>
                  <Image src={hiflix} layout="fill" alt="cinema" />
                </div>
                <div className={style.cinemaInfo}>
                  <div className={style.cinemaName}>hiflix</div>
                  <div className={style.cinemaAddress}>
                    Whatever street No.12, South Purwokerto
                  </div>
                </div>
              </header>
              <main className={style.timewrapper}>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="08:30am_studio3"
                />
                <label htmlFor="08:30am_studio3" className={style.timelabel}>
                  08:30am
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="10:00am_studio3"
                />
                <label htmlFor="10:00am_studio3" className={style.timelabel}>
                  10:00am
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="12:00pm_studio3"
                />
                <label htmlFor="12:00pm_studio3" className={style.timelabel}>
                  12:00pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="02:00pm_studio3"
                />
                <label htmlFor="02:00pm_studio3" className={style.timelabel}>
                  02:00pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="04:30pm_studio3"
                />
                <label htmlFor="04:30pm_studio3" className={style.timelabel}>
                  04:30pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="03.0pm_studio3"
                />
                <label htmlFor="03.0pm_studio3" className={style.timelabel}>
                  03.0pm
                </label>
                <input
                  className={style.timeinput}
                  type="radio"
                  name="time"
                  id="08.30pm_studio3"
                />
                <label htmlFor="08.30pm_studio3" className={style.timelabel}>
                  08.30pm
                </label>
              </main>
              <footer>
                <div className={style.priceWrapper}>
                  <div className={style.price}>Price</div>
                  <div className={style.priceValue}>$10,00</div>
                </div>
                <div className={style.bookBtn}>
                  <div className="d">Book Now</div>
                </div>
              </footer>
            </div>
          </main>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default MovieDetail;
