/* eslint-disable no-undef */
import fs from 'fs'
import path from 'path'
import matter, { GrayMatterFile } from 'gray-matter'
import { PostType, SortedPostsType } from 'interfaces'
import _ from 'lodash'

const postsDirectory = path.join(process.cwd(), 'content/blog')

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
	const tags = String(matterResult.data.tags).split(' ')
	const badge = matterResult.data.badge || 'none'
	const content = matterResult.content

	return {
		id,
		content,
		...matterResult.data,
		tags,
		badge,
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

	return allPostsData.sort(({ date: a }: PostType, { date: b }: PostType) => {
		if (a < b) {
			return 1
		} else if (a > b) {
			return -1
		} else {
			return 0
		}
	})
}

export function getYearSortedPosts(): SortedPostsType {
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

	const sortedPosts = allPostsData.sort(
		({ date: a }: PostType, { date: b }: PostType) => {
			if (a < b) {
				return 1
			} else if (a > b) {
				return -1
			} else {
				return 0
			}
		}
	)

	var byYear: SortedPostsType = {}

	_.each(sortedPosts, (post) => {
		const year = post.date.substring(0, 4)

		if (typeof byYear[year] === 'undefined') {
			byYear[year] = []
		}

		byYear[year].push(post)
	})

	return byYear
}

export function getTagPosts(tag: string): SortedPostsType {
	const filenames = fs.readdirSync(postsDirectory)
	const allPostsData = filenames.map((filename) => {
		const id = filename.replace(/\.md$/, '')

		const fullPath = path.join(postsDirectory, filename)
		const fileContents = fs.readFileSync(fullPath, 'utf8')
		const matterResult = matter(fileContents)

		return {
			id,
			...matterResult.data,
		}
	}) as Array<PostType>

	const tagPostsData = allPostsData.filter((post) =>
		String(post.tags).includes(tag)
	)

	let sortedPosts = tagPostsData.sort(
		({ date: a }: any, { date: b }: any) => {
			if (a < b) {
				return 1
			} else if (a > b) {
				return -1
			} else {
				return 0
			}
		}
	)

	var byYear: SortedPostsType = {}

	_.each(sortedPosts, (post) => {
		const year = post.date.substring(0, 4)

		if (typeof byYear[year] === 'undefined') {
			byYear[year] = []
		}

		byYear[year].push(post)
	})

	return byYear
}

export function getAllPostTags(): Array<{ params: { id: string } }> {
	const filenames = fs.readdirSync(postsDirectory)
	const tags = filenames
		.map((filename) => {
			const fullPath = path.join(postsDirectory, filename)
			const fileContents = fs.readFileSync(fullPath, 'utf8')
			const matterResult = matter(fileContents)

			const tags = String(matterResult.data.tags).split(' ')
			return tags
		})
		.flat()
		.filter((value, idx, self) => {
			return self.indexOf(value) === idx
		})
	return tags.map((tag) => {
		return {
			params: {
				id: tag,
			},
		}
	})
}

export function getLatestPosts(): Array<PostType> {
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

	return allPostsData
		.sort(({ date: a }: any, { date: b }: any) => {
			if (a < b) {
				return 1
			} else if (a > b) {
				return -1
			} else {
				return 0
			}
		})
		.slice(0, 5)
}
