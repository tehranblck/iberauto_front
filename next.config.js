/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "localhost",
            },
            {
                hostname: "api.iberauto.az",
            },
        ],
        domains: ['api.iberauto.az'],
    },
};

module.exports = nextConfig;