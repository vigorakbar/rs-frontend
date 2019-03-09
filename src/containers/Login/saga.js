import { put, takeLatest, call } from 'redux-saga/effects';
import { loginAdmin } from 'models/Admin';
import { onLoginSuccess, onLoginError } from './actions';

export function* onLogin(action) {
  const { username, password } = action.payload;
  try {
    const response = yield call(() => loginAdmin(username, password));
    yield put(onLoginSuccess(response.data.token));
  } catch (e) {
    yield put(onLoginError(e));
  }
}

export function* watchOnLogin() {
  yield takeLatest('LOGIN', onLogin);
}
