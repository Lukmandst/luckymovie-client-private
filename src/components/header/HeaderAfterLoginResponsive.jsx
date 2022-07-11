import { GetUser } from "modules/axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "redux/actionCreators/auth";
import dummy from "../../assets/img/defaultProfile.png";
import styles from "./Header.module.css";

function HeaderAfterLoginResponsive({ showToggle, handleShowLogout }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user, isLoading, isError } = GetUser(token);
  const router = useRouter();
  useEffect(() => {
    if (isError) {
      dispatch(logoutAction());
    }
  }, [dispatch, isError]);
  return (
    <>
      <div className="p-2 py-3">
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
          width={65}
          height={65}
          style={{ borderRadius: "50px", cursor: "pointer" }}
        />
        {showToggle && (
          <div className={styles.dropProfile}>
            <Link href={"/profile"}>
              <span className={styles.dropVal}>Profile</span>
            </Link>
            <span className={styles.dropVal}>Log out</span>
          </div>
        )}
      </div>
      <div className="p-2 py-3 d-flex">
        <div>
          
          <button
            className="btn btn-outline"
            onClick={() => {
              router.push("/profile");
            }}
          >
            Profile
          </button>
        </div>
        <div>
          <button className="btn" onClick={handleShowLogout}>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default HeaderAfterLoginResponsive;
