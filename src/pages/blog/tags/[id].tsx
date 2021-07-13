import { Heading, Text, useMultiStyleConfig } from '@chakra-ui/react'
import { Container, PageHeader, PostsList } from '@components/common'
import { getAllPostTags, getTagPosts } from '@lib/posts'
import { SortedPostsType } from 'interfaces'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import { capitalize } from 'utils'

type Props = {
	allPostsData: SortedPostsType
	tag: string
}

export default function TagPosts({ allPostsData, tag }: Props) {
	const styles = useMultiStyleConfig('Blog', {})

	let count = 0
	Object.keys(allPostsData).map((year: string) => {
		count += allPostsData[year].length
	})

	const title: string = `Posts tagged: ${capitalize(tag)}`
	const description = (
		<>
			<Text as="span" sx={styles.number}>
				{count}
			</Text>{' '}
			found.
		</>
	)

	return (
		<>
			<NextSeo
				title={title}
				canonical="https://www.myriaddev.me/blog"
			/>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const id = params?.id as string
	const allPostsData = getTagPosts(id)

	return {
		props: {
			id,
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
