import blockquote from './blockquote'
import code from './code'
import date from './date'
import { h1, h2, h3 } from './heading'
import hr from './hr'
import link from './link'
import { oList, uList } from './list'
import { oListItem, uListItem } from './listItem'
import pre from './pre'
import table from './table'
import Tag from './tag'
import text from './text'
import title from './title'

const Post = {
	parts: [
		'blockquote',
		'code',
		'date',
		'h1',
		'h2',
		'h3',
		'hr',
		'link',
		'oList',
		'oListItem',
		'pre',
		'table',
		'text',
		'title',
		'uList',
		'uListItem',
	],
	baseStyle: {
		blockquote,
		code,
		date,
		h1,
		h2,
		h3,
		hr,
		link,
		oList,
		oListItem,
		pre,
		table,
		text,
		title,
		uList,
		uListItem,
	},
}

export { Post, Tag }
