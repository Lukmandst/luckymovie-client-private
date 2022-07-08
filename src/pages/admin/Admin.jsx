import Header from "components/header/Header"
import Footer from "components/Footer"
import styles from './Admin.module.css'

const Admin = () => {
  return (
    <>
    <Header/>
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.movieDescription}></div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Admin