import React from 'react';
import styled from 'styled-components';

import Heading from 'src/components/atoms/Heading';
import ArticlesList from 'src/components/organisms/ArticlesList';

const Wrapper = styled.main`
  padding: 80px 10vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 20px;
`;

const Articles = () => (
  <Wrapper>
    <StyledHeading isMain>Articles:</StyledHeading>
    <ArticlesList />
  </Wrapper>
);

export default Articles;
