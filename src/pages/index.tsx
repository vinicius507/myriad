import { Box, useStyleConfig } from '@chakra-ui/react'
import About from '@components/about'
import Projects from '@components/projects'

export default function Home() {
	const styles = useStyleConfig('Home', {})
	return (
		<Box sx={styles}>
			<About />
			<Projects />
		</Box>
	)
}
