import { Box, Stack, useStyles } from '@chakra-ui/react'
import MenuItem from './menuItem'

export default function Menu({ isOpen }: { isOpen: boolean }) {
	const styles = useStyles()

	return (
		<Box
			sx={styles.menuContainer}
			display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
		>
			<Stack
				sx={styles.menu}
				direction={['column', 'row']}
				spacing={4}
				pt={[4, 4, 0, 0]}
			>
				<MenuItem>home</MenuItem>
				<MenuItem to='/blog'>blog</MenuItem>
			</Stack>
		</Box>
	)
}
