export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

export const onLoginAdmin = (username, password) => ({
  type: LOGIN,
  payload: { username, password },
});

export const onLoginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token,
});

export const onLoginError = message => ({
  type: LOGIN_ERROR,
  message,
});

export const onLogoutAdmin = () => ({
  type: LOGOUT,
});
