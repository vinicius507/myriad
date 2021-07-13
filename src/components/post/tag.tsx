import {
	Tag,
	TagLeftIcon,
	TagLabel,
	useMultiStyleConfig,
} from '@chakra-ui/react'
import { Link } from '@components/common'
import { IconType } from 'react-icons'
import { capitalize } from 'utils'

export default function PostTag({
	label,
	icon,
}: {
	label: string
	icon?: IconType
}) {
	const styles = useMultiStyleConfig('Tag', {})

	return (
		<Link href={`/blog/tags/${label}`}>
			<Tag sx={styles.tag}>
				{icon && <TagLeftIcon sx={styles.icon} as={icon} />}
				<TagLabel sx={styles.label}>{capitalize(label)}</TagLabel>
			</Tag>
		</Link>
	)
}
