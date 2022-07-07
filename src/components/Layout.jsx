import Head from "next/head"

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