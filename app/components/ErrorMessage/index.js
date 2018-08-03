/**
 *
 * ErrorMessage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from 'components/Variables';

const RedMessage = styled.p`
  color: ${colors.red};
  text-align: center;
  margin: -5px 0;
`;

function ErrorMessage(props) {
  return <RedMessage>{props.msg}</RedMessage>;
}

ErrorMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default ErrorMessage;
