import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA, LOAD_TICKETS } from '../redux/types';
import { putData, putTickets } from '../redux/actions/actions';
import { fetchTableData, fetchTicketsFromIdx } from '../services/index';

export function* workedLoadData() {
  const dataTable = yield call(fetchTableData);
  yield put(putData(dataTable));
}

export function* workedLoadTickets() {
  const dataTickets = yield call(fetchTicketsFromIdx);
  yield put(putTickets(dataTickets));
}

export function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workedLoadData);
  yield takeEvery(LOAD_TICKETS, workedLoadTickets);
}
