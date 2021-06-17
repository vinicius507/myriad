import code from './code'
import codeBlock from './codeblock'
import date from './date'
import link from './link'
import { oList, uList } from './list'
import { oListItem, uListItem } from './listItem'
import pre from './pre'
import title from './title'
import text from './text'
import table from './table'

const Post = {
	parts: [
		'title',
		'text',
		'link',
		'code',
		'codeBlock',
		'date',
		'pre',
		'uListItem',
		'oListItem',
		'uList',
		'oList',
		'table',
	],
	baseStyle: {
		date,
		title,
		link,
		uListItem,
		oListItem,
		uList,
		oList,
		pre,
		code,
		codeBlock,
		text,
		table,
	},
}

export default Post
