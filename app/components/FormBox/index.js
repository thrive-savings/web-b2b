/**
 *
 * FormBox
 *
 */

import styled from 'styled-components';
import { colors } from 'components/Variables';

export default styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid ${colors.blue};
  margin: 1em auto 15%;
  padding: 1em;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
