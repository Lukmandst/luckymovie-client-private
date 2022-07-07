import LayoutProfile from "../../components/layout/LayoutProfile";
import styles from "./Profile.module.css";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import cineOne from "../../assets/img/cineone.png";
import Image from "next/image";
import { useState } from "react";
import { GetUser } from "modules/axios";
import { useSelector } from "react-redux";

const Profile = () => {
  const [showOrder, setShowOrder] = useState(false);
  const { token } = useSelector((state) => state.auth);
  console.log(token)
  const { user, isLoading, isError } = GetUser(token);

  return (
    <>
      <LayoutProfile title={"Profile"}>
        <div className={styles.container}>
          <div className={styles.profileBar}>
            <span
              onClick={() => {
                setShowOrder(false);
              }}
              className={`${styles.span} ${showOrder ? "" : styles.act}`}
            >
              Account Settings
            </span>
            <span
              onClick={() => {
                setShowOrder(true);
              }}
              className={`${styles.span} ${showOrder ? styles.act : ""}`}
            >
              Order History
            </span>
            <span
              className={`${styles.barActive} ${showOrder ? styles.order : ""}`}
            ></span>
          </div>
          {showOrder ? (
            <>
              <div className={styles.historyCard}>
                <div className={styles.titleCard}>
                  <div className={styles.titleInfo}>
                    <span>Date</span>
                    <span>Title</span>
                  </div>
                  <div className={styles.studio}>
                    <Image src={cineOne} alt="studio" />
                  </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.footerCard}>
                  <span>Ticket In Active</span>
                  <span>Show Details</span>
                </div>
              </div>
              <div className={styles.historyCard}>
                <div className={styles.titleCard}>
                  <div className={styles.titleInfo}>
                    <span>Date</span>
                    <span>Title</span>
                  </div>
                  <div className={styles.studio}>
                    <Image src={cineOne} alt="studio" />
                  </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.footerCard}>
                  <span>Ticket In Active</span>
                  <span>Show Details</span>
                </div>
              </div>
              <div className={styles.historyCard}>
                <div className={styles.titleCard}>
                  <div className={styles.titleInfo}>
                    <span>Date</span>
                    <span>Title</span>
                  </div>
                  <div className={styles.studio}>
                    <Image src={cineOne} alt="studio" />
                  </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.footerCard}>
                  <span>Ticket In Active</span>
                  <span>Show Details</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.profileInfo}>
                <div className={styles.title}>
                  <span>Detail Information</span>
                  <span></span>
                </div>
                <form className={styles.form}>
                  <div className={styles.first}>
                    <div className={styles.inputProfile}>
                      <label>First name</label>
                      <input type="text" defaultValue={"Jonas"} />
                    </div>
                    <div className={styles.inputProfile}>
                      <label>Last name</label>
                      <input type="text" defaultValue={"Jonas"} />
                    </div>
                  </div>
                  <div className={styles.first}>
                    <div className={styles.inputProfile}>
                      <label>Email</label>
                      <input type="email" defaultValue={"Jonas"} />
                    </div>
                    <div className={styles.inputProfile}>
                      <label>Phone number</label>
                      <input type="number" defaultValue={"08123456"} />
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.privacy}>
                <div className={styles.title}>
                  <span>Account and Privacy</span>
                  <span></span>
                </div>
                <div className={styles.first}>
                  <div className={styles.inputProfile}>
                    <label>New Password</label>
                    <input type="password" />
                    <Eye className={styles.eye} color="gray" />
                  </div>
                  <div className={styles.inputProfile}>
                    <label>New Password</label>
                    <input type="password" />
                    <Eye className={styles.eye} color="gray" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </LayoutProfile>
    </>
  );
};

export default Profile;
