import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#fff',
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, .2)',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <h1 style={{
        margin: 0,
        fontSize: '1.5rem',
        fontWeight: 300,
        lineHeight: 1,
      }}>
        <Link
          to="/"
          style={{
            color: '#444',
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
