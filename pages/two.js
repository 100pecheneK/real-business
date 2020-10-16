import styles from '../styles/Home.module.css'
import Head from 'next/head'
import AnimatedLink from '../components/AnimatedLink'
import SecondPage from '../components/SecondPage'
import LayoutPage from '../components/LayoutPage'
import React from 'react'


export default function Two() {
  return (
    <SecondPage pageKey={'two'}>
      <LayoutPage title={'Полный отчёт'}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Two
          </h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur
            consequatur incidunt maxime minima numquam odit perferendis quam voluptate voluptatibus.
            Deleniti earum eos error hic natus optio ullam vero voluptate.
          </p>
          <AnimatedLink href={'/'}>
            <h3 style={{margin: 0}}>Go back &larr;</h3>
          </AnimatedLink>

        </main>
      </LayoutPage>
    </SecondPage>
  )
}