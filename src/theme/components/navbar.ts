const NavBar = {
	parts: [
		'navbar',
		'logo',
		'menuToggle',
		'menuContainer',
		'menu',
		'menuItem',
		'overlay',
	],
	baseStyle: {
		navbar: {
			position: 'fixed',
			top: 0,
			alignItems: 'center',
			justifyContent: 'space-between',
			flexWrap: 'wrap',
			w: '100%',
			mb: 0,
			py: 8,
			px: [8, 8, 8, 128],
			bg: ['tokyonight.150', 'tokyonight.150', 'transparent'],
			color: ['tokyonight.200', 'tokyonight.200', 'tokyonight.100'],
			zIndex: 'tooltip',
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
			fontSize: '2xl',
			rounded: '0',
			bg: 'none',
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
			w: ['100%', 'unset'],
			textAlign: 'center',
			_hover: {
				color: ['unset', 'tokyonight.250'],
				bg: ['tokyonight.50', 'unset'],
				textDecoration: 'none',
			},
		},
		overlay: {
			display: ['block', 'block', 'none'],
			position: 'fixed',
			top: 0,
			left: 0,
			height: '100%',
			width: '100%',
			bg: 'tokyonight.50',
			opacity: 0.8,
			zIndex: 'overlay',
		},
	},
}

export default NavBar
