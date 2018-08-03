/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';

import { colors } from 'components/Variables';

import LogoSource from './logo-white.png';

const HeaderWrapper = styled.div`
  background: linear-gradient(to right, ${colors.blue}, ${colors.green});
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 160px;
  height: 50px;
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo src={LogoSource} alt="Thrive Logo" />
      </HeaderWrapper>
    );
  }
}

export default Header;
