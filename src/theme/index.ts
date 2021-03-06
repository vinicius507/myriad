import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import components from './components'
import fonts from './fonts'
import styles from './styles'

const theme = extendTheme({
	styles,
	colors,
	components,
	fonts,
})

export default theme
