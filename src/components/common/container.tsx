import { Box, Center, useStyleConfig } from '@chakra-ui/react'
import React from 'react'

export default function Container({
	children,
	post,
}: React.PropsWithChildren<{ post?: boolean }>) {
	const options = post ? { variant: 'Post' } : {}
	const styles = useStyleConfig('Container', options)

	return (
		<Center>
			<Box sx={styles}>{children}</Box>
		</Center>
	)
}
