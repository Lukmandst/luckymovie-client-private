import Layout from "components/Layout"
import Link from "next/link"
import { useState } from "react"
import styles from "../../styles/Auth.module.css"
import AsideReset from "components/aside/AsideReset"
import axios from "axios"


function Forgot() {
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [isSuccess, setIsSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const forgotHandler = async () => {
        try {
            setErrMsg("")
            setMsg("")
            let body = { email: email };
            setIsLoading(true)
            let response = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/forgot`, body)
            setMsg(response.data.data.msg)
            setIsSuccess(true)
            setIsLoading(false)
        }
        catch (error) {
            console.log(error);
            // console.log(error.response.data.err.msg);
            setErrMsg(error.response.data.err.msg)
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
                    {isSuccess ? <div key={msg} className={styles.successMsg}> {msg} </div> : <></>}

                    {!isSuccess && Array.isArray(errMsg) ? (
                        errMsg.map((erroritem) => <div key={errMsg} className={styles.errorMsg} > {erroritem.msg}</div>)) : !isSuccess && <div key={errMsg} className={styles.errorMsg} > {errMsg} </div>
                    }

                    <div className={styles.button} onClick={forgotHandler}>{isLoading ? 
                    <>
                        <div className="spinner-border text-light" role="status"/>
                    </>
                    :"Confirms"}</div>
                </div>
            </main>
        </Layout>
    )
}

export default Forgot