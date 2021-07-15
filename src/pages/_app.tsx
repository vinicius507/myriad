import { ChakraProvider } from '@chakra-ui/react'
import { Footer, NavBar } from '@components/common'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<DefaultSeo
				defaultTitle = "Myriad"
				titleTemplate = "%s - Myriad"
				title = {undefined}
				openGraph = {{
					type: 'website',
					url: 'https://www.myriaddev.me/',
					site_name: 'Myriad',
				}}
			/>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</ChakraProvider>
	)
}
export default MyApp
