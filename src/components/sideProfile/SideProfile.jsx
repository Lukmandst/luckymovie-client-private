import styles from './SideProfile.module.css'
import Image from 'next/image'
import more from '../../assets/img/more.png'
import dummy from '../../assets/img/dummybig.png'
import star from '../../assets/img/star2.png'


const SideProfile = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.info}>
          <span>INFO</span>
          <Image src={more} alt="more"/>
        </div>
        <div className={styles.imgProfile}>
          <Image src={dummy} alt='profile-image'/>
        </div>
        <div className={styles.displayName}>
          <span>Jonas El Rodriguez</span>
          <span>Moviegoers</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bottomCard}>
          <span>Loyalty Points</span>
          <div className={styles.maskGroup}>
            <span></span>
            <span></span>
          </div>
          <span>180 points become a master</span>
          <div className={styles.proggressbar}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SideProfile