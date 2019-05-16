import { combineReducers } from 'redux';
import restaurantReducer from 'reducers/restaurant';

const rootReducer = combineReducers({
  restaurant: restaurantReducer
});

export default rootReducer;