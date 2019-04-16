import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseTextField from 'components/forms/TextField';
import Styled from 'styled-components';
import { push } from 'connected-react-router';
import isEqual from 'lodash/isEqual';

import { onLoginAdmin } from 'containers/admins/auth/actions';

const LoginCard = Styled.div`
  max-width: 400px;
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

  componentDidMount() {
    const { token, changePage } = this.props;
    if (token) changePage();
  }

  componentDidUpdate(prevProps) {
    const { token, changePage } = this.props;
    if (!isEqual(this.props, prevProps)) {
      if (token) {
        changePage();
      }
    }
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
    const { onLogin, errorMessage } = this.props;
    const { username, password } = this.state;
    return (
      <LoginContainer>
        <LoginCard className="card text-center">
          <div className="card-body">
            <div>*icon*</div>
            <form>
              <div className="input-wrapper">
                <TextField type="text" value={username} placeholder="username" onValueChange={this.onChangeUsername} />
                <TextField type="password" value={password} placeholder="password" onValueChange={this.onChangePassword} />
                {errorMessage && (
                  <div className="invalid-feedback">
                  Invalid username or password
                  </div>
                )}
              </div>
              <button type="button" className="btn btn-primary" onClick={() => onLogin(username, password)}>Login</button>
            </form>
          </div>
        </LoginCard>
      </LoginContainer>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  token: PropTypes.any,
  errorMessage: PropTypes.any,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onLogin: (username, password) => onLoginAdmin(username, password),
    changePage: () => push('/admin/test'),
  },
  dispatch,
);

const mapStateToProps = (state) => {
  const { token, errorMessage } = state.admin;
  return { token, errorMessage };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
