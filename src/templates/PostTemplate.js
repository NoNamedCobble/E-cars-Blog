import React from 'react';
import styled from 'styled-components';

import Heading from 'src/components/atoms/Heading';

const Wrapper = styled.main`
  padding: 80px 10vh;
`;

const PageTemplate = ({ pageContext: { data } }) => (
  <Wrapper>
    <Heading isMain>{data.title}</Heading>
    <p>{data.description.text}</p>
  </Wrapper>
);
export default PageTemplate;
