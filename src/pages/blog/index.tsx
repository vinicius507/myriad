import { useMultiStyleConfig, StylesProvider } from '@chakra-ui/react'
import BlogPosts from '@components/blog'
import { Container } from '@components/common'
import { getSortedPosts } from '@lib/posts'
import { PostType } from 'interfaces'
import { GetStaticProps } from 'next'

export default function Blog({
	allPostsData,
}: {
	allPostsData: Array<PostType>
}) {
	const styles = useMultiStyleConfig('Blog', {})

	return (
		<Container>
			<StylesProvider value={styles}>
				<BlogPosts title="Blog Posts" allPostsData={allPostsData} />
			</StylesProvider>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPosts()

	return {
		props: {
			allPostsData,
		},
	}
}
