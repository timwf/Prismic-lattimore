// gatsby-config.js file

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  

  siteMetadata: {
    title: 'Gatsby + Prismic Tutorial',
    description: 'Learn how to integrate Prismic into your Gatsby project.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prismic-previews',
      options: {
        repositoryName: 'lattiomore',
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'lattiomore',
        linkResolver: require('./src/utils/LinkResolver').linkResolver,
        schemas: {
          homepage: require('./custom_types/homepage.json'),
          navigation: require('./custom_types/navigation.json'),
          page: require('./custom_types/page.json'),
        },
      },
    },
    'gatsby-plugin-image',
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-svg`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Lato\:400,400,700,700i,900`, `Amiri\:400,400,700,700i`],
      },
    },
  ],
}