import { useMultiStyleConfig, StylesProvider } from '@chakra-ui/react'
import Logo from './logo'
import MenuToggle from './menuToggle'
import Menu from './menu'
import NavBarContainer from './navbarContainter'
import DrawerOverlay from './drawerOverlay'
import { useState } from 'react'

export default function NavBar() {
	const styles = useMultiStyleConfig('NavBar', {})
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<StylesProvider value={styles}>
			<NavBarContainer>
				<Logo w="100px" />
				<MenuToggle toggle={toggle} isOpen={isOpen} />
				<Menu isOpen={isOpen} toggle={toggle} />
			</NavBarContainer>
			<DrawerOverlay isOpen={isOpen} toggle={toggle} />
		</StylesProvider>
	)
}
