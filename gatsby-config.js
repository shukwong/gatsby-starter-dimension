module.exports = {
  siteMetadata: {
    title: "Wendy Wong's Personal Page",
    author: "Wendy Wong",
    description: "Wendy Wong - Senior Biomedical Scientist & Head, Bioinformatics Virtual Core at NCI"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Wendy Wong's Personal Page",
        short_name: 'Wendy Wong',
        start_url: '/',
        background_color: '#1b1f22',
        theme_color: '#1b1f22',
        display: 'minimal-ui',
        icon: 'src/images/wendy.jpg',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
