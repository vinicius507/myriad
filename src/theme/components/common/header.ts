const Header = {
	parts: [
		'author',
		'container',
		'date',
		'description',
		'name',
		'socialIcon',
		'socials',
		'subtitle',
		'title',
		'wrapper',
	],
	baseStyle: {
		wrapper: {
			background: 'tokyonight.150',
			width: '100%',
			pb: 12,
			pt: [0, 0, 12],
			mt: '109px',
			position: 'relative',
			zIndex: 'banner',
		},
		container: {
			maxW: '4xl',
			px: 8,
			w: '100%',
		},
		title: {
			fontSize: '3xl',
			mb: 2,
		},
		subtitle: {
			fontSize: ['xl', 'xl', '2xl'],
			color: 'tokyonight.200',
			fontWeight: '500',
		},
		author: {
			fontSize: 'md',
			color: 'tokyonight.200',
			mb: 2,
		},
		link: {
			color: 'tokyonight.300',
		},
		date: {},
		description: {
			color: 'tokyonight.200',
			fontSize: 'xl',
			mt: 8,
		},
		name: {
			color: 'tokyonight.300',
		},
		picture: {
			minWidth: '220px',
			width: '220px',
			height: '220px',
			border: '4px solid',
			borderColor: 'tokyonight.50',
			position: 'relative',
		},
		socials: {
			mt: 4,
			fontSize: 32,
		},
		socialIcon: {
			_hover: {
				color: 'tokyonight.300',
			},
		},
	},
	variants: {
		About: {
			title: {
				mb: 0,
			},
			description: {
				mt: 0,
			},
		},
	},
}

export default Header
