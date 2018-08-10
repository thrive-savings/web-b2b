/**
 *
 * Sidebar
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

import LogoSource from 'images/companyLogos/credit-canada.png';
import HomeIcon from 'images/icons/house.png';

import {
  Container,
  PartnerLogo,
  MainLinks,
  MainLink,
  MainLinkText,
  BottomLinks,
  BottomLink,
} from './styled';

function Sidebar(props) {
  const { partnerName, mainLinks, bottomLinks } = props;

  const mainLinkComponents = mainLinks.map(
    ({ key, text, onClick = () => {} }) => (
      <MainLink key={key} onClick={onClick}>
        <img src={HomeIcon} alt="Icon" />
        <MainLinkText>{text}</MainLinkText>
      </MainLink>
    ),
  );

  const bottomLinkComponents = bottomLinks.map(
    ({ key, text, onClick = () => {}, href }) => (
      <BottomLink href={href || `javascript:;`} key={key} onClick={onClick}>
        {text}
      </BottomLink>
    ),
  );

  return (
    <Container>
      {partnerName && <PartnerLogo src={LogoSource} alt="Partner Logo" />}
      <MainLinks>{mainLinkComponents}</MainLinks>
      <BottomLinks>{bottomLinkComponents}</BottomLinks>
    </Container>
  );
}

Sidebar.propTypes = {
  partnerName: PropTypes.string.isRequired,
  mainLinks: PropTypes.array.isRequired,
  bottomLinks: PropTypes.array.isRequired,
};

export default Sidebar;
