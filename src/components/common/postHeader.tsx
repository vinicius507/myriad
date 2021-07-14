import {
	Box,
	Flex,
	Heading,
	StylesProvider,
	Spacer,
	Text,
	useMultiStyleConfig,
} from '@chakra-ui/react'
import { Datetime, Header, Link } from '@components/common'
import Tags from '../post/tags'
import PostBadge from './postBadge'

type Props = {
	title: string
	tags: Array<string>
	date: string
	badge?: string
	description?: string
}

export default function PostHeader({
	title,
	tags,
	date,
	badge,
	description,
}: Props) {
	const styles = useMultiStyleConfig('Header', {})

	return (
		<StylesProvider value={styles}>
			<Header>
				<Flex direction={['column-reverse', 'column-reverse', 'row']}>
					<Box>
						<Heading sx={styles.title}>{title}</Heading>
						<Text sx={styles.author}>
							By{' '}
							<Link sx={styles.link} href="/about">
								Vínicius Gonçalves
							</Link>{' '}
							<Datetime
								datestring={date}
								formatstring="MMMM do, yyyy"
							/>
						</Text>
						<Tags tags={tags} />
					</Box>
					{badge && (
						<>
							<Spacer />
							<PostBadge badge={badge} />
						</>
					)}
				</Flex>
				{description && (
					<Heading sx={styles.description}>{description}</Heading>
				)}
			</Header>
		</StylesProvider>
	)
}
