import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Inner = styled.div`
  margin-bottom: 1.45rem;
  padding: 150px 0;
  text-align: center;
`;

const Link = styled.a`
  background-color: #ffffff;
  border: 1px solid #444444;
  display: inline-block;
  line-height: 90px;
  max-width: 300px;
  padding: 0 30px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .4s ease-in-out;
  transition-property: background-color, box-shadow, color, transform;
  width: 100%;
  
  &:hover {
    background-color: #444444;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #ffffff;
    transform: scale(1.1);
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Hello World IKE | Home" />
    <Inner>
      <Link href={require('../images/Hello_World.pdf')} target="_blank">
        Εταιρικο Προφιλ
      </Link>
    </Inner>
  </Layout>
);

export default IndexPage;
