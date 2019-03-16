import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled'

const Container = styled.div`
  background: #fff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

const ContainerInner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
  text-align: center;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <ContainerInner>
      <Heading>{siteTitle}</Heading>
    </ContainerInner>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
