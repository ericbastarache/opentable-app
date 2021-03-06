import * as types from 'types';

export const fetchRestaurantsList = (query, page = 1, numPerPage = 25) => {
  return dispatch => {
    dispatch(loading());
    fetch(
      `https://opentable.herokuapp.com/api/restaurants?city=${query}&page=${page}&per_page=${numPerPage}`, {
        method: 'GET'
    }).then(
      (response) => response.json()
    ).then(
      (res) => {
        if (res.restaurants.length > 0) {
          dispatch(fetchRestaurantsSuccess(res))
        } else {
          dispatch(fetchRestaurantsFailed('Failed to get results. Please try your seach query again.'));
        }
      }
    ).catch(err => {
      dispatch(fetchRestaurantsFailed(err.message))
    });
  }
}

export const fetchRestaurantsSuccess = (data) => {
  return {
    type: types.FETCH_RESTAURANTS_SUCCESS,
    payload: data
  }
}

export const fetchRestaurantsFailed = (err) => {
  return {
    type: types.FETCH_RESTAURANTS_FAILED,
    payload: err
  }
}

// loading function for when we want the spinner to appear
export const loading = () => ({
  type: types.LOADING
})