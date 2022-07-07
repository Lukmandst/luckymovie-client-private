import styles from '../../styles/Auth.module.css'
import Logo from '../../assets/tickitz.png'
import Image from 'next/image'

function AsideReset() {
    return (
        <aside className={styles.backgroundAside}>
            <div className={styles.asideContainer}>
                <div className={styles.logoRegister}>
                    <Image src={Logo} alt='logo'></Image>
                </div>
                <div className={styles.asideTitle}>Lets reset your password</div>
                <div className={styles.asideBody}>To be able to use your account again, please
                    complete the following steps.</div>
                <div className={styles.asideFooter}>
                    <div className={styles.wrapperNumber}>
                        <div className={styles.numberCircleOne}>1</div>
                        <div className={styles.footerInfo}>Fill your complete email</div>
                    </div>
                    <div className={styles.wrapperNumber}>
                        <div className={styles.numberCircle}>2</div>
                        <div className={styles.footerInfo}>Activate your email</div>
                    </div>
                    <div className={styles.wrapperNumber}>
                        <div className={styles.numberCircle}>3</div>
                        <div className={styles.footerInfo}>Enter your new password</div>
                    </div>
                    <div className={styles.wrapperNumber}>
                        <div className={styles.numberCircle}>4</div>
                        <div className={styles.footerInfo}>Done</div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default AsideReset