import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseTextField from 'components/forms/TextField';
import Styled from 'styled-components';

const LoginCard = Styled.div`
  width: 400px;
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
            <TextField type="text" value={username} placeholder="username" onValueChange={this.onChangeUsername} />
            <TextField type="text" value={password} placeholder="password" onValueChange={this.onChangePassword} />
            <button type="button" onClick={() => onLogin()}>Login</button>
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
    onLogin: () => push('/about-us'),
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
