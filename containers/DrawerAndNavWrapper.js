import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

import CustomAppBar from '../components/AppBar';
import CustomDrawer from '../components/Drawer';

const useStyles = makeStyles(theme => ({
  content: {
    zIndex: 2,
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    [theme.breakpoints.between('md', 'xl')]: {
      marginLeft: 0,
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: theme.drawerWidth,
  },
}));

export default function DrawerAndAppWrapper({ children }) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <CustomAppBar
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        drawerOpen={drawerOpen}
      />
      <Grid
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        {children}
      </Grid>
      <CustomDrawer
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        drawerOpen={drawerOpen}
      />
    </>
  );
}
