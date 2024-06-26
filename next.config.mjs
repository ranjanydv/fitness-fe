// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ["images.unsplash.com", "plus.unsplash.com"],
//     },
// };
//
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
