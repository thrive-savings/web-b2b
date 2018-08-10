/**
 *
 * EmployeeGoals
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'components/Variables';

import rainyDayIcon from 'images/goals/rainyDay.png';
import travelIcon from 'images/goals/travel.png';
import retirementIcon from 'images/goals/retirement.png';
import homeIcon from 'images/goals/home.png';

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

const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
`;

const PlaceholderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 105px 0;
`;

const PlaceholderIcons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 1s0px;
`;

const PlaceholderIcon = styled.img`
  margin: 10px;
`;

const PlaceholderText = styled.p`
  color: ${colors.charcoal};
  text-align: center;
  letter-spacing: 0.5pt;
`;

function EmployeeGoals() {
  return (
    <Container>
      <Label>Saving Goals</Label>
      <Content>
        <PlaceholderContainer>
          <PlaceholderIcons>
            <PlaceholderIcon src={travelIcon} alt="Travel" />
            <PlaceholderIcon src={rainyDayIcon} alt="RainyDay" />
            <PlaceholderIcon src={retirementIcon} alt="Retirement" />
            <PlaceholderIcon src={homeIcon} alt="Home" />
          </PlaceholderIcons>
          <PlaceholderText>
            Once employees set up goals, they will appear here.
          </PlaceholderText>
        </PlaceholderContainer>
      </Content>
    </Container>
  );
}

EmployeeGoals.propTypes = {};

export default EmployeeGoals;
