import {
	Box,
	Text,
	StylesProvider,
	useMultiStyleConfig,
} from '@chakra-ui/react'
import { Link } from '@components/common'

export default function Footer() {
	const styles = useMultiStyleConfig('Footer', {})
	return (
		<Box as="footer" sx={styles.container}>
			<StylesProvider value={styles}>
				<Text sx={styles.content}>
					© Vinícius Gonçalves de Oliveira 2021. All code under{' '}
					<Link
						sx={styles.link}
						href="http://opensource.org/licenses/MIT"
					>
						MIT License
					</Link>
					.
				</Text>
			</StylesProvider>
		</Box>
	)
}
