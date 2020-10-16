import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AnimatedLink from '../components/AnimatedLink'
import {motion} from 'framer-motion'
import OpacityDiv from '../components/OpacityDiv'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real Business</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <OpacityDiv>
          <h1 className={styles.title}>
            Welcome to{' '}
            <Link href="/">
              <a>Real Business!</a>
            </Link>
          </h1>
        </OpacityDiv>

        <OpacityDiv delay={1}>
          <p className={styles.description}>
            Get started to improve Your business today!
          </p>
        </OpacityDiv>

        <div className={styles.grid}>
          <AnimatedLink href={'/one'} delay={1.2}>
            <h3>One &rarr;</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis!</p>
          </AnimatedLink>
          <AnimatedLink href={'/two'} delay={1.4}>
            <h3>Two &rarr;</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis!</p>
          </AnimatedLink>
          <AnimatedLink href={'/three'} delay={1.6}>
            <h3>Three &rarr;</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis!</p>
          </AnimatedLink>
          <AnimatedLink href={'/four'} delay={1.8}>
            <h3>Four &rarr;</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis!</p>
          </AnimatedLink>
        </div>
      </main>
    </div>
  )
}
