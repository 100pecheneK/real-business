import { AnimatePresence, motion } from 'framer-motion'
import { variants } from './MainPage'

export default function SecondPage({ children, pageKey }) {
  return (
    <AnimatePresence>
      <motion.div
        key={pageKey}
        variants={variants}
        initial='exit'
        animate='center'
        exit='enter'
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
