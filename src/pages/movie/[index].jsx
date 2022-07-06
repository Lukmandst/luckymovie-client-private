import style from "../../styles/Detail.module.css";
import Image from "next/image";

function MovieDetail() {
  return (
    <>
      <div className={style.container}>
        <main className={style.mainSection}>
          <div className={style.image}>
            <Image
              src="https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"
              width={200}
              height={300}
              layout="fixed"
              alt="image"
            />
          </div>
          <div className={style.info}>
            <header className={style.infoHeader}>
              <div className={style.title}>Spiderman Homecoming</div>
              <div className={style.genre}>Adventure, Action, Sci-Fi</div>
            </header>
            <div className={style.infosectionWrapper}>
              <div className={style.infoSection}>
                <div className={style.infoName}>Release Date</div>
                <div className={style.infoValue}>June 28, 2017</div>
              </div>
              <div className={style.infoSection}>
                <div className={style.infoName}>Duration</div>
                <div className={style.infoValue}>2 hours 13 minutes </div>
              </div>
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
            <div className={style.synopsis}>
              <div className={style.syHeader}>Synopsis</div>
              <div className={style.syDetail}>
                Thrilled by his experience with the Avengers, Peter returns
                home, where he lives with his Aunt May, under the watchful eye
                of his new mentor Tony Stark, Peter tries to fall back into his
                normal daily routine - distracted by thoughts of proving himself
                to be more than just your friendly neighborhood Spider-Man - but
                when the Vulture emerges as a new villain, everything that Peter
                holds most important will be threatened.{" "}
              </div>
            </div>
          </div>
        </main>
        <section></section>
      </div>
    </>
  );
}

export default MovieDetail;
