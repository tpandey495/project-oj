import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography } from '@mui/material';
import Button from 'component/Button';
import RegisterFeatures from 'component/Features';
import CustomInput from 'component/TextBox';
import { useLoginUserMutation } from 'services/api/userApi';
import { useDispatch } from 'react-redux';
import { setLogin } from 'services/authSlice';
import { autoBatchEnhancer } from '@reduxjs/toolkit';

const Message = ({ isLoading, isError, isSuccess, error }) => {
  return (
    <Box width="200px">
      {isLoading && <Box>Logging in...</Box>}
      {isError && <Box>{error?.data?.errors.map((item, index) =>
        <p key={index}>{item?.mesg}</p>
      )}</Box>}
      {isSuccess && <Box>Login successful.</Box>}
    </Box>
  );
};

const Login = () => {
  const [loginUser, { isLoading, isError, isSuccess, error }] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userRegistration, setUserRegistration] = useState({
    email: "",
    password: "",
  });


  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserRegistration(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(userRegistration).unwrap();
      dispatch(setLogin(user));
      setUserRegistration({
        email: "",
        password: ""
      });
    } catch (err) {
      console.error('Login failed', err);
    }
  };


  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate('/problems');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <Grid container spacing={2}
        sx={{
          backgroundColor: '#363636',
          justifyContent: 'center',
          gap: '10vw',
          alignItems: 'center',
          minHeight: 'calc(100vh - 120px)',
          height: '100%',
        }}>
        <Grid item sm={8} md={4}
          className="login-about"
          sx={{
            color: '#fff',
          }}
        >
          <h1>Unlock your free account to begin practicing and master your skills.</h1>
          <RegisterFeatures placeholder="Practice with Focus: Work on a small number of targeted problems." />
          <RegisterFeatures placeholder="Build Confidence: Use this focused practice to strengthen your skills." />
          <RegisterFeatures placeholder="Transition Quickly: Move efficiently from learning to building your dream project." />
          <RegisterFeatures placeholder="Avoid Endless Tutorials: Steer clear of getting stuck in a continuous loop of tutorials." />
        </Grid>
        <Grid item sm={8} md={4}
          sx={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              width: "400px",
              height: '400px',
              backgroundColor: '#fff',
              justifyContent: 'center',
              borderRadius: '5px',
              padding:'20px'
            }}>
            <Box sx={{
              dislay: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              <Typography variant="h5" width='200px' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>Get started with</Typography>
              <Box variant="h5" width='200px' sx={{ marginLeft: 'auto', marginRight: 'auto' }}>-----------------or---------------</Box>
              <Message isLoading={isLoading} isError={isError}
                isSuccess={isSuccess} error={error} />
            </Box>
            <Box component="form" onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:'40px'
              }}
            >
              <CustomInput
                labelFor='email'
                labelText='Email'
                type='email'
                autoComplete='off'
                value={userRegistration.email}
                onChange={handleInput}
                name='email'
                id='email'
                width="305px"
                height="40px"
                placeholder="Enter Email Id"
              />
              <CustomInput
                labelFor='password'
                labelText='Password'
                type='password'
                autoComplete='off'
                value={userRegistration.password}
                onChange={handleInput}
                name='password'
                id='password'
                width="305px"
                height="40px"
                placeholder="Enter Password"
              />
              <Button
                type='submit'
                width="80px"
                marginTop="50px"
                className="regi-submit">
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
