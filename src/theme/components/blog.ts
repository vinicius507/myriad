const Blog = {
	parts: ['year', 'blogBox', 'blogTitle', 'blogDate'],
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
			whiteSpace: 'nowrap',
		},
		blogTitle: {
			fontSize: 'xl',
		},
	},
}

export default Blog
