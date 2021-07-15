module.exports = {
	siteUrl: process.env.SITE_URL || 'https://www.myriaddev.me',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: ['/', '/blog/*', '/about'],
			},
		],
	}
}
