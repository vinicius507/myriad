import { Heading, useMultiStyleConfig } from '@chakra-ui/react'
import { Container, PageHeader, PostsList } from '@components/common'
import { getYearSortedPosts } from '@lib/posts'
import { SortedPostsType } from 'interfaces'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

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
			<NextSeo
				title={title}
				description={description}
				canonical="https://www.myriaddev.me/blog"
			/>
			<PageHeader title={title}>{description}</PageHeader>
			<Container>
				{Object.keys(allPostsData).sort((a, b) => {
					if (a < b) {
						return 1
					} else if (a > b) {
						return -1
					} else {
						return 0
					}
				}).map((year: string) => (
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
