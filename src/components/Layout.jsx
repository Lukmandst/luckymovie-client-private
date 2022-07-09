import Head from "next/head"
import styles from '../styles/Auth.module.css'
import Logo from '../assets/tickitz.png'
import Image from 'next/image'

function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </>
    )
}

export default Layout