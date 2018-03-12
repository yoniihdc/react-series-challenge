import { FETCH_TRENDING, RECEIVE_TRENDING } from './types';

export const requestApiTrending = () => ({ type: FETCH_TRENDING });
export const receiveApiTrending = data => ({ type: RECEIVE_TRENDING, data });