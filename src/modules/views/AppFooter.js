import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import { Link } from "react-router-dom";
import { MenuItem } from 'material-ui';
import { Box, FormControl, InputLabel, NativeSelect, Select } from '@material-ui/core';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        {/* Without Spot OR Blemish */}
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent:"flex-end",


    width: '100%',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    display: '',
    flexWrap: '',
    width: '',
    justifyContent:"flex-end",

  },
  newClasses: {
    width: '100%',
    backgroundColor: theme.palette.secondary.light,
    marginTop: '1%',
    padding: '3%',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];



export default function AppFooter() {
  const classes = useStyles();
  const [language, setLanguage] = useState('english')

    function handleChange(e) {
      e.preventDefault()
      setLanguage(e.target.value);
    
    }

  return (
 

        <Box className={classes.newClasses}
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Without Spot Or Blemish
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Legal | Terms | Privacy`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>

    //   </Container>
    // </Typography>
  );
}
