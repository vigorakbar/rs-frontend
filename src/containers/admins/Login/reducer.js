import { LOGIN_SUCCESS, LOGIN_ERROR } from './actions';

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
    default:
      return state;
  }
};

export default loginAdmin;
