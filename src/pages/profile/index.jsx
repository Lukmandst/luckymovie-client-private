import LayoutProfile from "../../components/layout/LayoutProfile"
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <>
    <LayoutProfile title={"Profile"}>
        <div className={styles.container}>
          <div className={styles.profileBar}>
            <span>Account Settings</span>
            <span>Order History</span>
          </div>
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
        </div>
    </LayoutProfile>
    </>
  )
}

export default Profile