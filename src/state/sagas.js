import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { FETCH_TRENDING, FETCH_FAVORITES} from '../actions/types';
import { receiveApiTrending, receiveFavorites } from '../actions/';
import { fetchTrending, fetchFavorites } from '../api/';


function* getApiTrending(action) {
  try {
    const data = yield call(fetchTrending);
    yield(put(receiveApiTrending(data)));
  } catch(e) {
    console.log(e);
  }
}

function* getFavorites(action) {
  try {
    const data = yield call(fetchFavorites);
    yield(put(receiveFavorites(data)));
  } catch(e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_TRENDING, getApiTrending);
  yield takeLatest(FETCH_FAVORITES, getFavorites);
}