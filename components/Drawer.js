import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import {
  Drawer,
  ListItemText,
  Typography,
  ListItem,
  IconButton,
  Divider,
  List,
  Paper,
} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { routes } from '../constants/routes';

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.between('md', 'xl')]: {
      display: 'none',
    },
    width: theme.drawerWidth,
    top: 0,
    height: '100vh',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  drawerShift: {
    height: '100vh',
    width: theme.drawerWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.between('md', 'xl')]: {
      marginLeft: -theme.drawerWidth,
    },
    marginLeft: -theme.drawerWidth,
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  chevron: {
    transition: 'all 60ms linear',
  },
  chevronRotate: {
    transform: 'rotate(180deg)',
  },
}));

export default function CustomDrawer({
  drawerOpen,
  // handleDrawerOpen,
  handleDrawerClose,
}) {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open
      className={clsx(classes.drawer, {
        [classes.drawerShift]: drawerOpen,
      })}
    >
      <Paper>
        <div className={classes.drawerHeader}>
          <Typography variant="h6" align="left" noWrap>
            Navigation
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon
              className={clsx(classes.chevron, {
                [classes.chevronRotate]: drawerOpen,
              })}
            />
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map(({ label, route, Icon }) => {
            return (
              <ListItem
                onClick={() => {
                  router.push(route);
                  handleDrawerClose();
                }}
                button
                key={label}
              >
                <ListItemText primary={label} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Drawer>
  );
}
