export const routes = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Server List',
    route: '/serverlist',
  },
  {
    label: 'Discord',
    route: '/discord',
  },
  {
    label: 'Donate',
    route: '/donate',
  },
];

export const routesList = routes.map(routeObj => {
  return routeObj.route;
});

export const labelsList = routes.map(routeObj => {
  return routeObj.label;
});
