import { getAbout } from '@lib/misc'
import { PageHeader, Container } from '@components/common'
import { Markdown } from '@components/post'
import { StylesProvider, useMultiStyleConfig } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { PostType } from 'interfaces'

type Props = {
	aboutData: PostType
}

export default function AboutPage({ aboutData }: Props) {
	const styles = useMultiStyleConfig('Post', {})
	return (
		<>
			<PageHeader title={aboutData.title}>
				{aboutData.description}
			</PageHeader>
			<Container post>
				<StylesProvider value={styles}>
					<Markdown>{aboutData.content}</Markdown>
				</StylesProvider>
			</Container>
		</>
	)
}

export const getStaticProps: GetStaticProps = () => {
	const aboutData = getAbout()

	return {
		props: {
			aboutData,
		},
	}
}
