import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseTextField from 'components/forms/TextField';
import Styled from 'styled-components';
import { onLoginAdmin } from './actions';

const LoginCard = Styled.div`
  width: 400px;
  margin: 20px;
  border-radius: 20px;
  border: 2px solid rgba(0,0,0,.125);
  box-shadow: 0 0 50px -4px grey;

  div > .input-wrapper {
    padding: 20px;
  }
`;

const TextField = Styled(BaseTextField)`
  margin-bottom: 20px;
`;

const LoginContainer = Styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
      <LoginContainer>
        <LoginCard className="card text-center">
          <div className="card-body">
            <div>*icon*</div>
            <div className="input-wrapper">
              <TextField type="text" value={username} placeholder="username" onValueChange={this.onChangeUsername} />
              <TextField type="password" value={password} placeholder="password" onValueChange={this.onChangePassword} />
            </div>
            <button type="button" className="btn btn-primary" onClick={() => onLogin(username, password)}>Login</button>
          </div>
        </LoginCard>
      </LoginContainer>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onLogin: (username, password) => onLoginAdmin(username, password),
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
