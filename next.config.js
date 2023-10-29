/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		//http://localhost:3000/(https://www.gannett-cdn.com/content-pipeline-sports-images/sports2/nfl/logos/362.png?format=png8&auto=webp&width=34)
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.gannett-cdn.com',
			},
			{
				protocol: 'https',
				hostname: 'static.www.nfl.com',
			},
		],
	},
};

module.exports = nextConfig;
