import Head from "next/head"
import styles from '../styles/Auth.module.css'
import Logo from '../assets/tickitz.png'
import Image from 'next/image'

function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            {props.children}
        </div>
    )
}

export default Layout