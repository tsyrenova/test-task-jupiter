// @ts-check

/**
 * @type {import("next").NextConfig}
 **/
const nextConfig = {
    reactStrictMode: true
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

module.exports = (nextConfig, withBundleAnalyzer({}));
