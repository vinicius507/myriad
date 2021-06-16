import { Heading, Text, Stack, useStyles } from '@chakra-ui/react'
import SocialItem from './socialItem'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Content() {
	const styles = useStyles()

	return (
		<>
			<Heading sx={styles.title}>Welcome</Heading>
			<Heading sx={styles.subtitle}>
				I&apos;m{' '}
				<Text as="span" sx={styles.name}>
					Vinícius,
				</Text>
			</Heading>
			<Text sx={styles.content}>
				Developer based in João Pessoa, Brazil. Currently cadet at École
				42. Looking for opportunities.
			</Text>
			<Stack direction="row" spacing="4" sx={styles.socials}>
				<SocialItem
					Icon={FaGithub}
					to="https://github.com/vinicius507"
					label="Github"
				/>
				<SocialItem
					Icon={FaInstagram}
					to="https://instagram.com/viniciusgpo"
					label="Instagram"
				/>
				<SocialItem
					Icon={FaLinkedin}
					to="https://www.linkedin.com/in/vinicius-gon%C3%A7alves-d-518756137/"
					label="LinkedIn"
				/>
			</Stack>
		</>
	)
}
