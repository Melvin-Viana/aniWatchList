import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import LoadupPage from './components/LoadupPage.jsx';
import Nav from './components/Nav.jsx';
import { Grid } from '@material-ui/core';
import jikanjs from 'jikanjs';
import Login from './components/LoginPage.jsx';

const App = (props) => {
  const [animes, setAnimes] = useState([]);
  const [isLogged, setLogged] = useState(false);

  const updateForm = () => setLoginForm(!loginForm);

  useEffect(()=>{
    jikanjs.loadTop('anime', 1, 'tv')
      .then(animes=>{
        const top4 = [];
        for (let i = 0; i < 4; i++) {
          top4.push(animes.top[i]);
        }
        setAnimes(top4);
      });
  }, []);
  const renderSwitch = param => {
    console.log(param)
    switch(param){
      case "home":
       return (<LoadupPage animes={animes}/>);
      case "login/signup" :
       return <Login/>
      default :
      return "foo";
    }
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Nav isLogged={isLogged}/>
      {renderSwitch(props.view)}
    </Grid>
  );
}

const { view } = window;
console.log(view)
ReactDOM.render(<App view={view}/>,document.getElementById('app'));

