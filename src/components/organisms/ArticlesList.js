import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Article from 'src/components/molecules/Article';

const Wrapper = styled.div`
  /* background-color: yellow; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
`;

const ArticlesList = () => (
  <Wrapper>
    <StaticQuery
      query={graphql`
        {
          api {
            blogPosts {
              id
              title
              slug
              date
              description {
                text
              }
              pictureLink
            }
          }
        }
      `}
      render={({ api: { blogPosts } }) =>
        blogPosts
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map(({ id, ...props }) => <Article key={id} {...props} />)
      }
    />
  </Wrapper>
);

export default ArticlesList;
