import { Box, useMultiStyleConfig, StylesProvider } from '@chakra-ui/react'
import { Header } from '@components/common'
import Content from './content'

export default function About() {
	const styles = useMultiStyleConfig('Header', { variant: 'About' })
	return (
		<StylesProvider value={styles}>
			<Header>
				<Box sx={styles.about}>
					<Content />
				</Box>
			</Header>
		</StylesProvider>
	)
}
