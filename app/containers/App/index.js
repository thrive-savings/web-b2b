/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { colors } from 'components/Variables';

import PrivateRoute from 'components/PrivateRoute';

import Header from 'components/Header';
import Login from 'containers/Login';
import Signup from 'containers/Signup';
import Dashboard from 'containers/Dashboard/Loadable';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

// import NotFoundPage from 'containers/NotFoundPage/Loadable';
const NotFoundPage = () => <h1>Not Found Page</h1>;

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background: ${colors.grey.lightest};
`;

export const App = () => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - Thrive"
      defaultTitle="Thrive"
      meta={[{ name: 'description', content: 'Thrive Dashboard' }]}
    />
    <Header />

    <ContentWrapper>
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NotFoundPage} />
      </Switch>
    </ContentWrapper>
  </AppWrapper>
);

const withReducer = injectReducer({ key: 'auth', reducer });

export default compose(withReducer)(App);
