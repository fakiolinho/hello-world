import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Hello World IKE | Home" />
    <div
      style={{
        marginBottom: `1.45rem`,
        textAlign: 'center',
      }}
    >
      <img
        style={{ width: '500px', height: 'auto' }}
        src={require('../images/under-construction.png')}
        alt="Hello World"
      />
    </div>
  </Layout>
);

export default IndexPage;
