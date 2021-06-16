/* eslint-disable no-undef */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'blog')

export function getAllPostIds() {
	const filenames = fs.readdirSync(postsDirectory)

	return filenames.map((filename) => {
		return {
			params: {
				id: filename.replace(/\.md$/, ''),
			},
		}
	})
}

export function getPostData(id: string) {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	const matterResult = matter(fileContents)

	return {
		id,
		...matterResult.data,
	}
}
