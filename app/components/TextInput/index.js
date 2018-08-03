/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from 'components/Variables';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const StyledInput = styled.input`
  padding: 0 10px;
  background-color: ${colors.grey.lightest};
  border: 1px solid ${colors.grey.light};
  border-radius: 8px;
  height: 40px;
`;

/* eslint-disable react/prefer-stateless-function */
class TextInput extends React.Component {
  render() {
    const { onChange, type, placeholder, required } = this.props;
    return (
      <InputContainer>
        <StyledInput
          type={type}
          placeholder={placeholder}
          required={required}
          pattern={
            type === 'password' ? '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}' : ''
          }
          onChange={e => onChange(e, type)}
        />
      </InputContainer>
    );
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default TextInput;
