/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['assets.vercel.com', 'kinopoiskapiunofficial.tech']
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://kinopoiskapiunofficial.tech/:path*'
			}
		]
	}
}

module.exports = nextConfig
