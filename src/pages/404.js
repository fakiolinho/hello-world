import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';

const Inner = styled.div`
  padding: 50px 0 0;
  text-align: center;
`;

const Img = styled.img`
  display: inline-block;
  height: auto;
  max-width: 300px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  line-height: 60px;
  margin-bottom: 50px;
  max-width: 200px;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Inner>
      <Img src={require('../images/search.png')} />
      <h3>PAGE NOT FOUND</h3>
      <p>You just hit a route that doesn&#39;t exist...</p>
      <StyledButton to="/">Go Back</StyledButton>
    </Inner>
  </Layout>
);

export default NotFoundPage;
