import '../styles/globals.css'
import {motion, AnimatePresence} from 'framer-motion'
import styles from '../styles/Home.module.css'


const Motion = motion

function MyApp({Component, pageProps, router}) {
  return (
    <AnimatePresence>
      <Motion.div
        key={router.route}
        // initial={{x: '100%'}}
        animate={{x: '0%', transition: '1s'}}
        exit={{x: '100%', transition: '1s'}}
      >
        <Component {...pageProps} />
        <footer className={styles.footer}>
          <a
            href="https://github.com/100pecheneK"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by Misha
          </a>
        </footer>
      </Motion.div>
    </AnimatePresence>
  )
}

export default MyApp
