/**
 *
 * Dashboard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import styled from 'styled-components';

import Sidebar from 'components/Sidebar/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

/* eslint-disable react/prefer-stateless-function */
export class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Sidebar />
        <Content>
          <p> text 0 </p>
          <p> text 1 </p>
        </Content>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Dashboard);
