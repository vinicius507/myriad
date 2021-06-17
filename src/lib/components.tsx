import {
	Code,
	Table,
	Text,
	OrderedList,
	ListItem,
	UnorderedList,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Tfoot,
	TableCaption,
} from '@chakra-ui/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import tokyonight from './tokyonight'
import { Link } from '@components/common'
import Pre from '@components/markdown/pre'

export const getComponents = (styles: any) => {
	return {
		table({ children }: any) {
			return <Table sx={styles.table}>{children}</Table>
		},
		thead({ children }: any) {
			return <Thead sx={styles.tableHead}>{children}</Thead>
		},
		tr({ children }: any) {
			return <Tr sx={styles.tableR}>{children}</Tr>
		},
		th({ children }: any) {
			return <Th sx={styles.tableH}>{children}</Th>
		},
		tbody({ children }: any) {
			return <Tbody sx={styles.tableBody}>{children}</Tbody>
		},
		td({ children }: any) {
			return <Td sx={styles.tableD}>{children}</Td>
		},
		tfoot({ children }: any) {
			return <Tfoot sx={styles.tableFoot}>{children}</Tfoot>
		},
		caption({ children }: any) {
			return (
				<TableCaption sx={styles.tableCaption}>{children}</TableCaption>
			)
		},
		p({ children }: any) {
			return (
				<Text as="p" sx={styles.text}>
					{children}
				</Text>
			)
		},
		a({ children, href }: any) {
			return (
				<Link href={href} sx={styles.link}>
					{children}
				</Link>
			)
		},
		ol({ children }: any) {
			return <OrderedList sx={styles.oList}>{children}</OrderedList>
		},
		ul({ children }: any) {
			return (
				<UnorderedList sx={styles.uList} listStyleType="none">
					{children}
				</UnorderedList>
			)
		},
		li({ children, ordered }: any) {
			return (
				<ListItem sx={ordered ? styles.oListItem : styles.uListItem}>
					{children}
				</ListItem>
			)
		},
		code({ inline, className, children }: any) {
			const match = /language-(\w+)/.exec(className || '')
			return !inline && match ? (
				<SyntaxHighlighter
					language={match[1]}
					PreTag={Pre}
					style={tokyonight}
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			) : (
				<Code sx={styles.code}>{children}</Code>
			)
		},
	}
}
