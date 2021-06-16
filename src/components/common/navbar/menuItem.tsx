import React from 'react'
import { Link } from '@components/common'
import { Text, useStyles } from '@chakra-ui/react'

export default function MenuItem({
	children,
	to = '/',
}: React.PropsWithChildren<{ to?: string }>) {
	const styles = useStyles()

	return (
		<Link sx={styles.menuItem} href={to}>
			<Text display='block'>{children}</Text>
		</Link>
	)
}
