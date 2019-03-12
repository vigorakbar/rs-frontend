import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './actions';

const loginAdmin = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        errorMessage: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        token: null,
        errorMessage: action.message,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default loginAdmin;
