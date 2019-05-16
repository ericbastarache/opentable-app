import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import { INITIAL_STATE } from 'reducers'
import thunk from 'redux-thunk';
import {
  LOADING,
} from 'types';
import * as actions from 'actions';

const middlewares = [thunk];

const mockStore = configureMockStore(
  middlewares
);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  
  it('should dispatch a loading action', () => {
    const expectedActions = [
      {type: LOADING },
    ];
    const store = mockStore({ INITIAL_STATE });
    store.dispatch(actions.loading());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
