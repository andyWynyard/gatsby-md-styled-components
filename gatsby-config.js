module.exports = {
  siteMetadata: {
    title: `Maverick UX`,
    homepage: 'https://maverickbysigma.se/',
    people: 'https://maverickbysigma.se/people/',
    work: 'https://maverickbysigma.se/work/',
    peterContact: `mailto:peter.knapp@sigma.se?Subject=Jag%20vill%20höra%20mer%20om%20UX`,
    malinContact: `mailto:malin.bryntesson@sigma.se?Subject=Jag%20vill%20höra%20mer%20om%20UX`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/blog/`,
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/media/logo.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
