import '../styles/globals.css'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter onExitComplete>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </AnimatePresence>
  )
}

export default MyApp
