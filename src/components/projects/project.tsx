import {
	Box,
	Heading,
	Text,
	LinkBox,
	LinkOverlay,
	useStyles,
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export default function Project({
	title,
	date,
	link,
	sourceLink,
	description,
}: {
	title: string
	date: string
	link: string
	sourceLink?: string
	description: string
}) {
	const styles = useStyles()
	return (
		<LinkBox sx={styles.projectBox} as="article">
			<LinkOverlay href={link}>
				<Heading sx={styles.projectTitle}>{title}</Heading>
			</LinkOverlay>
			<Box as="time" sx={styles.projectDate} dateTime="2021-01-12">
				{date}
			</Box>
			<Text sx={styles.projectDescription}>{description}</Text>
			{sourceLink && (
				<Box as="a" href={sourceLink}>
					<Text sx={styles.projectSourceCode} as="span">
						<Text sx={styles.projectSourceIcon} as="span">
							<FaGithub />
						</Text>
						Source
					</Text>
				</Box>
			)}
		</LinkBox>
	)
}
