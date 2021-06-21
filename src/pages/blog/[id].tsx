import { Heading, StylesProvider, useMultiStyleConfig } from '@chakra-ui/react'
import { Container, Datetime } from '@components/common'
import { Markdown, Tags } from '@components/post'
import { PostType } from 'interfaces'
import { getAllPostIds, getPostData } from 'lib/posts'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Post({ postData }: { postData: PostType }) {
	const styles = useMultiStyleConfig('Post', {})

	return (
		<Container post>
			<Tags tags={String(postData.tags).split(' ').sort()} />
			<Heading sx={styles.title}>{postData.title}</Heading>
			<StylesProvider value={styles}>
				<Datetime
					datestring={postData.date}
					formatstring="MMMM Do, yyyy"
				/>
				<Markdown>{postData.content}</Markdown>
			</StylesProvider>
		</Container>
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
