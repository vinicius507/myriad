const About = {
	parts: [
		'about',
		'title',
		'subtitle',
		'name',
		'content',
		'socials',
		'socialIcon',
	],
	baseStyle: {
		about: {
			width: '100%',
			maxW: '4xl',
			px: 8,
		},
		title: {},
		subtitle: {
			fontSize: '2xl',
		},
		content: {
			fontSize: 'lg',
			color: 'tokyonight.200',
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
}

export default About
