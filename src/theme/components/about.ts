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
			px: [0, 0, 16],
			py: 4,
		},
		title: {},
		subtitle: {
			fontSize: '2xl',
		},
		name: {
			color: 'tokyonight.300',
		},
		picture: {
			width: 32,
			height: 32,
			borderRadius: 16,
		},
		socials: {
			mt: 8,
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
