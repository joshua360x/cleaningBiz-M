import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import './AppAppBar.css'
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
    justify: 'flex-end'
  },
  appBarClass: {
    backgroundColor: 'white'
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    width: '10vh'
  },
  newClass: {
    display: 'flex'
  },
  linkspecial: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "black",
    }
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "lightcoral",
      borderBottom: "1px solid white",
    },
  },
}));

function NewAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar className={classes.appBarClass} position="fixed">
      <CssBaseline />
      <Toolbar className={classes.newClass}>
        <Typography variant="h6" className={classes.logo}>
        <Link to="/" className={classes.linkspecial}>
              Without Spot OR Blemish
            </Link>
          {/* <img className="newImg" src="/new-logo.png" alt="" /> */}
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/signin" className={classes.link}>
              Sign In
            </Link>
            <Link to="/signup" className={classes.link}>
              Sign Up
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default NewAppBar;