import { Box, useStyles } from '@chakra-ui/react'

export default function DrawerOverlay({
	isOpen,
	toggle,
}: {
	isOpen: boolean
	toggle: () => void
}) {
	const styles = useStyles()
	return <>{isOpen && <Box sx={styles.overlay} onClick={toggle} />}</>
}
