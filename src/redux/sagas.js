import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA } from '../redux/types';
import { putData } from '../redux/actions/actions';

function fetchTableData() {
  const data = fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json()
  );
  console.log(data)
  return data
}

export function* workedLoadData() {
  const data = yield call(fetchTableData);
  yield put(putData(data))
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workedLoadData);
}
