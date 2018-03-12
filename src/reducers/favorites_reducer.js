import { RECEIVE_FAVORITES } from '../actions/types';

export default function(state = {}, { type, data }) {
  switch (type) {
    case RECEIVE_FAVORITES:
      return data;
    default: return state;
  }
}