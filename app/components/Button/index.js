/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from 'components/Variables';

const GradientHolder = styled.div`
  margin: 20px 0 10px 0;
  background: linear-gradient(${colors.blue}, ${colors.green});
  border-radius: 8px;
  height: 40px;
  display: flex;
`;

const StyledButton = styled.button`
  color: ${colors.grey.lightest};
  display: flex;
  flex: 1;
  justify-content: center;
`;

/* eslint-disable react/prefer-stateless-function */
class Button extends React.Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <GradientHolder>
        <StyledButton onClick={onClick} type="button">
          {text}
        </StyledButton>
      </GradientHolder>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
