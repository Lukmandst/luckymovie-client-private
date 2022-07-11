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
          router.push(`/movie/${id}`);
        }}
      >
        <div
          className=""
          style={{
            position: "relative",
            width: "160px",
            height: "260px",
            cursor: "pointer",
          }}
        >
          {image.length > 0 && (
            <Image
              src={image}
              layout="fill"
              alt="movies"
              style={{ borderRadius: "12px" }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default NowShowing;
