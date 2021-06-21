const _before = {
	display: 'block',
	content: '" "',
	mt: '-109px',
	h: '109px',
	visibility: 'hidden',
	pointerEvents: 'none',
}

const h1 = {
	fontSize: '3xl',
	borderBottom: '2px solid',
	borderColor: 'tokyonight.200',
	color: 'tokyonight.250',
	mt: 4,
	mb: 2,
	_before,
}

const h2 = {
	fontSize: '2xl',
	borderBottom: '2px solid',
	borderColor: 'tokyonight.200',
	color: 'tokyonight.300',
	mt: 4,
	mb: 2,
	_before,
}

const h3 = {
	fontSize: 'xl',
	color: 'tokyonight.300',
	mt: 4,
	mb: 2,
	_before,
}

export { h1, h2, h3 }
