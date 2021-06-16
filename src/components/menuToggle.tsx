import { Box, useStyles } from '@chakra-ui/react'
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
		<Box sx={styles.menuToggle} onClick={toggle}>
			{isOpen ? <IoMdClose /> : <IoMdMenu />}
		</Box>
	)
}
