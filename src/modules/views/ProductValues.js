import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>

        <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="cross3.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Integrity First
              </Typography>
              <Typography variant="h5">
                {'It is more than just cleaning, its about serving'}
                {' for me.'}
              </Typography>
            </div>
          </Grid>
         
         <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="brain.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                Purpose Driven
              </Typography>
              <Typography variant="h5">
                {'Seeing the big picture'}
                {' is really important and goes a long way.'}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/family.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Family Oreinted
              </Typography>
              <Typography variant="h5">
                {'Your home is like mine and I will take care of it '}
                {'as if it was mine'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
