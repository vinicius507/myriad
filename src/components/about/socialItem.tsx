import { IconType } from 'react-icons'
import { Link } from '@components/common'
import { useStyles } from '@chakra-ui/react'

export default function SocialItem({
	Icon,
	to,
}: {
	Icon: IconType
	to: string
}) {
	const styles = useStyles()

	return (
		<Link href={to} sx={styles.socialIcon}>
			<Icon />
		</Link>
	)
}
