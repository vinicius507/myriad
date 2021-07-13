const Tag = {
	parts: ['tag', 'icon', 'label'],
	baseStyle: {
		tag: {
			bg: 'tokyonight.100',
			rounded: 'sm',
			transition: '0.2s background',
			_hover: {
				bg: 'tokyonight.300',
				transition: '0.2s',
			},
		},
		icon: {},
		label: {
			fontSize: 'md',
			color: 'tokyonight.50',
		},
	},
}

export default Tag
