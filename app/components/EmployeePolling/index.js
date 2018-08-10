/**
 *
 * EmployeePolling
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'components/Variables';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  border-radius: 10px;
  padding: 10px 20px 40px;
  margin: 40px;
  box-shadow: 0 0 10px ${colors.grey.lighter};
`;

const Label = styled.p`
  color: ${colors.blue};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2pt;
`;

const SubLabel = styled.p`
  color: ${colors.blue};
  letter-spacing: 0.25pt;
  margin-top: -5px;
`;

const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
`;

const PlaceholderText = styled.p`
  color: ${colors.charcoal};
  letter-spacing: 1pt;
  text-align: center;
`;

function EmployeePolling() {
  const companyName = 'Credit Canada';
  return (
    <Container>
      <Label>Employee Polling</Label>
      <SubLabel>
        {`How likely are you to recommend ${companyName} to family or a friend?`}{' '}
      </SubLabel>
      <Content>
        <PlaceholderText>There is no data.</PlaceholderText>
      </Content>
    </Container>
  );
}

EmployeePolling.propTypes = {};

export default EmployeePolling;
