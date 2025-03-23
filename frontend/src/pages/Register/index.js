import React, { useState } from 'react';
import { Box } from '@mui/material';
import Button from 'component/Button';
import RegisterFeatures from 'component/Features';
import CustomInput from 'component/TextBox';
import CustomDate from 'component/DatePicker';
import { useRegisterUserMutation } from 'services/api/userApi';
import './register.css';

const Message = ({ isLoading, isError, isSuccess, error }) => {
  console.log(error);
  console.log('Error object:', error?.data?.errors); // For debugging
  return (
    <>
      {/* {isLoading && <div>Registering...</div>} */}
      {console.log(isError)}
      {isError && (
            error.data.errors.map((item) => <p key={item}>{item?.mesg}</p>)
          )
        }
      {isSuccess && <div>Successfully registered. Please login to continue.</div>}
    </>
  );
};


const Registration = () => {
  const [userRegistration, setUserRegistration] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: ""
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
    if (userRegistration.password !== userRegistration.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await registerUser(userRegistration).unwrap();
      setUserRegistration({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: ""
      });
      alert('Registration successful');
    } catch (err) {
       console.log("Registration failed");
    }
  };

  return (
    <>
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
            <p>-------------------------------or-------------------------------</p>
            <Message isLoading={isLoading} isError={isError}
              isSuccess={isSuccess} error={error} />
          </Box>
          <form onSubmit={handleSubmit}>
            <Box className="user-name">
              <CustomInput
                labelFor='firstName'
                labelText='First Name'
                type='text'
                autoComplete='off'
                value={userRegistration.firstName}
                onChange={handleInput}
                name='firstName'
                id='firstName'
                width="140px"
                height="40px"
                placeholder="Enter First Name"
              />
              <CustomInput
                labelFor='lastName'
                labelText='Last Name'
                type='text'
                autoComplete='off'
                value={userRegistration.lastName}
                onChange={handleInput}
                name='lastName'
                id='lastName'
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
              <CustomDate
                label="Date of Birth"
                name="dob"
                value={userRegistration.dob}
                onChange={handleInput}
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
                labelFor='confirmPassword'
                labelText='Confirm Password'
                type='password'
                autoComplete='off'
                value={userRegistration.confirmPassword}
                onChange={handleInput}
                name='confirmPassword'
                id='confirmPassword'
                width="305px"
                height="40px"
                placeholder="Confirm Password"
              />
              <Button type='submit' width="80px" className="regi-submit">Register</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Registration;
