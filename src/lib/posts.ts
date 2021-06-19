/* eslint-disable no-undef */
import fs from 'fs'
import path from 'path'
import matter, { GrayMatterFile } from 'gray-matter'
import { PostType } from 'interfaces'

const postsDirectory = path.join(process.cwd(), 'blog')

export function getAllPostIds(): Array<{ params: { id: string } }> {
	const filenames = fs.readdirSync(postsDirectory)

	return filenames.map((filename) => {
		return {
			params: {
				id: filename.replace(/\.md$/, ''),
			},
		}
	})
}

export function getPostData(id: string): PostType {
	const fullPath = path.join(postsDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	const matterResult = matter(fileContents) as {
		data: { title: string; date: string }
	} & GrayMatterFile<string>
	const content = matterResult.content

	return {
		id,
		content,
		...matterResult.data,
	}
}

export function getSortedPosts(): Array<PostType> {
	const filenames = fs.readdirSync(postsDirectory)
	const allPostsData = filenames.map((filename) => {
		const id = filename.replace(/\.md$/, '')

		const fullPath = path.join(postsDirectory, filename)
		const fileContents = fs.readFileSync(fullPath, 'utf8')
		const matterResult = matter(fileContents)
		const content = matterResult.content

		return {
			id,
			content,
			...matterResult.data,
		}
	}) as Array<PostType>

	return allPostsData.sort(({ date: a }: any, { date: b }: any) => {
		if (a < b) {
			return 1
		} else if (a > b) {
			return -1
		} else {
			return 0
		}
	})
}
