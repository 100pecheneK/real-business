import '../styles/globals.css'
import styles from '../styles/Home.module.css'


function MyApp({Component, pageProps, router}) {
  return (
    <>
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
    </>
  )
}


export default MyApp
