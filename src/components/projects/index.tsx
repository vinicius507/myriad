import {
	Heading,
	Stack,
	StylesProvider,
	useMultiStyleConfig,
} from '@chakra-ui/react'
import Project from './project'

export default function Projects() {
	const styles = useMultiStyleConfig('Projects', {})

	return (
		<Stack sx={styles.container}>
			<Heading sx={styles.title}>Projects</Heading>
			<StylesProvider value={styles}>
				<Project
					title="Space Invaders Emulator"
					date="January, 2021"
					link="https://github.com/vinicius507/invaders-8080"
					description="Intel 8080 Emulator for the game Space Invaders"
				/>
			</StylesProvider>
		</Stack>
	)
}
