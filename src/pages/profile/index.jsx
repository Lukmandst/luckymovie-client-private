import LayoutProfile from "../../components/layout/LayoutProfile"
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <>
    <LayoutProfile title={"Profile"}>
        <div className={styles.container}>Profile Page</div>
    </LayoutProfile>
    </>
  )
}

export default Profile