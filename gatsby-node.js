const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/PostTemplate.js`);

  const postQuery = await graphql(`
    {
      api {
        blogPosts {
          id
          title
          slug
          description {
            text
          }
        }
      }
    }
  `);

  postQuery.data.api.blogPosts.forEach(blogPost => {
    createPage({
      path: blogPost.slug,
      component: postTemplate,
      context: {
        data: blogPost,
      },
    });
  });
};
