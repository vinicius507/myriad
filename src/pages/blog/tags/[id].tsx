import { useMultiStyleConfig, StylesProvider } from '@chakra-ui/react'
import BlogPosts from '@components/blog'
import { Container } from '@components/common'
import { getAllPostTags, getTagPosts } from '@lib/posts'
import { PostType } from 'interfaces'
import { GetStaticPaths, GetStaticProps } from 'next'
import { capitalize } from 'utils'

export default function TagPosts({
	allPostsData,
	tag,
}: {
	allPostsData: Array<PostType>
	tag: string
}) {
	const styles = useMultiStyleConfig('Blog', {})

	return (
		<Container>
			<StylesProvider value={styles}>
				<BlogPosts
					title={`${capitalize(tag)} Posts`}
					allPostsData={allPostsData}
				/>
			</StylesProvider>
		</Container>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params?.id as string
	const allPostsData = getTagPosts(id)

	return {
		props: {
			tag: id,
			allPostsData,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostTags()

	return {
		paths,
		fallback: false,
	}
}
