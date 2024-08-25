import React, { useState } from 'react';
import { Box } from '@mui/material';
import Button from 'component/Button';
import RegisterFeatures from 'component/Features';
import CustomInput from 'component/TextBox';
import { useRegisterUserMutation } from 'features/api/apiSlice';
import './login.css';


const Message = ({ isLoading, isError, isSuccess, error }) => {
  return (
    <>
      {isLoading && <div>Registering</div>}
      {isError && <div>{error?.data?.errors.map((item) =>
        <p>{item?.mesg}</p>
      )}</div>}
      {isSuccess && <div>successfully Register.Please Login to Continue.</div>}
    </>
  )
}

const Registration = () => {
  const [userRegistration, setUserRegistration] = useState({
    email: "",
    password: "",
  });

  const [registerUser, { isLoading, isError, isSuccess, error }] = useRegisterUserMutation();

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
      await registerUser(userRegistration).unwrap();
      setUserRegistration({
        email: "",
        password: ""
      });
      alert('Registration successful');
    } catch (err) {
      console.error('Registration failed', err);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Box className="registration">
        <Box className="registration-about">
          <h1>Unlock your free account to begin practicing and master your skills.</h1>
          <Box className="register-features">
            <RegisterFeatures placeholder="Practice with Focus: Work on a small number of targeted problems." />
            <RegisterFeatures placeholder="Build Confidence: Use this focused practice to strengthen your skills." />
            <RegisterFeatures placeholder="Transition Quickly: Move efficiently from learning to building your dream project." />
            <RegisterFeatures placeholder="Avoid Endless Tutorials: Steer clear of getting stuck in a continuous loop of tutorials." />
          </Box>
        </Box>
        <Box className="registration-form">
          <Box className="registration-content">
            <h3>Get started with</h3>
            {/* Login with Google component */}
            {/* Or separator */}
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
              {/* Submit button */}
              <Button type='submit' width="80px" className="regi-submit">Register</Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Registration;
