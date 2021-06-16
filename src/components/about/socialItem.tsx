import { IconType } from 'react-icons'
import { Link } from '@components/common'
import { VisuallyHidden, useStyles } from '@chakra-ui/react'

export default function SocialItem({
	Icon,
	to,
	label,
}: {
	Icon: IconType
	to: string
	label: string
}) {
	const styles = useStyles()

	return (
		<Link href={to} sx={styles.socialIcon}>
			<VisuallyHidden>{label}</VisuallyHidden>
			<Icon />
		</Link>
	)
}
