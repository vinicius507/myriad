interface Post {
	id: string
	title: string
	date: string
	content: string
	categories?: Array<string>
	tags?: Array<string>
}

export type PostType = Readonly<Post>
