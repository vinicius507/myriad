import { Box, useStyles } from '@chakra-ui/react'
import React from 'react'

export default function Pre({ children }: React.PropsWithChildren<{}>) {
	const styles = useStyles()

	return (
		<Box sx={styles.pre}>
			<Box sx={styles.codeBlock}>{children}</Box>
		</Box>
	)
}
