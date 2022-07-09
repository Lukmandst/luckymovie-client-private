// <<<<<<< HEAD
// import LayoutProfile from "../../components/layout/LayoutProfile"
// import styles from './Profile.module.css'
// import {Eye, EyeSlash} from 'react-bootstrap-icons'
// import cineOne from '../../assets/img/cineone.png'
// import Image from "next/image"
// import { useState } from "react"
// import { useEffect } from "react"
// import { getUserId } from "modules/axios"
// import { useSelector } from "react-redux"

// const Profile = () => {
//   const [showOrder, setShowOrder] = useState(false)

//   useEffect(()=>{
//     const getUser = async()=>{
//       try {
//         const result = await getUserId()
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }, [])

import LayoutProfile from "../../components/layout/LayoutProfile";
import styles from "./Profile.module.css";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import cineOne from "../../assets/img/cineone.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GetUser, GetUserHistory } from "modules/axios";
import { useSelector } from "react-redux";
import axios from "axios";
import { currencyFormatter, formatPhoneNumber } from "helper/formatter";
import SideProfile from "components/sideProfile/SideProfile";
import { useRouter } from "next/router";

const Profile = () => {
  const [showOrder, setShowOrder] = useState(false);
  const [firstname, setFirstname] = useState(false);
  const [lastname, setLastname] = useState(false);
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const [pass, setPass] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editPass, setEditPass] = useState(false);

  const [eye1, setEye1] = useState(false);
  const [eye2, setEye2] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [msg, setMsg] = useState(false);
  const [errmsg, seterrMsg] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const { user, isLoading, isError } = GetUser(token);
  const {
    history,
    isLoading: loadingHistory,
    isError: errorHistory,
  } = GetUserHistory(token);
console.log(history)
console.log(errorHistory)
  const router = useRouter();
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImg(reader.result);
        setPhoto(file);
      };
      reader.readAsDataURL(file);
      // setEdit(true);
    }
  };

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
          "content-type": "multipart/form-data",
        },
      });
      console.log(updateResult);
      setLoadingUpdate(false);
      setMsg("Update Success!");
      setTimeout(() => {
        window.scrollTo(0, 0);
        setMsg(false);
      }, 2000);
      setEdit(false);
    } catch (error) {
      console.log(error);
      seterrMsg(error.response ? error.response.data.err.msg : error.response);
      setLoadingUpdate(false);
      // setEdit(false);
      setTimeout(() => {
        seterrMsg(false);
      }, 2000);
    }
  };
  const updatePassword = async () => {
    setLoadingUpdate(false);
    setMsg(false);
    seterrMsg(false);
    const body = {
      password: pass,
    };
    try {
      if (pass !== confirm) {
        seterrMsg("The password confirmation does not match!");
        setTimeout(() => {
          seterrMsg(false);
        }, 2000);
      } else {
        setLoadingUpdate(true);
        const updateResult = await axios({
          method: "PATCH",
          url: `${process.env.NEXT_PUBLIC_API_HOST}/user/update/password`,
          data: body,
          headers: {
            "x-access-token": `${token}`,
          },
        });
        console.log(updateResult);
        setLoadingUpdate(false);
        setMsg("Update Success please sign in again!");
        setTimeout(() => {
          setPass("");
          setConfirm("");
          window.scrollTo(0, 0);
          setMsg(false);
        }, 2000);
        setEditPass(false);
      }
    } catch (error) {
      console.log(error);
      seterrMsg(error.response ? error.response.data.err.msg : error.response);
      setLoadingUpdate(false);
      // setEdit(false);
      setTimeout(() => {
        seterrMsg(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/signin");
    } else {
      if (user) {
        setEmail(user.email);
        setFirstname(user.first_name);
        setLastname(user.last_name);
        setPhone(user.phone_number);
      }
    }
  }, [router, token, user]);
  // >>>>>>> 1d15f5fb0b73d95a090b8c8ef9a148834ba3cbfb
  return (
    <>
      <LayoutProfile title={"Profile"}>
        <SideProfile photo={photo} previewImg={previewImg} />
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
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Detail Information</span>
                    <span
                      style={{
                        cursor: "pointer",
                        userSelect: "none",
                        color: "#5f2eea",
                      }}
                      onClick={() => setEdit(!edit)}
                    >
                      Edit
                    </span>
                  </div>
                  <span></span>
                </div>
                <form className={styles.form}>
                  <div className={styles.first}>
                    <div className={styles.inputProfile}>
                      <label>First name</label>
                      <input
                        disabled={!edit}
                        type="text"
                        defaultValue={user ? user.first_name : null}
                        placeholder="Enter your first name"
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                    <div className={styles.inputProfile}>
                      <label>Last name</label>
                      <input
                        disabled={!edit}
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
                        disabled
                        type="email"
                        defaultValue={user ? user.email : null}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className={styles.inputProfile}>
                      <label>Phone number</label>
                      <input
                        disabled={!edit}
                        type="number"
                        defaultValue={user ? user.phone_number : null}
                        placeholder="Enter your phone number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  {edit && (
                    <div className={styles.first}>
                      <div className={styles.inputProfile}>
                        <label>Profile Image</label>
                        <input
                          disabled={!edit}
                          // className="d-none"
                          type="file"
                          id="upload-button"
                          accept="image/*"
                          onChange={handleImage}
                          // style={{ display: "none" }}
                        />
                      </div>
                    </div>
                  )}
                </form>
              </div>
              <div className={styles.privacy}>
                <div className={styles.title}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Account and Privacy</span>
                    <span
                      style={{
                        cursor: "pointer",
                        userSelect: "none",
                        color: "#5f2eea",
                      }}
                      onClick={() => setEditPass(!editPass)}
                    >
                      Manage
                    </span>
                  </div>
                  <span></span>
                </div>
                <div className={styles.first}>
                  <div className={styles.inputProfile}>
                    <label>New Password</label>
                    <input
                      disabled={!editPass}
                      type={eye1 ? "text" : "password"}
                      placeholder="Write your password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                    {editPass ? (
                      eye1 ? (
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
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className={styles.inputProfile}>
                    <label>Confirm Password</label>
                    <input
                      disabled={!editPass}
                      type={eye2 ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                    />
                    {editPass ? (
                      eye2 ? (
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
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {msg ? (
                  <div style={{ textAlign: "center", color: "#1EC15F" }}>
                    {msg}
                  </div>
                ) : Array.isArray(errmsg) ? (
                  errmsg.map((result, i) => (
                    <div
                      key={i}
                      style={{ textAlign: "center", color: "#FF5B37" }}
                    >
                      {result.msg}
                    </div>
                  ))
                ) : (
                  <div style={{ textAlign: "center", color: "#FF5B37" }}>
                    {errmsg}
                  </div>
                )}
                {edit ? (
                  <div className={styles.updateBtn} onClick={updateUser}>
                    <span>Update changes</span>
                  </div>
                ) : editPass ? (
                  <div className={styles.updateBtn} onClick={updatePassword}>
                    <span>Update Password</span>
                  </div>
                ) : edit && editPass ? (
                  <>
                    <div className={styles.updateBtn} onClick={updateUser}>
                      <span>Update changes</span>
                    </div>
                    <div className={styles.updateBtn} onClick={updatePassword}>
                      <span>Update Password</span>
                    </div>
                  </>
                ) : (
                  <></>
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
