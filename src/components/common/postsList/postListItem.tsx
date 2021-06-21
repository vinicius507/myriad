import {
	Heading,
	HStack,
	LinkBox,
	LinkOverlay,
	useStyles,
} from '@chakra-ui/react'
import { Datetime } from '@components/common'
import { PostType } from 'interfaces'

type Props = Omit<PostType, 'content' | 'tags'>

export default function PostListItem({ id, title, date }: Props) {
	const styles = useStyles()

	return (
		<LinkBox sx={styles.blogBox} as="article">
			<HStack spacing={4}>
				<Datetime datestring={date} formatstring="MMM dd" />
				<LinkOverlay href={`/blog/${id}`}>
					<Heading sx={styles.blogTitle}>{title}</Heading>
				</LinkOverlay>
			</HStack>
		</LinkBox>
	)
}
