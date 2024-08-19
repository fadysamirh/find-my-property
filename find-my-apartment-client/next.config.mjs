/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true, // or false for a temporary redirect
            },
        ];
    },
};

export default nextConfig;
