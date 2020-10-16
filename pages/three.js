import styles from '../styles/Home.module.css'
import Head from 'next/head'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import AnimatedLink from '../components/AnimatedLink'


export default function Three() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real Business | Three</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Three
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
    </div>
  )
}