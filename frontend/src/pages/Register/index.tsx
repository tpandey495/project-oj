import React, { useState, ChangeEvent, FormEvent } from "react";
import { Box } from "@mui/material";
import Button from "../../component/Button";
import RegisterFeatures from "../../component/Features";
import CustomInput from "../../component/TextBox";
import CustomDate from "../../component/DatePicker";
import { useRegisterUserMutation } from "../../services/api/userApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import "./register.css";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";


interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
}

interface ErrorItem {
  mesg: string;
}

interface APIError {
  data?: {
    errors?: { mesg: string }[];
  };
}

interface MessageProps {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: FetchBaseQueryError | SerializedError | APIError | undefined;
}

const Message: React.FC<MessageProps> = ({
  isLoading,
  isError,
  isSuccess,
  error,
}) => {
  const customError = error as FetchBaseQueryError;
  const customApiError = error as APIError;
  return (
    <>
      {isError &&
        Array.isArray(customApiError?.data?.errors) &&
        customApiError.data.errors.map((item: ErrorItem, index: number) => (
          <p key={index}>{item.mesg}</p>
        ))}
      {isSuccess && (
        <div>Successfully registered. Please login to continue.</div>
      )}
    </>
  );
};

const Registration: React.FC = () => {
  const [userRegistration, setUserRegistration] = useState<UserRegistration>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });

  const [registerUser, { isLoading, isError, isSuccess, error }] =
    useRegisterUserMutation();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserRegistration((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userRegistration.password !== userRegistration.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await registerUser({
        ...userRegistration,
        name: `${userRegistration.firstName} ${userRegistration.lastName}`,
      }).unwrap();
      setUserRegistration({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: "",
      });
      alert("Registration successful");
    } catch (err) {
      console.log("Registration failed", err);
    }
  };

  return (
    <Box className="registration">
      <Box className="registration-about">
        <h1>
          Unlock your free account to begin practicing and master your skills.
        </h1>
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
          <p>
            -------------------------------or-------------------------------
          </p>
          <Message
            isLoading={isLoading}
            isError={isError}
            isSuccess={isSuccess}
            error={error}
          />
        </Box>
        <form onSubmit={handleSubmit}>
          <Box className="user-name">
            <CustomInput
              labelFor="firstName"
              labelText="First Name"
              type="text"
              autoComplete="off"
              value={userRegistration.firstName}
              onChange={handleInput}
              name="firstName"
              id="firstName"
              width="140px"
              height="40px"
              placeholder="Enter First Name"
            />
            <CustomInput
              labelFor="lastName"
              labelText="Last Name"
              type="text"
              autoComplete="off"
              value={userRegistration.lastName}
              onChange={handleInput}
              name="lastName"
              id="lastName"
              width="140px"
              height="40px"
              placeholder="Enter Last Name"
            />
          </Box>
          <Box className="other-input">
            <CustomInput
              labelFor="email"
              labelText="Email"
              type="email"
              autoComplete="off"
              value={userRegistration.email}
              onChange={handleInput}
              name="email"
              id="email"
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
              labelFor="password"
              labelText="Password"
              type="password"
              autoComplete="off"
              value={userRegistration.password}
              onChange={handleInput}
              name="password"
              id="password"
              width="305px"
              height="40px"
              placeholder="Enter Password"
            />
            <CustomInput
              labelFor="confirmPassword"
              labelText="Confirm Password"
              type="password"
              autoComplete="off"
              value={userRegistration.confirmPassword}
              onChange={handleInput}
              name="confirmPassword"
              id="confirmPassword"
              width="305px"
              height="40px"
              placeholder="Confirm Password"
            />
            <Button type="submit" width="80px" className="regi-submit">
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Registration;
