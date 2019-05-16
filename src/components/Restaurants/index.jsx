import React from 'react';
import InputField from 'components/InputField';
import Button from 'components/Button';
import {
  Grid
} from '@material-ui/core';
import {
  connect
} from 'react-redux';
import {
  fetchRestaurantsList
} from 'actions';

class Restaurants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }
  setSearchQuery = (e) => {
    this.setState({query: e.target.value});
  }
  handleKeyDownSearch = (e) => {
    if (e.keyCode === 13 && this.state.query !== '') {
      this.props.getRestaurants(this.state.query);
    }
  }
  handleSearch = (e) => {
    if (this.state.query !== '') {
      this.props.getRestaurants(this.state.query);
    }
  }
  render () {
    return (
      <Grid
        container
      >
        <Grid item xs={12}>
          <label
            id='city label'
            aria-label='Label for city input'
            htmlFor='city'
          >
            City
          </label>
          <InputField
            name='city'
            aria-label={this.props.searchLabel}
            aria-labelledby='city'
            onChange={this.setSearchQuery}
            onKeyDown={this.handleKeyDownSearch}
            value={this.state.query}
          />
          <Button
            onClick={this.handleSearch}
            aria-label='Search for restaurants now'

          >
            Search Restaurants
          </Button>
        </Grid>
        <Grid item xs={12}>
          {this.props.children({
            data: this.props.restaurants,
            loading: this.props.loading,
            error: this.props.error
          })}
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    getRestaurants: (query) => dispatch(fetchRestaurantsList(query))
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurant.get('restaurants'),
    loading: state.restaurant.get('isLoading')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);