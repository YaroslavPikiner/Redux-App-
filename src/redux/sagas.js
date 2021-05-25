import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA, LOAD_TICKETS } from '../redux/types';
import { putData, putTickets } from '../redux/actions/actions';

function getResources(url) {
  const data = fetch(url).then((response) => response.json());
  return data;
}

function fetchTableData() {
  const data = getResources('https://jsonplaceholder.typicode.com/users');
  return data;
}

function fetchIdTicket() {
  const data = getResources('https://front-test.beta.aviasales.ru/search');
  return data;
}

async function fetchTicketsFromIdx() {
  const res = await fetchIdTicket();
  const id = res.searchId;
  return await getResources(
    `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
  );
}

async function getObj() {
  const meta = await fetchTicketsFromIdx();
  return meta.tickets;
}

console.log(getObj());

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
