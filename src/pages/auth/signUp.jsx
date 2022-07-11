import Layout from "components/Layout"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeSlash } from "react-bootstrap-icons"
import styles from "../../styles/Auth.module.css"
import Google from "assets/images/logo/google.png"
import Facebook from "assets/images/logo/Facebook.jpg"
import Image from "next/image"
import AsideRegister from "components/aside/AsideRegister"
import { doSignUp } from "modules/axios"

function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)
    const [isAgree, setIsAgree] = useState(false)

    const signUpHandler = async () => {
        try {
            setIsError(false)
            setMsg(false)
            if (!isAgree) {
                setIsError(true)
                setMsg("You have not agree to terms & conditions")
            }
            else {
                let body = { email, password }
                let response = await doSignUp(body)
                console.log(response);
                setIsError(false)
                setIsLoading(true)
                setMsg(response.data.data.msg)
            }
        }
        catch (error) {
            console.log(error);
            setMsg(error.response.data.err.msg)
            setIsLoading(false)
            setIsError(true)

        }
    }

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
                            <input type="email" name="email" placeholder="Enter your e-mail" className={styles.formInput}
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className={styles.wrapperForm}>
                        <label htmlFor="" className={styles.formLabel}>Password</label>
                        <div className={styles.inputWrapper}>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Write your password" className={styles.formInput}
                                onChange={e => setPassword(e.target.value)} />
                            {showPassword ? <Eye className={styles.eye} onClick={showPassHandler} /> : <EyeSlash className={styles.icon} onClick={showPassHandler} />}
                        </div>
                    </div>
                    <div className={styles.wrapperCheckbox}>
                        <input type="checkbox" className={styles.inputCheckbox} onClick={() => { setIsAgree(!isAgree) }} />
                        <div className={styles.checkboxInfo}>I agree to terms & conditions</div>
                    </div>
                    {isError && Array.isArray(msg) ? (
                        msg.map((erroritem) => <div key={erroritem.msg} className={styles.errorMsg} > {erroritem.msg}</div>)) : isError && <div key={msg} className={styles.errorMsg} > {msg} </div>
                    }

                    {!isError ? <div key={msg} className={styles.successMsg}> {msg} </div> : <></>}

                    <div className={styles.button} onClick={signUpHandler}>Join for free now</div>
                    <div className={styles.login}>Do you already have an account? <Link href={"/signin"}><a className={styles.link}>Log in</a></Link></div>
                    <div className={styles.wrapperOr}>
                        <div className={styles.underline}></div>
                        <div className={styles.or}>Or</div>
                        <div className={styles.underline}></div>
                    </div>
                    <div className={styles.containerButtonFooter}>
                        <div className={styles.wrapperButtonFooter}>
                            <Image src={Google} width={30} height={30} alt="icon-img" />
                            <div className={styles.buttonInfo}>Google</div>
                        </div>
                        <div className={styles.wrapperButtonFooter}>
                            <Image src={Facebook} width={30} height={30} alt="icon-img" />
                            <div className={styles.buttonInfo}>Facebook</div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default SignUp;
