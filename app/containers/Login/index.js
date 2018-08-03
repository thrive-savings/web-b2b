/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { colors } from 'components/Variables';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';

const LoginBox = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid ${colors.blue};
  margin: 1em auto;
  padding: 1em;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e, type) {
    const { value, validationMessage } = e.target;
    switch (type) {
      case 'email':
        this.setState({ email: value, error: validationMessage });
        break;
      case 'password':
        this.setState({
          password: value,
          error: validationMessage
            ? 'Password should contain at least 1 uppercase, 1 lowercase, and 1 number and be at least 8 characters.'
            : '',
        });
        break;
      default:
        break;
    }
  }

  handleSubmit() {
    const { email, password } = this.state;
    console.log(`Email: ${email}, Password: ${password}`);
    // TODO: call saga here
  }

  render() {
    const { error } = this.state;
    return (
      <LoginBox>
        <Helmet
          title="Login"
          meta={[{ name: 'description', content: 'Dashboard Login' }]}
        />
        <TextInput
          onChange={this.handleInputChange}
          type="email"
          placeholder="Email"
        />
        <TextInput
          onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
        />
        {error && <ErrorMessage msg={error} />}
        <Button text="LOGIN" onClick={this.handleSubmit} />
      </LoginBox>
    );
  }
}

Login.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
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

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
