// postcss.config.ts
/** @type {import('next').NextConfig} */
const postcssConfig = {
  experimental: {
    appDir: true,
  },
   "@tailwindcss/postcss": {},
}

module.exports = postcssConfig