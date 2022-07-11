import { GetUser } from "modules/axios";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import dummy from "../../assets/img/defaultProfile.png";
import styles from "./Header.module.css";


function HeaderAfterLogin({ showToggle, setShowToggle, handleShowLogout }) {
  const { token, role } = useSelector((state) => state.auth);
  const { user, isLoading, isError } = GetUser(token);
  return (
    <div className="d-flex align-items-center">
      <li className="mx-2 nav-item">
        <span style={{ fontWeight: "600" }}>
          Welcome {user && user.first_name} !
        </span>
      </li>
      <li
        className="mx-2 nav-item"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
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
          onClick={() => setShowToggle(!showToggle)}
        />
        {showToggle && (
          <div className={styles.dropProfile}>
            {role !== 1?
            <Link href={"/profile"}>
              <span className={styles.dropVal}>Profile</span>
            </Link>
            :
            <Link href={"/admin"}>
              <span className={styles.dropVal}>Admin</span>
            </Link>
            
          }
            <span className={styles.dropVal} onClick={handleShowLogout}>
              Log out
            </span>
          </div>
        )}
      </li>
    </div>
  );
}

export default HeaderAfterLogin;
