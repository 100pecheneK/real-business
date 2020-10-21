import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'


export default function MainPage({children, pageKey}) {
  return (
    <AnimatePresence>
      <motion.div
        key={pageKey}
        initial={{x: '-100%'}}
        animate={{x: '0%', transition: '1s'}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}