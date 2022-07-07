import Header from "../header/Header"
import Head from "next/head"
import SideProfile from "../sideProfile/SideProfile"
import styles from './LayoutProfile.module.css'
import Footer from "components/Footer"

const LayoutProfile = ({title, children}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
    </Head>
    <Header/>
    <div className={styles.profileContainer}>
    <SideProfile/>
    {children}
    </div>
    <Footer/>
    </>
  )
}

export default LayoutProfile