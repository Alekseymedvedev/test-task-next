/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn2.softswiss.net',
                port: '',
                pathname: '**',
            },
        ],
    },
}

