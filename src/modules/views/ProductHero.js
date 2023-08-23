import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link } from "react-router-dom";

const backgroundImage =
  '/cleaning.jpg';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    // backgroundColor: 'transparent', // Average color of the background image.
    // filter: 'brightness(120%)',
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  text: {
    textShadow: '1px 1px 2px black',
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    textShadow: '1px 1px 2px black',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
    textShadow: '1px 1px 2px black',
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={`${classes.background} animate__animated animate__fadeIn`}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography className={classes.text} color="inherit" align="center" variant="h4" marked="center">
        Spotless Cleaning at your fingertips
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Book now and recieve up to 25% off your first clean.
      </Typography>
      <Link to={"/signup"}>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        Register
      </Button>
      </Link>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Your home deserves to be Withouit Spot Or Blemsih
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);