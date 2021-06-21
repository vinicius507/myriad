import { StylesProvider, useMultiStyleConfig } from '@chakra-ui/react'
import { Container, PostHeader } from '@components/common'
import { Markdown } from '@components/post'
import { PostType } from 'interfaces'
import { getAllPostIds, getPostData } from 'lib/posts'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Post({ postData }: { postData: PostType }) {
	const styles = useMultiStyleConfig('Post', {})

	return (
		<>
			<PostHeader
				title={postData.title}
				description={postData.description}
				date={postData.date}
				tags={postData.tags}
			/>
			<Container post>
				<StylesProvider value={styles}>
					<Markdown>{postData.content}</Markdown>
				</StylesProvider>
			</Container>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = getPostData(params?.id as string)

	return {
		props: {
			postData,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds()

	return {
		paths,
		fallback: false,
	}
}
