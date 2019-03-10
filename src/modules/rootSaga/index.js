import { all } from 'redux-saga/effects';
import { watchOnLogin } from 'containers/admins/Login/saga';

export default function* rootSaga() {
  yield all([
    watchOnLogin(),
  ]);
}
