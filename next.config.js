const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "app/src/sass")],
    },
}

module.exports = nextConfig

