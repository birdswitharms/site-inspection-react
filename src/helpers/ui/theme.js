import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

export const themeDetails = {
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
  palette: {
    primary: {
      light: blue[100],
      main: blue[500],
      dark: blue[700],
     },
    secondary: {
      light: red[100],
      main: red[300],
      dark: red[700],
       }
  },
  status: {
    danger: 'orange',
  },
}
