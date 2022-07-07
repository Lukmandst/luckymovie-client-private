import styles from "./SideProfile.module.css";
import Image from "next/image";
import more from "../../assets/img/more.png";
import dummy from "../../assets/img/dummybig.png";
import { useState } from "react";
import { GetUser } from "modules/axios";
import { useSelector } from "react-redux";

const SideProfile = () => {
  const [show, setShow] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { user, isLoading, isError } = GetUser(token);
  return (
    <>
      <div className={`${styles.container} ${show ? styles.show : ""}`}>
        <div className={styles.card}>
          <div className={styles.info}>
            <span>INFO</span>
            <Image src={more} alt="more" />
          </div>
          <div className={styles.imgProfile}>
            <Image src={user ? user.image: dummy} alt="profile-image" />
          </div>
          <div className={styles.displayName}>
            <span>
              {user &&user.first_name ? user.first_name : user&& user.email}
              {user && user.last_name ? user.last_name:null}
            </span>
            <span>Moviegoers</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.bottomCard}>
            <span>Loyalty Points</span>
            <div className={styles.maskGroup}>
              <span></span>
              <span></span>
            </div>
            <span>180 points become a master</span>
            <div className={styles.proggressbar}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <span
        className={`${styles.rightArrow} ${show ? styles.show : ""}`}
        onClick={() => {
          if (show) {
            setShow(false);
          }
          if (!show) {
            setShow(true);
          }
        }}
      >
        {"|"}
      </span>
    </>
  );
};

export default SideProfile;
