import PostsList from '@components/blog'
import { getSortedPosts } from '@lib/posts'
import { SortedPostsType } from 'interfaces'
import { GetStaticProps } from 'next'

type Props = {
	allPostsData: SortedPostsType
}

export default function Blog({ allPostsData }: Props) {
	return (
		<PostsList title="Blog Posts" allPostsData={allPostsData}>
			Posts, tutorials, snippets, musings, notes, and everything else. The
			archive of everything I&apos;ve written.
		</PostsList>
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
