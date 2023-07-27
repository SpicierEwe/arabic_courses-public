/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
webpack:{
    resolve:{
        fallback:{
            fs:false,
        }
            
};

module.exports = nextConfig;
