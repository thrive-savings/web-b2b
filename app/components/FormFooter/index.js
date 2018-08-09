/**
 *
 * FormFooter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from 'components/Variables';

const P = styled.p`
  text-align: center;
  color: ${colors.charcoal};
`;

const Button = styled.button`
  color: ${colors.blue};
  cursor: pointer;
`;

function FormFooter(props) {
  const { label, buttonText, onClick } = props;
  return (
    <P>
      {label}
      <Button onClick={onClick}>{buttonText}</Button>
    </P>
  );
}

FormFooter.propTypes = {
  label: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormFooter;
