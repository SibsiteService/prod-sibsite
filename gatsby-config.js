const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.manifestStartUrl,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    { 
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148714105-2",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NSNGV84",
      },
      
    },
    
  ],
};
