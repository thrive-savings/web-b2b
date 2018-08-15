/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

/* eslint-disable import/extensions */
import config from 'config';
import styled from 'styled-components';

import Sidebar from 'components/Sidebar/Loadable';
import OverviewBox from 'components/OverviewBox/Loadable';
import EmployeePolling from 'components/EmployeePolling/Loadable';
import EmployeeGoals from 'components/EmployeeGoals/Loadable';

import { clearState } from 'utils/localStorage';
import { logout } from 'containers/App/actions';
import { makeSelectAuth } from 'containers/App/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';

import { fetchEmployeeDataSubmit } from './actions';

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

const ContentColumnLeft = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ContentColumnRight = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

/* eslint-disable react/prefer-stateless-function */
export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchEmployeeDataSubmit();
  }

  handleSidebarClick(link) {
    switch (link) {
      case 'dashboard':
        break;
      case 'logout':
        clearState();
        this.props.logout();
        break;
      default:
        break;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.loggedOut) {
      this.props.changeRoute('/login');
    }
  }

  render() {
    const {
      data: { overview, goals },
    } = this.props.dashboard;
    console.log({ ...overview, ...goals });

    const mainLinks = [
      {
        key: 'dashboard',
        text: 'Dashboard',
        onClick: () => this.handleSidebarClick('dashboard'),
      },
    ];

    const bottomLinks = [
      {
        key: 'tos',
        text: 'Terms of service',
        href: `${config.websiteUrl}/privacy-policy/`,
      },
      {
        key: 'help',
        text: 'Help',
        href: `${config.websiteUrl}/#contact`,
      },
      {
        key: 'contact',
        text: 'Contact',
        href: `${config.websiteUrl}/#contact`,
      },
      {
        key: 'resources',
        text: 'Resources',
        href: `${config.websiteUrl}/`,
      },
      {
        key: 'logout',
        text: 'Logout',
        onClick: () => this.handleSidebarClick('logout'),
      },
    ];

    return (
      <Container>
        <Sidebar
          partnerName="CreditCanada"
          mainLinks={mainLinks}
          bottomLinks={bottomLinks}
        />
        <Content>
          <ContentColumnLeft>
            <OverviewBox data={overview || {}} />
            <EmployeePolling />
          </ContentColumnLeft>
          <ContentColumnRight>
            <EmployeeGoals data={goals || {}} />
          </ContentColumnRight>
        </Content>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired,
  fetchEmployeeDataSubmit: PropTypes.func.isRequired,
  changeRoute: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchEmployeeDataSubmit: () => dispatch(fetchEmployeeDataSubmit()),
    changeRoute: route => dispatch(push(route)),
    logout: () => dispatch(logout()),
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
