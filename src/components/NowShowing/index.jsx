import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

import Movie from "../../assets/images/hero/movie.png";

const NowShowing = ({ image, id }) => {
  const router = useRouter();
  return (
    <>
      <div
        className={styles.nowShowing}
        onClick={() => {
          router.push(`/movies/${id}`);
        }}
      >
        <Image src={image} alt="movies" />
      </div>
    </>
  );
};

export default NowShowing;
