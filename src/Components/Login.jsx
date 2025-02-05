import React, { useEffect, useState } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const OuterContainer = styled(Box)`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding-top: 80px; /* Add space for the navbar */
  padding-bottom: 80px; /* Add space for the footer */
  background-color: #f5f5f5; /* Optional background color */
`;
const Component = styled(Box)`
  width: 30vw;
  margin: 4rem;
border-radius: 5px;
  padding: 2rem;
  box-shadow: 5px 2px 5px 2px rgba(0 0 0 / 0.6);
  background-color: #fff; /* Optional white background */
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: var(--primary-color);
  height: 48px;
  border-radius: 2px;
  color: white;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0 0 0 / 20%);
`;

const signInValue = {
    userName: "",
    password: "",
};

const Login = () => {
    const navigate = useNavigate();
    const [account, toggleAccount] = useState("Login");
    const [signIn, setSignIn] = useState(signInValue);

    const handleSignup = () => {
        account === "Login" ? toggleAccount("SignUp") : toggleAccount("Login");
        navigate("/register");
    };

    const onInputChange = (e) => {
        setSignIn({ ...signIn, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        console.log(signIn);
    }, [signIn]);

    return (
        <>
        
            <OuterContainer  >
                <Component>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: "bold", textAlign: "center", borderBottom: "2px solid black" }}
                        >
                            Login
                        </Typography>
                        <Wrapper>
                            <TextField
                                id="standard-basic-username"
                                label="Enter Username"
                                name="userName"
                                variant="standard"
                                onChange={(e) => onInputChange(e)}
                            />
                            <TextField
                                id="standard-basic-password"
                                label="Enter Password"
                                name="password"
                                onChange={(e) => onInputChange(e)}
                                variant="standard"
                            />
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: "right",
                                    color: "#2874f0",
                                    cursor: "pointer",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                                onClick={() => navigate("/forgot-password")}
                            >
                                Forgot Password?
                            </Typography>
                            <LoginButton className="" variant="contained">
                                Login
                            </LoginButton>
                            <Typography style={{ textAlign: "center" }}>OR</Typography>
                            <SignupButton variant="text" onClick={handleSignup}>
                                Create An Account
                            </SignupButton>
                        </Wrapper>
                    </Box>
                </Component>
            </OuterContainer>
        </>
    );
};

export default Login;