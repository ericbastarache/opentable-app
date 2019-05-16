import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
});

class RestaurantCard extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={8}
      >
      {this.props.restaurantData.map((restaurant => {
        return (
        <Grid
          item={true} 
          xs={4} 
          key={restaurant.get('id')}
        >
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={restaurant.get('image_url')}
              title={restaurant.get('name')}
              aria-label={`Image of restaurant`}
            />
            <CardContent>
              <Typography
                aria-label={`Restaurant Name ${restaurant.get('name')}`}
              >
                Name: {restaurant.get('name')}
              </Typography>
            </CardContent>
              <CardContent>
                <Typography aria-label={`Price ${restaurant.get('price')}`}>
                  Price: {restaurant.get('price')}
                </Typography>
                <Typography aria-label={`Address ${restaurant.get('address')}`}>
                  Address: {restaurant.get('address')}
                </Typography>
                <Typography aria-label={`City ${restaurant.get('city')}`}>
                  City: {restaurant.get('city')}
                </Typography>
                <Typography aria-label={`State/Province restaurant.get('state')}`}>
                  State: {restaurant.get('state')}
                </Typography>
                <Typography aria-label={`Postal Code ${restaurant.get('postal_code')}`}>
                  Postal Code: {restaurant.get('postal_code')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      }))}
      </Grid>
    );
  }
}

export default withStyles(styles)(RestaurantCard);