import { getAllPostIds, getPostData } from 'lib/posts'
import { GetStaticPaths, GetStaticProps } from 'next'

export default function Post({ postData }: { postData: any }) {
	return (
		<>
			<h1>{postData.title}</h1>
			{postData.id}
			<br />
			{postData.date}
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
