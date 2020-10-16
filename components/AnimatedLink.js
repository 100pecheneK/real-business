import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
import Link from 'next/link'


export default function AnimatedLink({href, delay = 0, children}) {
  return (
    <Link href={href}>
      <motion.a className={styles.card}
                initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay
          }
        },
      }}>
        {children}
      </motion.a>
    </Link>
  )
}