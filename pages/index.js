import React from 'react'
import styles from '../styles/Home.module.css'
import AnimatedLink from '../containers/AnimatedLink'
import OpacityDiv from '../containers/OpacityDiv'
import MainPage from '../containers/MainPage'
import LayoutPage from '../containers/LayoutPage'
import formulaCollection from '../buisness'

const mainLinks = formulaCollection.getMainFormulasMetaData()
const otherLinks = formulaCollection.getSecondaryFormulasMetaData()

function getDelayByPosition(initial, i) {
  let delay = initial
  if (i !== 0) {
    delay += i * 0.2
  }
  return delay
}

export default function Home({ DELAY }) {
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

          <OpacityDiv delay={DELAY.description}>
            <p className={styles.description}>
              Начни улучшать свой бизнес уже сегодня! <br /> Рассчетай
              рентабельность бизнеса или получи полный отчёт!
            </p>
          </OpacityDiv>

          <div className={styles.grid}>
            {mainLinks.map((link, i) => {
              return (
                <AnimatedLink
                  key={i}
                  href={link.href}
                  delay={DELAY.mainCard1}
                  classes={styles.active}
                >
                  <h3>{link.name} &rarr;</h3>
                  <p>{link.description}</p>
                </AnimatedLink>
              )
            })}
            <AnimatedLink href={'/all'} delay={DELAY.mainCard2}>
              <h3>Полный отчёт &rarr;</h3>
              <p>Детальный рассчёт ренатабельностей</p>
            </AnimatedLink>
          </div>

          <OpacityDiv delay={DELAY.description2}>
            <p className={styles.description}>Или рассчитай по отдельности!</p>
          </OpacityDiv>

          <div className={styles.grid}>
            {otherLinks.map((link, i) => {
              const delay = getDelayByPosition(DELAY.cards, i)
              return (
                <AnimatedLink key={i} href={link.href} delay={delay}>
                  <h3>{link.name} &rarr;</h3>
                  <p>{link.description}</p>
                </AnimatedLink>
              )
            })}
          </div>
        </main>
      </LayoutPage>
    </MainPage>
  )
}
