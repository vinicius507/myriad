import About from '@components/about'
import Projects from '@components/projects'
import { Container } from '@components/common'
import { GetStaticProps } from 'next'
import { getLatestPosts } from '@lib/posts'

export default function Home() {
	return (
		<>
			<About />
			<Container>
				<Projects />
			</Container>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getLatestPosts()

	return {
		props: {
			allPostsData,
		},
	}
}
