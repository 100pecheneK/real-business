import { motion } from 'framer-motion'

export default function OpacityDiv({ delay = 0, classes, children }) {
  return (
    <motion.div
      className={classes}
      initial='hidden'
      animate='visible'
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
