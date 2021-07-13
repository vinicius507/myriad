const Projects = {
	parts: [
		'container',
		'title',
		'projectBox',
		'projectTitle',
		'projectDate',
		'projectDescription',
		'projectSourceCode',
	],
	baseStyle: {
		container: {
			padding: 0,
			mt: [0, 0, 4],
		},
		title: {},
		projectBox: {
			p: [4, 4, 8],
			rounded: 'md',
			bg: 'tokyonight.150',
			transition: '0.2s background',
			_hover: {
				bg: 'tokyonight.350',
				transition: '0.2s',
			},
		},
		projectTitle: {
			fontSize: '2xl',
		},
		projectDate: {
			fontSize: 'md',
			fontStyle: 'italic',
			color: 'tokyonight.300',
		},
		projectDescription: {},
		projectSourceCode: {
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
		projectSourceIcon: {
			pr: '8px',
		},
	},
}

export default Projects
