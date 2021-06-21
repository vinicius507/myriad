import { Box, Stack, useStyles } from '@chakra-ui/react'
import MenuItem from './menuItem'

export default function Menu({
	isOpen,
	toggle,
}: {
	isOpen: boolean
	toggle: () => void
}) {
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
				<MenuItem toggle={toggle}>home</MenuItem>
				<MenuItem to="/about" toggle={toggle}>
					about
				</MenuItem>
				<MenuItem to="/blog" toggle={toggle}>
					blog
				</MenuItem>
			</Stack>
		</Box>
	)
}
