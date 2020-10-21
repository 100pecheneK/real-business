import {AnimatePresence, motion} from 'framer-motion'
import React from 'react'


export const variants = {
  enter: {
    x: -1000,
    opacity: 0
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: {
    zIndex: 0,
    x: 1000,
    opacity: 0
  }
}

export default function MainPage({children, pageKey}) {
  return (
    <AnimatePresence>
      <motion.div
        key={pageKey}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: {type: 'spring', stiffness: 300, damping: 30},
          opacity: {duration: 0.2}
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}