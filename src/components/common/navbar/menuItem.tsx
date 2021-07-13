import React from 'react'
import { Link } from '@components/common'
import { Text, useStyles } from '@chakra-ui/react'

export default function MenuItem({
	children,
	to = '/',
	toggle,
}: React.PropsWithChildren<{ to?: string; toggle: () => void }>) {
	const styles = useStyles()

	return (
		<Link sx={styles.menuItem} href={to} onClick={toggle}>
			<Text display="block">{children}</Text>
		</Link>
	)
}
