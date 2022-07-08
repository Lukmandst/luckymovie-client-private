import Layout from "components/Layout"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeSlash } from "react-bootstrap-icons"
import styles from "../../styles/Auth.module.css"

import AsideReset from "components/aside/AsideReset"

function Reset() {
    const [showPassword, setShowPassword] = useState(false)
    // const [password, setPassword] = useState("")

    const showPassHandler = () => {
        setShowPassword(!showPassword)
    }
    return (
        <Layout title="Reset Password">
            <main className={styles.globalContainer}>
                <AsideReset />
                <div className={styles.containerContent}>
                    <div className={styles.contentTitle}>Fill your complete email</div>
                    <div className={styles.contentBody}>we`ll send a link to your email shortly</div>
                    <div className={styles.wrapperForm}>
                        <label htmlFor="" className={styles.formLabel}>Email</label>
                        <div className={styles.inputWrapper}>
                            <input type="email" name="email" placeholder="Enter your e-mail" className={styles.formInput} />
                        </div>
                    </div>
                    <div className={styles.button}>Activate Now</div>
                </div>
            </main>
        </Layout>
    )
}

export default Reset