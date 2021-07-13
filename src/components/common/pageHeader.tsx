import { Heading, useMultiStyleConfig, StylesProvider } from '@chakra-ui/react'
import { Header } from '@components/common'
import React from 'react'

type Props = React.PropsWithChildren<{ title: string }>

export default function PageHeader({ title, children }: Props) {
	const styles = useMultiStyleConfig('Header', {})

	return (
		<StylesProvider value={styles}>
			<Header>
				<Heading sx={styles.title}>{title}</Heading>
				<Heading sx={styles.subtitle}>{children}</Heading>
			</Header>
		</StylesProvider>
	)
}
