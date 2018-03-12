import { RECEIVE_TRENDING } from '../actions/types';

export default function(state = {}, { type, data }) {
  switch (type) {
    case RECEIVE_TRENDING:
      return data;
    default: return state;
  }
}