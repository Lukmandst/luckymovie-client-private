import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

import Movie from "../../assets/images/hero/movie.png";

export default function UpComing({ id, image, title, genre }) {
  const router = useRouter();
  return (
    <div className="d-flex flex-column">
      <div className={`${styles.nowShowing}`}>
        <div className="d-flex flex row justify-content-center">
          <Image src={image} width={200} height={300} alt="movies" />
        </div>
        <div className=" justify-content-center d-flex flex-column">
          <h5 className="text-center pt-3">
            <b>{title}</b>
          </h5>
          <p className="text-center pt-3">{genre}</p>
          <button
            className={`${styles.btnOutline} justify-content-center`}
            onClick={() => {
              router.push(`/movie/${id}`);
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
