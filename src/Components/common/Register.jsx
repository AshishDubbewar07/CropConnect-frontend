import React , { useEffect, useState } from 'react'
import { Box, TextField, Button, styled, Typography,Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useNavigate } from 'react-router';
import NavBar from './NavBar';


const OuterContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height */
  background-color: #f5f5f5; /* Optional background color */
`;

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgba(0 0 0 / 0.6);
  background-color: #fff; /* Optional white background */
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

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
  background: #fb641b;
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

const signupInitialValues={
  userName:"",
  email:"",
  password:"",
  phoneNumber:"",
  Role:""
}



const Register = () => {

     const [account, toggleAccount] = useState("Login");
      const [signup,setSignup]=useState(signupInitialValues);
      const navigate=useNavigate();
    
      const handleSignup = () => {
        account === "Login" ? toggleAccount("SignUp") : toggleAccount("Login");
        navigate("/");
      };
    
      const onInputChange=(e)=>{
        //console.log(e);
        //console.log(e.target.value);
        setSignup({...signup,[e.target.name]:e.target.value});
        console.log(signup);
      }

      useEffect(()=>{
        console.log(signup);
        
      },[signup]);

  return (
    <>
        <NavBar/>
        <Component>
            <Box>
            <Typography level="h1" sx={{ fontSize: '36px', fontWeight: 'bold' }}>Register</Typography>
            <Wrapper>
              <TextField
                id="standard-basic-username"
                label="Enter Username"
                variant="standard"
                name="userName"
                onChange={(e)=>onInputChange(e)}
              />
              <TextField
                id="standard-basic-email"
                label="Email"
                variant="standard"
                name="email"
                onChange={(e)=>onInputChange(e)}
              />
              <TextField
                id="standard-basic-password"
                label="Enter Password"
                variant="standard"
                name="password"
                onChange={(e)=>onInputChange(e)}
              />
              <TextField
                id="standard-basic-number"
                label="Phone Number"
                variant="standard"
                name="phoneNumber"
                onChange={(e)=>onInputChange(e)}
              />
              <FormControl variant="standard" fullWidth>
              <InputLabel id="role-label">Select Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                name="role"
                value={signup.role}
                onChange={(e) => onInputChange(e)}
              >
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </Select>
            </FormControl>
              <LoginButton variant="contained">Register</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <SignupButton variant="text" onClick={handleSignup}>
                Already have an account
              </SignupButton>
            </Wrapper>
            </Box>
        </Component>
    </>
  )
}

export default Register
