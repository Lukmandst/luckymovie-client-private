import Aside from "components/aside/Aside"
import Layout from "components/Layout"
import styles from "../../styles/Auth.module.css"

function Register() {
    return (
        <Layout title="Registrasi">
            <main className={styles.globalContainer}>
                <Aside />
                <div className={styles.containerContent}>content</div>
            </main>
        </Layout>
    )
}

export default Register