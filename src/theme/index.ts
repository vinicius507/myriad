import { extendTheme } from '@chakra-ui/react'
import fonts from './fonts'
import components from './components'

const theme = extendTheme({
	components,
	fonts,
})

export default theme
