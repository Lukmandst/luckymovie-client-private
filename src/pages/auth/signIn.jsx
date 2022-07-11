import Layout from "components/Layout"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeSlash } from "react-bootstrap-icons"
import styles from "../../styles/Auth.module.css"
import Google from "assets/images/logo/google.png"
import Facebook from "assets/images/logo/Facebook.jpg"
import Image from "next/image"
import AsideLogin from "components/aside/AsideLogin"
import { useRouter } from "next/router"
import { loginAction } from "redux/actionCreators/auth"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const dispatch = useDispatch()
    const { userInfo, isLoading, errorMsg, isSuccess, token } = useSelector(state => state.auth)

    const handlerLogin = () => {
        const body = { email, password };
        dispatch(loginAction(body))
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        if (token) {
            router.push("/")
        }
    }, [token])

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
                            <input type="email" name="email" placeholder="Enter your e-mail" className={styles.formInput}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.wrapperForm}>
                        <label htmlFor="" className={styles.formLabel}>Password</label>
                        <div className={styles.inputWrapper}>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Write your password" className={styles.formInput}
                                onChange={e => setPassword(e.target.value)}
                            />
                            {showPassword ? <Eye className={styles.eye} onClick={showPassHandler} /> : <EyeSlash className={styles.icon} onClick={showPassHandler} />}
                        </div>
                        <Link href={'/forgot'}>
                            <div className={styles.forgot}>Forgot password?</div>
                        </Link>
                    </div>
                    {!isSuccess && Array.isArray(errorMsg) ? (
                        errorMsg.map((erroritem) => <div key={errorMsg} className={styles.errorMsg} > {erroritem.msg}</div>)) : !isSuccess && <div key={errorMsg} className={styles.errorMsg} > {errorMsg} </div>
                    }

                    <div className={styles.button} onClick={handlerLogin}>Sign In</div>
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
                            <Image src={Facebook} width={30} height={30} alt="fb" />
                            <div className={styles.buttonInfo}>Facebook</div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default SignIn