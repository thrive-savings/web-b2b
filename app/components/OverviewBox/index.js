/**
 *
 * OverviewBox
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

const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  margin-right: -20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const ColumnLabel = styled.p`
  color: ${colors.charcoal};
  text-transform: uppercase;
  letter-spacing: 0.75pt;
  font-size: 13px;
`;

const ColumnText = styled.p`
  color: ${colors.charcoal};
  letter-spacing: 2pt;
  font-size: 30px;
  margin: -10px 0;
`;

function OverviewBox() {
  return (
    <Container>
      <Label>Overview</Label>
      <Content>
        <Column>
          <ColumnLabel>Thrive Users</ColumnLabel>
          <ColumnText>0</ColumnText>
        </Column>
        <Column>
          <ColumnLabel>Total Saved</ColumnLabel>
          <ColumnText>$0</ColumnText>
        </Column>
        <Column>
          <ColumnLabel>Total Contributions</ColumnLabel>
          <ColumnText>$0</ColumnText>
        </Column>
      </Content>
    </Container>
  );
}

OverviewBox.propTypes = {};

export default OverviewBox;
