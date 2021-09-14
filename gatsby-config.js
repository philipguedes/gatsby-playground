module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Guedes e Lima Advocacia e Consultoria',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    '@chakra-ui/gatsby-plugin',
    `gatsby-plugin-tsconfig-paths`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
