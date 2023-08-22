import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import './AppAppBar.css'

const styles = (theme) => ({
  title: {
    fontSize: 22,
    color: theme.palette.common.black,
    textDecoration: 'none'
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.black,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar className='newBar' position="fixed">
        <Toolbar className={`${classes.toolbar} newBar`}>
          <div className={classes.left} />
          <Link to={"/"}>
            <Typography
              variant="h6"
              underline="none"
              color="inherit"
              className={`${classes.title} newTitle`}
            >
              {"Without Spot OR Blemish"}
            </Typography>
          </Link>
          <div className={classes.right}>
            <Link to={"/signin"}>
              <Typography
                color="inherit"
                variant="h6"
                underline="none"
                className={`${classes.rightLink}`}
              >
                {"Sign In"}
              </Typography>
            </Link>
            <Link to={"/signup"}>
            <Typography
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
            >
              {"Sign Up"}
            </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
