import React from 'react'
import { Flex, useStyles } from '@chakra-ui/react'

export default function NavBarContainer({
	children,
	...props
}: React.PropsWithChildren<{ props?: React.FC }>) {
	const styles = useStyles()
	return (
		<Flex as='nav' sx={styles.navbar} {...props}>
			{children}
		</Flex>
	)
}
