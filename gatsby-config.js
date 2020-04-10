module.exports = {
  siteMetadata: {
    title: 'tichopad.dev',
    url: 'https://tichopad.dev',
    author: {
      name: 'Michael Tichopád',
      email: 'michael@tichopad.dev',
      linkedin: 'https://www.linkedin.com/in/michael-tichop%C3%A1d-839562134/',
      github: 'https://github.com/tichopad/',
    },
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '__blank',
              rel: 'noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: ['png', 'jpg', 'jpeg', 'bmp'],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
  ],
}
