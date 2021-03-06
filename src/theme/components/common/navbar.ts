const NavBar = {
	parts: [
		'navbar',
		'navbarFlex',
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
			bg: ['tokyonight.150', 'tokyonight.150', 'tokyonight.50'],
			w: '100%',
			mb: 0,
			zIndex: 'tooltip',
		},
		navbarFlex: {
			alignItems: 'center',
			justifyContent: 'space-between',
			flexWrap: 'wrap',
			p: 8,
			w: '100%',
			maxWidth: '4xl',
			color: ['tokyonight.200', 'tokyonight.200', 'tokyonight.100'],
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
				bg: 'tokyonight.50',
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
				color: ['unset', 'tokyonight.300'],
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
