import styles from '../../styles/Auth.module.css'
import Logo from '../../assets/tickitz.png'
import Image from 'next/image'

function AsideRegister() {
    return (
        <aside className={styles.backgroundAside}>
            <div className={styles.asideContainer}>
                <div className={styles.logoRegister}>
                    <Image src={Logo} alt='logo'></Image>
                </div>
                <div className={styles.asideTitle}>Lets build your account</div>
                <div className={styles.asideBody}>To be a loyal moviegoer and access all of features, your details are required.</div>
                <div className={styles.asideFooter}>
                    <div className={styles.wrapperNumber}>
                        <div className={styles.numberCircleOne}>1</div>
                        <div className={styles.footerInfo}>Fill your additional details</div>
                    </div>
                    <div className={styles.wrapperNumber}>
                        <div className={styles.numberCircle}>2</div>
                        <div className={styles.footerInfo}>Activate your account</div>
                    </div>
                    <div className={styles.wrapperNumber}>
                        <div className={styles.numberCircle}>3</div>
                        <div className={styles.footerInfo}>Done</div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default AsideRegister