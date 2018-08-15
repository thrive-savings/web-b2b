/**
 *
 * EmployeeGoals
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'components/Variables';

import goalCategories from './goalCategories';

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

const GoalIcon = styled.img`
  margin: 10px 20px 10px 0;
`;

const PlaceholderText = styled.p`
  color: ${colors.charcoal};
  text-align: center;
  letter-spacing: 0.5pt;
`;

const GoalRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const GoalName = styled.p`
  color: ${colors.charcoal};
  align-self: center;
  text-align: left;
  letter-spacing: 1pt;
  text-transform: uppercase;
`;

const GoalInfoHolder = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const GoalPercentageText = styled.p`
  color: ${colors.charcoal};
  font-size: 25px;
  text-align: right;
  letter-spacing: 0.5pt;
  line-height: 0;
`;

const GoalCountText = styled.p`
  color: ${colors.charcoal};
  font-size: 15px;
  text-align: right;
  letter-spacing: 0.5pt;
  line-height: 0;
  margin-top: -1px;
`;

function EmployeeGoals(props) {
  const goals = props.data;

  const goalRows = [];
  Object.keys(goals).forEach(category => {
    if (!(category in goalCategories)) return;
    const { icon, display } = goalCategories[category];
    const { count, percentage } = goals[category];
    goalRows.push(
      <GoalRow key={category}>
        <GoalIcon src={icon} alt={category} />
        <GoalName>{display}</GoalName>
        <GoalInfoHolder>
          <GoalPercentageText>{percentage}%</GoalPercentageText>
          <GoalCountText>{count} employees</GoalCountText>
        </GoalInfoHolder>
      </GoalRow>,
    );
  });

  return (
    <Container>
      <Label>Saving Goals</Label>
      <Content>
        {Object.keys(goals).length ? (
          <div>{goalRows}</div>
        ) : (
          <PlaceholderContainer>
            <PlaceholderIcons>
              <GoalIcon src={goalCategories.Travel.icon} alt="Travel" />
              <GoalIcon src={goalCategories.RainyDay.icon} alt="RainyDay" />
              <GoalIcon src={goalCategories.Retirement.icon} alt="Retirement" />
              <GoalIcon src={goalCategories.Home.icon} alt="Home" />
            </PlaceholderIcons>
            <PlaceholderText>
              Once employees set up goals, they will appear here.
            </PlaceholderText>
          </PlaceholderContainer>
        )}
      </Content>
    </Container>
  );
}

EmployeeGoals.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EmployeeGoals;
