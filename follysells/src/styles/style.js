// import {styled} from '@emotion/styled';
import { styled } from '@mui/material/styles';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

import { createTheme } from '@mui/material/styles';

// Define custom theme
const theme = createTheme();

// Define custom styles
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  marginBottom: theme.spacing(1),
}));

const Content = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  marginBottom: theme.spacing(2),
}));

const ImageWrapper = styled('div')({
  marginBottom: theme.spacing(2),
});

const StyledContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  
  const StyledForm = styled('form')({
    border: '1px solid #e0e0e0',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    width: '100%',
    marginTop:'20px'
  });
  
  const StyledButton = styled(Button)({
    marginTop: '20px',
    width: '100%',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
  });

  const StyledSpan = styled('span')(({ theme, prop }) => ({
    cursor: 'pointer',
    color: theme.palette[prop] || prop,
    paddingLeft: '5px' || prop,
    backgroundColor: 'red',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2px',
      backgroundColor: 'blue',
    },
  }));


  export {
    StyledButton,StyledContainer,StyledForm,StyledSpan,Subtitle,Content,Title,StyledPaper,ImageWrapper
  }