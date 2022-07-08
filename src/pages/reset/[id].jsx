import Layout from "components/Layout"
import Link from "next/link"
import { Eye, EyeSlash } from "react-bootstrap-icons"
import styles from "../../styles/Auth.module.css"
import AsideReset from "components/aside/AsideReset"
import { useState } from "react"

function Reset() {
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
    const [NewPassword, setNewPassword] = useState("")
    console.log(NewPassword);

    const showPassHandler = () => {
        setShowPassword(!showPassword)
    }

    const showPassConHandler = () => {
        setShowPasswordConfirm(!showPasswordConfirm)
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
                            {showPassword ? <EyeSlash className={styles.icon} onClick={showPassHandler} /> : <Eye className={styles.icon} onClick={showPassHandler} />}
                        </div>
                        <label htmlFor="" className={styles.formLabel}>New Password</label>
                        <div className={styles.inputWrapper}>
                            <input type={showPasswordConfirm ? "text" : "password"} name="password" placeholder="Create new password" className={styles.formInput}
                                onChange={e => setShowPasswordConfirm(e.target.value)}
                            />
                            {showPasswordConfirm ? <EyeSlash className={styles.icon} onClick={showPassConHandler} /> : <Eye className={styles.icon} onClick={showPassConHandler} />}
                        </div>
                    </div>
                    <div className={styles.button}>Reset Password</div>
                </div>
            </main>
        </Layout>
    )
}

export default Reset