/**
 *
 * Signup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import { makeSelectAuth } from 'containers/App/selectors';

import FormBox from 'components/FormBox';
import FormFooter from 'components/FormFooter';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

import { signupSubmit } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      firstName: '',
      lastName: '',
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
      case 'code':
        this.setState({ code: value, validationError: validationMessage });
        break;
      case 'firstName':
        this.setState({ firstName: value, validationError: validationMessage });
        break;
      case 'lastName':
        this.setState({ lastName: value, validationError: validationMessage });
        break;
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
    const { code, firstName, lastName, email, password } = this.state;

    this.props.signupSubmit({ code, firstName, lastName, email, password });
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
    const { loading, error, errorMessage } = this.props.auth;

    return (
      <FormBox>
        <Helmet
          title="Sign Up"
          meta={[{ name: 'description', content: 'Dashboard Sign Up' }]}
        />
        <TextInput
          onChange={this.handleInputChange}
          type="code"
          placeholder="Employer Code"
          required
        />
        <TextInput
          onChange={this.handleInputChange}
          type="firstName"
          placeholder="First Name"
          required
        />
        <TextInput
          onChange={this.handleInputChange}
          type="lastName"
          placeholder="Last Name"
          required
        />
        <TextInput
          onChange={this.handleInputChange}
          type="email"
          placeholder="Email"
          required
        />
        <TextInput
          onChange={this.handleInputChange}
          type="password"
          placeholder="Password"
          required
        />
        {validationError && <ErrorMessage msg={validationError} />}
        {error && <ErrorMessage msg={errorMessage} />}
        <Button
          text={loading ? 'Signing up ...' : 'SIGN UP'}
          onClick={this.handleSubmit}
        />
        <FormFooter
          label="Already have an account?"
          buttonText="Log in"
          onClick={() => this.props.changeRoute('/login')}
        />
      </FormBox>
    );
  }
}

Signup.propTypes = {
  signupSubmit: PropTypes.func.isRequired,
  changeRoute: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    signupSubmit: payload => dispatch(signupSubmit(payload)),
    changeRoute: route => dispatch(push(route)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'signup', saga });

export default compose(
  withSaga,
  withConnect,
)(Signup);
