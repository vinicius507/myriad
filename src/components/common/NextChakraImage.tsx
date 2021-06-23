import { Box, BoxProps } from '@chakra-ui/react'
import NextImage, { ImageProps } from 'next/image'

export type NextChakraImageProps = Omit<BoxProps, 'as'> & ImageProps

export function NextChakraImage({
	src,
	alt,
	title,
	...rest
}: NextChakraImageProps) {
	return (
		<Box {...rest}>
			<NextImage
				objectFit="cover"
				layout="fill"
				src={src}
				alt={alt}
				title={title}
			/>
		</Box>
	)
}
