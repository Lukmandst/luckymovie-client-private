import styles from '../../styles/Auth.module.css'
import Logo from '../../assets/tickitz.png'
import Image from 'next/image'

function Aside() {
    return (
        <aside className={styles.asideContainer}>
            <div className={styles.backgroundAside}>
                <div className={styles.logo}>
                    <Image src={Logo} alt='logo'></Image>
                </div>
                <h1>content</h1>
            </div>
        </aside>
    )
}

export default Aside