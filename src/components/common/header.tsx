import React from 'react'
import { Box, Center, useStyles } from '@chakra-ui/react'

export default function Header({ children }: React.PropsWithChildren<{}>) {
	const styles = useStyles()

	return (
		<Box sx={styles.wrapper}>
			<Center>
				<Box sx={styles.container}>{children}</Box>
			</Center>
		</Box>
	)
}
