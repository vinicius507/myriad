const PostsList = {
	parts: ['list', 'container', 'date', 'title'],
	baseStyle: {
		list: {
			mx: -4,
		},
		container: {
			py: 4,
			px: 4,
			_hover: {
				bg: 'tokyonight.150',
			},
		},
		date: {
			fontSize: 'md',
			color: 'tokyonight.300',
			whiteSpace: 'nowrap',
		},
		title: {
			fontSize: 'xl',
		},
	},
}

export default PostsList
