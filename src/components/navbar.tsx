import { useMultiStyleConfig, StylesProvider } from '@chakra-ui/react'
import Logo from '@components/logo'
import MenuToggle from '@components/menuToggle'
import Menu from '@components/menu'
import NavBarContainer from '@components/navbarContainter'
import { useState } from 'react'

export default function NavBar() {
	const styles = useMultiStyleConfig('NavBar', {})
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<StylesProvider value={styles}>
			<NavBarContainer>
				<Logo w='100px' />
				<MenuToggle toggle={toggle} isOpen={isOpen} />
				<Menu isOpen={isOpen} />
			</NavBarContainer>
		</StylesProvider>
	)
}
