import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: { main: '#000', contrastText: '#ffffff' },
    secondary: { main: '#EEEEEE' },
  },
  spacing: 4,
  drawerWidth: 320,
  appBarHeight: 64,
  drawerClosedWidth: 75,
});

export default theme;
