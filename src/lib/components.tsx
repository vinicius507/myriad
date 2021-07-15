import {
	Box,
	Code,
	CSSWithMultiValues,
	Divider,
	Heading,
	ListItem,
	OrderedList,
	RecursiveCSSObject,
	Table,
	TableCaption,
	Tbody,
	Td,
	Text,
	Tfoot,
	Th,
	Thead,
	Tr,
	UnorderedList,
} from '@chakra-ui/react'
import { Image, Link } from '@components/common'
import { Pre } from '@components/post'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import tokyonight from './tokyonight'

export const getComponents = (
	styles: Record<string, RecursiveCSSObject<CSSWithMultiValues>>
) => {
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
		pre({ children }: any) {
			return <>{children}</>
		},
		code({ inline, className, children }: any) {
			const match = /language-(\w+)/.exec(className || '')
			return !inline ? (
				<SyntaxHighlighter
					language={match ? match[1] : ''}
					PreTag={Pre}
					style={tokyonight}
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			) : (
				<Code sx={styles.code}>{children}</Code>
			)
		},
		h1({ children }: any) {
			return (
				<Heading
					sx={styles.h1}
					id={String(children).toLowerCase().replace(/\s/g, '_')}
				>
					{children}
				</Heading>
			)
		},
		h2({ children }: any) {
			return (
				<Heading
					sx={styles.h2}
					id={String(children).toLowerCase().replace(/\s/g, '_')}
				>
					{children}
				</Heading>
			)
		},
		h3({ children }: any) {
			return (
				<Heading
					sx={styles.h3}
					id={String(children).toLowerCase().replace(/\s/g, '_')}
				>
					{children}
				</Heading>
			)
		},
		hr() {
			return <Divider sx={styles.hr} />
		},
		blockquote({ children }: any) {
			return (
				<Box as="blockquote" sx={styles.blockquote}>
					{children}
				</Box>
			)
		},
		img({ src, alt, title }: any) {
			return (
				<>
					<Image src={src} alt={alt} title={title} sx={styles.img} />
				</>
			)
		},
	}
}
