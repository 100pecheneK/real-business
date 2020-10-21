import React from 'react'
import styles from '../styles/Home.module.css'
import AnimatedLink from '../containers/AnimatedLink'
import OpacityDiv from '../containers/OpacityDiv'
import MainPage from '../containers/MainPage'
import LayoutPage from '../containers/LayoutPage'


const otherLinks = [
  {
    href: '/one',
    h3: 'Сложение',
    p: 'Сложите два числа, чтобы узнать их сумму!'
  },
  {
    href: '/one',
    h3: 'Сложение',
    p: 'Сложите два числа, чтобы узнать их сумму!'
  },
  {
    href: '/one',
    h3: 'Сложение',
    p: 'Сложите два числа, чтобы узнать их сумму!'
  },
  {
    href: '/one',
    h3: 'Сложение',
    p: 'Сложите два числа, чтобы узнать их сумму!'
  },
]

function getDelay(initial, i) {
  let delay = initial
  if (i !== 0) {
    delay += i * 0.2
  }
  return delay
}

export default function Home() {
  return (
    <MainPage pageKey={'Home'}>
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
              Начни улучшать свой бизнес уже сегодня! <br/> Рассчетай рентабельность бизнеса или
              получи полный отчёт!
            </p>
          </OpacityDiv>

          <div className={styles.grid}>
            <AnimatedLink href={'/one'} delay={1.2} classes={styles.active}>
              <h3>Бизнес &rarr;</h3>
              <p>Рассчёт рентабельности Вашего бизнеса</p>
            </AnimatedLink>
            <AnimatedLink href={'/two'} delay={1.4}>
              <h3>Полный отчёт &rarr;</h3>
              <p>Детальный рассчёт ренатабельностей</p>
            </AnimatedLink>
          </div>

          <OpacityDiv delay={1.8}>
            <p className={styles.description}>
              Или рассчитай по отдельности!
            </p>
          </OpacityDiv>

          <div className={styles.grid}>
            {otherLinks.map((link, i) => {
              const delay = getDelay(2, i)
              return (
                <AnimatedLink key={i} href={link.href} delay={delay}>
                  <h3>{link.h3} &rarr;</h3>
                  <p>{link.p}</p>
                </AnimatedLink>
              )
            })}
          </div>
        </main>
      </LayoutPage>
    </MainPage>
  )
}
