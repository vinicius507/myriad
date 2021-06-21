import { Container, PageHeader, PostsList } from '@components/common'
import { Heading, useMultiStyleConfig } from '@chakra-ui/react'
import { getYearSortedPosts } from '@lib/posts'
import { SortedPostsType } from 'interfaces'
import { GetStaticProps } from 'next'

type Props = {
	allPostsData: SortedPostsType
}

export default function Blog({ allPostsData }: Props) {
	const styles = useMultiStyleConfig('Blog', {})

	const title: string = 'Blog Posts'
	const description: string =
		"Posts, tutorials, snippets, musings, notes, and everything else. The archive of everything I've written."

	return (
		<>
			<PageHeader title={title}>{description}</PageHeader>
			<Container>
				{Object.keys(allPostsData).map((year: string) => (
					<>
						<Heading sx={styles.year}>{year}</Heading>
						<PostsList posts={allPostsData[year]} />
					</>
				))}
			</Container>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getYearSortedPosts()

	return {
		props: {
			allPostsData,
		},
	}
}
