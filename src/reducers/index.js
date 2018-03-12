import { combineReducers } from 'redux';
import TrendingReducer from './trending_reducer';

const rootReducer = combineReducers({
  trending: TrendingReducer,
});

export default rootReducer;