import Layout from "components/Layout"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeSlash } from "react-bootstrap-icons"
import styles from "../../styles/Auth.module.css"
import Google from "assets/images/logo/google.png"
import Facebook from "assets/images/logo/Facebook.jpg"
import Image from "next/image"
import AsideLogin from "components/aside/AsideLogin"

function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    // const [password, setPassword] = useState("")

    const showPassHandler = () => {
        setShowPassword(!showPassword)
    }
    return (
        <Layout title="Sign In">
            <main className={styles.globalContainer}>
                <AsideLogin />
                <div className={styles.containerContent}>
                    <div className={styles.contentTitle}>Sign In</div>
                    <div className={styles.contentBody}>Sign in with your data that you entered during your registration</div>
                    <div className={styles.wrapperForm}>
                        <label htmlFor="" className={styles.formLabel}>Email</label>
                        <div className={styles.inputWrapper}>
                            <input type="email" name="email" placeholder="Enter your e-mail" className={styles.formInput} />
                        </div>
                    </div>
                    <div className={styles.wrapperForm}>
                        <label htmlFor="" className={styles.formLabel}>Password</label>
                        <div className={styles.inputWrapper}>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Write your password" className={styles.formInput} />
                            {showPassword ? <EyeSlash className={styles.icon} onClick={showPassHandler} /> : <Eye className={styles.icon} onClick={showPassHandler} />}
                        </div>
                        <Link href={'/reset'}>
                            <div className={styles.forgot}>Forgot password?</div>
                        </Link>
                    </div>
                    <div className={styles.button}>Sign In</div>
                    <div className={styles.login}>Don’t have an account? Let’s <Link href={"/signup"}><a className={styles.link}>Sign Up</a></Link></div>
                    <div className={styles.wrapperOr}>
                        <div className={styles.underline}></div>
                        <div className={styles.or}>Or</div>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.containerButtonFooter}>
                        <div className={styles.wrapperButtonFooter}>
                            <Image src={Google} width={30} height={30} alt="google" />
                            <div className={styles.buttonInfo}>Google</div>
                        </div>
                        <div className={styles.wrapperButtonFooter}>
                            <Image src={Facebook} width={30} height={30} alt="fb"  />
                            <div className={styles.buttonInfo}>Facebook</div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default SignIn