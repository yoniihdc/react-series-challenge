import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { FETCH_TRENDING} from '../actions/types';
import { receiveApiTrending } from '../actions/';
import { fetchTrending } from '../api/';

function* getApiTrending(action) {
  try {
    const data = yield call(fetchTrending);
    yield(put(receiveApiTrending(data)));
  } catch(e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_TRENDING, getApiTrending);
}