import Layout from "components/Layout"
import { Eye, EyeSlash } from "react-bootstrap-icons"
import styles from "../../styles/Auth.module.css"
import AsideRegister from "components/aside/AsideRegister"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { useEffect } from "react"

function Confirm() {
    const [isSuccess, setIsSuccess] = useState(null)
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const router = useRouter()
    const { query: { id } } = useRouter()


    const resendHandler = async () => {
        try {
            setErrMsg("")
            setMsg("")
            let body = { email: email };
            let response = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/resend`, body)
            console.log(response);
            setMsg(response.data.data.msg)
            setIsSuccess(true)

        }
        catch (error) {
            console.log(error);
            // console.log(error.response.data.err.msg);
            setErrMsg(error.response.data.err.msg)
            setIsSuccess(false)

        }
    }

    useEffect(() => {
        const activationHandler = async () => {
            try {
                // let token = router.query.id
                let response = await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/activate/${id}`)
                console.log(response.data.data.message);
                setIsSuccess(true)
                setMsg(response.data.data.message)
            }
            catch (error) {
                console.log(error);
                setIsSuccess(false)
                setErrMsg(error.response.data.err.msg)
            }
        }
        if (id) {
            activationHandler()
        }
    }, [id])

    return (
        <Layout title="Activation Account">
            <main className={styles.globalContainer}>
                <AsideRegister />
                <div className={styles.containerContent}>
                    <div className={styles.contentTitle}>Activation Account</div>
                    <div className={styles.contentBody}>
                        {isSuccess ? <div key={msg} className={styles.successMsg}> {msg} </div> : <></>}

                        {!isSuccess && Array.isArray(errMsg) ? (
                            errMsg.map((erroritem) => <div key={errMsg} className={styles.errorMsg} > {erroritem.msg}</div>)) : !isSuccess && <div key={errMsg} className={styles.errorMsg} > {errMsg} </div>
                        }
                    </div>
                    {isSuccess ?
                        <div className={styles.button} onClick={() => router.push("/signin")}>Sign In</div>
                        :
                        !isSuccess ?
                            <>
                                <div className={styles.inputWrapper}>
                                    <input type="email" name="email" placeholder="Enter your e-mail" className={styles.formInput}
                                        onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className={styles.button} onClick={resendHandler} >Resend Email</div>
                            </>
                            :
                            <>
                            </>
                    }

                </div>
            </main>
        </Layout>
    )
}

export default Confirm