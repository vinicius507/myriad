const Footer = {
	parts: ['container', 'content', 'link'],
	baseStyle: {
		container: {
			w: '100%',
			px: 8,
		},
		content: {
			color: 'tokyonight.200',
			fontSize: 'sm',
			textAlign: 'center',
		},
		link: {
			color: 'tokyonight.300',
			_hover: {
				color: 'tokyonight.250',
				textDecoration: 'underline',
			},
		},
	},
}

export default Footer
