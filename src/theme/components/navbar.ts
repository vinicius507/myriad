const NavBar = {
	parts: [
		'navbar',
		'logo',
		'menuToggle',
		'menuContainer',
		'menu',
		'menuItem',
	],
	baseStyle: {
		navbar: {
			alignItems: 'center',
			justifyContent: 'space-between',
			flexWrap: 'wrap',
			w: '100%',
			mb: 8,
			p: 8,
			bg: ['#0b0b0b', '#0b0b0b', 'transparent'],
			color: ['white', 'white', '#0b0b0b', '#0b0b0b'],
		},
		logo: {
			fontSize: '3xl',
			fontWeight: 'bold',
			_hover: {
				textDecoration: 'none',
			},
		},
		menuToggle: {
			display: { base: 'block', md: 'none' },
			fontSize: 'lg',
			_hover: {
				cursor: 'pointer',
			},
		},
		menuContainer: {
			flexBasis: { base: '100%', md: 'auto' },
		},
		menu: {
			alignItems: 'center',
			justifyContent: ['center', 'flex-end'],
		},
		menuItem: {
			px: '8px',
			py: '4px',
			_hover: {
				textDecoration: 'none',
			},
		},
	},
}

export default NavBar
