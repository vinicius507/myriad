import {
	Text,
	Heading,
	useMultiStyleConfig,
	StylesProvider,
} from '@chakra-ui/react'
import Tags from '../post/tags'
import { Header, Datetime, Link } from '@components/common'

type Props = {
	title: string
	tags: Array<string>
	date: string
	description?: string
}

export default function PostHeader({ title, tags, date, description }: Props) {
	const styles = useMultiStyleConfig('Header', {})

	return (
		<StylesProvider value={styles}>
			<Header>
				<Heading sx={styles.title}>{title}</Heading>
				<Text sx={styles.author}>
					By{' '}
					<Link sx={styles.link} href="/about">
						Vínicius Gonçalves
					</Link>{' '}
					<Datetime datestring={date} formatstring="MMMM do, yyyy" />
				</Text>
				<Tags tags={tags} />
				{description && (
					<Heading sx={styles.description}>{description}</Heading>
				)}
			</Header>
		</StylesProvider>
	)
}
