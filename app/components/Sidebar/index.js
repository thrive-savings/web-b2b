/**
 *
 * Sidebar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import LogoSource from 'images/companyLogos/credit-canada.png';
import HomeIcon from 'images/icons/house.png';
import { colors } from '../Variables';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  background-color: white;
  padding: 10px;
`;

const Logo = styled.img`
  width: 200px;
  height: 50px;
`;

const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledLink = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkIcon = styled.img`
  width: 25px;
  height: 25px;
  tint: ${colors.blue};
`;

const LinkName = styled.p`
  padding-left: 20px;
  color: ${colors.blue};
`;

const BottomLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BottomLink = styled.button`
  color: ${colors.grey.light};
  text-decoration: underline;
  text-align: start;
  margin: 15px 10px;
  cursor: pointer;
`;

function Sidebar() {
  return (
    <Container>
      <Logo src={LogoSource} alt="Partner Logo" />
      <LinksContainer>
        <StyledLink>
          <LinkIcon src={HomeIcon} alt="Icon" />
          <LinkName>DASHBOARD</LinkName>
        </StyledLink>
      </LinksContainer>
      <BottomLinks>
        <BottomLink>Terms of service</BottomLink>
        <BottomLink>Help</BottomLink>
        <BottomLink>Contact</BottomLink>
        <BottomLink>Resources</BottomLink>
        <BottomLink>Logout</BottomLink>
      </BottomLinks>
    </Container>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
