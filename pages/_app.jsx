import '../styles/globals.css'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={{
        hidden: { opacity: 0, x: 0, y: -100 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
      }}
      transition={{ type: 'linear' }}
    >
      <Component {...pageProps} />
    </motion.div>
  )
}

export default MyApp
