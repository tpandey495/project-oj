import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Button from 'component/Button';
import RegisterFeatures from 'component/Features';
import CustomInput from 'component/TextBox';
import { useLoginUserMutation } from 'services/api/userApi';
import { useDispatch } from 'react-redux';
import { setLogin } from 'services/authSlice';
import './login.css';

const Message = ({ isLoading, isError, isSuccess, error }) => {
  return (
    <>
      {isLoading && <div>Logging in...</div>}
      {isError && <div>{error?.data?.errors.map((item, index) =>
        <p key={index}>{item?.mesg}</p>
      )}</div>}
      {isSuccess && <div>Login successful.</div>}
    </>
  );
};

const Login = () => {
  const [loginUser, { isLoading, isError, isSuccess, error }] = useLoginUserMutation();
  const navigate = useNavigate(); 
  const dispatch=useDispatch();

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
      const user= await loginUser(userRegistration).unwrap();
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
      <Box className="login">
        <Box className="login-about">
          <h1>Unlock your free account to begin practicing and master your skills.</h1>
          <Box className="login-features">
            <RegisterFeatures placeholder="Practice with Focus: Work on a small number of targeted problems." />
            <RegisterFeatures placeholder="Build Confidence: Use this focused practice to strengthen your skills." />
            <RegisterFeatures placeholder="Transition Quickly: Move efficiently from learning to building your dream project." />
            <RegisterFeatures placeholder="Avoid Endless Tutorials: Steer clear of getting stuck in a continuous loop of tutorials." />
          </Box>
        </Box>
        <Box className="login-form">
          <Box className="login-content">
            <h3>Get started with</h3>
            <p>-------------------------------or-------------------------------</p>
            <Message isLoading={isLoading} isError={isError}
              isSuccess={isSuccess} error={error} />
          </Box>
          <form onSubmit={handleSubmit}>
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
            <Button type='submit' width="80px" className="regi-submit">Login</Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
