module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-wordpress-experimental`
        options: {
          url:
            process.env.WPGRAPHQL_URL || `https://styl.cajaspark.com/graphql`
        }
      }
    ]
  }
