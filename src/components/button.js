import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

export const StyledButton = styled(Link)`
  background-color: #ffffff;
  border: 1px solid #444444;
  display: inline-block;
  line-height: 90px;
  max-width: 300px;
  padding: 0 30px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  transition-property: background-color, box-shadow, color, transform;
  width: 100%;

  &:hover {
    background-color: #444444;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #ffffff;
    transform: scale(1.1);
  }
`;

const Button = ({ to, children, className, ...restProps }) => (
  <StyledButton to={to} className={className} {...restProps}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
