import styles from "./SideProfile.module.css";
import Image from "next/image";
import more from "../../assets/img/more.png";
import dummy from "../../assets/img/defaultProfile.png";
import { useState } from "react";
import { GetUser } from "modules/axios";
import { useSelector } from "react-redux";
import star from "assets/img/star.png";

const SideProfile = ({ photo, previewImg }) => {
  const [show, setShow] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { user, isLoading, isError } = GetUser(token);
  // console.log(user);
  return (
    <>
      <div className={`${styles.container} ${show ? styles.show : ""}`}>
        <div className={styles.card}>
          <div className={styles.info}>
            <span>INFO</span>
            <Image src={more} alt="more" />
          </div>
          {isLoading ? 
          <div className={styles.imgProfile}>
              <div className="spinner-border text-secondary" role="status"/>
          </div> :<>
          <div className={styles.imgProfile}>
            {photo ? (
              <Image
                src={previewImg}
                alt="preview"
                objectFit="cover"
                layout="fixed"
                width={200}
                height={200}
                style={{ borderRadius: "200px" }}
              />
            ) : (
              <Image
                src={
                  user && !user.picture
                    ? dummy
                    : user
                    ? `${user && user.picture}`
                    : "/"
                }
                alt="profile-image"
                objectFit="cover"
                layout="fixed"
                width={200}
                height={200}
                style={{ borderRadius: "200px" }}
              />
            )}
          </div></>}
          <div className={styles.displayName}>
            <span>
              {user && user.first_name ? user.first_name : user && user.email}{" "}
              {` `}
              {user && user.last_name ? user.last_name : null}
            </span>
            <span>Moviegoers</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.bottomCard}>
            <span>Loyalty Points</span>
            <div className={styles.maskGroup}>
              <span></span>
              <span></span>
              <span className={styles.star}>
                <Image
                  src={star}
                  objectFit="contain"
                  width={50}
                  height={50}
                  layout="fixed"
                  alt="star"
                  
                />
              </span>
              <span className={styles.movie}>Moviegoers</span>
              <span className={styles.loyaltyPoints}>
                {user && user.loyalty_points}{" "}
                <span style={{ fontSize: "14px", fontWeight: "400" }}>
                  points
                </span>
              </span>
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
