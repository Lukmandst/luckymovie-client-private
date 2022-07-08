import Layout from "components/Layout"
import Link from "next/link"
import { useState } from "react"
import styles from "../../styles/Auth.module.css"
import AsideReset from "components/aside/AsideReset"
import axios from "axios"


function Forgot() {
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const forgotHandler = async () => {
        try {
            let linkDirect = `${process.env.NEXT_PUBLIC_API_HOST}/auth/forgot`
            let body = { email, linkDirect }
            let response = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/forgot`, body)
            console.log(response);
            setMsg(response.data.msg)
            setIsSuccess(true)
            setIsLoading(false)
        }
        catch (error) {
            console.log(error);
            setMsg(error.response.data.err.msg)
            setIsSuccess(false)
            setIsLoading(false)
        }

    }

    return (
        <Layout title="Forgot Password">
            <main className={styles.globalContainer}>
                <AsideReset />
                <div className={styles.containerContent}>
                    <div className={styles.contentTitle}>Fill your complete email</div>
                    <div className={styles.contentBody}>we`ll send a link to your email shortly</div>
                    <div className={styles.wrapperForm}>
                        <label htmlFor="" className={styles.formLabel}>Email</label>
                        <div className={styles.inputWrapper}>
                            <input type="email" name="email" placeholder="Enter your e-mail" className={styles.formInput}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    {isSuccess === null ? <></> : isSuccess ? <div className={styles.successMsg}>{msg}</div> : <div className={styles.errorMsg}>{msg}</div>}
                    <div className={styles.button} onClick={forgotHandler}>Activate Now</div>
                </div>
            </main>
        </Layout>
    )
}

export default Forgot