import React, { useState } from 'react';
import { Box } from '@mui/material';
import Button from 'component/Button';
import RegisterFeatures from 'component/Features';
import CustomInput from 'component/TextBox';
import Navbar from 'component/Navbar';
import BottomNavbar from 'component/BottomNavbar';
import { useRegisterUserMutation } from 'features/api/apiSlice';
import './register.css';

const Registration = () => {
  const [userRegistration, setUserRegistration] = useState({
    fName: "",
    lName: "",
    email: "",
    proname: "",
    password: "",
    confirmpassword: ""
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
    if (userRegistration.password !== userRegistration.confirmpassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await registerUser(userRegistration).unwrap();
      setUserRegistration({
        fName: "",
        lName: "",
        email: "",
        proname: "",
        password: "",
        confirmpassword: ""
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
            <p className="registration-error">check</p>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box className="user-name">
              <CustomInput
                labelFor='fName'
                labelText='First Name'
                type='text'
                autoComplete='off'
                value={userRegistration.fName}
                onChange={handleInput}
                name='fName'
                id='fName'
                width="140px"
                height="40px"
                placeholder="Enter First Name"
              />
              <CustomInput
                labelFor='lName'
                labelText='Last Name'
                type='text'
                autoComplete='off'
                value={userRegistration.lName}
                onChange={handleInput}
                name='lName'
                id='lName'
                width="140px"
                height="40px"
                placeholder="Enter Last Name"
              />
            </Box>
            <Box className="other-input">
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
                labelFor='proname'
                labelText='Profession'
                type='text'
                autoComplete='off'
                value={userRegistration.proname}
                onChange={handleInput}
                name='proname'
                id='proname'
                width="305px"
                height="40px"
                placeholder="Enter Profession e.g. Student"
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
              <CustomInput
                labelFor='confirmpassword'
                labelText='Confirm Password'
                type='password'
                autoComplete='off'
                value={userRegistration.confirmpassword}
                onChange={handleInput}
                name='confirmpassword'
                id='confirmpassword'
                width="305px"
                height="40px"
                placeholder="Confirm Password"
              />
              {/* Submit button */}
              <Button type='submit' width="80px" className="regi-submit">Register</Button>
            </Box>
          </form>
        </Box>
      </Box>
      {/* <BottomNavbar /> */}
    </>
  );
};

export default Registration;
