import { Box, useStyleConfig } from '@chakra-ui/react'
import React from 'react'

export default function Container({ children }: React.PropsWithChildren<{}>) {
	const styles = useStyleConfig('Container', {})
	return <Box sx={styles}>{children}</Box>
}
