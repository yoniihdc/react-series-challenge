import {
  FETCH_TRENDING,
  RECEIVE_TRENDING,
  FETCH_FAVORITES,
  RECEIVE_FAVORITES,
} from './types';

export const requestApiTrending = () => ({ type: FETCH_TRENDING });
export const receiveApiTrending = data => ({ type: RECEIVE_TRENDING, data });

export const requestFavorites = () => ({ type: FETCH_FAVORITES});
export const receiveFavorites = data => ({ type: RECEIVE_FAVORITES, data });