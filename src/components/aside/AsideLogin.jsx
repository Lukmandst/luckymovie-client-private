import styles from '../../styles/Auth.module.css'
import Logo from '../../assets/tickitz.png'
import Image from 'next/image'

function AsideLogin() {
    return (
        <aside className={styles.backgroundAside}>
            <div className={styles.asideContainer}>
                <div className={styles.logoLogin}>
                    <Image src={Logo} alt='logo'></Image>
                    <div className={styles.loginInfo}>wait, watch, wow!</div>
                </div>
            </div>
        </aside>
    )
}

export default AsideLogin