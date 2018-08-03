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
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { colors } from 'components/Variables';

import Header from 'components/Header';
import Login from 'containers/Login';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
const HomePage = () => <h1>Home Page</h1>;
const NotFoundPage = () => <h1>Not Found Page</h1>;

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  background: ${colors.grey.lightest};
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Thrive"
        defaultTitle="Thrive"
        meta={[{ name: 'description', content: 'Thrive Dashboard' }]}
      />
      <Header />

      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
    </AppWrapper>
  );
}
