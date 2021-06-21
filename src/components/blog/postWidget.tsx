import {
	Heading,
	HStack,
	LinkBox,
	LinkOverlay,
	useStyles,
} from '@chakra-ui/react'
import { Datetime } from '@components/common'

type Props = {
	title: string
	date: string
	link: string
}
export default function Post({ title, date, link }: Props) {
	const styles = useStyles()

	return (
		<LinkBox sx={styles.blogBox} as="article">
			<HStack spacing={4}>
				<Datetime datestring={date} formatstring="MMM dd" />
				<LinkOverlay href={link}>
					<Heading sx={styles.blogTitle}>{title}</Heading>
				</LinkOverlay>
			</HStack>
		</LinkBox>
	)
}
