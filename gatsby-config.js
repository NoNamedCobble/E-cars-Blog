module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    'gatsby-plugin-root-import',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Api',
        fieldName: 'api',
        url: `https://api-eu-central-1.graphcms.com/v2/ckhwq112f4bau01xsfjwy3xa6/master`,
      },
    },
  ],
};
