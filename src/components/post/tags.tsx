import { HStack } from '@chakra-ui/react'
import Tag from './tag'

export default function Tags({ tags }: { tags: Array<string> }) {
	return (
		<HStack>
			{tags.map((tag, idx) => (
				<Tag label={tag} key={idx} />
			))}
		</HStack>
	)
}
