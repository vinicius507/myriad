const Blog = {
	parts: [
		'title',
		'blogBox',
		'blogTitle',
		'blogDate',
		'blogDescription',
		'blogSourceCode',
	],
	baseStyle: {
		title: {},
		blogBox: {
			p: 8,
			rounded: 'md',
			bg: 'tokyonight.150',
			transition: '0.2s background',
			_hover: {
				bg: 'tokyonight.350',
				transition: '0.2s',
			},
		},
		blogTitle: {
			fontSize: '2xl',
		},
		blogDate: {
			fontSize: 'md',
			fontStyle: 'italic',
			color: 'tokyonight.300',
		},
		blogDescription: {},
		blogSourceCode: {
			display: 'inline-flex',
			alignItems: 'center',
			bg: 'tokyonight.100',
			color: 'tokyonight.50',
			mt: 2,
			px: 2,
			py: 1,
			borderRadius: '3px',
			_hover: {
				bg: 'tokyonight.300',
			},
		},
		blogSourceIcon: {
			pr: '8px',
		},
	},
}

export default Blog
