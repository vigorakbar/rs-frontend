import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'components/forms/TextField';

class Login extends React.PureComponent {
  state = {
    username: '',
    password: '',
  }

  onChangeUsername = (username) => {
    this.setState({
      username,
    });
  }

  onChangePassword = (password) => {
    this.setState({
      password,
    });
  }

  render() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <p>Login page</p>
        <TextField type="text" value={username} onValueChange={this.onChangeUsername} />
        <TextField type="text" value={password} onValueChange={this.onChangePassword} />
        <button type="button" onClick={() => onLogin()}>Login</button>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onLogin: () => push('/about-us'),
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
