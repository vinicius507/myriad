import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { getComponents } from '@lib/components'
import { useStyles } from '@chakra-ui/react'

export default function Markdown({ children }: { children: string }) {
	const styles = useStyles()
	const components = getComponents(styles)

	return (
		<ReactMarkdown components={components} remarkPlugins={[[gfm, {}]]}>
			{children}
		</ReactMarkdown>
	)
}
