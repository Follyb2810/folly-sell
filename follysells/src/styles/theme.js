import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
    primary: {
      main: '#5757ced8',
      mains: '#0000FF',
      light: '#757ce8',
      dark: '#B388EB',
      contrastText: '#002884',
    },
    secondary: {
      main: '#FFFFFF', 
      light:'#00A4A7',
      dark:'#228B22'
    },
    error :{
      main: '#808080',
      light:'#6C757D',
    },
    warning:{
      main: '#FFFF00',
      light:'#FF6B6B',
    },
    info :{
      main: '#FFA500',
      light:'#F9A602)'
    },
    success:{
      main: '#00FF00',
      light:'#B388EB'
    },
 
  },
});




export default theme;
