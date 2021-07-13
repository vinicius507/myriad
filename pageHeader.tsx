import { Heading, useStyles } from '@chakra-ui/react'
import React from 'react'

type Props = React.PropsWithChildren<{ title: string }>

export default function PageHeader({ title, children }: Props) {
	const styles = useStyles()

	return (
		<>
			<Heading sx={styles.title}>{title}</Heading>
			<Heading sx={styles.subtitle}>{children}</Heading>
		</>
	)
}
