import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  styled,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router";
import NavBar from "./Layout/Navbar";
import axios from "axios";
import { stateCityData } from "./statecityData";

const OuterContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const Component = styled(Box)`
  width: 450px;
  margin: 20px auto;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-radius: 8px;
`;

const Wrapper = styled(Box)`
  padding: 30px 35px;
  display: flex;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Title = styled(Typography)`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 25px;
`;

const InputField = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 8px;
    margin-bottom: 15px;
  }
`;

const StyledSelect = styled(Select)`
  & .MuiSelect-root {
    border-radius: 8px;
  }
`;

const ButtonStyled = styled(Button)`
  text-transform: none;
  height: 48px;
  border-radius: 8px;
  font-weight: 600;
`;

const LoginButton = styled(ButtonStyled)`
  background: #fb641b;
  color: white;
  &:hover {
    background: #ff5722;
  }
`;

const SignupButton = styled(ButtonStyled)`
  background: #ffffff;
  color: #2874f0;
  border: 1px solid #2874f0;
  &:hover {
    background: #e0f2fe;
  }
`;

const signupInitialValues = {
  userName: "",
  email: "",
  password: "",
  phoneNumber: "",
  role: "",
  country: "",
  state: "",
  city: "",
};

const Register = () => {
  const [signup, setSignup] = useState(signupInitialValues);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/states"
        );
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSignup({ ...signup, country: selectedCountry, state: "", city: "" });

    const countryData = countries.find((c) => c.name === selectedCountry);
    setStates(countryData ? countryData.states : []);
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSignup({ ...signup, state: selectedState, city: "" });

    const selectedStateData = stateCityData.find(
      (stateObj) => stateObj.state === selectedState
    );

    if (selectedStateData) {
      setCities(selectedStateData.districts);
    } else {
      setCities([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate required fields
    if (!signup.userName || !signup.email || !signup.password || !signup.phoneNumber || !signup.role) {
      alert("All fields are required!");
      return;
    }
    try {
      console.log(signup);
      const response = await axios.post("http://localhost:8080/register", signup);
      console.log("User registered successfully:", response.data);
      alert("Registration successful!"); 
      navigate("/"); 
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed!"); // Show error message
    }
  };
  return (
    <>
      <NavBar />
      <OuterContainer>
        <Component>
          <Title>Register</Title>
          <Wrapper>
            <InputField
              label="Enter Username"
              variant="standard"
              name="userName"
              onChange={onInputChange}
              fullWidth
            />
            <InputField
              label="Email"
              variant="standard"
              name="email"
              onChange={onInputChange}
              fullWidth
            />
            <InputField
              label="Enter Password"
              variant="standard"
              name="password"
              type="password"
              onChange={onInputChange}
              fullWidth
            />
            <InputField
              label="Phone Number"
              variant="standard"
              name="phoneNumber"
              onChange={onInputChange}
              fullWidth
            />
            <FormControl variant="standard" fullWidth>
              <InputLabel>Select Role</InputLabel>
              <StyledSelect
                name="role"
                value={signup.role}
                onChange={onInputChange}
              >
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Farmer">Farmer</MenuItem>
              </StyledSelect>
            </FormControl>

            {/* Country Dropdown */}
            <FormControl variant="standard" fullWidth>
              <InputLabel>Select Country</InputLabel>
              <StyledSelect
                name="country"
                value={signup.country}
                onChange={handleCountryChange}
              >
                {countries.map((country) => (
                  <MenuItem key={country.name} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>

            {/* State Dropdown */}
            <FormControl variant="standard" fullWidth disabled={!states.length}>
              <InputLabel>Select State</InputLabel>
              <StyledSelect
                name="state"
                value={signup.state}
                onChange={handleStateChange}
              >
                {states.map((state) => (
                  <MenuItem key={state.name} value={state.name}>
                    {state.name}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>

            {/* City Dropdown */}
            <FormControl variant="standard" fullWidth disabled={!cities.length}>
              <InputLabel>Select City</InputLabel>
              <StyledSelect
                name="city"
                value={signup.city}
                onChange={onInputChange}
              >
                {cities.map((city, index) => (
                  <MenuItem key={index} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>

            <LoginButton variant="contained" onClick={handleSubmit}>
              Register
            </LoginButton>
            <Typography style={{ textAlign: "center", color: "#888" }}>
              OR
            </Typography>
            <SignupButton variant="text" onClick={() => navigate("/")}>
              Already have an account
            </SignupButton>
          </Wrapper>
        </Component>
      </OuterContainer>
    </>
  );
};

export default Register;
