import Layout from "components/Layout"
import Link from "next/link"
import { Eye, EyeSlash } from "react-bootstrap-icons"
import styles from "../../styles/Auth.module.css"
import AsideReset from "components/aside/AsideReset"
import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

function Reset() {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [msg, setMsg] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [isSuccess, setIsSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    // console.log(password);
    // console.log(passwordConfirm);
    const router = useRouter()

    const showPassHandler = () => {
        setShowPassword(!showPassword)
    }

    const showPassConHandler = () => {
        setShowPasswordConfirm(!showPasswordConfirm)
    }


    const resetHandler = async () => {
        try {
            setIsSuccess(false)
            setMsg("")
            setIsLoading(true)
            let newPassword = password
            let newPasswordConfirm = passwordConfirm
            if (newPassword !== newPasswordConfirm) {
                setErrMsg("Password & Password Confirm does not match")
            }
            else {
                let token = router.query.id
                let body = { newPassword }
                let response = await axios.patch(`${process.env.NEXT_PUBLIC_API_HOST}/auth/reset/${token}`, body)
                console.log(response);
                setIsSuccess(true)
                setMsg(response.data.data.msg)
            }
        }
        catch (error) {
            console.log(error);
            setErrMsg(error.response.data.err.msg)
            setIsSuccess(false)
        }
    }

    return (
        <Layout title="Reset Password">
            <main className={styles.globalContainer}>
                <AsideReset />
                <div className={styles.containerContent}>
                    <div className={styles.contentTitle}>Reset Your Password</div>
                    <div className={styles.contentBody}>Now you can create a new password for your Tickitz account. Type your password twice so we can confirm your new passsword.</div>
                    <div className={styles.wrapperForm}>
                        <label htmlFor="" className={styles.formLabel}>New Password</label>
                        <div className={styles.inputWrapper}>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Create new password" className={styles.formInput}
                                onChange={e => setPassword(e.target.value)}
                            />
                            {showPassword ? <Eye className={styles.eye} onClick={showPassHandler} /> : <EyeSlash className={styles.icon} onClick={showPassHandler} />}
                        </div>
                        <label htmlFor="" className={styles.formLabel}>Confirm Password</label>
                        <div className={styles.inputWrapper}>
                            <input type={showPasswordConfirm ? "text" : "password"} name="password" placeholder="Input Confirm password" className={styles.formInput}
                                onChange={e => setPasswordConfirm(e.target.value)}
                            />
                            {showPasswordConfirm ? <Eye className={styles.eye} onClick={showPassConHandler} /> : <EyeSlash className={styles.icon} onClick={showPassConHandler} />}
                        </div>
                    </div>
                    {isSuccess ? <div key={msg} className={styles.successMsg}> {msg} </div> : <></>}

                    {!isSuccess && Array.isArray(errMsg) ? (
                        errMsg.map((erroritem) => <div key={errMsg} className={styles.errorMsg} > {erroritem.msg}</div>)) : !isSuccess && <div key={errMsg} className={styles.errorMsg} > {errMsg} </div>
                    }
                    {isSuccess ?
                        <div className={styles.button} onClick={() => router.push("/signin")}>Sign In</div>
                        :
                        <div className={styles.button} onClick={resetHandler} >Reset Password</div>
                    }
                </div>
            </main>
        </Layout>
    )
}

export default Reset