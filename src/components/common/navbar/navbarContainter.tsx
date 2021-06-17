import React from 'react'
import { Box, Center, Flex, useStyles } from '@chakra-ui/react'

export default function NavBarContainer({
	children,
	...props
}: React.PropsWithChildren<{ props?: React.FC }>) {
	const styles = useStyles()
	return (
		<Box sx={styles.navbar}>
			<Center>
				<Flex as="nav" sx={styles.navbarFlex} {...props}>
					{children}
				</Flex>
			</Center>
		</Box>
	)
}
