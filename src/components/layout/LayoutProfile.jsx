import Header from "../header/Header"
import Footer from "../footer/Footer"
import Head from "next/head"
import SideProfile from "../sideProfile/SideProfile"
import styles from './LayoutProfile.module.css'

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
    </>
  )
}

export default LayoutProfile