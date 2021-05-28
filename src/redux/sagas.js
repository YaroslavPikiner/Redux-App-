import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA, LOAD_TICKETS, SEND_USER, LOAD_USER } from '../redux/types';
import { putData, putTickets, saveUser } from '../redux/actions/actions';
import { fetchTableData, fetchTicketsFromIdx, saveUserQuery, loadTableUser } from '../services/index';

export function* workedLoadData() {
  const dataTable = yield call(fetchTableData);

  yield put(putData(dataTable));
}

export function* workedLoadTickets() {
  const dataTickets = yield call(fetchTicketsFromIdx);
  yield put(putTickets(dataTickets));
}

export function* workedSaveUser(action) {
  const savedUser = yield call(saveUserQuery, action.payload);
  yield put(saveUser(savedUser));
}

export function* workedLoadUser(action) {
  const dataUserTable = yield call(loadTableUser, action.payload);
  yield put(putTickets(dataUserTable));
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workedLoadData);
  yield takeEvery(LOAD_TICKETS, workedLoadTickets);
  yield takeEvery(SEND_USER, workedSaveUser);
  yield takeEvery(LOAD_USER, workedLoadUser);


}
