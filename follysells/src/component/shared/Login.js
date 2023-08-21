import styled from '@emotion/styled';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState ,useEffect} from 'react';
import { useRouter } from 'next/router';
import Alert from './Alert';
import axios from 'axios';
import Spinner from './Spinner'
import Cookies from 'js-cookie'
import {StyledButton,StyledContainer,StyledForm} from '../../styles/style'
import useCookie from "@/hooks/useCookie";

const Login = () => {
  const [loginData,setLoginData]= useState({
    email:'',
    password:''
  })
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkSuccess, setCheckSuccess] = useState(null);
  const [checkPass, setCheckPass] = useState('');
  const [messageTimeout, setMessageTimeout] = useState(null);
  const [backendError, setBackendError] = useState('');
  const  checkJwt = useCookie()

  const router = useRouter();
  const {email,password} = loginData

  const handleChange =(e)=>{
    setLoginData({
      ...loginData,
      [e.target.name]:e.target.value
    })
  }
  useEffect(() => {
    if (checkJwt) {
      router.push('/');
    }
  }, [checkJwt, router]);
  

  const handleLogin= async(e)=>{
    e.preventDefault()
    if(!email || !password){
      setError('password and username is require')
    }
    setLoading(true)
    try {
      const loginData ={email,password}
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const response = await axios.post('http://localhost:4000/login',loginData,config)
      const {data} = response
      setCheckSuccess(data.message)
      
      localStorage.setItem('userInfo', JSON.stringify(data.user.token))
      localStorage.setItem('userInfoAll', JSON.stringify(data));
      Cookies.set('jwt', data.user.token);
      Cookies.set('jwtRefresh', data.user.refreshToken);
      // Cookies.set('jwtRefresh', data.user.refreshToken,{expires:3});
      console.log('API Response:', data);
      console.log('API Response:', data.user);
      setLoading(false);
      router.replace('/blog');
      
    } catch (error) {
      setBackendError(error.response.data.message)
      setLoading(false);
      
    }
  }
  return (
    <StyledContainer>
      <StyledForm onSubmit={handleLogin}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        {checkPass && <Alert bg="error">{checkPass}</Alert>}
        {checkSuccess && <Alert bg="success">{checkSuccess}</Alert>}
        {backendError && <Alert bg="warning">{backendError}</Alert>}
        {loading && <Spinner />}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              type='text'
              label="First Name"
              placeholder="First Name"
              fullWidth
              name='email'
              value={email}
              onChange={handleChange}
              autoComplete="off" 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type='password'
              label="Password"
              placeholder="Enter Password"
              fullWidth
              name='password'
              value={password}
              onChange={handleChange}
              autoComplete="off" 
            />
          </Grid>
          <Grid item xs={12}>
            <StyledButton type='submit'>Submit</StyledButton>
          </Grid>
        </Grid>
      </StyledForm>
    </StyledContainer>
  );
};

export default Login;
