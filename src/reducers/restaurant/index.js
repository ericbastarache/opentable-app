import {
  fromJS,
  List
} from 'immutable';
import {
  FETCH_RESTAURANTS_SUCCESS,
  LOADING
} from 'types';
import { FETCH_RESTAURANTS_FAILED } from '../../types';

export const INITIAL_STATE = fromJS({
  restaurants: List([]),
  isLoading: false,
  error: ''
});

const restaurant = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return state.set('isLoading', true)
    case FETCH_RESTAURANTS_SUCCESS:
      return state.merge({ restaurants: fromJS(action.payload.restaurants), isLoading: false});
    case FETCH_RESTAURANTS_FAILED:
      return state.merge({error: fromJS(action.payload.err), isLoading: false});
    default:
      return state;
  }
}

export default restaurant;