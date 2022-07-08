import React from 'react'
import Head from 'next/head'
import Header from '../../components/header/Header'
import styles from './LayoutOrder.module.css'


function LayoutOrder({title, children}) {
  return (
    <>
    <Head>
        <title>{title}</title>
    </Head>
    <Header/>
    <div className={styles.orderContainer}>    
    {children}
    </div>
    </>
  )
}

export default LayoutOrder