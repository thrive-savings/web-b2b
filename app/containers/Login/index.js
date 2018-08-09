/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';

import { makeSelectAuth } from 'containers/App/selectors';

import FormBox from 'components/FormBox';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

import { loginSubmit } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validationError: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e, type) {
    const { value, validationMessage } = e.target;
    switch (type) {
      case 'email':
        this.setState({ email: value, validationError: validationMessage });
        break;
      case 'password':
        this.setState({
          password: value,
          validationError: validationMessage
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

    // TODO: validate input

    this.props.loginSubmit({ email, password });
  }

  componentWillReceiveProps(nextProps) {
    const {
      data: { jwt },
    } = nextProps.auth;
    if (jwt) {
      nextProps.changeRoute('/');
    }
  }

  render() {
    const { validationError } = this.state;

    const { loading } = this.props.auth;

    return (
      <FormBox>
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
        {validationError && <ErrorMessage msg={validationError} />}
        <Button
          text={loading ? 'Logging in ...' : 'LOG IN'}
          onClick={this.handleSubmit}
        />
      </FormBox>
    );
  }
}

Login.propTypes = {
  loginSubmit: PropTypes.func.isRequired,
  changeRoute: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    loginSubmit: payload => dispatch(loginSubmit(payload)),
    changeRoute: route => dispatch(push(route)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withSaga,
  withConnect,
)(Login);
