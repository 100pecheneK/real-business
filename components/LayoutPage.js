import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'


export default function LayoutPage({children, title}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title ? 'Real Business | ' + title : 'Real Business'}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {children}
    </div>
  )
}