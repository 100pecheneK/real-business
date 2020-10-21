import styles from '../styles/Home.module.css'
import AnimatedLink from '../containers/AnimatedLink'
import SecondPage from '../containers/SecondPage'
import LayoutPage from '../containers/LayoutPage'
import React from 'react'
import OneForm from '../forms/OneForm'


export default function One() {
  return (
    <SecondPage pageKey={'one'}>
      <LayoutPage title={'Бизнес'}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Сумма двух чисел
          </h1>
          <p className={styles.description}>
            Сложите два числа, чтобы узнать их сумму. Это позволит вам узнать сумму двух числел без каких либо трудностей!
          </p>
          <OneForm/>
          <AnimatedLink href={'/'}>
            <h3 style={{margin: 0}}>Назад &larr;</h3>
          </AnimatedLink>

        </main>
      </LayoutPage>
    </SecondPage>
  )
}