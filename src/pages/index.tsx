import About from '@components/about'
import Projects from '@components/projects'
import { Container, PostsList } from '@components/common'
import { Heading, useStyleConfig } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { getLatestPosts } from '@lib/posts'
import { PostType } from 'interfaces'

type Props = { latestPosts: Array<Omit<PostType, 'content' | 'tags'>> }

export default function Home({ latestPosts }: Props) {
	const headingStyle = useStyleConfig('HomeHeading', {})

	return (
		<>
			<NextSeo
				description="I'm a Software Engineer based in João Pessoa, Brazil. Currently cadet at École 42. Looking for opportunities."
				canonical="https://www.myriaddev.me/"
			/>
			<About />
			<Container>
				<Heading sx={headingStyle}>Latest Posts</Heading>
				<PostsList posts={latestPosts} />
				<Heading sx={headingStyle}>Projects</Heading>
				<Projects />
			</Container>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const latestPosts = getLatestPosts()

	return {
		props: {
			latestPosts,
		},
	}
}
