import {
	Box,
	Heading,
	Text,
	LinkBox,
	LinkOverlay,
	useStyles,
} from '@chakra-ui/react'
import removeMd from 'remove-markdown'

export default function Post({
	title,
	date,
	link,
	content,
}: {
	title: string
	date: string
	link: string
	content: string
}) {
	const styles = useStyles()

	return (
		<LinkBox sx={styles.blogBox} as="article">
			<LinkOverlay href={link}>
				<Heading sx={styles.blogTitle}>{title}</Heading>
			</LinkOverlay>
			<Box as="time" sx={styles.blogDate} dateTime="2021-01-12">
				{date}
			</Box>
			<Text sx={styles.blogDescription} noOfLines={2}>
				{removeMd(content)}
			</Text>
		</LinkBox>
	)
}
