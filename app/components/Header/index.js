/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import NavBar from './NavBar';
import HeaderTitle from './HeaderTitle';
import HeaderLink from './HeaderLink';

function Header() {
  return (
    <NavBar>
      <HeaderTitle>
        <HeaderLink to="/">String Land</HeaderLink>
      </HeaderTitle>
      <div>
        <HeaderLink to="/">All Strings</HeaderLink>
        <HeaderLink to="/add">Add New String</HeaderLink>
      </div>
    </NavBar>
  );
}

Header.propTypes = {};

export default Header;
