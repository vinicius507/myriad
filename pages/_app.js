import '../styles/globals.css'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
