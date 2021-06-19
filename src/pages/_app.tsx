import { ChakraProvider } from '@chakra-ui/react'
import { NavBar, Footer } from '@components/common'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	)
}
export default MyApp
