import { Image } from '@components/common'
import { useStyles } from '@chakra-ui/react'

type BadgesType = {
	[badge: string]: { url: string; alt: string }
}

const badges: BadgesType = {
	ecole42: { url: '/img/ecole42.png', alt: 'École 42' },
}

export default function PostBadge({ badge }: { badge: string }) {
	const postBadge = badges[badge]
	const styles = useStyles()

	if (postBadge) {
		return (
			<Image sx={styles.badge} src={postBadge.url} alt={postBadge.alt} />
		)
	} else {
		return <></>
	}
}
