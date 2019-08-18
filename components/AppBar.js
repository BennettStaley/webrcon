import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Tab,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';

import { routesList, routes } from '../constants/routes';

const useStyles = makeStyles(theme => ({
  tabs: {
    height: 48,
    display: 'flex',
  },
  title: {
    padding: theme.spacing(3),
  },

  desktopContainer: {
    position: 'relative',
    alignItems: 'center',
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none',
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mobileContianer: {
    position: 'relative',
    [theme.breakpoints.between('md', 'xl')]: {
      display: 'none',
    },
  },

  appBar: {
    flexGrow: 1,
    position: 'relative',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    marginLeft: theme.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

export default function CustomAppBar({ drawerOpen, handleDrawerOpen }) {
  const classes = useStyles();
  const router = useRouter();

  const [value, setValue] = React.useState(
    routesList.indexOf(router.asPath) || 0,
  );

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <AppBar
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}
      position="fixed"
    >
      <div className={classes.desktopContainer}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="space-between"
        >
          <Grid item xs={6}>
            <Typography className={classes.title} variant="h6" noWrap>
              Spektre.io
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Tabs
              className={classes.tabs}
              centered
              ariant="fullWidth"
              value={value}
              onChange={handleChange}
            >
              {routes.map(({ label, route }, index) => {
                return (
                  <Tab
                    component="a"
                    key={`tab-${label}`}
                    onClick={event => {
                      event.preventDefault();
                      setValue(index);
                      router.push(route);
                    }}
                    label={label}
                  />
                );
              })}
            </Tabs>
          </Grid>
        </Grid>
      </div>
      <div className={classes.mobileContainer}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, drawerOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Spektre.io
          </Typography>
        </Toolbar>
      </div>
    </AppBar>
  );
}
