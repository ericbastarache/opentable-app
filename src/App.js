import React from 'react';
import Restaurants from 'components/Restaurants';
import RestaurantCard from 'components/RestaurantCard';
import Loading from 'components/Loading';
import styles from './App.css';

export class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Restaurants
          searchLabel='Input city to search for restaurants in here.'
        >
          {({data, loading, error}) => {
            return (
              loading ? 
                <Loading />
              : error ?
              (<div aria-label={error} className={styles.error}>
                {error}
              </div>) :
              <RestaurantCard restaurantData={data} />
            )
          }}
        </Restaurants>
      </div>
    );
  }
}

export default App;
