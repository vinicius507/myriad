interface Post {
	id: string
	title: string
	description?: string
	date: string
	content: string
	tags: Array<string>
	badge?: string
}

export type SortedPostsType = {
	[year: string]: Array<PostType>
}

export type PostType = Readonly<Post>
