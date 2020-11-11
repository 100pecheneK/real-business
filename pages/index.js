import React from 'react'
import styles from '../styles/Home.module.css'
import AnimatedLink from '../containers/AnimatedLink'
import OpacityDiv from '../containers/OpacityDiv'
import MainPage from '../containers/MainPage'
import LayoutPage from '../containers/LayoutPage'
import formulaCollection from '../buisness'
import STATUS from '../buisness/formulaStatus'
import getDelayByPosition from '../utils/getDelayByPosition'

const mainLinks = formulaCollection.getFormulasByStatus(STATUS.MAIN)
const secondaryLinks = formulaCollection.getFormulasByStatus(STATUS.SECONDARY)
const bonusLinks = formulaCollection.getFormulasByStatus(STATUS.BONUS)

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
              Начни улучшать свой бизнес уже сегодня! <br /> Рассчитай
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
            <h3 className={styles.jumping}>&darr;</h3>
          </OpacityDiv>

          <div className={styles.grid}>
            {secondaryLinks.map((link, i) => {
              const delay = getDelayByPosition(DELAY.cards, i)
              return (
                <AnimatedLink key={i} href={link.href} delay={delay}>
                  <h3>{link.name} &rarr;</h3>
                  <p>{link.description}</p>
                </AnimatedLink>
              )
            })}
            <OpacityDiv delay={DELAY.bonus}>
              <p className={styles.description}>
                <span className={styles.jumping + ' bonus'}>🎁</span>
              </p>
            </OpacityDiv>
            {bonusLinks.map((link, i) => {
              const delay = getDelayByPosition(DELAY.bonus, i)
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
