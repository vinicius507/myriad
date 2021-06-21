import {
	Heading,
	Stack,
	StylesProvider,
	useMultiStyleConfig,
} from '@chakra-ui/react'
import { Container, PageHeader } from '@components/common'
import { PostType, SortedPostsType } from 'interfaces'
import React from 'react'
import Post from './postWidget'

type Props = React.PropsWithChildren<{
	title: string
	allPostsData: SortedPostsType
}>
export default function PostsList({ allPostsData, children, title }: Props) {
	const styles = useMultiStyleConfig('Blog', {})

	return (
		<>
			<PageHeader title={title}>{children}</PageHeader>
			<Container>
				<Stack mx={-8} direction="column" spacing={0}>
					<StylesProvider value={styles}>
						{Object.keys(allPostsData).map((year: string) => (
							<>
								<Heading sx={styles.year} key={year}>
									{year}
								</Heading>
								{allPostsData[year].map(
									({ id, title, date }: PostType) => (
										<Post
											title={title}
											date={date}
											link={`/blog/${id}`}
											key={id}
										/>
									)
								)}
							</>
						))}
					</StylesProvider>
				</Stack>
			</Container>
		</>
	)
}
