import React from 'react';
import Heading from 'src/components/atoms/Heading';
// import { Link } from 'gatsby';

const PageTemplate = ({ pageContext: { data } }) => (
  <>
    <Heading isMain>{data.title}</Heading>
    <p>{data.description.text}</p>
  </>
);
export default PageTemplate;
