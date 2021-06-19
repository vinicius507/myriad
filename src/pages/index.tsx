import About from '@components/about'
import Projects from '@components/projects'
import { Container } from '@components/common'

export default function Home() {
	return (
		<Container>
			<About />
			<Projects />
		</Container>
	)
}
