import LayoutProfile from "../../components/layout/LayoutProfile";
import styles from "./Profile.module.css";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import cineOne from "../../assets/img/cineone.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GetUser } from "modules/axios";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const [showOrder, setShowOrder] = useState(false);
  const [firstname, setFirstname] = useState(false);
  const [lastname, setLastname] = useState(false);
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [eye1, setEye1] = useState(false);
  const [eye2, setEye2] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [msg, setMsg] = useState(false);
  const [errmsg, seterrMsg] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const { user, isLoading, isError } = GetUser(token);
  console.log(eye1);

  const updateUser = async () => {
    setLoadingUpdate(false);
    setMsg(false);
    seterrMsg(false);
    const body = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      phone_number: phone,
      photo: photo,
    };
    try {
      setLoadingUpdate(true);
      const updateResult = await axios({
        method: "PATCH",
        url: `${process.env.NEXT_PUBLIC_API_HOST}/user/update/profile`,
        data: body,
        headers: {
          "x-access-token": `${token}`,
        },
      });
      console.log(updateResult)
      setLoadingUpdate(false);
      setMsg(updateResult.data.data.msg);
      setTimeout(() => {
        setMsg(false);
      }, 2000);
      // setEdit(false);
    } catch (error) {
      console.log(error);
      seterrMsg(error.response ? error.response.data.msg : error.response);
      setLoadingUpdate(false);
      // setEdit(false);
      setTimeout(() => {
        seterrMsg(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setFirstname(user.first_name);
      setLastname(user.last_name);
      setPhone(user.phone_number);
    }
  }, []);
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
                      <input
                        type="text"
                        defaultValue={user ? user.first_name : null}
                        placeholder="Enter your first name"
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                    <div className={styles.inputProfile}>
                      <label>Last name</label>
                      <input
                        type="text"
                        defaultValue={user ? user.last_name : null}
                        placeholder="Enter your last name"
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.first}>
                    <div className={styles.inputProfile}>
                      <label>Email</label>
                      <input
                        type="email"
                        defaultValue={user ? user.email : null}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className={styles.inputProfile}>
                      <label>Phone number</label>
                      <input
                        type="number"
                        defaultValue={user ? user.email : null}
                        placeholder="Enter your phone number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
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
                    <input
                      type={eye1 ? "text" : "password"}
                      placeholder="Write your password"
                    />
                    {eye1 ? (
                      <Eye
                        className={styles.eye}
                        color="black"
                        onClick={() => setEye1(!eye1)}
                      />
                    ) : (
                      <EyeSlash
                        className={styles.eye}
                        color="gray"
                        onClick={() => setEye1(!eye1)}
                      />
                    )}
                  </div>
                  <div className={styles.inputProfile}>
                    <label>Confirm Password</label>
                    <input
                      type={eye2 ? "text" : "password"}
                      placeholder="Confirm your password"
                    />
                    {eye2 ? (
                      <Eye
                        className={styles.eye}
                        color="black"
                        onClick={() => setEye2(!eye2)}
                      />
                    ) : (
                      <EyeSlash
                        className={styles.eye}
                        color="gray"
                        onClick={() => setEye2(!eye2)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="">
                <div className={styles.updateBtn} onClick={updateUser} >
                  <span>Update changes</span>
                </div>
                {msg ? (
                  <div style={{ textAlign: "center", color: "#1EC15F" }}>
                    {msg}
                  </div>
                ) : (
                  <div style={{ textAlign: "center", color: "#FF5B37" }}>
                    {errmsg}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </LayoutProfile>
    </>
  );
};

export default Profile;
