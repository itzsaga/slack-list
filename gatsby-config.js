module.exports = {
  siteMetadata: {
    title: 'SL',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'slack-list',
        short_name: 'slack-list',
        start_url: '/',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-a11y'
  ],
}
