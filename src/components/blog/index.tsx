import { Heading, Stack, useStyles } from '@chakra-ui/react'
import { PostType } from 'interfaces'
import Post from './postWidget'

export default function BlogPosts({
	title,
	allPostsData,
}: {
	title: string
	allPostsData: Array<PostType>
}) {
	const styles = useStyles()

	return (
		<Stack direction="column">
			<Heading sx={styles.title}>{title}</Heading>
			{allPostsData.map(({ id, content, date, title }: PostType) => (
				<Post
					title={title}
					date={date}
					link={`/blog/${id}`}
					content={content}
					key={id}
				/>
			))}
		</Stack>
	)
}
