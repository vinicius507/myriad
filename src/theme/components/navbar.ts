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
			bg: ['dark.50', 'dark.50', 'transparent'],
			color: ['dark.100', 'dark.100', 'dark.200'],
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
