import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import AygoIcon from './aygo-logo.svg';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#292a61',
  },
  logoWrapper: {
    width: '120px',
    padding: '16px',
  },
  logo: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20,
  },
  link: {
    marginRight: 20,
    textTransform: 'capitalize',
    textAlign: 'center',
    a : {
      textDecoration: 'none',
    }
  }
};

const Menus = ({ classes }) => {
  const menus = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Work',
      url: '/about',
    },
    {
      text: 'Agency',
      url: '/about',
    },
    {
      text: 'Services',
      url: '/about',
    },
    {
      text: 'Contact Us',
      url: '/about',
    }
  ];

  return menus.map((menu, idx) => (
    <Button color="inherit" className={classes.link} key={`header-menu-${idx}`}>
      <Link  color="inherit" component={RouterLink} to={menu.url}>{menu.text}</Link>
    </Button>
  ));
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Helmet>
        <title>Aygo - Agency Media</title>
      </Helmet>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow}>
            <div className={classes.logoWrapper} to="/">
              <img src={AygoIcon} alt="aygo logo" className={classes.logo}/>
            </div>
          </div>
          <Menus classes={classes} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);