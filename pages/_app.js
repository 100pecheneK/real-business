import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import useDarkMode from 'use-dark-mode'
import ToggleButton from 'react-toggle-button'
import { useState } from 'react'
import Router from 'next/router'
import MishaLogo from '../components/MishaLogo/MishaLogo'

let initialDelays = {
  description: 1,
  mainCard1: 1.2,
  mainCard2: 1.4,
  description2: 1.8,
  cards: 2,
  bonus: 0,
}

Router.events.on('routeChangeStart', path => {
  if (path === '/') {
    initialDelays = {
      description: 0,
      mainCard1: 0,
      mainCard2: 0,
      description2: 0,
      cards: 0,
    }
  }
})

function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(false)
  const [toggleValue, setToggleValue] = useState(false)

  return (
    <>
      <Component DELAY={initialDelays} {...pageProps} />
      <footer className={styles.footer}>
        <MishaLogo />
        <div className={styles.modeToggle}>
          <ToggleButton
            value={toggleValue}
            inactiveLabel={'☾'}
            activeLabel={'☀'}
            thumbStyle={{ borderRadius: 7 }}
            trackStyle={{ borderRadius: 7 }}
            onToggle={() => {
              darkMode.toggle()
              setToggleValue(prev => !prev)
            }}
            colors={{
              activeThumb: {
                base: 'rgb(250,250,250)',
              },
              inactiveThumb: {
                base: 'rgb(62,130,247)',
              },
              active: {
                base: 'rgb(0, 112, 243)',
                hover: 'rgb(42, 132, 255)',
              },
              inactive: {
                base: 'rgb(65,66,68)',
                hover: 'rgb(95,96,98)',
              },
            }}
          />
        </div>
      </footer>
    </>
  )
}

export default MyApp
