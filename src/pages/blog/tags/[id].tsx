import React from 'react'
import { Text } from '@chakra-ui/react'
import PostsList from '@components/blog'
import { getAllPostTags, getTagPosts } from '@lib/posts'
import { SortedPostsType } from 'interfaces'
import { GetStaticPaths, GetStaticProps } from 'next'
import { capitalize } from 'utils'

type Props = {
	allPostsData: SortedPostsType
	tag: string
}

export default function TagPosts({ allPostsData, tag }: Props) {
	let count = 0

	Object.keys(allPostsData).map((year: string) => {
		count += allPostsData[year].length
	})

	return (
		<PostsList
			title={`Posts tagged: ${capitalize(tag)}`}
			allPostsData={allPostsData}
		>
			<Text as="span" color="tokyonight.300">
				{count}
			</Text>{' '}
			found.
		</PostsList>
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
