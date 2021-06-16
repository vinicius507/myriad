import { VisuallyHidden, Box, useStyles, Button } from '@chakra-ui/react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

export default function MenuToggle({
	toggle,
	isOpen,
}: {
	toggle: () => void
	isOpen: boolean
}) {
	const styles = useStyles()
	return (
		<Box as={Button} sx={styles.menuToggle} onClick={toggle}>
			<VisuallyHidden>
				{isOpen ? 'Close Menu' : 'Open Menu'}
			</VisuallyHidden>
			{isOpen ? <IoMdClose /> : <IoMdMenu />}
		</Box>
	)
}
