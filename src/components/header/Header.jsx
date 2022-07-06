import styles from './Header.module.css'
import Image from 'next/image'
import logo from '../../assets/img/logo.png'
import dummy from '../../assets/img/dummy.png'
import searchIcon from '../../assets/img/searchIcon.png'
import { useState } from 'react'


const Header = () => {
    const [showToggle, setShowToggle] = useState(false)
  return (
    <>
    <div className={styles.container}>
        <div className={styles.left}>
            <Image src={logo} alt="logo"/>
            <ul>
                <li>Movies</li>
                <li>Cinema</li>
                <li>Buy Ticket</li>
            </ul>
        </div>
        <div className={styles.right}>
            <div className={`${styles.item} ${showToggle ? styles.show : ""}`}>
                <span>Location</span>
                <Image src={searchIcon} alt="search"/>
                <Image src={dummy} alt='profile'/>
            </div>
            <div className={styles.toggle} onClick={()=>{
                if(!showToggle){
                    setShowToggle(true)
                }
                if(showToggle){
                    setShowToggle(false)
                }
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header