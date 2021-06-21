const Blog = {
	parts: [
		'year',
		'blogBox',
		'blogTitle',
		'blogDate',
		'blogDescription',
		'blogSourceCode',
	],
	baseStyle: {
		year: {
			mx: 8,
			mb: 2,
			fontSize: '3xl',
			color: 'tokyonight.250',
			borderBottom: '2px solid',
			borderColor: 'tokyonight.200',
		},
		blogBox: {
			py: 4,
			px: 8,
			_hover: {
				bg: 'tokyonight.150',
			},
		},
		date: {
			fontSize: 'md',
			color: 'tokyonight.300',
			mr: 4,
		},
		blogTitle: {
			fontSize: 'xl',
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
