import React from 'react';
import styled from 'styled-components';

import Heading from 'src/components/atoms/Heading';

const Wrapper = styled.main`
  text-align: center;
`;

const StyledHeading = styled(Heading)`
  display: flex;
  flex-direction: column;
`;

const PageNotFound = () => {
  const emoijs = [':(', '>:/', ':-(', '"(', '>:\\'];

  const drawnEmoji = emoijs[Math.floor(Math.random() * emoijs.length)];

  return (
    <Wrapper>
      <StyledHeading isWarning>
        <span>Strona nie została znaleziona</span> <span>{drawnEmoji}</span>
      </StyledHeading>
    </Wrapper>
  );
};

export default PageNotFound;
