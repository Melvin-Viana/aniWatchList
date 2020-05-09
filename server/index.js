const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const renderView = require('./renderView.js');
const {authenticateUser,createUser} = require('../db/controllers/User.js');
app.use(cors());
app.use(bodyParser.json()); //utilizes the body-parser package
app.use(express.static(__dirname + '/../public'));
app.set('views', __dirname + '/../views');
app.set('view engine', 'pug')
app.get("/",renderView('home'));

app.get("/login", renderView('login/signup'));
app.get('/watchlist');

app.post('/login', authenticateUser);

app.post('/signup', createUser);

app.listen(3000 || process.ENV.PORT,()=> {
  console.log('Listening on port 3000')
})