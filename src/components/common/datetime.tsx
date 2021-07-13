import { parseISO, format } from 'date-fns'
import { Box, useStyles } from '@chakra-ui/react'

export default function Datetime({
	datestring,
	formatstring,
}: {
	datestring: string
	formatstring: string
}) {
	const styles = useStyles()
	const date = parseISO(datestring)

	return (
		<Box as="time" dateTime={datestring} sx={styles.date}>
			{format(date, formatstring)}
		</Box>
	)
}
