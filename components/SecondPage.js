import {AnimatePresence, motion} from 'framer-motion'


export default function SecondPage({children, pageKey}) {
  return (
    <AnimatePresence>
      <motion.div
        key={pageKey}
        initial={{x: '100%'}}
        animate={{x: '0%', transition: '1s'}}
        exit={{x: '100%', transition: '1s'}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}