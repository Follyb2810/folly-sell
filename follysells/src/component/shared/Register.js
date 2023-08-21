import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import { StyledButton, StyledContainer, StyledForm } from '../../styles/style';
import { useRouter } from 'next/router';
import Alert from './Alert';
import axios from 'axios';
import Spinner from './Spinner';
import Cookies from 'js-cookie'
import useCookies from '@/hooks/useCookie';

const Register = () => {
  const router = useRouter();
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{5,24}$/;

  const [checkPass, setCheckPass] = useState('');
  const [checkSuccess, setCheckSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backendError, setBackendError] = useState('');
  // const [checkPass, setCheckPass] = useState('');
  const [messageTimeout, setMessageTimeout] = useState(null);
  const  checkJwt = useCookies()

  const [register, setRegister] = useState({
    last: '',
    first: '',
    gender: '',
    email: '',
    password: '',
    confirm: '',
    mobile: ''
  });

  const { confirm, email, first, gender, last, mobile, password } = register;

  useEffect(() => {
    if (checkJwt) {
      router.push('/blog');
    }
  }, [checkJwt, router]);
  
  

  useEffect(() => {
    return () => {
      clearTimeout(messageTimeout);
    };
  }, []);

  const handleRegisterData = (e) => {
    const { name, value } = e.target;
    setRegister((prevRegister) => ({
      ...prevRegister,
      [name]: value
    }));
  };

  const resetForm = () => {
    setRegister((prevRegister) => ({
      ...prevRegister,
      password: '',
      confirm: ''
    }));
    setCheckPass('');
    setBackendError('');
    setCheckSuccess(null);
  };

  const userLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:4000/login', { email, password });
      const { data } = response;

      if (data.user) {
        Cookies.set('jwt', data.user.token, { expires: 1 });
        Cookies.set('jwtRefresh', data.user.refreshToken,{expires:3});
        router.replace('/blog');
        localStorage.setItem('userInfo', JSON.stringify(data.user.token));

      } else {
        // Handle error cases
        setBackendError(data.message);
      }
    } catch (error) {
      console.error('API Error:', error);
      setBackendError(error.response?.data?.message || '');
    } finally {
      setLoading(false);
    }
  };

  const registerForm = async (e) => {
    e.preventDefault();
    const lastName = USER_REGEX.test(last)
    const pwdResult = PWD_REGEX.test(last)
       if (password !== confirm) {
      setCheckPass('Password and confirm password do not match');
      resetForm();
      return;
    }
    setLoading(true);
    try {
      const requestData = { last, first, gender, email, password, confirm, mobile };
      const config = { headers: { 'Content-Type': 'application/json' } };

      await axios.post('http://localhost:4000/register', requestData, config);
      await userLogin(email, password); // Login the user after successful registration
      // ... Success message handling
      setCheckSuccess(data.message);
    } catch (error) {
      console.error('API Error:', error);
      setBackendError(error.response?.data?.message || '');
    } finally {
      setLoading(false);
    }
  };
  // const registerForm = async (e) => {
  //   e.preventDefault();
  //   if (password !== confirm) {
  //     setCheckPass('Password and confirm password do not match');
  //     resetForm();
  //     return;
  //   }
  
  //   setLoading(true);
  //   try {
  //     const requestData = { last, first, gender, email, password, confirm, mobile };
  //     const config = { headers: { 'Content-Type': 'application/json' } };
  
  //     await axios.post('http://localhost:4000/register', requestData, config);
  //     const response = await axios.post('http://localhost:4000/login', { email, password }, config);
  //     const { data } = response;
  
  //     setCheckSuccess(data.message);
  //     resetForm();
  //     router.replace('/blog');
  //     console.log(data);
  //     // localStorage.setItem('userInfo', JSON.stringify(data.user));
  //     Cookies.set('jwt', data.user.token, { expires: 1 });
  //     Cookies.set('jwtRefresh', data.user.refreshToken);
  
  //     // Clear success message after a delay
  //     setTimeout(() => {
  //       setCheckSuccess(null);
  //     }, 5000); // Clear after 5 seconds
  //   } catch (error) {
  //     console.error('API Error:', error);
  //     setBackendError(error.response?.data?.message || '');
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  

  // const registerForm = async (e) => {
  //   e.preventDefault();
  //   if (password !== confirm) {
  //     setCheckPass('Password and confirm password do not match');
  //     resetForm();
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const requestData = { last, first, gender, email, password, confirm, mobile };
  //     const config = { headers: { 'Content-Type': 'application/json' } };

  //     await axios.post('http://localhost:4000/register', requestData, config);
  //     const response = await axios.post('http://localhost:4000/login', { email, password }, config);
  //     const { data } = response;

  //     setCheckSuccess(data.message);
  //     resetForm();
  //     router.replace('/blog');
  //     console.log(data)
  //     // localStorage.setItem('userInfo', JSON.stringify(data.user));
  //     Cookies.set('jwt', data.user.token, { expires: 1 });
  //     Cookies.set('jwtRefresh', data.user.refreshToken);
  //   } catch (error) {
  //     console.error('API Error:', error);
  //     setBackendError(error.response?.data?.message || '');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <StyledContainer>
      <StyledForm onSubmit={registerForm}>
        <Typography variant="h5" align="center" gutterBottom>
          Register
        </Typography>
        {checkPass && <Alert bg="error">{checkPass}</Alert>}
        {checkSuccess && <Alert bg="success">{checkSuccess}</Alert>}
        {backendError && <Alert bg="warning">{backendError}</Alert>}
        {loading && <Spinner />}
        <Grid container spacing={3}>
          {/* ... Form fields ... */}
          <Grid item sm={12}>
          <TextField
            required
            type="text"
            label="First Name"
            placeholder="First Name"
            fullWidth
            name="first"
            value={first}
            onChange={handleRegisterData}
            autoComplete="off" 
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            placeholder="Last Name"
            label="Last Name"
            type="text"
            fullWidth
            name="last"
            value={last}
            onChange={handleRegisterData}
            autoComplete="off" 
          />
        </Grid>
        {/* Rest of your form fields */}
        <Grid item sm={12}>
          <TextField
            required
            type="email"
            label="Email"
            placeholder="Email"
            fullWidth
            name="email"
            value={email}
            onChange={handleRegisterData}
            autoComplete="off" 
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            type="number"
            label="Phone Number"
            placeholder="Phone Number"
            fullWidth
            name="mobile"
            value={mobile}
            onChange={handleRegisterData}
            autoComplete="off" 
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            required
            type="password"
            label="Password"
            placeholder="Enter Password"
            fullWidth
            name="password"
            value={password}
            onChange={handleRegisterData}
            autoComplete="off" 
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            required
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            fullWidth
            name="confirm"
            value={confirm}
            onChange={handleRegisterData}
            autoComplete="off" 
          />
        </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                value={gender}
                onChange={handleRegisterData}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <StyledButton type="submit">Submit</StyledButton>
          </Grid>
        </Grid>
      </StyledForm>
    </StyledContainer>
  );
};

export default Register;
