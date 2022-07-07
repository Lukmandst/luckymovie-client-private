import Layout from "components/Layout"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeSlash } from "react-bootstrap-icons"
import styles from "../../styles/Auth.module.css"
import Google from "assets/images/logo/google.png"
import Facebook from "assets/images/logo/facebook.jpg"
import Image from "next/image"
import AsideRegister from "components/aside/AsideRegister"

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    // const [password, setPassword] = useState("")

    const showPassHandler = () => {
        setShowPassword(!showPassword)
    }
    return (
        <Layout title="Sign Up">
            <main className={styles.globalContainer}>
                <AsideRegister />
                <div className={styles.containerContent}>
                    <div className={styles.contentTitle}>Fill your additional details</div>
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
                    </div>
                    <div className={styles.wrapperCheckbox}>
                        <input type="checkbox" className={styles.inputCheckbox} />
                        <div className={styles.checkboxInfo}>I agree to terms & conditions</div>
                    </div>
                    <div className={styles.button}>Join for free now</div>
                    <div className={styles.login}>Do you already have an account? <Link href={"/signin"}><a className={styles.link}>Log in</a></Link></div>
                    <div className={styles.wrapperOr}>
                        <div className={styles.underline}></div>
                        <div className={styles.or}>Or</div>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.containerButtonFooter}>
                        <div className={styles.wrapperButtonFooter}>
                            <Image src={Google} width={30} height={30} />
                            <div className={styles.buttonInfo}>Google</div>
                        </div>
                        <div className={styles.wrapperButtonFooter}>
                            <Image src={Facebook} width={30} height={30} />
                            <div className={styles.buttonInfo}>Facebook</div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default SignUp