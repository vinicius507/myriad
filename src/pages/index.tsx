import { Box, useStyleConfig } from '@chakra-ui/react'
import About from '@components/about'

export default function Home() {
	const styles = useStyleConfig('Home', {})
	return (
		<Box sx={styles}>
			<About />
		</Box>
	)
}
