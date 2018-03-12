import { combineReducers } from 'redux';
import FavoritesReducer from './favorites_reducer';
import TrendingReducer from './trending_reducer';

const rootReducer = combineReducers({
  favorites: FavoritesReducer,
  trending: TrendingReducer,
});

export default rootReducer;