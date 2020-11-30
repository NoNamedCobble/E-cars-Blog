import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Post from 'src/components/molecules/Post.js';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const PostList = () => (
  <Wrapper>
    <StaticQuery
      query={graphql`
        {
          api {
            blogPosts {
              id
              title
              pictureLink
              slug
              description {
                text
              }
            }
          }
        }
      `}
      render={({ api: { blogPosts } }) =>
        blogPosts.map(blogPost => <Post key={blogPost.id} content={blogPost} />)
      }
    />
  </Wrapper>
);

export default PostList;
