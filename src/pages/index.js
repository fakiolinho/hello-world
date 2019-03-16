import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledButton } from '../components/button';

const Inner = styled.div`
  padding: 180px 0;
  text-align: center;
`;

const Button = StyledButton.withComponent('a');

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Inner>
      <Button href={require('../images/Hello_World.pdf')} target="_blank">
        Corporate Profile
      </Button>
    </Inner>
  </Layout>
);

export default IndexPage;
