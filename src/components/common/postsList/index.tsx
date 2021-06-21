import { Stack, StylesProvider, useMultiStyleConfig } from '@chakra-ui/react'
import { PostType } from 'interfaces'
import React from 'react'
import PostListItem from './postListItem'

type Props = {
	posts: Array<Omit<PostType, 'content' | 'tags'>>
}

export default function PostsList({ posts }: Props) {
	const styles = useMultiStyleConfig('Blog', {})

	return (
		<Stack sx={styles.list} direction="column" spacing={0}>
			<StylesProvider value={styles}>
				{posts.map(({ id, title, date }) => (
					<PostListItem key={id} id={id} title={title} date={date} />
				))}
			</StylesProvider>
		</Stack>
	)
}
