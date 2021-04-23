import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#35383E',
      paper: '#F8F8F2'
    },
    primary: {
      contrastText: '#F8F8F2',
      main: '#35383E'
    },
    text: {
      primary: '#FF5555',
      secondary: '#21243D'
    }
  },
  typography: {
    fontFamily: [
      'Heebo',
      'sans-serif'
    ].join(',')
  }
});

export default theme;