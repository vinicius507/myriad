/* eslint-disable no-undef */
import fs from 'fs'
import path from 'path'
import matter, { GrayMatterFile } from 'gray-matter'

const miscDirectory = path.join(process.cwd(), 'content/misc')

export function getAbout() {
	const fullPath = path.join(miscDirectory, 'about.md')
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	const matterResult = matter(fileContents) as {
		data: { title: string; date: string }
	} & GrayMatterFile<string>
	const tags = String(matterResult.data.tags).split(' ')
	const content = matterResult.content

	return {
		content,
		...matterResult.data,
		tags,
	}
}
