import { Box, useMultiStyleConfig, StylesProvider } from '@chakra-ui/react'
import Content from './content'

export default function About() {
	const styles = useMultiStyleConfig('About', {})
	return (
		<Box sx={styles.about}>
			<StylesProvider value={styles}>
				<Content />
			</StylesProvider>
		</Box>
	)
}
