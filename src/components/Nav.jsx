import React from 'react';
import { AppBar } from '@material-ui/core'
const Nav = (props) => {
  return(
  <div className='navbar'>
  <AppBar position="static" style={{width:"100vw"}}>
    <div
    style={{display:"flex",
    margin: "0 auto",
    flexDirection:"row",
    width:"80%"}}>
      <h4><a href="/">Home</a></h4>
      <h4 style={{marginRight:'auto'}}>{!props.isLogged ? null : <a href="/watchlist">WatchList</a>}</h4>
      <h4><a href="/login">Login/SignUp</a></h4>
    </div>
  </AppBar>
  </div>)
};

export default Nav;