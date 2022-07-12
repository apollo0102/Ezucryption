/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "./src/assets/variables.scss";`,
  },
};