import { all } from 'redux-saga/effects';
import { watchOnLogin } from 'containers/Login/saga';

export default function* rootSaga() {
  yield all([
    watchOnLogin(),
  ]);
}
