import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import AnimatedLink from '../components/AnimatedLink'
import OpacityDiv from '../components/OpacityDiv'
import MainPage from '../components/MainPage'
import {motion} from 'framer-motion'
import LayoutPage from '../components/LayoutPage'


export default function Home() {
  return (
    <MainPage>
      <LayoutPage>
        <main className={styles.main}>
          <OpacityDiv>
            <h1 className={styles.title}>
              Добро пожаловать в{' '}
              <span className={'active'}>Real Business!</span>
            </h1>
          </OpacityDiv>

          <OpacityDiv delay={1}>
            <p className={styles.description}>
              Начни улучшать свой бизнес уже сегодня! <br/> Рассчетай рентабельность бизнеса или получи полный отчёт!
            </p>
          </OpacityDiv>

          <div className={styles.grid}>
            <AnimatedLink href={'/one'} delay={1.2} classes={styles.active}>
              <h3>Бизнес &rarr;</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis!</p>
            </AnimatedLink>
            <AnimatedLink href={'/two'} delay={1.4}>
              <h3>Полный отчёт &rarr;</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis!</p>
            </AnimatedLink>
          </div>

          <OpacityDiv delay={1.8}>
            <p className={styles.description}>
              Или рассчитай по отдельности!
            </p>
          </OpacityDiv>

          <div className={styles.grid}>
            <AnimatedLink href={'/one'} delay={2}>
              <h3>One &rarr;</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis!</p>
            </AnimatedLink>
            <AnimatedLink href={'/two'} delay={2.2}>
              <h3>Two &rarr;</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis!</p>
            </AnimatedLink>
            <AnimatedLink href={'/three'} delay={2.4}>
              <h3>Three &rarr;</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis!</p>
            </AnimatedLink>
            <AnimatedLink href={'/four'} delay={2.6}>
              <h3>Four &rarr;</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, omnis!</p>
            </AnimatedLink>
          </div>
        </main>
      </LayoutPage>
    </MainPage>
  )
}
