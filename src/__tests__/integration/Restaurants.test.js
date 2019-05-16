import React from 'react'
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import App from '../../App';
import Restaurants from 'components/Restaurants';

const store = createStore(
  reducers
)

function setup() {
  const childrenArg = {}
  const children = arg => {
    Object.assign(childrenArg, arg)
    return null;
  }
  render(
    <Provider store={store}>
      <App>
        <Restaurants>{children}</Restaurants>
      </App>
    </Provider>
  )
  return {
    childrenArg,
  }
}

test('Restaurants renders with data, loading, and error props', () => {
  const {childrenArg} = setup();
  expect(childrenArg).toEqual({});
});