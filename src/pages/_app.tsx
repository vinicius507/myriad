import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '@components/navbar'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<NavBar />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
export default MyApp
