interface Post {
	id: string
	title: string
	date: string
	content: string
	tags?: Array<string>
}

export type PostType = Readonly<Post>
