import React, {Component, useState} from 'react';
import {FormControl, FormHelperText, Button, Paper, Tabs, Tab, TextField} from '@material-ui/core';
import axios from 'axios';

const Login = (props) => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [currentForm, setForm] = useState('login')
  const handleChange = (event,newValue) => {
    setForm(newValue);
  };
  const handleLogin = () => {
    axios.post("/login",{username,password})
      .then(res=>{
        window.location.href = res.data.redirect;
      })
      .catch(err=>{
        alert("User data not found");
      })
  };

  const handleSignUp = () => {
    axios.post("/signup",{username,password})
      .then(res=>{
        if(res.data.err) {
          alert('User exists in DB');
        }
        // window.location.href = res.data.redirect;
      });
  };
  return (
  <React.Fragment>
      <Paper square>
  <Tabs
    indicatorColor="primary"
    textColor="primary"
    aria-label="disabled tabs example"
    variant="fullWidth"
    selected="Login"
    onChange={handleChange}
  >
    <Tab label="Login" value="login"/>
    <Tab label="SignUp" value="signup" />
  </Tabs>
  <FormControl style={{width:"100%"}}>
    <TextField
        id="user-text"
        label="UserName"
        type="text"
        placeholder="UserName"
        variant="outlined"
        fullWidth
        aria-describedby="user-text"
        indicatorColor="secondary"
        onChange={(e)=>setUser(e.target.value)}
        value={username}
        />
   <FormHelperText id="user-text">Enter User Name</FormHelperText>
   <TextField
        id="password"
        label="Password"
        type="password"
        placeholder="Password"
        variant="outlined"
        fullWidth
        aria-describedby="password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        />    <FormHelperText id="password">Enter Password</FormHelperText>
    {(currentForm === "login")? <Button onClick={handleLogin}>Login</Button>: <Button onClick={handleSignUp}>SignUp</Button>}
</FormControl>
</Paper>

</React.Fragment>

    );

};
export default Login;