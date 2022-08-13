/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['assets.vercel.com', 'kinopoiskapiunofficial.tech']
	}
	// async rewrites() {
	// 	return [
	// 		{
	// 			source: '/api/:path*',
	// 			destination: 'https://api.example.com/:path*',
	// 		},
	// 	]
	// }
}

module.exports = nextConfig
