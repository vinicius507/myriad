import { useStyles } from '@chakra-ui/react'
import { NextChakraLink as Link } from '@components/common/NextChakraLink'
import React from 'react'

export default function Logo(props: any) {
	const styles = useStyles()

	return (
		<Link sx={styles.logo} {...props} href='/'>
			Myriad
		</Link>
	)
}
